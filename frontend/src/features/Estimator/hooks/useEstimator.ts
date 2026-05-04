import { useState, useCallback } from 'react';
import type { EstimateResponse, UIState } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';

interface ApiErrorResponse {
  error?: string;
}

export const useEstimator = () => {
  const [uiState, setUiState] = useState<UIState>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [estimateData, setEstimateData] = useState<EstimateResponse | null>(null);

  const fetchEstimate = useCallback(async (file: File, hourlyRate: number, tcf: number[], ecf: number[]) => {
    setUiState('loading');
    setErrorMsg(null);
    setEstimateData(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('hourly_rate', hourlyRate.toString());
      formData.append('tcf', JSON.stringify(tcf));
      formData.append('ecf', JSON.stringify(ecf));

      const response = await fetch(`${API_BASE_URL}/api/v1/estimate`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = (await response.json().catch(() => ({}))) as ApiErrorResponse;
        throw new Error(errorData.error || 'Failed to fetch estimate from server.');
      }

      const data: EstimateResponse = await response.json();
      if (!data.element_breakdown || typeof data.estimated_hours !== 'number' || typeof data.total_cost !== 'number') {
        throw new Error('The server returned an invalid estimate response.');
      }
      setEstimateData(data);
      setUiState('success');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unknown error occurred.';
      setErrorMsg(message);
      setUiState('error');
    }
  }, []);

  return {
    uiState,
    errorMsg,
    estimateData,
    fetchEstimate,
    setUiState // Expose if we want to reset to idle later
  };
};

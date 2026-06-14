import React, { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { NumberInput } from './components/NumberInput';
import { Button } from './components/Button';
import { SummaryCard } from './components/SummaryCard';
import { useEstimator } from './hooks/useEstimator';

const TCF_LABELS = [
  'Distributed system',
  'Response time',
  'End-user efficiency',
  'Internal processing',
  'Reusability',
  'Easy installation',
  'Easy to use',
  'Portability',
  'Maintainability',
  'Concurrency',
  'Security features',
  'Third-party access',
  'User training',
];

const ECF_LABELS = [
  'UML familiarity',
  'App experience',
  'OO experience',
  'Analyst capability',
  'Motivation',
  'Stable requirements',
  'Part-time workers',
  'Language difficulty',
];

const DEFAULT_TCF = Array(13).fill(3) as number[];
const DEFAULT_ECF = Array(8).fill(3) as number[];

export const EstimatorFeature: React.FC = () => {

  const { uiState, errorMsg, estimateData, fetchEstimate, setUiState } = useEstimator();

  const [file, setFile] = useState<File | null>(null);
  const [hourlyRate, setHourlyRate] = useState<number>(50);
  const [tcf, setTcf] = useState<number[]>(DEFAULT_TCF);
  const [ecf, setEcf] = useState<number[]>(DEFAULT_ECF);

  const isLoading = uiState === 'loading';
  const hasResult = uiState === 'success' && estimateData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || isLoading) return;
    fetchEstimate(file, hourlyRate, tcf, ecf);
  };

  const handleReset = () => {
    setFile(null);
    setUiState('idle');
  };

  const updateFactor = (
    setValues: React.Dispatch<React.SetStateAction<number[]>>,
    index: number,
    nextValue: number
  ) => {
    setValues(prev => {
      const next = [...prev];
      next[index] = nextValue;
      return next;
    });
  };

  const renderFactorGroup = (
    title: string,
    subtitle: string,
    labels: string[],
    values: number[],
    setValues: React.Dispatch<React.SetStateAction<number[]>>
  ) => (
    <div className="factor-card">
      <div className="factor-card__header">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="factor-card__count">{values.length}</span>
      </div>
      <div className="factor-list">
        {values.map((value, index) => (
          <label className="factor-row" key={`${title}-${labels[index]}`}>
            <span>{labels[index]}</span>
            <input
              type="range"
              min={0}
              max={5}
              value={value}
              onChange={(e) => updateFactor(setValues, index, Number(e.target.value))}
              aria-label={labels[index]}
            />
            <output>{value}</output>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <section className="estimator-shell" aria-labelledby="estimator-heading">
      <div className="workspace-intro">
        <div>
          <p className="eyebrow">Diagram intelligence</p>
          <h2 id="estimator-heading">Turn UML diagrams into a defensible effort and cost estimate.</h2>
          <p>
            Upload a class or use case diagram, tune project factors, and get a clear model-backed breakdown.
          </p>
        </div>
        <div className="workflow-pulse" aria-hidden="true">
          <span>UML</span>
          <i />
          <span>Model</span>
          <i />
          <span>Estimate</span>
        </div>
      </div>

      <div className="workspace-grid">
        <form className="setup-panel panel-reveal" onSubmit={handleSubmit}>
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Setup</p>
              <h3>Estimate inputs</h3>
            </div>
            <span className={file ? 'status-pill status-pill--ready' : 'status-pill'}>
              {file ? 'Ready' : 'Awaiting file'}
            </span>
          </div>

          <FileUploader onFileSelect={setFile} selectedFile={file} />

          <div className="rate-card">
            <NumberInput
              label="Hourly developer rate"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              min={1}
              helperText="Currency: INR"
              required
            />
          </div>

          <div className="factor-grid">
            {renderFactorGroup('Technical factors', 'Scale project complexity from 0 to 5.', TCF_LABELS, tcf, setTcf)}
            {renderFactorGroup('Environmental factors', 'Tune team and project context.', ECF_LABELS, ecf, setEcf)}
          </div>

          {uiState === 'error' && (
            <div className="error-banner" role="alert">
              {errorMsg}
            </div>
          )}

          <div className="form-actions">
            <Button type="submit" disabled={!file || isLoading} isLoading={isLoading}>
              {hasResult ? 'Recalculate Estimate' : 'Calculate Estimate'}
            </Button>
            {hasResult && (
              <Button type="button" variant="secondary" onClick={handleReset}>
                Start Over
              </Button>
            )}
          </div>
        </form>

        <aside className="result-panel panel-reveal panel-reveal--delay" aria-live="polite">
          {isLoading ? (
            <div className="processing-state">
              <div className="processing-orbit" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p className="eyebrow">Analyzing diagram</p>
              <h3>Applying UML estimation models...</h3>
              <div className="progress-track"><span /></div>
            </div>
          ) : hasResult ? (
            <SummaryCard data={estimateData} />
          ) : (
            <div className="empty-result">
              <div className="estimate-flow" aria-hidden="true">
                <div className="flow-node flow-node--source">UML</div>
                <div className="flow-line" />
                <div className="flow-node flow-node--model">UCP</div>
                <div className="flow-line" />
                <div className="flow-node flow-node--output">INR</div>
              </div>
              <p className="eyebrow">Live preview</p>
              <h3>Your estimate summary will appear here.</h3>
              <p>
                The result workspace is designed for quick scanning: model, hours, cost, and element breakdown.
              </p>
              <div className="preview-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

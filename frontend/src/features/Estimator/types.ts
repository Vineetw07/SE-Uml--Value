/** Breakdown for a single class in a Class Diagram */
export interface ClassBreakdownItem {
  name: string;
  attribute_count: number;
  method_count: number;
  attribute_names: string[];
  method_names: string[];
}

/**
 * Element breakdown returned by the backend.
 * `type` discriminates between "use_case_diagram" and "class_diagram".
 */
export interface ElementBreakdown {
  type: 'use_case_diagram' | 'class_diagram';

  /* --- Use Case Diagram fields --- */
  simple_actors?: number;
  simple_actors_names?: string[];
  average_actors?: number;
  average_actors_names?: string[];
  complex_actors?: number;
  complex_actors_names?: string[];
  simple_use_cases?: number;
  simple_use_cases_names?: string[];
  average_use_cases?: number;
  average_use_cases_names?: string[];
  complex_use_cases?: number;
  complex_use_cases_names?: string[];

  /* --- Class Diagram fields --- */
  classes?: ClassBreakdownItem[];
  total_classes?: number;
  total_attributes?: number;
  total_methods?: number;
  total_relationships?: number;
}

/**
 * Top-level response from POST /api/v1/estimate.
 */
export interface EstimateResponse {
  estimate_id: string;
  filename: string;
  estimated_hours: number;
  total_cost: number;
  element_breakdown: ElementBreakdown;

  /* UCP-specific top-level fields */
  uaw?: number;
  uucw?: number;
  tcf?: number;
  ecf?: number;
  uucp?: number;
  ucp?: number;

  /* Graph Weight-specific top-level fields */
  class_hours?: number;
  attribute_hours?: number;
  method_hours?: number;
  relationship_hours?: number;
}

/**
 * Valid UI States for our components.
 */
export type UIState = 'idle' | 'loading' | 'error' | 'success';

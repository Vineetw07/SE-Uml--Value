import React, { useState } from 'react';
import type { EstimateResponse, ClassBreakdownItem, ElementBreakdown } from '../types';

export interface SummaryCardProps {
  data: EstimateResponse;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ data }) => {
  const [selectedDetails, setSelectedDetails] = useState<{ title: string; names: string[] } | null>(null);
  const bd = data.element_breakdown;
  const diagramLabel = bd.type === 'class_diagram' ? 'Class Diagram' : 'Use Case Diagram';
  const modelLabel = bd.type === 'class_diagram' ? 'Graph Weight' : 'UCP';

  const handleOpenDetails = (title: string, names: string[]) => {
    if (names.length > 0) {
      setSelectedDetails({ title, names });
    }
  };

  const renderDetailRow = (
    label: string,
    countKey: keyof ElementBreakdown,
    nameKey: keyof ElementBreakdown,
    title: string
  ) => {
    const rawCount = bd[countKey];
    const rawNames = bd[nameKey];
    const count = typeof rawCount === 'number' ? rawCount : 0;
    const names = Array.isArray(rawNames) && rawNames.every((name) => typeof name === 'string')
      ? rawNames
      : [];
    const isClickable = count > 0 && names.length > 0;

    return (
      <div className="breakdown-row" key={label}>
        <span>{label}</span>
        <button
          className={isClickable ? 'count-chip count-chip--active' : 'count-chip'}
          onClick={isClickable ? () => handleOpenDetails(title, names) : undefined}
          type="button"
          disabled={!isClickable}
          aria-label={isClickable ? `View ${title}` : undefined}
        >
          {count}
        </button>
      </div>
    );
  };

  const renderClassDiagramBreakdown = () => {
    const classes: ClassBreakdownItem[] = bd.classes || [];

    return (
      <>
        <div className="stat-grid">
          <MetricTile label="Classes" value={bd.total_classes ?? 0} />
          <MetricTile label="Attributes" value={bd.total_attributes ?? 0} />
          <MetricTile label="Methods" value={bd.total_methods ?? 0} />
          <MetricTile label="Relationships" value={bd.total_relationships ?? 0} />
        </div>

        <div className="hour-stack">
          <h4>Hour breakdown</h4>
          <BreakdownLine label="Classes x 10 hrs" value={`${data.class_hours ?? 0} hrs`} />
          <BreakdownLine label="Attributes x 2 hrs" value={`${data.attribute_hours ?? 0} hrs`} />
          <BreakdownLine label="Methods x 4 hrs" value={`${data.method_hours ?? 0} hrs`} />
          <BreakdownLine label="Relationships x 3 hrs" value={`${data.relationship_hours ?? 0} hrs`} />
          <hr style={{ margin: '8px 0', borderColor: '#e2e8f0', borderWidth: '1px', opacity: 0.5 }} />
          <BreakdownLine label="Complexity Multiplier" value={`× ${((data.tcf ?? 1) * (data.ecf ?? 1)).toFixed(2)}`} />
        </div>

        <div className="result-table-wrap">
          <table className="result-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Attributes</th>
                <th>Methods</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, index) => (
                <tr key={`${cls.name}-${index}`}>
                  <td>{cls.name}</td>
                  <td>
                    <button
                      className={cls.attribute_names.length > 0 ? 'table-link' : 'table-link table-link--disabled'}
                      onClick={cls.attribute_names.length > 0 ? () => handleOpenDetails(`${cls.name} - Attributes`, cls.attribute_names) : undefined}
                      type="button"
                      disabled={cls.attribute_names.length === 0}
                    >
                      {cls.attribute_count}
                    </button>
                  </td>
                  <td>
                    <button
                      className={cls.method_names.length > 0 ? 'table-link' : 'table-link table-link--disabled'}
                      onClick={cls.method_names.length > 0 ? () => handleOpenDetails(`${cls.name} - Methods`, cls.method_names) : undefined}
                      type="button"
                      disabled={cls.method_names.length === 0}
                    >
                      {cls.method_count}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const renderUseCaseBreakdown = () => (
    <div className="classification-grid">
      <div>
        <h4>Actors</h4>
        {renderDetailRow('Simple', 'simple_actors', 'simple_actors_names', 'Simple Actors')}
        {renderDetailRow('Average', 'average_actors', 'average_actors_names', 'Average Actors')}
        {renderDetailRow('Complex', 'complex_actors', 'complex_actors_names', 'Complex Actors')}
      </div>
      <div>
        <h4>Use cases</h4>
        {renderDetailRow('Simple', 'simple_use_cases', 'simple_use_cases_names', 'Simple Use Cases')}
        {renderDetailRow('Average', 'average_use_cases', 'average_use_cases_names', 'Average Use Cases')}
        {renderDetailRow('Complex', 'complex_use_cases', 'complex_use_cases_names', 'Complex Use Cases')}
      </div>
    </div>
  );

  return (
    <>
      <div className="summary-card">
        <div className="summary-hero">
          <div>
            <p className="eyebrow">Estimate ready</p>
            <h3>{diagramLabel}</h3>
            <span className="model-badge">{modelLabel}</span>
          </div>
          <div className="signal-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="metric-grid">
          <div className="metric-card metric-card--primary">
            <span>Estimated hours</span>
            <strong>{data.estimated_hours.toLocaleString()} hrs</strong>
          </div>
          <div className="metric-card">
            <span>Total cost</span>
            <strong>INR {data.total_cost.toLocaleString()}</strong>
          </div>
        </div>

        {bd.type === 'class_diagram' ? renderClassDiagramBreakdown() : renderUseCaseBreakdown()}
      </div>

      {selectedDetails && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedDetails(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedDetails.title}
        >
          <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedDetails.title}</h3>
              <button onClick={() => setSelectedDetails(null)} type="button" aria-label="Close dialog">
                x
              </button>
            </div>
            <ul>
              {selectedDetails.names.map((name, i) => (
                <li key={`${name}-${i}`}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

const MetricTile: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="stat-tile">
    <strong>{value}</strong>
    <span>{label}</span>
  </div>
);

const BreakdownLine: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="breakdown-line">
    <span>{label}</span>
    <strong>{value}</strong>
  </div>
);

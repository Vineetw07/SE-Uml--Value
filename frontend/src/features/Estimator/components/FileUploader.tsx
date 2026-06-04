import React, { useCallback, useState } from 'react';
import { UploadCloud } from 'lucide-react';

export interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect, selectedFile }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onFileSelect(e.dataTransfer.files[0]);
      }
    },
    [onFileSelect]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onFileSelect(e.target.files[0]);
      }
    },
    [onFileSelect]
  );

  return (
    <div
      className={`upload-zone ${isDragging ? 'upload-zone--dragging' : ''} ${selectedFile ? 'upload-zone--selected' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      role="button"
      tabIndex={0}
      aria-label="Upload UML XML or JSON file"
    >
      <input
        type="file"
        accept=".xml,.json"
        onChange={handleChange}
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="upload-icon" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10, 102, 194, 0.08)', borderRadius: '16px', color: 'var(--color-primary)' }}>
        <UploadCloud size={28} />
      </div>
      <div>
        {selectedFile ? (
          <>
            <p className="upload-title">File selected</p>
            <p className="upload-copy">{selectedFile.name}</p>
          </>
        ) : (
          <>
            <p className="upload-title">Drop your UML diagram here</p>
            <p className="upload-copy">XML and JSON files are supported</p>
          </>
        )}
      </div>
    </div>
  );
};

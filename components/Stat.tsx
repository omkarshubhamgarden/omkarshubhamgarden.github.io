import React from 'react';

interface StatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  valueClassName?: string;
  labelClassName?: string;
  gap?: string;
  labelFirst?: boolean;
  className?: string;
}

export function Stat({
  value,
  label,
  valueClassName = '',
  labelClassName = '',
  gap = 'gap-1',
  labelFirst = false,
  className = '',
}: StatProps) {
  const valueNode = <span className={`block ${valueClassName}`}>{value}</span>;
  const labelNode = <span className={`block ${labelClassName}`}>{label}</span>;

  return (
    <div className={`flex flex-col ${gap} ${className}`}>
      {labelFirst ? (
        <>
          {labelNode}
          {valueNode}
        </>
      ) : (
        <>
          {valueNode}
          {labelNode}
        </>
      )}
    </div>
  );
}

export function StatusBadge({ children = "Current" }: { children?: React.ReactNode }) {
  return (
    <span className="status-badge">
      <span className="status-dot" aria-hidden />
      {children}
    </span>
  );
}

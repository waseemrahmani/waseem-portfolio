export function ProjectArchitecture() {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="grid gap-3 text-center text-xs text-muted sm:grid-cols-7 sm:items-center">
        <Box label="Source" />
        <Arrow />
        <Box label="Parser" />
        <Arrow />
        <Box label="Agent" />
        <Arrow />
        <Box label="Verified Report" />
      </div>
    </div>
  );
}

function Box({ label }: { label: string }) {
  return <div className="rounded-lg border border-border bg-background px-3 py-3 text-foreground">{label}</div>;
}

function Arrow() {
  return <span aria-hidden>→</span>;
}

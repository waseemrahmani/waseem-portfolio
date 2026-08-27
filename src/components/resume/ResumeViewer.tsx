export function ResumeViewer() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <object
        data="/resume/Waseem_Rahmani_Resume.pdf"
        type="application/pdf"
        className="h-[75vh] min-h-[560px] w-full"
      >
        <div className="p-6 text-sm text-secondary">
          Your browser could not embed the PDF. Use the download button below.
        </div>
      </object>
    </div>
  );
}

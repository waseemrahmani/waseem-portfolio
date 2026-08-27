import { Download } from "lucide-react";
import { ResumeViewer } from "@/components/resume/ResumeViewer";
import { profile } from "@/config/profile";

export const metadata = {
  title: "Resume",
  description: "Resume and professional background.",
};

export default function ResumePage() {
  return (
    <div className="site-container page-shell resume-page">
      <header className="page-header resume-header">
        <div>
          <p className="eyebrow">Resume</p>
          <h1 className="page-title">Professional resume.</h1>
          <p className="page-lead">View or download the current resume.</p>
        </div>
        <a href={profile.resumePath} download className="resume-download">
          <Download size={15} />
          Download PDF
        </a>
      </header>
      <ResumeViewer />
    </div>
  );
}

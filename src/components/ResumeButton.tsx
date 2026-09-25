import { site } from "@/lib/site";
import Icon from "./Icon";

// Feather-style download glyph (24x24 grid, stroked by Icon.tsx).
const downloadIcon =
  "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3";

// The one "download resume" button, shared by the hero CTA row and the contact
// section. Renders nothing until NEXT_PUBLIC_RESUME_URL is set, so it can never
// link to a file that is not there.
export default function ResumeButton({
  className = "",
}: {
  className?: string;
}) {
  const { resumeUrl, name } = site;
  if (!resumeUrl) return null;

  // A file served from /public downloads in place and gets a tidy filename; an
  // external URL (Drive, Dropbox, ...) opens in a new tab, because `download` is
  // ignored for cross-origin files.
  const local = resumeUrl.startsWith("/");
  const ext = /\.([a-z0-9]{2,5})(?:[?#]|$)/i
    .exec(resumeUrl)?.[1]
    ?.toLowerCase();
  const fileName = `${name.replace(/\s+/g, "-")}-Resume${ext ? `.${ext}` : ""}`;

  return (
    <a
      href={resumeUrl}
      download={local ? fileName : undefined}
      target={local ? undefined : "_blank"}
      rel={local ? undefined : "noopener noreferrer"}
      className={`btn spot ${className}`.trim()}
    >
      <Icon d={downloadIcon} className="h-[18px] w-[18px] flex-none" />
      Resume
    </a>
  );
}

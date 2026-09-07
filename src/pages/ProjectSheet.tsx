import { lab } from "../data/labData";

// The project tracker lives in a Google Sheet that the lab maintains.
// Publishing instructions for maintainers:
// 1. Open the sheet in Google Sheets.
// 2. File → Share → Publish to web.
// 3. Choose "Entire document" or the specific sheet tab, format = "Web page".
// 4. Copy the resulting URL into lab.projectsSheetUrl in src/data/labData.ts.
// For editing (lab members only), use projectsSheetEditUrl.

export default function ProjectSheet() {
  return (
    <div>
      <div className="section-title">Project Tracker</div>

      <p style={{ marginBottom: 8 }}>
        A live view of ongoing projects, milestones, students, and their status
        is maintained in a shared Google Sheet. The embed below always shows
        the latest published version; members of the lab can edit it directly.
      </p>

      <div style={{ fontSize: 13, marginBottom: 14, color: "var(--color-muted)" }}>
        <a href={lab.projectsSheetEditUrl} target="_blank" rel="noreferrer">
          Open the tracker in Google Sheets (edit)
        </a>
      </div>

      <div
        style={{
          border: "1px solid var(--color-border)",
          background: "#fff",
        }}
      >
        <iframe
          src={lab.projectsSheetUrl}
          title="DysCo project tracker"
          style={{
            width: "100%",
            height: 720,
            border: 0,
            display: "block",
          }}
        />
      </div>

      <div className="notice" style={{ marginTop: 18 }}>
        To request a new column, change in status, or addition of a new project,
        please message the PI or edit the sheet directly if you already have
        access.
      </div>
    </div>
  );
}

import { useMemo } from "react";
import { lab, colloquia } from "../data/labData";

export default function Schedule() {
  // Sort upcoming first
  const sorted = useMemo(
    () =>
      [...colloquia].sort((a, b) => a.date.localeCompare(b.date)),
    []
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = sorted.filter((c) => new Date(c.date) >= today);
  const past = sorted
    .filter((c) => new Date(c.date) < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  // Google Calendar "add event" URL for the next talk
  const nextTalk = upcoming[0];
      const addToGcal = nextTalk
    ? (() => {
        // Parse date + time (e.g., "4:00 – 5:00 PM IST")
        const startMatch = nextTalk.time.match(
          /(\d{1,2}):(\d{2})\s*(AM|PM)/i
        );
        let startH = 0, startM = 0;
        if (startMatch) {
          startH = parseInt(startMatch[1], 10);
          startM = parseInt(startMatch[2], 10);
          if (startMatch[3].toUpperCase() === "PM" && startH !== 12) startH += 12;
          if (startMatch[3].toUpperCase() === "AM" && startH === 12) startH = 0;
        }
        // India timezone is UTC+05:30; convert to UTC for Google calendar
        const startLocal = new Date(nextTalk.date);
        startLocal.setHours(startH, startM, 0, 0);
        const offsetMs = 5.5 * 3600 * 1000;
        const startUTC = new Date(startLocal.getTime() - offsetMs);
        const endUTC = new Date(startUTC.getTime() + 60 * 60 * 1000);
        const pad = (n: number) => n.toString().padStart(2, "0");
        const toGcal = (d: Date) =>
          `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(
            d.getUTCDate()
          )}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
        const params = new URLSearchParams({
          action: "TEMPLATE",
          text: nextTalk.title,
          dates: `${toGcal(startUTC)}/${toGcal(endUTC)}`,
          details: `Speaker: ${nextTalk.presenter}${
            nextTalk.affiliation ? " (" + nextTalk.affiliation + ")" : ""
          }`,
          location: nextTalk.location,
        });
        return `https://www.google.com/calendar/render?${params.toString()}`;
      })()
    : null;

  return (
    <div>
      <div className="section-title">Schedule &amp; Calendar</div>

      <p style={{ marginBottom: 10 }}>
        The DysCo Lab meets for a weekly colloquium, joint group meetings, and
        one-on-one meetings with the PI. The table below lists upcoming and
        recent colloquia. All lab events are also on the shared Google
        Calendar; subscribe to receive reminders automatically.
      </p>

      {/* Mailing list / subscribe */}
      <div className="notice">
        <b>Lab mailing list:</b>{" "}
        All members should join the DysCo Google Group to receive reminders
        for talks, group meetings, and special events. A reminder is
        automatically mailed to the list a few hours before every colloquium.
        <div style={{ marginTop: 6 }}>
          <a href={`mailto:${lab.mailingList}`}>Email the list</a>
          {" · "}
          <a href={lab.mailingListSignup} target="_blank" rel="noreferrer">
            Subscribe
          </a>
          {" · "}
          <a href={lab.labCalendarUrl} target="_blank" rel="noreferrer">
            Open lab calendar
          </a>
          {" · "}
          <a href="#/join">Contact the PI</a>
        </div>
        <div style={{ marginTop: 8, fontSize: 12.5, color: "var(--color-muted)" }}>
          (Auto-reminders are implemented as a small Google Apps Script
          attached to the shared lab calendar that sends email to the Google
          Group 3 hours before any event tagged "Colloquium".)
        </div>
      </div>

      {/* Colloquia table */}
      {upcoming.length > 0 && (
        <>
          <div className="subsection-title">Upcoming Colloquia</div>
          <table className="schedule-table">
            <thead>
              <tr>
                <th style={{ width: 110 }}>Date</th>
                <th style={{ width: 170 }}>Time</th>
                <th>Presenter</th>
                <th>Topic</th>
                <th style={{ width: 160 }}>Location</th>
              </tr>
            </thead>
            <tbody>
              {upcoming.map((c, i) => {
                const d = new Date(c.date);
                return (
                  <tr key={i}>
                    <td>
                      {d.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td style={{ fontVariantNumeric: "tabular-nums" }}>
                      {c.time}
                    </td>
                    <td>
                      <div style={{ fontWeight: 500 }}>{c.presenter}</div>
                      {c.affiliation && (
                        <div
                          style={{
                            fontSize: 12,
                            color: "var(--color-muted)",
                          }}
                        >
                          {c.affiliation}
                        </div>
                      )}
                    </td>
                    <td>{c.title}</td>
                    <td style={{ fontSize: 13 }}>{c.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {addToGcal && (
            <div style={{ fontSize: 13.5, marginBottom: 24 }}>
              <a href={addToGcal} target="_blank" rel="noreferrer">
                + Add next talk to Google Calendar
              </a>
            </div>
          )}
        </>
      )}

      {/* Calendar embeds: lab calendar + PI free/busy */}
      <div className="subsection-title">Shared Calendars</div>
      <div className="calendar-grid">
        <div className="calendar-card">
          <h4>Lab Events</h4>
          <p style={{ fontSize: 12.5, color: "var(--color-muted)", marginBottom: 8 }}>
            Colloquia, group meetings, defenses, and special events.
          </p>
          <iframe
            src={lab.labCalendarUrl}
            title="DysCo Lab calendar"
            scrolling="no"
          />
        </div>

        <div className="calendar-card">
          <h4>PI Availability (free / busy)</h4>
          <p style={{ fontSize: 12.5, color: "var(--color-muted)", marginBottom: 8 }}>
            Only free/busy information is shown; no event details.
          </p>
          <iframe
            src={lab.piCalendarUrl}
            title="PI calendar (free/busy)"
            scrolling="no"
          />
          <div
            style={{
              fontSize: 12,
              color: "var(--color-muted)",
              marginTop: 6,
            }}
          >
            To schedule a meeting with the PI, email{" "}
            <a href={`mailto:${lab.piEmail}`}>{lab.piEmail}</a> with a few
            candidate slots.
          </div>
        </div>
      </div>

      {/* Past talks */}
      {past.length > 0 && (
        <>
          <div className="subsection-title" style={{ marginTop: 30 }}>
            Recent Past Talks
          </div>
          <table className="schedule-table">
            <thead>
              <tr>
                <th style={{ width: 110 }}>Date</th>
                <th>Presenter</th>
                <th>Topic</th>
              </tr>
            </thead>
            <tbody>
              {past.slice(0, 12).map((c, i) => {
                const d = new Date(c.date);
                return (
                  <tr key={i}>
                    <td>
                      {d.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td>
                      {c.presenter}
                      {c.affiliation && (
                        <span
                          style={{
                            fontSize: 12,
                            color: "var(--color-muted)",
                            marginLeft: 4,
                          }}
                        >
                          ({c.affiliation})
                        </span>
                      )}
                    </td>
                    <td style={{ fontStyle: "italic" }}>{c.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

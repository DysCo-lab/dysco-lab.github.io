# DysCo Lab — Images & Content Cheat Sheet

All site content lives in **`src/data/labData.ts`** — open that file and edit the
constants; the site updates automatically on rebuild.

---

## 1. Logo (top right)

The logo appears in the top-right of the navigation bar. It's bigger than the
old monogram and supports an image of your choice.

- In `src/data/labData.ts` there is a `logo` object:
  ```ts
  export const logo = {
    useImage: true,
    imageSrc: "/images/logo.png",
  };
  ```
- Drop your logo at **`public/images/logo.png`** (or `.svg`, `.jpg` — just update
  `imageSrc` accordingly). SVG is preferred (scales crisply to any size).
- If `useImage` is `false`, or if the image file fails to load, the inline
  "DysCo" text monogram falls back automatically.
- To use the IIT Hyderabad crest / MAE logo instead of the DysCo monogram,
  simply set `imageSrc` to `/images/iith-logo.png` and place the file there.

Recommended size: at least 200 px tall (or 400 px for 2x/Retina). The nav bar
scales the logo to between 44 px and 84 px tall depending on screen size.

---

## 2. Homepage slider images

Folder: **`public/images/slides/`**.

The homepage slider uses these files (16:9 recommended, at least 1200×675 px).
The first slide keeps the original filename from the upstream DysCo GitHub
repo so you can just copy the file over:

| File inside `public/images/slides/`    | Caption                             |
|----------------------------------------|-------------------------------------|
| `lab pic.JPG`                          | DysCo lab group meeting             |
| `combustor.jpg`                        | Atmospheric combustion rig          |
| `rijke.jpg`                            | Rijke tube oscillator array         |
| `quad.jpg`                             | Quadrotor testbed                   |
| `piv.jpg`                              | Time-resolved PIV measurements      |

Captions are editable in `labData.ts` → `sliderSlides`.

---

## 3. People photos

Folder: **`public/images/people/`**.

Each person entry in `labData.ts` → `people[]` has a `photo` field:

```ts
{ id: "phd-1", name: "Student Name", role: "phd", photo: "phd1.jpg", ... }
```

That looks for `public/images/people/phd1.jpg`. Use square headshots
(≈ 400×400 px, any common format). If a photo is missing, a hatched
initials-placeholder is shown automatically (no broken image icon).

Member categories (tuned exactly to the original DysCo categories):

- **Faculty / PI** (`role: "pi"` or `"faculty"`)
- **Postdocs** (`"postdoc"`)
- **Visitors** (`"visitor"`, with research topic shown under name)
- **Staff** (`"staff"`)
- **PhD Students** (`"phd"`)
- **MS (By Research) Students** (`"ms"`)
- **BTP / Undergraduate Students** (`"undergrad"`)
- **Alumni** (`"alumni"` — plain text list with thesis and current position)

---

## 4. Project thumbnails

Folder: **`public/images/projects/`**.

Each project in `labData.ts` → `projects[]` has an `image` field that names a
file in that folder. GIFs work (they animate, just like on the REx site).

The three core thrusts mirror the original DysCo website exactly:

1. **Thermoacoustics and Instabilities** — system identification, MOR, stability
2. **Dynamical Systems and Control** — aerial robotics, optimal control, applied math
3. **Complex Systems** — fluid flows, networks, signals, data-driven approaches

Three smaller supporting projects (Rijke network, Koopman/DMD fluids, flame
dynamics) are also included. Edit, add, or remove entries as needed.

---

## 5. Google integrations

All are configured in `src/data/labData.ts` under the `lab` object:

| Field                  | What it is |
|------------------------|------------|
| `mailingList`          | Google Group email address (receives reminders). |
| `mailingListSignup`    | Public URL where members subscribe to the group. |
| `labCalendarUrl`       | Public **embed** URL for the shared lab Google Calendar. Get it from Google Calendar → Settings → *Integrate calendar* → copy the `<iframe src="…">` URL. |
| `piCalendarUrl`        | Embed URL for the PI's calendar. First share the calendar with the public as **"See only free/busy (hide details)"** so only availability is shown. |
| `projectsSheetUrl`     | Published-to-web embed URL of your Google Sheet (File → Share → Publish to web → Embed). |
| `projectsSheetEditUrl` | Direct edit URL of the same Google Sheet. |

### Auto-email reminders for talks
The Schedule page shows an "Add to Google Calendar" button for the next
colloquium and embeds the shared calendar. To send automatic email reminders
to the mailing list a few hours before each talk:

1. Open the shared lab Google Calendar.
2. Create a new Google Apps Script that fires on calendar change and sends
   email to `lab.mailingList` ~3 hours before any event whose title starts
   with `[Colloquium]`. The Schedule page notes this setup for members.

---

## 6. Publications

All publications live in `labData.ts` → `publications[]`. Lab members are
identified by putting a trailing `*` after their name in the `authors`
string (e.g. `"[Student 1]*, [PI Name]"`). On the Publications page,
lab-member authors are bolded automatically. Grouping into years/months
happens automatically.

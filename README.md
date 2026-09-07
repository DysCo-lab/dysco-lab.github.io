# DysCo Lab Website

Source for the Dynamics and Control (DysCo) Lab website at IIT Hyderabad.
Based on the REx Lab template and deployed via GitHub Pages.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # build into dist/
npm run preview  # preview the production build
```

The site is a single-page app with hash-based routing (`#/research`,
`#/people`, …). All content (people, projects, publications, schedule,
Google integrations) lives in **`src/data/labData.ts`** — open that file
and edit it to change anything on the site.

## Deploy to GitHub Pages

The repository ships with a GitHub Actions workflow at
`.github/workflows/pages.yml`. To deploy:

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**
   (do **not** use "Deploy from a branch").
3. Push to `main` (or run the workflow manually from the Actions tab).
4. The workflow installs dependencies, runs `npm run build`, and publishes
   the self-contained `dist/` folder.

Because the site uses `vite-plugin-singlefile` and Vite is configured with
`base: "./"`, the build works for **both**:

- a user/organization Pages site at `https://<user>.github.io/` (root), and
- a project Pages site at `https://<user>.github.io/<repo>/` (subpath).

If you're moving the site between the two, no config changes are needed.

### To set up a custom domain

Add a file called `public/CNAME` containing just the domain (e.g.
`dysco.mae.iith.ac.in`) and push. The workflow will publish it alongside
the site.

## Adding images

- Top-right logo: drop a PNG/SVG at **`public/images/logo.png`** (or edit
  `logo.imageSrc` in `src/data/labData.ts` to point at another file).
- Homepage slider: drop files into **`public/images/slides/`**. Filenames
  are listed in `sliderSlides` in `src/data/labData.ts`.
- People headshots: **`public/images/people/`**, referenced by each
  person's `photo` field.
- Project thumbnails: **`public/images/projects/`**, referenced by each
  project's `image` field. GIFs animate.

See `IMAGES_README.md` for a full cheat sheet. Missing images fall back to
clean hatched placeholders / initials — no broken-image icons.

## Google integrations

All are configured in `src/data/labData.ts` under the `lab` object:

| Field                  | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| `mailingList`          | Google Group email (lab reminders go here)         |
| `mailingListSignup`    | Public subscription URL                            |
| `labCalendarUrl`       | Public Google Calendar **embed** src for lab events |
| `piCalendarUrl`        | PI free/busy calendar embed (share as "free/busy" only) |
| `projectsSheetUrl`     | Published-to-web Google Sheet URL (Projects page)  |
| `projectsSheetEditUrl` | Direct edit URL for lab members                    |

## Project structure

```
src/
  App.tsx                – top-level router
  components/            – Navbar, Footer, Avatar, ImageSlider, …
  pages/                 – Home, Research, People, Publications, …
  data/labData.ts        – **all site content lives here**
  hooks/useHashRoute.ts  – lightweight hash router
  index.css              – all styling
```

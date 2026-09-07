# Fix for the "blank page" on GitHub Pages

The blank page happens when GitHub Pages serves the *source* tree (which
contains `index.html` pointing at `/src/main.tsx`, a Vite dev-server path
that does not exist in the repo) rather than the built site. The Vite
source entry is never compiled, so the browser loads an empty page and a
404 for the script.

## What we changed to fix it

1. **Added `.github/workflows/pages.yml`** — an Actions workflow that:
   - checks out the repo,
   - installs Node 20 and npm dependencies,
   - runs `npm run build`,
   - ensures a `.nojekyll` marker is present in `dist/`,
   - uploads `dist/` as a Pages artifact and deploys it.
   
   You must switch **Settings → Pages → Source** from "Deploy from a
   branch" to **"GitHub Actions"** for this to take effect.

2. **`public/.nojekyll`** — tells GitHub Pages not to run Jekyll, which
   would otherwise strip files/folders starting with `_` and sometimes
   interfere with Vite output. It is copied into `dist/` automatically.

3. **`public/404.html`** — for deep links like `/people` / `/publications`,
   GitHub Pages would otherwise serve a GitHub-branded 404. Our 404 page
   redirects unknown paths back to the SPA root with the path encoded as
   a hash fragment (e.g. `/people` → `/#/people`), which our router
   handles. It resolves the base path at runtime, so it works both for
   user pages (`<user>.github.io`) and project pages
   (`<user>.github.io/<repo>/`).

4. **`vite.config.ts`** now sets `base: "./"` so all asset URLs are
   relative. Because we use `vite-plugin-singlefile` the JS/CSS are all
   inlined into `dist/index.html`, and the handful of images we do load
   (`images/...`) are referenced as relative paths, so the site works
   whether it's hosted at `/` or at a subpath.

5. **All hard-coded image `src`s in the TSX and `labData.ts`** were
   switched from absolute `/images/...` to relative `images/...` so they
   resolve correctly under a subpath deploy.

## One-time setup in GitHub

1. Push these changes to your GitHub repository.
2. Go to the repository on GitHub → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
   (instead of "Deploy from a branch").
4. Go to the **Actions** tab; the "Deploy to GitHub Pages" workflow
   should run on the push. When it finishes, the green URL on the
   Settings → Pages page will serve the built site.

That's it. Subsequent pushes to `main` will rebuild and redeploy
automatically.

## If you host the DysCo site on a *user/organization* Pages site
(e.g. `dysco-lab.github.io`) — nothing extra to do, the settings above
cover it.

## If you host it as a *project* page under a different user
(e.g. `neerajbalachandar.github.io/dysco-lab/`) — still nothing extra to
do, the relative `base` and runtime base-resolution in `404.html` handle
that automatically.

## Why the previous deploy was blank

The previous `index.html` at the repo root is the Vite dev entry point,
which contains:

```html
<script type="module" src="/src/main.tsx"></script>
```

That file is compiled by Vite at build time. When you deploy the source
tree directly to Pages, the browser tries to load `/src/main.tsx` raw,
which is a TypeScript/JSX file that the browser cannot execute as a
module, and the page renders nothing. Deploying the compiled `dist/`
folder (produced by `npm run build`) is the fix.

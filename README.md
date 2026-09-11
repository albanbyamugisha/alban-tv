# ALBAN TV — Just Level

The official website for **ALBAN TV**, the channel founded by Alban Byamugisha in Kampala, Uganda. It introduces the channel, plays the trailer, shows the upcoming programmes, and tells people how to reach you.

Built with **React 19 + Vite 8**.

---

## What's on the site

- Big title ("Just Level.") with the founder's portrait
- A gold strap with the channel's key words
- The channel trailer (with captions)
- The three upcoming programmes
- A founder section
- A contact section with a form, email, phone numbers and social links

---

## Before you start (what you need)

You need **three things** installed on your computer:

1. **Node.js** — this runs the tools that build the site.
2. **npm** — this comes automatically with Node.js, so you don't install it separately (npm is Node's "app store" for code packages).
3. **Git** — optional, but useful if you want to download the project with the command below. You can also just download the folder as a ZIP instead.

> **New to this?** That's fine. Everything below is just copy-and-paste. Commands go into your **terminal** (on Windows, open "PowerShell" or a folder and type `cmd` in the address bar).

### Step 0 — Install Node.js

1. Go to <https://nodejs.org> and download the **LTS** version (look for the big green button — "LTS" is the safe, stable one).
2. Run the installer. Just keep clicking **Next** until it finishes. Do **not** change any options.
3. Confirm it worked. Open a terminal and type:

```
node --version
```

You should see something like `v20.x.x`. If you see `node is not recognized`, close and reopen your terminal and try again.

Also check that npm came with it:

```
npm --version
```

You should see something like `10.x.x`. If both commands print a version, you're ready.

---

## Step 1 — Get the project onto your computer

**Option A — Download as ZIP (easiest)**
1. On the project's GitHub page, click the green **Code** button.
2. Click **Download ZIP**.
3. Unzip the folder somewhere easy, like your Desktop.

**Option B — Git clone (if you use Git)**
Open a terminal and run:

```
git clone <paste-the-repository-link-here>
```

`<paste-the-repository-link-here>` looks like `https://github.com/your-name/alban-tv.git`.

Either way, at the end you should have a folder called `alban-tv` on your computer.

---

## Step 2 — Install the project's packages

Open your terminal and **go into the project folder**:

```
cd alban-tv
```

(If you typed this by hand, make sure the name matches your unzipped folder.)

Now install everything the project needs. This downloads the packages listed in `package.json`:

```
npm install
```

This will take a minute or two the first time. When it finishes you'll see a `node_modules` folder appear (ignore it — it's just the downloaded packages). You should only ever need to run `npm install` once.

---

## Step 3 — Start the site

In the **same folder**, run:

```
npm run dev
```

You'll see something like:

```
  VITE v8.3.0  ready in 200 ms

  ➜  Local:   http://localhost:5173/
```

Now open your browser and go to **http://localhost:5173/**. You should see the ALBAN TV homepage!

- Leave this terminal window open while you work — close it (press `Ctrl + C`) when you want to stop the site.
- **Hot reload:** keep the site open in your browser, edit a file, save it, and the page updates by itself. No refresh needed.

---

## Step 4 — Make amends to the site (the fun part)

You don't need to know React to change the text. **Almost all of the content lives in one file:** `src/content.js`.

Open it in any text editor (VS Code is great) and change things like:

- The headlines and intro text
- The strap words (`ALBAN TV · IDEAS · PEOPLE ...`)
- The programmes (title, description, times)
- The email address, phone numbers and social links
- The founder's name and bio

Save the file, and the browser updates instantly. Try changing the email address first — it's right near the bottom under `contact`:

```js
export const contact = {
  email: 'alban.tv.2@gmail.com',
  // ...
}
```

To change the actual pictures or the trailer, put your files in `public/images/` and `public/videos/`, using the **same file names** as the current ones (`alban.png`, `logo.png`, `trailer.mp4`, ...). New images are uploaded as WebP automatically too — drop the updated PNG/WebP pair in and it works.

---

## Useful commands

| Command | What it does |
| --- | --- |
| `npm install` | Downloads the packages (only needed once) |
| `npm run dev` | Starts the site on your computer for editing |
| `npm run build` | Makes a "release" version of the site in a `dist/` folder |
| `npm run preview` | Shows the release version from `dist/` on your computer |
| `npm run lint` | Checks the code for mistakes |

---

## Project structure

```
alban-tv/
├── public/              # Media + files that don't change
│   ├── images/          #   logo, alban, trailer poster (PNG + WebP)
│   ├── videos/          #   trailer.mp4 + trailer.vtt (captions)
│   ├── robots.txt       #   Tells search engines what to read
│   └── sitemap.xml      #   Tells search engines where the pages are
├── src/                 # The code that builds the site
│   ├── content.js       #   Edit ALL text here
│   ├── main.jsx         # The starting point
│   ├── App.jsx          # Puts all the sections together
│   ├── index.css        # All the styling (colours, sizes, layout)
│   ├── hooks/           # Extra tools (scroll-spy for the menu)
│   └── components/      # One file per section of the page
│       ├── Header.jsx   #   Logo + menu
│       ├── Hero.jsx     #   Big title + portrait
│       ├── Strap.jsx    #   The gold strip
│       ├── Watch.jsx    #   Trailer
│       ├── Programmes.jsx  # Shows
│       ├── Founder.jsx  #   About Alban
│       ├── Contact.jsx  #   Form + contact details
│       └── Footer.jsx   #   Bottom bar
├── package.json         # List of the project's packages
└── index.html           # The single page that loads the site
```

**Rule of thumb:** want to change **what it says** → open `src/content.js`. Want to change **what it looks like** → open `src/index.css`. Want to change **how a section is built** → open the matching file in `src/components/`.

---

## Putting it online — free with GitHub Pages

GitHub Pages hosts your finished site for free, straight from your GitHub repository. This guide uses the **automatic method** (GitHub Actions), so after the first setup, every time you push a change the site updates by itself.

Project assets already use `import.meta.env.BASE_URL`, so they keep working no matter where the site is hosted.

### Before you start

- A free GitHub account (sign up at <https://github.com>).
- The project on your computer, and the `dist` build working locally (`npm run build`).
- **Important:** this guide assumes your repository is a **project repository** (any name, e.g. `alban-tv`). Its site will live at `https://<your-username>.github.io/<repo-name>/` — not at the root. (Only if your repo is named exactly `<username>.github.io` does it become a "user site" at the root.)

### Step 1 — Configure Vite's "base" path

Because the site lives in a sub-folder (`/repo-name/`), Vite needs to know that. Open `vite.config.js` and make it look like this (use your **exact repository name**):

```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/alban-tv/',   // ⬅️ your repository name, with slashes, e.g. '/alban-tv/'
  plugins: [react()],
})
```

> **User site?** If your repo name is exactly `yourusername.github.io`, use `base: '/'` instead.
>
> **Heads up:** with a base set, the local dev server moves to `http://localhost:5173/alban-tv/`. That's normal.

### Step 2 — Create the GitHub Actions "workflow"

A **workflow** is a small file that tells GitHub to build the site and publish it every time you push. Create these folders and file inside your project:

```
.github/
└── workflows/
    └── deploy.yml
```

> On Windows, in the terminal: `mkdir .github\workflows` — then create the file with a text editor. Or just create the folders in your file explorer (VS Code does this automatically if you type the full path).

Paste this into `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Don't worry about what each line means — GitHub runs this file for you. It installs the packages, builds the site, and puts the result online.

### Step 3 — Push the project to GitHub (first time)

1. On github.com, click **New repository**, give it the same name as your repo folder (e.g. `alban-tv`), and create it (do **not** tick "Add a README").
2. In your terminal, still inside the project folder, connect your local project:

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<repo-name>`. If git asks for a login, use your GitHub username as the username and a **Personal Access Token** as the password (GitHub no longer accepts your normal password). You can create a token at **GitHub → Settings → Developer settings → Personal access tokens**.

> Already on the project? Just `git add . && git commit -m "..." && git push`.

### Step 4 — Turn on GitHub Pages

1. On github.com, open the repository → **Settings** → **Pages** (left menu).
2. Under **Build and deployment**, make sure **Source** = **GitHub Actions**.
3. Go to the **Actions** tab. You should see a run called "Deploy to GitHub Pages" — click it and wait until the green check appears (first time takes a few minutes).
4. When it's done, your site is live at:

```
https://<your-username>.github.io/<repo-name>/
```

Remember to hard-refresh (`Ctrl + Shift + R`) if you had the page open earlier.

### Step 5 — Updating the site later

From now on, every time you push to `main`, the site rebuilds and updates automatically. That's it — edit `src/content.js`, commit, push.

### Manual alternative (no workflow file)

If you'd rather not use Actions:

1. `npm run build`
2. Copy everything from the `dist/` folder into a new repository branch called `gh-pages`.
3. In **Settings → Pages**, set Source = **Deploy from a branch** and choose `gh-pages / (root)`.

### Before you go public — fix these placeholders

| File | What to change |
| --- | --- |
| `sitemap.xml` + `robots.txt` | Replace `albantv.example` with your real address, e.g. `https://<your-username>.github.io/<repo-name>/sitemap.xml` |
| `index.html` (Open Graph tags) | Change `og:image` (and add `og:url`) to full web addresses like `https://<your-username>.github.io/<repo-name>/images/trailer-poster.png` |
| `index.html` (JSON-LD block) | Set the real `uploadDate` of the trailer |
| `public/videos/trailer.vtt` | Replace the placeholder cues with the trailer's real transcript |

### GitHub Pages troubleshooting

**Blank page or missing images/video** — The `base` in `vite.config.js` must match your repository name exactly (`/repo-name/`, trailing slash included). Then hard-refresh.

**The site isn't updating after a push** — Check the **Actions** tab; if the last run is red, click it and read the failing step. Common cause: `npm ci` fails if `package-lock.json` isn't committed — make sure you ran `git add .` (adds everything).

**"Permission denied" / push failed** — Likely an authentication token issue (see Step 3) or you don't own that repository.

**404 page** — If the URL or repo name was typed wrong, or Pages was switched to "Deploy from a branch" while no `gh-pages` branch exists yet. Double-check **Settings → Pages → Source**.

---

## Trouble? Common problems

**"node is not recognized"** — Node.js isn't installed or you need to restart your terminal after installing it.

**"npm install" is slow** — First time is the slowest. It only downloads once.

**The page refreshes on its own** — That's hot reload doing its job.

**"port 5173 already in use"** — Another project is using the same port. Close the other one, or continue — Vite will offer another port number automatically.

**Where did my changes go?** — You're seeing an old version if the dev server isn't running, or if you edited while `npm run dev` was closed. Keep it running.
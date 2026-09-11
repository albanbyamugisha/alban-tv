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

You should see something like `10.x.x`. If both commands print a version, you're ready. ✅

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

Now open your browser and go to **http://localhost:5173/**. You should see the ALBAN TV homepage! 🎉

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
│   ├── content.js       # ⭐ Edit ALL text here
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

## Putting it online (when you're ready)

1. Run `npm run build`. This creates a `dist/` folder — that's your finished site.
2. Upload the `dist/` folder to any web host (Netlify, Vercel, GitHub Pages — all have free options).
3. Before going live, fix these placeholders (they're marked in the files):

| File | What to change |
| --- | --- |
| `public/sitemap.xml` + `public/robots.txt` | Replace `albantv.example` with your real domain |
| `index.html` (Open Graph tags) | Change `og:image` to a full web address (e.g. `https://your-site.com/images/trailer-poster.png`) |
| `index.html` (JSON-LD block) | Set the real `uploadDate` of the trailer |
| `public/videos/trailer.vtt` | Replace the placeholder cues with the trailer's real transcript |

---

## Trouble? Common problems

**"node is not recognized"** — Node.js isn't installed or you need to restart your terminal after installing it.

**"npm install" is slow** — First time is the slowest. It only downloads once.

**The page refreshes on its own** — That's hot reload doing its job. 😄

**"port 5173 already in use"** — Another project is using the same port. Close the other one, or continue — Vite will offer another port number automatically.

**Where did my changes go?** — You're seeing an old version if the dev server isn't running, or if you edited while `npm run dev` was closed. Keep it running.
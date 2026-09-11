# ALBAN TV — Just Level

Official website for **ALBAN TV**, the channel founded by Alban Byamugisha in Kampala, Uganda. The site introduces the channel, features the trailer, outlines the upcoming programme lineup, and provides ways to connect.

Built with **React 19 + Vite 8**.

## Features

- Hero with founder portrait and channel strap
- Embedded channel trailer (`public/videos/trailer.mp4`) with poster
- Programme lineup (in development) — edited in `src/components/Programmes.jsx`
- Founder section
- Contact section with email, phones, and social links — edited in `src/components/Contact.jsx`
- Responsive layout with the same design and styles as the original static site

## Getting started

```bash
npm install
npm run dev      # start dev server with HMR
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
public/                 # static assets served at the root
  images/               # logo, alban, trailer-poster (PNG + WebP)
  videos/               # trailer.mp4, trailer.vtt (captions)
  robots.txt
  sitemap.xml
src/
  content.js            # all site copy, single place to edit
  hooks/
    useScrollSpy.js     # highlights the active nav section
  components/           # one component per site section
    Header.jsx
    Hero.jsx
    Strap.jsx
    Watch.jsx           # trailer section
    Programmes.jsx      # shows lineup
    Founder.jsx
    Contact.jsx         # contact form + details
    Footer.jsx
  App.jsx               # composes all sections
  main.jsx              # React entry point
  index.css             # global styles (original style.css)
```

## Editing content

Almost all copy lives in `src/content.js` — headlines, shows, socials, contact details, form labels. Components render from it, so non-developers can edit one file without touching JSX.

Media files are referenced from `public/` (e.g. `/images/alban.png`, `/videos/trailer.mp4`). Images ship as WebP with PNG fallback via `<picture>`.

> **After deploying**, replace the placeholder domain `albantv.example` in `public/sitemap.xml`/`public/robots.txt`, make `og:image`/`og:url` absolute URLs, set the real `uploadDate` in the JSON-LD block in `index.html`, and replace the placeholder cues in `public/videos/trailer.vtt` with the trailer's actual transcript.
# Rabbitohs First Grade Player Register

An interactive card-based version of the official South Sydney Rabbitohs Men's First Grade
Player Numbers List (1,222 players, 1908–present), with a private admin dashboard for the
club historians to add, edit and delete players.

**No separate database.** The player list is a file in this repository
(`data/players.json`). The public page reads it; the admin dashboard edits it by
committing to the repo through GitHub. Every change is permanently recorded in the repo
history — who changed what, and when — and the site republishes itself automatically.

## What's in here

| File | What it is |
|---|---|
| `index.html` | The public page — every player as a flip card, with search, sort, decade filter and a South Sydney Juniors filter. Click a card for debut details; **Full biography** opens the long-form bio. |
| `admin.html` | The historians' dashboard — add/edit/delete players, upload photos, write biographies. |
| `data/players.json` | THE player list. Scraped from rabbitohs.com.au (current to #1222, 25 June 2026). |
| `photos/` | Player photos uploaded through the dashboard land here, named by player number. |
| `js/config.js` | Which GitHub repo the dashboard saves to. |

## One-time setup

1. **Create the repo** — in GitHub Desktop: *File → New Repository* (name it e.g.
   `rabbitohs-player-list`), copy this folder's contents in, commit, and *Publish
   repository* (untick "keep this code private" — the register is public information).
2. **Turn on the website** — on github.com, open the repo → **Settings → Pages** →
   Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
   A few minutes later the site is live at `https://<owner>.github.io/<repo>/`.
3. **Point the dashboard at the repo** — in `js/config.js`, set `OWNER` to your GitHub
   username/organisation and `REPO` to the repo name. Commit and push.
4. **Invite the historians** — each historian needs a (free) GitHub account. On
   github.com: repo → **Settings → Collaborators → Add people**, give them **Write**
   access.

## Creating your login token (each historian, once — 2 minutes)

The dashboard logs you in with a personal access token instead of a password:

1. On github.com click your avatar → **Settings** → **Developer settings** (bottom of
   the left sidebar) → **Personal access tokens → Fine-grained tokens** → **Generate
   new token**.
2. Name: `Rabbitohs Register`. Expiration: up to you (you'll paste a new one when it
   expires). **Repository access: Only select repositories** → choose the Register repo.
3. Under **Permissions → Repository permissions**, set **Contents** to
   **Read and write**. Leave everything else alone.
4. Generate, copy the token (starts with `github_pat_`), and paste it into the
   dashboard's login box. Tick "Remember me" and you won't be asked again on that
   computer.

The token only works on this one repo and can be revoked any time from the same screen.

## Day-to-day for historians

- Open `admin.html` on the live site and log in.
- **New debutant:** *Add player* — the form pre-fills the next Rabbitoh number.
- **Photos:** *Edit* a player, choose a file and save. The card front switches from the
  numbered jersey design to the photo automatically.
- **Biographies:** paste into the Biography box; blank lines become paragraphs. The card
  back's **Full biography** button lights up once a bio exists.
- **Confluence URL field:** paste the player's Confluence page link as you go — this is
  the hook for the planned automatic photo/bio sync from the historical space later.
- Saves appear on the public site in about a minute (GitHub Pages republishing).
- Player numbers are enforced unique — the form refuses a duplicate number rather than
  corrupt the Register.

**If something ever goes wrong:** every save is a commit, so any accidental edit or
delete can be found and reversed from the repo's history on github.com.

## Notes on the data

- Scraped from the official list on rabbitohs.com.au.
- `fg_debut` = the asterisk on the official list (first grade premiership debut made
  with South Sydney).
- `ssj` = South Sydney Junior (522 of the 1,222).

## Phase 2 ideas (not built yet)

- **Confluence sync** — a scheduled GitHub Action that walks the historians' First Grade
  Player List space and pulls photos/bios into `data/players.json` using each player's
  `confluence_url`. Confluence becomes the master for biographies; the dashboard stays
  the tool for the register itself.
- Career stat fields (games, tries, points, seasons) once the historians' research is in.

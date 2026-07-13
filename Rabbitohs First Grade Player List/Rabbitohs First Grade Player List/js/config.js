// ---------------------------------------------------------------
// GitHub connection settings for the admin dashboard.
//
// The player list lives in THIS repo (data/players.json). The
// dashboard saves changes by committing to the repo through the
// GitHub API, and GitHub Pages republishes the site (~1 minute).
//
// Fill these in once the repo exists on GitHub:
//   OWNER  - the GitHub username or organisation, e.g. "thecastpatrol"
//   REPO   - the repository name, e.g. "rabbitohs-player-list"
//   BRANCH - almost always "main"
//
// Each historian logs in to the dashboard with their own GitHub
// fine-grained personal access token (see README.md — takes 2 min
// to create, only works on this one repo).
// ---------------------------------------------------------------
window.RABBITOHS_CONFIG = {
  OWNER: "",
  REPO: "",
  BRANCH: "main",
  DATA_PATH: "data/players.json",
  PHOTOS_DIR: "photos"
};

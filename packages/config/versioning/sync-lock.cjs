const { execFileSync } = require("node:child_process");
const path = require("node:path");

exports.prepare = () => {
  const cwd = path.resolve(__dirname, "../../..");
  execFileSync("bun", ["install", "--lockfile-only", "--ignore-scripts"], {
    cwd,
    stdio: "inherit",
  });
  execFileSync("git", ["add", "--", "bun.lock"], { cwd, stdio: "inherit" });
};

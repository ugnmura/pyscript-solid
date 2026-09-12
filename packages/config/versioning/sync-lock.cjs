const { execFileSync } = require("node:child_process");
const path = require("node:path");

exports.prepare = () => {
  execFileSync("bun", ["install", "--lockfile-only", "--ignore-scripts"], {
    cwd: path.resolve(__dirname, "../../.."),
    stdio: "inherit",
  });
};

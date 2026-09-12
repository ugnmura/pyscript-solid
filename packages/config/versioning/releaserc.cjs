const config = require("./releaserc.json");

module.exports = {
  ...config,
  plugins: config.plugins.map((plugin) =>
    plugin === "../config/versioning/sync-lock.cjs"
      ? require.resolve("./sync-lock.cjs")
      : plugin,
  ),
};

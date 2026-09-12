import { defineConfig } from "vitepress";

export default defineConfig({
  title: "PyScript Solid",
  description: "Run Python in Solid. Setup, examples, and API reference.",
  base: "/pyscript-solid/",
  srcExclude: ["CHANGELOG.md"],
  themeConfig: {
    nav: [{ text: "v2.0", link: "/migration" }],
    sidebar: [
      { text: "Get started", link: "/" },
      { text: "API reference", link: "/api" },
      { text: "Examples", link: "/guide" },
      { text: "Migration", link: "/migration" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/ugnmura/pyscript-solid" },
    ],
    search: { provider: "local" },
    outline: [2, 3],
    footer: { message: "Released under the MIT License." },
  },
});

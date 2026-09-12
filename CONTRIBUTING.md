# Contributing on PyScript Solid

## Code of Conduct

The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)

## Pull Requests

When working on this project, make sure to create a separate branch and make a pull request.

1. Fork the repo and create a branch
2. If you added code test it
3. Be sure to describe the pull request

## Development

Use Bun 1.4.2 and Node.js 24.10 or newer. Run `bun install --frozen-lockfile` from the root. Before submitting changes, run:

```sh
bunx playwright install chromium
bun run check
```

Run `bun run test` rather than `bun test`; component tests need Vitest and the Solid Vite plugin. Browser tests use the real CDN-hosted Python runtime. Commit `bun.lock` with dependency changes. Use `bun run format` to format changes.

This update removes alpha-only PyScript APIs. Publish it with a Conventional Commit breaking-change marker (`feat!:` or a `BREAKING CHANGE:` footer) so semantic-release creates a major version.

Docs: `bun run docs:dev` starts VitePress. `bun run docs:test` builds the site and checks navigation and search. GitHub Pages deploys from `main` and, until the next release lands, `fix/modernize-pyscript`.

## Conventions for commiting

Please refer to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). The use of the [Conventional Commits extension for VSCode](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) when commiting is recommended.

## License

By contributing to PyScript Solid, you agree that your contributions will be licensed under the [`LICENSE`](../LICENSE).

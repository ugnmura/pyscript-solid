# Migration

Version 2.0 replaces the alpha wrapper with the current PyScript API.

| Previous API                                 | Current replacement                                                       |
| -------------------------------------------- | ------------------------------------------------------------------------- |
| `PyScript` rendering `<py-script>`           | Renders `<script type="py">` with raw Python text                         |
| `output`                                     | `target` with an element ID                                               |
| `outputMode`, `stdOut`, `stdErr`, `execId`   | Removed; use current PyScript display, terminal, and event APIs           |
| `PyRepl`                                     | `PyEditor`; `PyRepl` remains a deprecated alias                           |
| `PyEnv` with YAML packages                   | `config` with a `packages` array or `PyConfig` with JSON/TOML             |
| `PyBox`, `PyButton`, `PyInputBox`, `PyTitle` | Native Solid/HTML elements; bind Python events with PyScript's `when` API |
| `PyRegisterWidget`                           | Native components and the current PyScript DOM API                        |
| UMD bundle                                   | ESM and CommonJS browser/server exports with TypeScript declarations      |

The alpha-only widget exports were removed because current PyScript does not implement them. See the [current PyScript documentation](https://docs.pyscript.net/2026.7.3/) for Python-side migration.

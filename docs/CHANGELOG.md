# [2.0.0](https://github.com/ugnmura/pyscript-solid/compare/v1.4.0...v2.0.0) (2026-09-12)


* feat!: modernize PyScript integration and Bun workspace ([d3c599b](https://github.com/ugnmura/pyscript-solid/commit/d3c599b7ef87c094c5a6151c32171d153a58ce39))


### Bug Fixes

* forward credentials to package release tasks ([40f35b1](https://github.com/ugnmura/pyscript-solid/commit/40f35b1407728a4703996f6b83320f6e6b04d51b))
* give release decorators an absolute hook path ([631594e](https://github.com/ugnmura/pyscript-solid/commit/631594e6d8ebafb2b065ca2291bd5504444f5eba))
* keep Bun workspaces consistent during releases ([f32ee28](https://github.com/ugnmura/pyscript-solid/commit/f32ee284f7fd96d4f3a4647ec7d837701e772ae4))
* resolve release hook from each workspace ([39c4021](https://github.com/ugnmura/pyscript-solid/commit/39c4021a5115ba14dda78fb3e3ed6c8f3de4caa4))


### BREAKING CHANGES

* remove obsolete alpha widgets and script options.
Use current PyScript configuration, target, and editor APIs. Replace UMD
with ESM and CommonJS browser/server entry points.

# [1.3.0](https://github.com/SushiWaUmai/pyscript-solid/compare/v1.2.0...v1.3.0) (2022-06-01)


### Features

* :sparkles: add pyscript provider ([0f8b811](https://github.com/SushiWaUmai/pyscript-solid/commit/0f8b811984171f5ec16ab743d3954efbd978853f))

# [1.2.0](https://github.com/SushiWaUmai/pyscript-solid/compare/v1.1.0...v1.2.0) (2022-06-01)


### Bug Fixes

* :ambulance: build before releasing ([bec7863](https://github.com/SushiWaUmai/pyscript-solid/commit/bec78639771f6d28ec742b9a3fce1a5a5f554d2d))
* :art: update eslint files ([0d90f93](https://github.com/SushiWaUmai/pyscript-solid/commit/0d90f939c262d669959677e2ac404b0d9a622eee))
* :bookmark: push 1.2 tag on core module ([ccc5faa](https://github.com/SushiWaUmai/pyscript-solid/commit/ccc5faa01e43fc10e9e7734094f9b1d16d9b2fb3))
* :bookmark: update core module version ([de111ed](https://github.com/SushiWaUmai/pyscript-solid/commit/de111ed33106c70d85d4bbbfc159a92620705b4b))
* :bug: update pnpm lock file ([5058908](https://github.com/SushiWaUmai/pyscript-solid/commit/50589081c59ccd35ab3d29c1d8059b2318597aee))
* :bug: update releaserc to right url ([558ff8e](https://github.com/SushiWaUmai/pyscript-solid/commit/558ff8ec2e65ece2e40ce4ecbde79992bd5933d2))
* :bug: update test snapshot ([d552c08](https://github.com/SushiWaUmai/pyscript-solid/commit/d552c083c77430d9b0ca369b703035bfc70a63c8))


### Features

* :sparkles: add filepath example and update core module for better performance ([9be1216](https://github.com/SushiWaUmai/pyscript-solid/commit/9be1216cf7e120beab08c16f28251e96a0fb9516))
* :sparkles: add linting using eslint ([779da36](https://github.com/SushiWaUmai/pyscript-solid/commit/779da36013fc4592386c9aaa450d0eab58f645cf))
* :sparkles: add semantic release for root ([d284974](https://github.com/SushiWaUmai/pyscript-solid/commit/d2849742b79ff4977c53f77f1477a0bdad85700e))
* :sparkles: convert project to monorepo: ([a5fb9d9](https://github.com/SushiWaUmai/pyscript-solid/commit/a5fb9d9d646cbf24fcfdbacb3f78d2ada77a19a9))

# [1.1.0](https://github.com/SushiWaUmai/pyscript-solid/compare/v1.0.2...v1.1.0) (2022-05-31)


### Bug Fixes

* :bug: make commmit-msg executable ([466c41c](https://github.com/SushiWaUmai/pyscript-solid/commit/466c41cb5e67b20612822c8df9091a9261a1cc63))
* :bug: release workflow to call test properly ([cc2db54](https://github.com/SushiWaUmai/pyscript-solid/commit/cc2db5461c2d60f985ca869f8948a9aa51aac269))
* :fire: remove reusable workflows ([15e47db](https://github.com/SushiWaUmai/pyscript-solid/commit/15e47dba179364fcbdddd876acc840d2b587114f))


### Features

* :sparkles: add testing workflow ([b659aad](https://github.com/SushiWaUmai/pyscript-solid/commit/b659aadf92892757de7b4fcc00fb535b1713442b))

## [1.0.2](https://github.com/SushiWaUmai/pyscript-solid/compare/v1.0.1...v1.0.2) (2022-05-30)


### Bug Fixes

* :bug: make children in PyScript optional ([30910be](https://github.com/SushiWaUmai/pyscript-solid/commit/30910be1355699ecf7236f8b9a3e9516e8f62d45))

## [1.0.1](https://github.com/SushiWaUmai/pyscript-solid/compare/v1.0.0...v1.0.1) (2022-05-30)


### Bug Fixes

* :bug: build files before releasing to npm ([baf1262](https://github.com/SushiWaUmai/pyscript-solid/commit/baf126278668da088bfcaf5c5ff4e100f344265a))

# 1.0.0 (2022-05-30)


### Features

* :sparkles: add automatic releasing using semantic release ([0b9f5b4](https://github.com/SushiWaUmai/pyscript-solid/commit/0b9f5b4135e00154a140b6bc8cc8ff9d59930bd1))
* :sparkles: add husky and commitlint ([358d1b4](https://github.com/SushiWaUmai/pyscript-solid/commit/358d1b4c50a37d43177b8ea9b43a3fbeb429727f))
* :sparkles: add vite js for better build system ([b2dbb8c](https://github.com/SushiWaUmai/pyscript-solid/commit/b2dbb8cbe3d39baae6ce9038a4de003f07e8c975))
* :sparkles: remove default exports ([16cc640](https://github.com/SushiWaUmai/pyscript-solid/commit/16cc6400226a07b4b7637aa897e49eebc03dbcd6))
* :tada: initial commit ([0460fc3](https://github.com/SushiWaUmai/pyscript-solid/commit/0460fc3d77398ec8c75079c01277457c9e69dab5))


### Performance Improvements

* :zap: remove redundent packages ([ec437a0](https://github.com/SushiWaUmai/pyscript-solid/commit/ec437a0c80cce1971da9cc9affd2304be5d88745))

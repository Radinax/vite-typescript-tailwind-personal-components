# react-app

This is a simple React app template powered by [vite](https://vitejs.dev).

## Stack

- [x] [Vite](https://vitejs.dev) as the bundler.
- [x] [Vitest](https://vitest.dev) as the test runner.
- [x] [React 18](https://reactjs.org) as the UI library.
- [x] [TypeScript](https://www.typescriptlang.org) as the language.
- [x] [PostCSS](https://postcss.org) as the CSS preprocessor.
- [x] [TailwindCSS](https://tailwindcss.com) as the CSS framework.
- [x] [ESLint](https://eslint.org) as the linter.
- [x] [Prettier](https://prettier.io) as the formatter.
- [x] [Husky](https://typicode.github.io/husky) as the git hooks manager.
- [x] [Git](https://git-scm.com) as the source control manager.
- [x] [GitHub Actions](https://github.com/features/actions) as the CI/CD manager.

## Usage

```sh
npm install

npm run dev
```

## Imports

This project follows the remix-imports style.

```ts
// You can do this
import { Button } from "~/components/Button";

// Instead of this
import { Button } from '../../components/Button';
```

## Pallete

Light Mode:

- <div style="display:flex;margin-bottom:8px"><span style="margin-right:24px">Primary</span><div style="border:1px solid #F6F4F2;background-color: #F6F4F2;height:30px;width:30px;border-radius:50%;"></div></div>
- <div style="display:flex;margin-top:8px"><span style="margin-right:8px">Secondary</span><div style="border:1px solid #425664;background-color: #425664;height:30px;width:30px;border-radius:50%;"></div></div>
- <div style="display:flex;margin-top:8px"><span style="margin-right:24px">Tertirary</span><div style="border:1px solid #C6AD8F;background-color: #C6AD8F;height:30px;width:30px;border-radius:50%;"></div></div>

Dark Mode:

- <div style="display:flex;margin-bottom:8px"><span style="margin-right:24px">Primary</span><div style="border:1px solid #212221;background-color: #212221;height:30px;width:30px;border-radius:50%;"></div></div>
- <div style="display:flex;margin-top:8px"><span style="margin-right:8px">Secondary</span><div style="border:1px solid #B4D0E7;background-color: #B4D0E7;height:30px;width:30px;border-radius:50%;"></div></div>
- <div style="display:flex;margin-top:8px"><span style="margin-right:24px">Tertirary</span><div style="border:1px solid #61082B;background-color: #61082B;height:30px;width:30px;border-radius:50%;"></div></div>

## Prettier

This project comes with [this prettier plugin](https://github.com/trivago/prettier-plugin-sort-imports) which sorts all your imports.
So if you're using vscode and you have some kind of a plugin that sorts the imports, you should disable it or uninstall the prettier plugin.

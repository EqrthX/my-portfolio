# React + Vite

## English / Thai translations

The site uses `react-i18next`. Edit text in `src/locales/en.json` and
`src/locales/th.json`, keeping the same keys in both files. Components call
`t('hero.helloIM')`, for example, instead of storing both languages in JSX.
Project metadata in `src/data/projects.js` references keys under `projects`.
Feature lists use `t(key, { returnObjects: true })`.

Use `{{year}}` or `{{count}}` for dynamic values and pass them to `t`:
`t('footer.nontprawitchSaetangEarthAllRightsReserved', { year: new Date().getFullYear() })`.

The TH/EN button switches languages through `i18n.changeLanguage`. The language
detector remembers the selection under the existing `portfolio-lang` storage
key, otherwise detects the browser language, with English as the fallback.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

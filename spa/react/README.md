# Minimal Headless React Demo

This demo is built on top of the React framework to show how Magnolia integrates with the framework using the [react-editor](https://www.npmjs.com/package/@magnolia/react-editor) library.

## Installation

### Requirements

- Java (JDK): version `17` or `21`.
- [Node.js](https://nodejs.org/en): versions `18.x` or `20.x`.

### Installation steps

This project can be cloned using [Magnolia CLI v5](https://mgnl.io/cli).

1. Open a terminal.
2. Create a new folder, for example `mgnl`, and switch to it.
3. Run `npx @magnolia/cli jumpstart`.
4. Choose `3) headless`.
5. Choose `2) react-demo`.
6. Choose `1) dx-core` (or `2) ce`).
7. Execute `npm run mgnl -- start` to start Magnolia.
8. Open another terminal window in the same place (in `mgnl`).
9. Enter `cd ./spa`.
10. Run `npm i`.
11. Run `npm run dev` to start the dev server.
12. Open the browser at the URL `http://localhost:8080/magnoliaAuthor`.
13. Edit the `Home` page on Magnolia.

**Note:** In step 6, [personalization](https://docs.magnolia-cms.com/product-docs/6.3/developing/headless/spa-development/personalization-of-headless-spa-projects/) is not available for the option `2) ce`.

## Structure

| Name                    | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| `public`                | Contains static resources such as logos, icons, and so on. |
| `.env`                  | Configures the environment variables.                      |
| `index.html`            | The entry file that contains a placeholder for the app.    |
| `eslint.config.js`      | _Eslint_ config file for checking and fixing the code.     |
| `lint-staged.config.js` | _Lint-staged_ config file for committing the code.         |
| `postcss.config.js`     | _Postcss_ config file for CSS post processing.             |
| `prettier.config.js`    | _Prettier_ config file for code formatting                 |
| `tailwind.config.js`    | _Tailwind_ css config file for style definition.           |
| `vite.config.js`        | _Vite_ config file for code building.                      |

In the `src` folder:

| Name                 | Description                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app`                | Contains components, services, templates, and utility functions.                                                                                                                                                        |
| `environments`       | Contains environment files. The app should have access to the environment variables only here, for example to the `environment.js` file where it accesses the environment variables and then exports the values needed. |
| `App.jsx`            | The root component of the application. Uses `EditablePage` to render the Magnolia content.                                                                                                                              |
| `AppRouter.jsx`      | Defines the app router.                                                                                                                                                                                                 |
| `magnolia.config.js` | Maps the [Magnolia components to React components](https://docs.magnolia-cms.com/product-docs/6.3/developing/headless/spa-development/mapping-between-magnolia-and-spa-components/).                                    |
| `main.jsx`           | The main entry point.                                                                                                                                                                                                   |
| `styles.css`         | Holds the global CSS styles for the project.                                                                                                                                                                            |

In the `src/app` folder:

| Name         | Description                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components` | Contains reusable React components.                                                                                                                     |
| `services`   | Contains services, for example `magnolia-services.js`, which handles the REST API calls for the Magnolia content, template annotations, and navigation. |
| `templates`  | Contains React components that correspond to the Magnolia light module components.                                                                      |

In the `src/app/templates` folder:

| Name         | Description                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `components` | Contains React components (templates) to render page elements, e.g. text, text image, and so on. |
| `pages`      | Contains React components (templates) to render application pages.                               |
| `fragments`  | Includes React components used in component or page templates.                                   |

## Technical details

### The `react-editor` library

Normally, SPAs only use `EditablePage` and `EditableArea` components directly.

In this SPA:

| Component           | Used in                 | Function                                               |
| ------------------- | ----------------------- | ------------------------------------------------------ |
| `EditablePage`      | `App.js`                | Renders pages that contain areas and components.       |
| `EditableArea`      | `List.jsx`, `Basic.jsx` | Renders areas that contain other areas and components. |
| `EditableComponent` | `Basic.jsx`             | Renders components.                                    |

`EditablePage` input:

- `content`: A JSON object that contains data to render the page content.
- `templateAnnotations`: A JSON object that contains information to render the green bars.
- `magnoliaContext`: Holds properties that support page rendering, such `nodePath`, `searchParams`, and others.
- `config`: A JSON object that contains the map between the SPA components and Magnolia components; the `fallbackComponent`.

  **Note:** If child elements are passed, they are rendered instead of the content object (and `templateAnnotations`).

`EditableArea` input:

- `content`: A JSON object that contains data to render the area content.
- `className`: CSS classes used in the outermost wrapper tag.
- `elementType`: An HTML tag name string, such as `div` or `span`, used to create the outermost wrapper tag.
- `customView`: A React component used to render the area.

  **Note:** The area can render using one of its child elements, `customView`, or the default method. If both child elements and `customView` are provided, `customView` takes priority and will be rendered. If neither is provided, the default rendering method is used.

`EditableComponent` input:

- `content`: A JSON object that contains data to render the component content.
- `index`: The index of the component.

### Other tools and libraries

The following tools and libraries have been used for this project.

#### The framework

- The [React](https://react.dev/) library, for developing. React is a library for web and native user interfaces. React version `18.x` is used.
- [JSX](https://react.dev/learn/writing-markup-with-jsx), for templating. JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
- The [React Router DOM](https://www.npmjs.com/package/react-router-dom) library, for routing. The `react-router-dom` package contains bindings for using the React Router in web applications.

#### The stylesheet

- For styling, [Tailwind CSS](https://tailwindcss.com/) is used. It's a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90, which can be composed to build any design, directly in your markup.
- [PostCSS](https://postcss.org/) is used to install Tailwind CSS as a plugin on Vite.

#### Coding standard

- [Eslint](https://eslint.org/), to avoid bugs. It's a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and to avoid bugs.
- [Prettier](https://prettier.io/), to format the code. Prettier is an opinionated code formatter that supports multiple languages.

#### Other libraries

- [Lint-staged](https://www.npmjs.com/package/lint-staged), to run linters against the staged git files.
- [Husky](https://typicode.github.io/husky/), a git hooks library.

#### The build tool

The project is created using [Vite](https://vite.dev/guide/), a build tool that aims to provide a faster and leaner development experience for modern web projects.

## Using Language Tags with Country Codes

To use language tags with country codes (e.g. `en-US`), follow these steps:

1. Configure i18n for the target site.
   First, add the desired languages to the i18n configuration of the target site.  
   For example, in the site configuration file `home.yaml` for the `/home` path, you should include the configuration for `en-US`:

      ```yaml
      i18n:
        enabled: true
        class: info.magnolia.cms.i18n.IetfI18nContentSupport
        fallbackLocale: en
        locales:
          en:
            languageTag: en
            enabled: true
          en-US:
            languageTag: en-US
            enabled: true
      ```

2. Add the languages to the i18n configuration of the fallback site. (For DX Core only, since the Community Edition supports just a single site.)  
   Then, add the languages to the i18n configuration of the fallback site. This ensures that the REST endpoints correctly handle content retrieval based on the language settings.  
   For example, in `fallback.yaml`, you would configure it like this:

    ```yaml
    i18n:
      enabled: true
      class: info.magnolia.cms.i18n.IetfI18nContentSupport
      fallbackLocale: en
      locales:
        en:
          languageTag: en
          enabled: true
        en-US:
          languageTag: en-US
          enabled: true
    ```

3. Update the language config of the SPA.  
   Finally, specify the languages for the SPA. In the `.env` file, set the `MGNL_LANGUAGES` variable to include all desired language tags (e.g. `MGNL_LANGUAGES="en en-US"`). The default language should be the first item in the list (in this example, `en`).

# Minimal Headless Angular Demo

This demo is built on top of the Angular framework to show how Magnolia integrates with the framework using the [angular-editor](https://www.npmjs.com/package/@magnolia/angular-editor) library.

## Installation

### Requirements

- Java (JDK): version `17` or `21`. See [Magnolia certified-stack](https://docs.magnolia-cms.com/product-docs/6.3/administration/certified-stack/#_java).
- [Node.js](https://nodejs.org/en): version ^18.19.1 || ^20.11.1 || ^22.0.0. See [Angular version compatibility](https://angular.dev/reference/versions).

### Installation steps

This project can be cloned using [Magnolia CLI v5](https://mgnl.io/cli).

1. Open a terminal.
2. Create a new folder, for example `mgnl`, and switch to it.
3. Run `npx @magnolia/cli jumpstart`.
4. Choose `3) headless`.
5. Choose `1) angular-demo`.
6. Choose `1) dx-core` (or `2) ce`).
7. Execute `npm run mgnl -- start` to start Magnolia.
8. Open another terminal window in the same place (in `mgnl`).
9. Enter `cd ./spa`.
10. Run `npm i`.
11. Run `npm start` to start the dev server.
12. Open the browser at the URL `http://localhost:8080/magnoliaAuthor`.
13. Edit the `Home` page on Magnolia.

**Note:** In step 6, [personalization](https://docs.magnolia-cms.com/product-docs/6.3/developing/headless/spa-development/personalization-of-headless-spa-projects/) is not available for the option `2) ce`.

## File Structure

The project follows the standard [Angular file structure](https://angular.dev/reference/configs/file-structure). Additionally, there are extra folders and files:

| Name                    | Description                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `.env`                  | Configures the environment variables.                                                                              |
| `eslint.config.js`      | Defines the rules and settings that govern how ESLint analyzes and enforces code quality and style in the project. |
| `lint-staged.config.js` | Used by the lint-staged tool, which helps run linters (ESLint, Prettier) only on staged files in Git.              |
| `prettier.config.js`    | For customizing Prettier settings to meet the specific formatting needs.                                           |
| `tailwind.config.js`    | Used by Tailwind CSS, which provides a set of predefined utility classes for styling HTML elements.                |

In the `src` folder:

| Name                 | Description                                                                                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `environments`       | Contains the environment files, from which the app should access its environment variables.                                                                                                                                              |
| `magnolia.config.js` | The mapping between Magnolia and Angular components. See [mapping-between-magnolia-and-spa-components](https://docs.magnolia-cms.com/product-docs/6.3/developing/headless/spa-development/mapping-between-magnolia-and-spa-components/). |
| `styles.css`         | Holds the global CSS styles for the project.                                                                                                                                                                                             |

In the `src/app` folder:

| Name             | Description                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| `components`     | Includes reusable Angular components that are used in multiple places within the application.              |
| `pipes`          | Stores custom pipes.                                                                                       |
| `services`       | Contains `magnolia.service.ts` that helps handle API calls to get page content, template annotations, etc. |
| `templates`      | Holds Angular components for mapping to Magnolia. See the `magnolia.config.ts` file.                       |
| `app.routes.ts`. | Points all routes to the `root.component`.                                                                 |
| `root.component` | The main entry point that uses `EditablePage` to render Magnolia content.                                  |

In the `src/app/templates` folder:

| Name         | Description                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------- |
| `components` | Contains Angular components (templates) to render page elements, e.g. text, text image, ect. |
| `pages`      | Contains Angular components (templates) to render application pages.                         |
| `fragments`  | Includes Angular components used in component or page templates.                             |

## Technical details

### The `angular-editor` library

In the project, the `EditablePage`, `EditableArea`, and `EditableComponent` components from `angular-editor` are used.

| Component           | Used in                             | Function                                               |
| ------------------- | ----------------------------------- | ------------------------------------------------------ |
| `EditablePage`      | `root.component`                    | Renders pages that contain areas and components.       |
| `EditableArea`      | `list.component`, `basic.component` | Renders areas that contain other areas and components. |
| `EditableComponent` | `footer-renderer.component`         | Renders components.                                    |

`EditablePage` input:

- `content`: The page content retrieved from API calls, which includes all the necessary information required to render the page.
- `magnoliaContext`: Holds properties that support page rendering, such `nodePath`, `searchParams`, and others.
- `templateAnnotations`: Contains information to render the green bars.
- `config`: The mapping between Angular components and Magnolia, and the configuration for the `fallbackComponent`.

`EditableArea` input:

- `content`: The area content retrieved from API calls, which includes all the necessary information required to render the area.
- `customView`: A custom template used to render the area, overriding the default rendering behavior.

`EditableComponent` input:

- `content`: The component content retrieved from API calls, which includes all the necessary information required to render the component.

### Other tools and libraries

The following tools and libraries are used for this project.

#### The framework

- The project is built using the [Angular](https://angular.dev) framework, specifically version `18.x`.

#### The stylesheet

- For styling, [Tailwind CSS](https://tailwindcss.com/) is used. It is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90, which can be composed to build any design, directly in your markup.

#### Coding standard

- [Eslint](https://eslint.org/), to enhance the quality of the codebase. It's a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and to avoid bugs.
- [Prettier](https://prettier.io/), to format the code. Prettier is an opinionated code formatter that supports multiple languages.

#### Other libraries

- [Lint-staged](https://www.npmjs.com/package/lint-staged), to run linters against the staged git files.
- [Husky](https://typicode.github.io/husky/), a git hooks library.

#### The build tool

The application uses @ngx-env/builder, which leverages dotenv to load environment variables from .env files. For more details, refer to the [@ngx-env/builder](https://www.npmjs.com/package/@ngx-env/builder) documentation.

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

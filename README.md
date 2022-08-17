# TVShow - Overview

TVShow App is a Vue 3 application that allows you to browse TV Shows via tvmaze API. It is two days challenge part of an interview process for a frontend job position.

For this project I decided to use Vue.js v3 in combination with TypeScript, Pinia and Vue Router.
Basic project setup has configured via Vue 3 in Vite. 

[DEMO URL - ](https://mkginfo.github.io/tv-shows/) https://mkginfo.github.io/tv-shows/

[![Tvmaze](http://static.tvmaze.com/images/api/tvm_api.png)](http://www.tvmaze.com/api "Tvmaze")

This application shows popular Tv Shows from the Tvmaze API. Details fo a Tv shows like episodes, cast, crew.
Also, categorize in genres and functionality to search. And it is mobile responsive

This template should help get you started developing with Vue 3 in Vite.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

**Why Vue.js?**
Vue is lightweight, easy to learn, and pleasant to write in. Because of its familiar templating syntax and use of components,
integrating or migrating existing projects to Vue is faster and smoother.
For that reason, Vue. js is great for startups and It can be easily integrated into big projects for front-end development without any issues.

**Why TypeScript?**  (Improve Readability, Type Safety, Define your own types, More IDE Support)
- Precise defining through typing.
- Types make code management easier.
- Increased team performance.
- TypeScript is popular and trusted by the biggest players in the industry.

**Why Vuex?**
Vuex makes it easier to re-use the previous state of the retrieved data and therefor preventing unnecessary calls to the API.
It also makes it very easy to have your entire application know what is happening in a deeper underlying component, and have it react to certain changes.

**Why Vue Router?**
Vue Router lets you separate the logic and view for different pages into their own (page-)components,
which makes it very easy for a developer to find the right line of code to change.

## Project requirements (build with)
- Node v16 (NPM v8.5)
- Yarn v1.22

### Tech stack and requirements
- Vue 3 for the UI
- Axios for http requests
- Pinia for state management

#### Should I use state management for this small project?
The decision of adding an extra layer of complexity and dependencies was taken for two reasons:
1. To have all the info presented in the home page in memory because the process of getting all the shows and grouping it by genres takes time.
2. To separate all the logic from the UI components.

#### Project strucure
The project follows the recommended structure Vue proposes.

- `/components` -> all UI components, render content based on it owns props (no access to store, router, etc).
- `/views` -> all container components used in the router, they interact with the store and router and pass props to the presentational components.
- `/router` -> define routes (lazy load all but homepage).
- `/models` -> define custom datatype based on tvmaze service response and component, store requirements .
- `/services` -> axios instance of tvmaze API and related methods.
- `/store` -> implement all the logic related to calling the API and processing the shows.
- `/utils` -> utility functions as sort shows by average rating, group by genre, etc.

#### Mobile first approach
All the styling was made with the idea that mobile is the main device.
I have used bootstrap grid system to adapt the elements to a wider and smaller screen device.

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn run dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn run build
```

### Deployment for Production - 
- https://mkginfo.github.io/tv-shows/

```sh
yarn run deploy
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn run build
yarn run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn run lint
```

### Code prettier

```sh
prettier --check --write "**/*.{js,ts,scss,css,json,html}"
```

### TO DO
- [x] ~~Add unit tests~~
- [ ] Improve code coverage with more unit tests
- [x] ~~Improve loading states~~
- [x] ~~Find a way to optimize image loads~~
- [ ] Filter shows by genre and/or rating
- [x] ~~List Seasons and Episodes~~
- [ ] Show info about the cast members

###  Folder Structure

```
tv-shows
├──.vscode
│   └──extensions.json
├──cypress
│   └──e2e
│   │   ├──example.cy.ts
│   │   └── tsconfig.json
│   └──fixtures
│   │   └── example.json
│   └──support
│   │   ├── commands.ts
│   │   └── e2e.ts
├──dist
│   └──assets
│   │   ├── default-image.77336935.png
│   │   ├── index.5b5a11b9.css
│   │   ├── index.149ab6a0.js
│   │   ├── ShowDetailsView.1b16887f.js
│   │   └── ShowDetailsView.3895bfd3.css
│   └──favicon.ico
│   └──index.html
├──node_modules
├──public
│   └──favicon.ico
├──src // All components,views, services, store, router
│   ├── assets
│   │   ├── images
│   │   │   ├── default-image.png
│   │   │   └── default_person.png
│   │   └── base.css
│   ├── components
│   │   ├── __tests__ // test cases written same as src folder structure
│   │   │   ├── CastCard.spec.ts
│   │   │   ├── GoBackButton.spec.ts
│   │   │   └── SearchBar.spec.ts
│   │   ├── form
│   │   │   ├── Image.vue
│   │   │   ├── LazyImage.vue
│   │   │   ├── GoBackButton.vue
│   │   │   ├── Search.vue
│   │   │   └── SearchBar.vue
│   │   ├── icons
│   │   │   ├── IconCommunity.vue
│   │   │   ├── IconDocumentation.vue
│   │   │   ├── IconEcosystem.vue
│   │   │   ├── IconSupport.vue
│   │   │   └── IconTooling.vue
│   │   ├── ui
│   │   │   ├── CastCrew.vue
│   │   │   ├── Episodes.vue
│   │   │   ├── Header.vue
│   │   │   ├── Seasons.vue
│   │   │   └── TVShowInfo.vue
│   │   │   ├── TVShowGenre.vue
│   │   │   └── TVShowPopular.vue
│   │   │   ├── CastCard.vue
│   │   │   ├── HorizontalSection.vue
│   │   │   ├── LoadingSpinner.vue
│   │   │   ├── OverviewSection.vue
│   │   │   └── ShowCard.vue
│   ├── constants
│   │   └──index.ts
│   ├── models
│   │   └──tvmaze.model.ts
│   ├── router
│   │   └── index.ts
│   ├── services
│   │   └── ShowsService.ts
│   ├── stores
│   │   └── index.ts
│   ├── utils
│   │   └── index.ts
│   ├── views
│   │   ├── AboutView.vue
│   │   ├── ErrorView.vue
│   │   ├── HomeView.vue
│   │   ├── NotFound.vue
│   │   ├── SearchDetails.vue
│   │   ├── ShowDetails.vue
│   │   ├── ShowDetailsView.vue
│   │   └── ShowEpisodes.vue
│   ├── App.vue //Root component
│   ├── main.ts
│   └── shims-vue.d.ts
├── .eslintrc.cjs
├── .gitignore
├── cypress.config.ts
├── env.d.ts
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.config.json
├── tsconfig.json
├── tsconfig.vitest.json
├── vite.config.ts
├── yarn.lock
```

---
title: "How to contribute"
description: "Learn how you can help extend and improve our documentation"
date: 2021-04-01
---

# TCDS Documentation

This project enables teams to add, update and maintain documentation for [Toyota Data Solutions](https://toyotadatasolutions.com) APIs. It’s based on [Gridsome](https://gridsome.org), a static site generator powered by [Vue.js](https://vuejs.org), that turns Markdown into rich and readable documentation.

Due to the nature of this project, its underlying setup is opinionated and as such requires a little bit of an introduction to its concepts.

## Content structure

All content is stored inside a `content` directory, and is divided into multiple sections, which compile into hierarchical page structure.

```
/content
  /general
    page.md
    page2.md
  /api
    /telemetry
      _index.md
      /docs
        getting-started.md
```

## API documentation

To add API documentation add a new directory under `/content/api`, making sure to use URI-safe directory name, for example using hyphens instead of spaces.

### Overview page

Inside your API directory, add a `_index.md` file with the following basic contents:

```yaml
---
id: telemetry
title: "Telemetry"
description: "Track the status of your vehicles in near-real time."
status: "live"
reference: tm-telemetry-1.0.0.yaml
date: 2020-10-01
---
```

| Parameter     | Description                                                                                |
| ------------- | ------------------------------------------------------------------------------------------ |
| `id`          | Unique id for your API; links all documents under this API together                        |
| `title`       | Short name for the API, in line with marketing offering on https://toyotadatasolutions.com |
| `description` | Short description of what the API does or helps to achieve                                 |
| `status`      | API status; can be `live`, `beta` or `proposed`                                            |
| `reference`   | A reference to API spec file added to `/static/references`                                 |
| `date`        | Last modification date in `YYYY-MM-DD` format                                              |

This will be enough to create a unique API page for your API. You don’t have to stop at the Front Matter metadata; you can also add additional content for this page just like for any Front Matter powered document.

### API reference page

OpenAPI reference for your API, in either YAML or JSON format, needs to be placed under `/static/reference` directory and referenced from the respective `_index.md` file for your API, so it could be linked and displayed correctly.

Gridsome will create a special reference page under `/api/{your-api}/reference`, where the OpenAPI reference will be available through SwaggerUI.

### Additional API documentation

To add more documentation for your API you should place it in a `docs` subdirectory within your API directory and add Markdown documents there, i.e: `/content/api/{your-api}/docs/getting-started.md`.

<div class="notice">
Make sure to include <code>id: id-of-your-api</code> in each of your document’s Front Matter, otherwise Gridsome won't be able to link them together.
</div>

## General documentation

General documentation can be added by placing typical Markdown documents into `/content/general` directory with Front Matter exposing `title`, `description` and `date` parameters. The document's title will be automatically converted into a URI slug.

## Previewing changes

Before publishing, you may want to double-check if everything works/displays correctly. This can be done by running Gridsome locally.

1. `yarn` - install required dependencies
2. `yarn develop` - run a local development server accessible under `http://localhost:8080`, unless stated otherwise.

Gridsome development server has hot-reloading capability, which means you can edit your content and after saving your files, all open browser sessions will be refreshed with new changes, all in real-time.

## Publishing documentation

In order to publish your documentation, branch off to a `docs/{api-name}` branch and commit documentation there. Afterwards push the branch upstream and create a Pull Request for someone to review it.

After your PR is merged, new changes will be automatically deployed to production.

---

## Developing the site

[TBD]

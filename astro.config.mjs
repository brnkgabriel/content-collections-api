import { defineConfig } from 'astro/config';

import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main"
        },
        collections: [
          {
            label: "Blog",
            name: "blog",
            slug: "{{ title }}",
            folder: "src/content/blog",
            create: true,
            delete: true,
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string"
              }, {
                label: "Description",
                name: "description",
                widget: "string",
              }, {
                label: "Date",
                name: "date",
                widget: "datetime"
              }, {
                label: "Draft",
                name: "draft",
                widget: "boolean"
              }, {
                label: "Author",
                name: "author",
                widget: "string"
              }
            ]
          }
        ]
      }
    })
  ]
});

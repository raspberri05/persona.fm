// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "persona.fm",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/raspberri05/persona.fm",
      },
      sidebar: [
        {
          label: "Usage",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Usage", slug: "usage/usage" },
            { label: "Known Bugs", slug: "usage/bugs" },

          ],
        },
        {
          label: "Project Structure",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Directory Structure", slug: "structure/directory" },
            { label: "Code Flow", slug: "structure/flow" },

          ],
        },
        {
          label: "Local Setup",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Installation", slug: "setup/installation" },
            { label: "Web Dependencies", slug: "setup/web-dependencies" },
            { label: "Running the Project", slug: "setup/running-project" },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

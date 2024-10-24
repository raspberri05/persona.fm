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
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/raspberri05/persona.fm",
      },
      sidebar: [
        {
          label: "Background",
          items: [
            { label: "About", slug: "background/about" },

          ],
        },
        {
          label: "Usage",
          items: [
            { label: "Usage", slug: "usage/usage" },
            { label: "Known Bugs", slug: "usage/bugs" },

          ],
        },
        {
          label: "Project Structure",
          items: [
            { label: "Directory Structure", slug: "structure/directory" },
            { label: "Tech Stack", slug: "structure/tech-stack" },

          ],
        },
        {
          label: "Local Setup",
          items: [
            { label: "Installation", slug: "setup/installation" },
            { label: "Web Dependencies", slug: "setup/web-dependencies" },
            { label: "Running the Project", slug: "setup/running-project" },
          ],
        },
        {
          label: "Editing Documentation",
          items: [
            { label: "Information", slug: "docs/information" },
          ],
        },
        {
          label: "What's Next?",
          items: [
            { label: "Roadmap", slug: "next/roadmap" },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

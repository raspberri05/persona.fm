// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "persona.fm docs",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/raspberri05/persona.fm",
      },
      sidebar: [
        {
          label: "Local Setup",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Installation", slug: "setup/installation" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

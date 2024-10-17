
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/persona.fm'              // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Persona.fm'                  // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'raspberri05',                // --> your github username (where your repo is hosted)
      repo: 'persona.fm',                 // --> your github repo name
    }
  },
  dev: {
    port: 3001
  }
});

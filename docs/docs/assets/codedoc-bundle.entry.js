import { getRenderer } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/raspberri/code/persona.fm/docs/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCPrevNext } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/home/raspberri/code/persona.fm/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  'CSEyOpi/E5LIu2lztEpN7Q==': ToCPrevNext,
  'Jx4rcDl/BeUdIg+4yc8yGg==': GithubSearch,
  'bWcbS8d9kinbBEwJTcLdwA==': ToCToggle,
  'fGjWs3vJtvYp46EiNnhHHw==': DarkModeSwitch,
  'X9YTecPPYZ9sMSmYDEwtQQ==': ConfigTransport,
  'ymr1vjOUXoMRzPBYgP9Vog==': TabSelector,
  'YjHSsSGxJzhuANtpjJJOUQ==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}

import { getRenderer } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/raj/githubprojects/kener-docs/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCToggle } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { GithubSearch } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { DarkModeSwitch } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { ToCPrevNext } from '/Users/raj/githubprojects/kener-docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';

const components = {
  '/Scrk/N2b/KpMUdvPufC6w==': ToCToggle,
  '9qq+LdxSJoBKD5Mh1Y5Tmw==': GithubSearch,
  'YabODUY0JBHAi6/vfnIY7g==': DarkModeSwitch,
  'SNVkOTltNsdNBwHAwc2oCg==': ConfigTransport,
  'vLiG2+dq5MiQfrsvt0kUCg==': TabSelector,
  'qF/mJ50W3lCkSnn446e0Ng==': CollapseControl,
  '4DQLAzRq6croJG6XYIdnkg==': ToCPrevNext
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

import { configuration } from "@codedoc/core";

import { theme } from "./theme";

export const config = /*#__PURE__*/ configuration({
    theme, // --> add the theme. modify `./theme.ts` for changing the theme.
    dest: {
        namespace: "/kener-docs", // --> your github pages namespace. remove if you are using a custom domain.
    },
    page: {
        title: {
            base: "Kener Docs", // --> the base title of your doc pages
        },
        favicon: "/images/logo96.png",
    },
    misc: {
        github: {
            user: "rajnandan1", // --> your github username (where your repo is hosted)
            repo: "kener", // --> your github repo name
        },
    },
});

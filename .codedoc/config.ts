import { configuration } from "@codedoc/core";
import { googleAnalytics } from "./plugins/ga-plugin";
import { customCSS } from "./plugins/css";

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
        fonts: {
            code: {
                url: "https://fonts.googleapis.com/css2?family=PT+Mono&display=swap",
                name: "PT Mono",
            },
            text: {
                url: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
                name: "IBM Plex Sans",
            },
        },
        scripts: [],
    },
    misc: {
        github: {
            user: "rajnandan1", // --> your github username (where your repo is hosted)
            repo: "kener", // --> your github repo name
        },
    },
    plugins: [
        // ...
        googleAnalytics(),
		customCSS(),
    ],
});

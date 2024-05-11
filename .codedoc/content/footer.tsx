import { ThemedComponentThis, themedStyle } from "@connectv/jss-theme";
import { CodedocConfig, CodedocTheme } from "@codedoc/core";
import {
    FooterStyle,
    DarkModeSwitch$,
    ToCToggle$,
} from "@codedoc/core/components";

const _FooterStyle = themedStyle((theme: CodedocTheme) => {
    const parent = FooterStyle.style(theme); // --> get the style for original footer
    return {
        footer: {
            extend: parent.footer, // --> simply extend them
            "@media screen and (min-width: 1200px)": {
                // --> and make the left corner of the footer disappear on desktops
                "& .left": { opacity: 0 },
            },
        },
    } as any;
});

export function Footer(
    this: ThemedComponentThis,
    config: CodedocConfig,
    renderer: any
) {
    const classes = this.theme.classes(_FooterStyle);

    return (
        <div class={classes.footer}>
            <div class="left">
                <ToCToggle$ />
            </div>{" "}
            {/* --> the toggle is included, but hidden on desktop via css */}
            <div class="main">
                <div class="inside">
                    <a
                        href={`https://github.com/${config.misc?.github?.user}/${config.misc?.github?.repo}/`}
                        target="_blank"
                    >
                        GitHub
                    </a>
                    <span style="margin:0 10px"> &middot; </span>
                    <a href={`https://kener.ing`} target="_blank">
                        Live Site
                    </a>
                    <span style="margin:0 10px"> &middot; </span>
                    <a
                        href={`https://github.com/sponsors/rajnandan1`}
                        target="_blank"
                    >
                        Support
                    </a>
                    <span style="margin:0 10px"> &middot; </span>
                    <span>🇮🇳</span>
                </div>
            </div>
            <div class="right">
                <DarkModeSwitch$ />
            </div>{" "}
            {/* --> also do not forget the dark mode switch. */}
        </div>
    );
}

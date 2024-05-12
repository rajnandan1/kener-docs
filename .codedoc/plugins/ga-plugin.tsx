import { StaticRenderer } from "@connectv/sdh";
import register from "jsdom-global";
import { ConfigOverride } from "@codedoc/core";

const renderer = new StaticRenderer(); // --> create a static renderer
register(); // --> register jdom global so that we can create DOM elements

export function googleAnalytics() {
    return function (): ConfigOverride {
        return {
            page: {
                scripts: [
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-Q3MLRXCBFT"
                    />,
                    <script>
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag() {
								dataLayer.push(arguments);
							}
							gtag("js", new Date());

							gtag("config", "G-Q3MLRXCBFT");
						`}
					</script>,
                ],
            },
        };
    };
}

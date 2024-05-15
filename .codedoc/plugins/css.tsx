import { StaticRenderer } from "@connectv/sdh";
import register from "jsdom-global";
import { ConfigOverride } from "@codedoc/core";

const renderer = new StaticRenderer(); // --> create a static renderer
register(); // --> register jdom global so that we can create DOM elements

export function customCSS() {
    return function (): ConfigOverride {
        return {
            page: {
                stylesheets: [
                    <style>
                        {`
							div:has(> button[onclick="smartCopy(this)"]) {
								position:relative;
								float:right;
								margin-top: -55px;
								margin-right: -6px;
							}
							button[onclick="smartCopy(this)"] {
								background: transparent !important;
								border: none;
								color: #555 !important;
								font-size: 14px !important;
								font-weight: bold !important;
							}
							button[onclick="smartCopy(this)"]:hover {
								color: #777 !important;
							}
							
						`}
                    </style>,
                ],
            },
        };
    };
}

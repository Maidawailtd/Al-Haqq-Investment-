"use strict";
exports.__esModule = true;
exports.SocialLinks = void 0;
var icons_1 = require("@/components/icons");
var icon_button_1 = require("@/components/ui/icon-button");
function SocialLinks() {
    return (React.createElement("div", { className: "flex flex-wrap gap-4 items-center" },
        React.createElement("a", { href: "https://facebook.com/alhagginvestment", target: "_blank", rel: "noopener noreferrer", "aria-label": "Follow us on Facebook" },
            React.createElement(icon_button_1.IconButton, { variant: "outline", size: "icon", className: "rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" },
                React.createElement(icons_1.FacebookIcon, { className: "h-5 w-5" }))),
        React.createElement("a", { href: "https://twitter.com/alhagginvestment", target: "_blank", rel: "noopener noreferrer", "aria-label": "Follow us on Twitter" },
            React.createElement(icon_button_1.IconButton, { variant: "outline", size: "icon", className: "rounded-full hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200" },
                React.createElement(icons_1.TwitterIcon, { className: "h-5 w-5" }))),
        React.createElement("a", { href: "https://linkedin.com/company/alhagginvestment", target: "_blank", rel: "noopener noreferrer", "aria-label": "Follow us on LinkedIn" },
            React.createElement(icon_button_1.IconButton, { variant: "outline", size: "icon", className: "rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200" },
                React.createElement(icons_1.LinkedInIcon, { className: "h-5 w-5" }))),
        React.createElement("a", { href: "https://instagram.com/alhagginvestment", target: "_blank", rel: "noopener noreferrer", "aria-label": "Follow us on Instagram" },
            React.createElement(icon_button_1.IconButton, { variant: "outline", size: "icon", className: "rounded-full hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200" },
                React.createElement(icons_1.InstagramIcon, { className: "h-5 w-5" }))),
        React.createElement("a", { href: "https://youtube.com/alhagginvestment", target: "_blank", rel: "noopener noreferrer", "aria-label": "Follow us on YouTube" },
            React.createElement(icon_button_1.IconButton, { variant: "outline", size: "icon", className: "rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-200" },
                React.createElement(icons_1.YoutubeIcon, { className: "h-5 w-5" })))));
}
exports.SocialLinks = SocialLinks;

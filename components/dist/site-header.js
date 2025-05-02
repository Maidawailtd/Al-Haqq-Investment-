"use client";
"use strict";
exports.__esModule = true;
exports.SiteHeader = void 0;
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var auth_context_1 = require("@/contexts/auth-context");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
function SiteHeader() {
    var _a = react_1.useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var pathname = navigation_1.usePathname();
    var _b = auth_context_1.useAuth(), user = _b.user, logout = _b.logout;
    // Close mobile menu when route changes
    react_1.useEffect(function () {
        setIsMenuOpen(false);
    }, [pathname]);
    return (React.createElement("header", { className: "sticky top-0 z-50 w-full border-b bg-white" },
        React.createElement("div", { className: "container flex h-16 items-center justify-between" },
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement(link_1["default"], { href: "/", className: "flex items-center space-x-2" },
                    React.createElement(lucide_react_1.TrendingUp, { className: "h-6 w-6 text-emerald-600" }),
                    React.createElement("span", { className: "font-bold text-xl" }, "Alhagg Investment"))),
            React.createElement("nav", { className: "hidden md:flex gap-6" },
                React.createElement(link_1["default"], { href: "/", className: "text-sm font-medium hover:text-emerald-600 transition-colors " + (pathname === "/" ? "text-emerald-600" : "") }, "Home"),
                React.createElement(link_1["default"], { href: "/about", className: "text-sm font-medium hover:text-emerald-600 transition-colors " + (pathname === "/about" ? "text-emerald-600" : "") }, "About"),
                React.createElement(link_1["default"], { href: "/services", className: "text-sm font-medium hover:text-emerald-600 transition-colors " + (pathname === "/services" ? "text-emerald-600" : "") }, "Services"),
                React.createElement(link_1["default"], { href: "/portfolio", className: "text-sm font-medium hover:text-emerald-600 transition-colors " + (pathname === "/portfolio" ? "text-emerald-600" : "") }, "Portfolio"),
                React.createElement(link_1["default"], { href: "/contact", className: "text-sm font-medium hover:text-emerald-600 transition-colors " + (pathname === "/contact" ? "text-emerald-600" : "") }, "Contact")),
            React.createElement("div", { className: "hidden md:flex items-center gap-4" }, user ? (React.createElement(dropdown_menu_1.DropdownMenu, null,
                React.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
                    React.createElement(button_1.Button, { variant: "outline", className: "h-9 gap-2" },
                        React.createElement(lucide_react_1.User, { className: "h-4 w-4" }),
                        React.createElement("span", null, user.name))),
                React.createElement(dropdown_menu_1.DropdownMenuContent, { align: "end" },
                    React.createElement(dropdown_menu_1.DropdownMenuItem, { asChild: true },
                        React.createElement(link_1["default"], { href: "/dashboard" }, "Dashboard")),
                    React.createElement(dropdown_menu_1.DropdownMenuItem, { asChild: true },
                        React.createElement(link_1["default"], { href: "/portfolio" }, "Portfolio")),
                    React.createElement(dropdown_menu_1.DropdownMenuSeparator, null),
                    React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return logout(); }, className: "text-red-600" },
                        React.createElement(lucide_react_1.LogOut, { className: "h-4 w-4 mr-2" }),
                        React.createElement("span", null, "Logout"))))) : (React.createElement(React.Fragment, null,
                React.createElement(link_1["default"], { href: "/login" },
                    React.createElement(button_1.Button, { variant: "outline", className: "h-9" }, "Log In")),
                React.createElement(link_1["default"], { href: "/register" },
                    React.createElement(button_1.Button, { className: "h-9 bg-emerald-600 hover:bg-emerald-700" }, "Register"))))),
            React.createElement("button", { className: "md:hidden", onClick: function () { return setIsMenuOpen(!isMenuOpen); }, "aria-label": "Toggle navigation", "aria-expanded": isMenuOpen ? "true" : "false", "aria-controls": "mobile-menu" }, isMenuOpen ? React.createElement(lucide_react_1.X, { className: "h-6 w-6" }) : React.createElement(lucide_react_1.Menu, { className: "h-6 w-6" }))),
        isMenuOpen && (React.createElement("div", { className: "md:hidden border-t", id: "mobile-menu" },
            React.createElement("div", { className: "container py-4 flex flex-col gap-4" },
                React.createElement(link_1["default"], { href: "/", className: "text-sm font-medium hover:text-emerald-600 transition-colors py-2 " + (pathname === "/" ? "text-emerald-600" : "") }, "Home"),
                React.createElement(link_1["default"], { href: "/about", className: "text-sm font-medium hover:text-emerald-600 transition-colors py-2 " + (pathname === "/about" ? "text-emerald-600" : "") }, "About"),
                React.createElement(link_1["default"], { href: "/services", className: "text-sm font-medium hover:text-emerald-600 transition-colors py-2 " + (pathname === "/services" ? "text-emerald-600" : "") }, "Services"),
                React.createElement(link_1["default"], { href: "/portfolio", className: "text-sm font-medium hover:text-emerald-600 transition-colors py-2 " + (pathname === "/portfolio" ? "text-emerald-600" : "") }, "Portfolio"),
                React.createElement(link_1["default"], { href: "/contact", className: "text-sm font-medium hover:text-emerald-600 transition-colors py-2 " + (pathname === "/contact" ? "text-emerald-600" : "") }, "Contact"),
                React.createElement("div", { className: "flex flex-col gap-2 pt-2" }, user ? (React.createElement(React.Fragment, null,
                    React.createElement(link_1["default"], { href: "/dashboard" },
                        React.createElement(button_1.Button, { variant: "outline", className: "w-full justify-start" },
                            React.createElement(lucide_react_1.User, { className: "h-4 w-4 mr-2" }),
                            "Dashboard")),
                    React.createElement(button_1.Button, { variant: "outline", className: "w-full justify-start text-red-600", onClick: function () { return logout(); } },
                        React.createElement(lucide_react_1.LogOut, { className: "h-4 w-4 mr-2" }),
                        "Logout"))) : (React.createElement(React.Fragment, null,
                    React.createElement(link_1["default"], { href: "/login" },
                        React.createElement(button_1.Button, { variant: "outline", className: "w-full" }, "Log In")),
                    React.createElement(link_1["default"], { href: "/register" },
                        React.createElement(button_1.Button, { className: "w-full bg-emerald-600 hover:bg-emerald-700" }, "Register"))))))))));
}
exports.SiteHeader = SiteHeader;

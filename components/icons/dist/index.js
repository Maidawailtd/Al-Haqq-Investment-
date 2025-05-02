"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.YoutubeIcon = exports.InstagramIcon = exports.LinkedInIcon = exports.TwitterIcon = exports.FacebookIcon = exports.SupportIcon = exports.LocationIcon = exports.PhoneIcon = exports.EmailIcon = exports.NotificationsIcon = exports.SecurityIcon = exports.SettingsIcon = exports.UserProfileIcon = exports.MarketTrendsIcon = exports.ChartCandlestickIcon = exports.ChartBarIcon = exports.ChartLineIcon = exports.InvestmentIcon = exports.PerformanceIcon = exports.AssetAllocationIcon = exports.PortfolioIcon = void 0;
var react_1 = require("react");
var IconBase = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 24 : _b, title = _a.title, description = _a.description, props = __rest(_a, ["children", "size", "title", "description"]);
    var uniqueId = react_1["default"].useId();
    var titleId = title ? "icon-title-" + uniqueId : undefined;
    var descId = description ? "icon-desc-" + uniqueId : undefined;
    var isHidden = !title;
    return (react_1["default"].createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": isHidden, "aria-labelledby": titleId ? titleId : undefined, "aria-describedby": descId ? descId : undefined, role: "img" }, props),
        title && react_1["default"].createElement("title", { id: titleId }, title),
        description && react_1["default"].createElement("desc", { id: descId }, description),
        children));
};
// Portfolio Icons
exports.PortfolioIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Portfolio Overview" }),
    react_1["default"].createElement("rect", { x: "2", y: "3", width: "20", height: "18", rx: "2" }),
    react_1["default"].createElement("line", { x1: "2", y1: "9", x2: "22", y2: "9" }),
    react_1["default"].createElement("path", { d: "M6 14h4" }),
    react_1["default"].createElement("path", { d: "M6 17h8" }),
    react_1["default"].createElement("path", { d: "M14 14h4" }))); };
exports.AssetAllocationIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Asset Allocation" }),
    react_1["default"].createElement("circle", { cx: "12", cy: "12", r: "10" }),
    react_1["default"].createElement("path", { d: "M12 2a10 10 0 0 1 0 20" }),
    react_1["default"].createElement("path", { d: "M12 2a10 10 0 0 0 0 20" }),
    react_1["default"].createElement("path", { d: "M12 2v20" }),
    react_1["default"].createElement("path", { d: "M2 12h20" }))); };
exports.PerformanceIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Performance" }),
    react_1["default"].createElement("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" }))); };
exports.InvestmentIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Investments" }),
    react_1["default"].createElement("path", { d: "M12 2v4" }),
    react_1["default"].createElement("path", { d: "M5 5l2.5 2.5" }),
    react_1["default"].createElement("path", { d: "M19 5l-2.5 2.5" }),
    react_1["default"].createElement("circle", { cx: "12", cy: "11", r: "5" }),
    react_1["default"].createElement("path", { d: "M12 16v6" }))); };
// Market Analysis Icons
exports.ChartLineIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Line Chart" }),
    react_1["default"].createElement("path", { d: "M3 3v18h18" }),
    react_1["default"].createElement("path", { d: "M3 12h4l3-6 4 12 3-6h4" }))); };
exports.ChartBarIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Bar Chart" }),
    react_1["default"].createElement("path", { d: "M3 3v18h18" }),
    react_1["default"].createElement("path", { d: "M7 16V8" }),
    react_1["default"].createElement("path", { d: "M11 16v-5" }),
    react_1["default"].createElement("path", { d: "M15 16v-8" }),
    react_1["default"].createElement("path", { d: "M19 16v-3" }))); };
exports.ChartCandlestickIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Candlestick Chart" }),
    react_1["default"].createElement("path", { d: "M3 3v18h18" }),
    react_1["default"].createElement("rect", { x: "6", y: "7", width: "2", height: "6" }),
    react_1["default"].createElement("line", { x1: "7", y1: "5", x2: "7", y2: "7" }),
    react_1["default"].createElement("line", { x1: "7", y1: "13", x2: "7", y2: "15" }),
    react_1["default"].createElement("rect", { x: "11", y: "10", width: "2", height: "4" }),
    react_1["default"].createElement("line", { x1: "12", y1: "8", x2: "12", y2: "10" }),
    react_1["default"].createElement("line", { x1: "12", y1: "14", x2: "12", y2: "16" }),
    react_1["default"].createElement("rect", { x: "16", y: "5", width: "2", height: "8" }),
    react_1["default"].createElement("line", { x1: "17", y1: "3", x2: "17", y2: "5" }),
    react_1["default"].createElement("line", { x1: "17", y1: "13", x2: "17", y2: "17" }))); };
exports.MarketTrendsIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Market Trends" }),
    react_1["default"].createElement("path", { d: "M2 12h2l4-8 4 16 4-8h6" }),
    react_1["default"].createElement("path", { d: "M18 8l4 4-4 4" }))); };
// User Profile Icons
exports.UserProfileIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "User Profile" }),
    react_1["default"].createElement("circle", { cx: "12", cy: "8", r: "5" }),
    react_1["default"].createElement("path", { d: "M20 21a8 8 0 1 0-16 0" }))); };
exports.SettingsIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Settings" }),
    react_1["default"].createElement("circle", { cx: "12", cy: "12", r: "3" }),
    react_1["default"].createElement("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }))); };
exports.SecurityIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Security" }),
    react_1["default"].createElement("path", { d: "M12 2s8 4 8 10v4c0 2-2 4-4 4H8c-2 0-4-2-4-4v-4c0-6 8-10 8-10z" }),
    react_1["default"].createElement("path", { d: "M9 16l2 2 4-4" }))); };
exports.NotificationsIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Notifications" }),
    react_1["default"].createElement("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }),
    react_1["default"].createElement("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" }))); };
// Contact Icons
exports.EmailIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Email" }),
    react_1["default"].createElement("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    react_1["default"].createElement("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }))); };
exports.PhoneIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Phone" }),
    react_1["default"].createElement("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }))); };
exports.LocationIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Location" }),
    react_1["default"].createElement("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
    react_1["default"].createElement("circle", { cx: "12", cy: "10", r: "3" }))); };
exports.SupportIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Support" }),
    react_1["default"].createElement("circle", { cx: "12", cy: "12", r: "10" }),
    react_1["default"].createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    react_1["default"].createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }))); };
// Social Media Icons
exports.FacebookIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Facebook" }),
    react_1["default"].createElement("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }))); };
exports.TwitterIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Twitter" }),
    react_1["default"].createElement("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }))); };
exports.LinkedInIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "LinkedIn" }),
    react_1["default"].createElement("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
    react_1["default"].createElement("rect", { x: "2", y: "9", width: "4", height: "12" }),
    react_1["default"].createElement("circle", { cx: "4", cy: "4", r: "2" }))); };
exports.InstagramIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "Instagram" }),
    react_1["default"].createElement("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
    react_1["default"].createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
    react_1["default"].createElement("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }))); };
exports.YoutubeIcon = function (props) { return (react_1["default"].createElement(IconBase, __assign({}, props, { title: "YouTube" }),
    react_1["default"].createElement("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }),
    react_1["default"].createElement("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" }))); };

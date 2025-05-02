"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var auth_context_1 = require("@/contexts/auth-context");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var label_1 = require("@/components/ui/label");
var checkbox_1 = require("@/components/ui/checkbox");
var lucide_react_1 = require("lucide-react");
var zod_1 = require("zod");
// Validation schema
var registerSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(2, "Name must be at least 2 characters"),
    email: zod_1.z.string().email("Please enter a valid email address"),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: zod_1.z.string(),
    terms: zod_1.z.boolean().refine(function (val) { return val === true; }, {
        message: "You must agree to the terms and conditions"
    })
})
    .refine(function (data) { return data.password === data.confirmPassword; }, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});
function RegisterPage() {
    var _this = this;
    var _a = react_1.useState(''), name = _a[0], setName = _a[1];
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(''), confirmPassword = _d[0], setConfirmPassword = _d[1];
    var _e = react_1.useState(false), terms = _e[0], setTerms = _e[1];
    var _f = react_1.useState(false), showPassword = _f[0], setShowPassword = _f[1];
    var _g = react_1.useState(false), showConfirmPassword = _g[0], setShowConfirmPassword = _g[1];
    var _h = react_1.useState({}), errors = _h[0], setErrors = _h[1];
    var _j = react_1.useState(''), generalError = _j[0], setGeneralError = _j[1];
    var _k = react_1.useState(false), isLoading = _k[0], setIsLoading = _k[1];
    var register = auth_context_1.useAuth().register;
    var router = navigation_1.useRouter();
    // Password strength indicators
    var hasMinLength = password.length >= 8;
    var hasUppercase = /[A-Z]/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    var hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    var passwordStrength = [
        hasMinLength,
        hasUppercase,
        hasLowercase,
        hasNumber,
        hasSpecialChar
    ].filter(Boolean).length;
    var getPasswordStrengthLabel = function () {
        if (passwordStrength <= 2)
            return 'Weak';
        if (passwordStrength <= 4)
            return 'Medium';
        return 'Strong';
    };
    var getPasswordStrengthColor = function () {
        if (passwordStrength <= 2)
            return 'bg-red-500';
        if (passwordStrength <= 4)
            return 'bg-yellow-500';
        return 'bg-green-500';
    };
    var validateForm = function () {
        try {
            registerSchema.parse({ name: name, email: email, password: password, confirmPassword: confirmPassword, terms: terms });
            setErrors({});
            return true;
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                var newErrors_1 = {};
                error.errors.forEach(function (err) {
                    if (err.path[0]) {
                        newErrors_1[err.path[0].toString()] = err.message;
                    }
                });
                setErrors(newErrors_1);
            }
            return false;
        }
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setGeneralError('');
                    if (!validateForm()) {
                        return [2 /*return*/];
                    }
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, register(email, password, name)];
                case 2:
                    result = _a.sent();
                    if (result.success) {
                        router.push('/dashboard');
                    }
                    else {
                        setGeneralError(result.error || 'Registration failed. Please try again.');
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setGeneralError('An unexpected error occurred. Please try again.');
                    console.error('Registration error:', error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "flex min-h-screen flex-col" },
        React.createElement("div", { className: "flex min-h-[calc(100vh-4rem)] flex-1 items-center justify-center py-12" },
            React.createElement("div", { className: "mx-auto grid w-full max-w-md flex-1 items-center justify-center py-12" },
                React.createElement("div", { className: "mx-auto grid w-full max-w-md gap-6" },
                    React.createElement("div", { className: "flex flex-col space-y-2 text-center" },
                        React.createElement("div", { className: "flex justify-center" },
                            React.createElement(lucide_react_1.TrendingUp, { className: "h-10 w-10 text-emerald-600" })),
                        React.createElement("h1", { className: "text-3xl font-bold" }, "Create an account"),
                        React.createElement("p", { className: "text-sm text-slate-500" }, "Enter your information to get started with Alhagg Investment")),
                    React.createElement("div", { className: "grid gap-4" },
                        generalError && (React.createElement("div", { className: "bg-red-50 text-red-600 p-3 rounded-md text-sm flex items-start" },
                            React.createElement(lucide_react_1.AlertCircle, { className: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5" }),
                            React.createElement("span", null, generalError))),
                        React.createElement("form", { className: "grid gap-4", onSubmit: handleSubmit },
                            React.createElement("div", { className: "grid gap-2" },
                                React.createElement(label_1.Label, { htmlFor: "name", className: errors.name ? 'text-red-500' : '' }, "Full Name"),
                                React.createElement("div", { className: "relative" },
                                    React.createElement(lucide_react_1.User, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }),
                                    React.createElement(input_1.Input, { id: "name", placeholder: "John Doe", className: "pl-10 " + (errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''), value: name, onChange: function (e) { return setName(e.target.value); }, disabled: isLoading })),
                                errors.name && (React.createElement("p", { className: "text-xs text-red-500" }, errors.name))),
                            React.createElement("div", { className: "grid gap-2" },
                                React.createElement(label_1.Label, { htmlFor: "email", className: errors.email ? 'text-red-500' : '' }, "Email"),
                                React.createElement("div", { className: "relative" },
                                    React.createElement(lucide_react_1.Mail, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }),
                                    React.createElement(input_1.Input, { id: "email", type: "email", placeholder: "m@example.com", className: "pl-10 " + (errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''), value: email, onChange: function (e) { return setEmail(e.target.value); }, disabled: isLoading })),
                                errors.email && (React.createElement("p", { className: "text-xs text-red-500" }, errors.email))),
                            React.createElement("div", { className: "grid gap-2" },
                                React.createElement(label_1.Label, { htmlFor: "password", className: errors.password ? 'text-red-500' : '' }, "Password"),
                                React.createElement("div", { className: "relative" },
                                    React.createElement(lucide_react_1.Lock, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }),
                                    React.createElement(input_1.Input, { id: "password", type: showPassword ? 'text' : 'password', className: "pl-10 " + (errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''), value: password, onChange: function (e) { return setPassword(e.target.value); }, disabled: isLoading }),
                                    React.createElement("button", { type: "button", className: "absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400", onClick: function () { return setShowPassword(!showPassword); }, "aria-label": showPassword ? 'Hide password' : 'Show password' }, showPassword ? React.createElement(lucide_react_1.EyeOff, { className: "h-4 w-4" }) : React.createElement(lucide_react_1.Eye, { className: "h-4 w-4" }))),
                                errors.password && (React.createElement("p", { className: "text-xs text-red-500" }, errors.password)),
                                password && (React.createElement("div", { className: "space-y-2" },
                                    React.createElement("div", { className: "h-1 w-full bg-gray-200 rounded-full overflow-hidden" },
                                        React.createElement("div", { className: "h-full " + getPasswordStrengthColor(), style: { width: (passwordStrength / 5) * 100 + "%" } })),
                                    React.createElement("p", { className: "text-xs text-gray-500" },
                                        "Password strength: ",
                                        React.createElement("span", { className: "font-medium" }, getPasswordStrengthLabel())),
                                    React.createElement("ul", { className: "space-y-1 text-xs" },
                                        React.createElement("li", { className: "flex items-center" },
                                            hasMinLength ?
                                                React.createElement(lucide_react_1.CheckCircle, { className: "h-3 w-3 text-green-500 mr-1" }) :
                                                React.createElement(lucide_react_1.X, { className: "h-3 w-3 text-red-500 mr-1" }),
                                            "At least 8 characters"),
                                        React.createElement("li", { className: "flex items-center" },
                                            hasUppercase ?
                                                React.createElement(lucide_react_1.CheckCircle, { className: "h-3 w-3 text-green-500 mr-1" }) :
                                                React.createElement(lucide_react_1.X, { className: "h-3 w-3 text-red-500 mr-1" }),
                                            "Contains uppercase letter"),
                                        React.createElement("li", { className: "flex items-center" },
                                            hasLowercase ?
                                                React.createElement(lucide_react_1.CheckCircle, { className: "h-3 w-3 text-green-500 mr-1" }) :
                                                React.createElement(lucide_react_1.X, { className: "h-3 w-3 text-red-500 mr-1" }),
                                            "Contains lowercase letter"),
                                        React.createElement("li", { className: "flex items-center" },
                                            hasNumber ?
                                                React.createElement(lucide_react_1.CheckCircle, { className: "h-3 w-3 text-green-500 mr-1" }) :
                                                React.createElement(lucide_react_1.X, { className: "h-3 w-3 text-red-500 mr-1" }),
                                            "Contains number"),
                                        React.createElement("li", { className: "flex items-center" },
                                            hasSpecialChar ?
                                                React.createElement(lucide_react_1.CheckCircle, { className: "h-3 w-3 text-green-500 mr-1" }) :
                                                React.createElement(lucide_react_1.X, { className: "h-3 w-3 text-red-500 mr-1" }),
                                            "Contains special character"))))),
                            React.createElement("div", { className: "grid gap-2" },
                                React.createElement(label_1.Label, { htmlFor: "confirm-password", className: errors.confirmPassword ? 'text-red-500' : '' }, "Confirm Password"),
                                React.createElement("div", { className: "relative" },
                                    React.createElement(lucide_react_1.Lock, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }),
                                    React.createElement(input_1.Input, { id: "confirm-password", type: showConfirmPassword ? 'text' : 'password', className: "pl-10 " + (errors.confirmPassword ? 'border-red-500 focus-visible:ring-red-500' : ''), value: confirmPassword, onChange: function (e) { return setConfirmPassword(e.target.value); }, disabled: isLoading }),
                                    React.createElement("button", { type: "button", className: "absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400", onClick: function () { return setShowConfirmPassword(!showConfirmPassword); }, "aria-label": showConfirmPassword ? 'Hide password' : 'Show password' }, showConfirmPassword ? React.createElement(lucide_react_1.EyeOff, { className: "h-4 w-4" }) : React.createElement(lucide_react_1.Eye, { className: "h-4 w-4" }))),
                                errors.confirmPassword && (React.createElement("p", { className: "text-xs text-red-500" }, errors.confirmPassword))),
                            React.createElement("div", { className: "flex items-center space-x-2" },
                                React.createElement(checkbox_1.Checkbox, { id: "terms", checked: terms, onCheckedChange: function (checked) { return setTerms(checked); }, disabled: isLoading, className: errors.terms ? 'border-red-500 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600' : '' }),
                                React.createElement(label_1.Label, { htmlFor: "terms", className: "text-sm " + (errors.terms ? 'text-red-500' : '') },
                                    "I agree to the",
                                    " ",
                                    React.createElement(link_1["default"], { href: "/terms", className: "text-emerald-600 hover:underline underline-offset-4" }, "Terms of Service"),
                                    " ",
                                    "and",
                                    " ",
                                    React.createElement(link_1["default"], { href: "/privacy", className: "text-emerald-600 hover:underline underline-offset-4" }, "Privacy Policy"))),
                            errors.terms && (React.createElement("p", { className: "text-xs text-red-500 -mt-2" }, errors.terms)),
                            React.createElement(button_1.Button, { type: "submit", className: "bg-emerald-600 hover:bg-emerald-700", disabled: isLoading }, isLoading ? (React.createElement(React.Fragment, null,
                                React.createElement("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" },
                                    React.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                                    React.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })),
                                "Creating Account...")) : ('Create Account'))),
                        React.createElement("div", { className: "relative flex items-center justify-center" },
                            React.createElement("span", { className: "absolute inset-0 flex items-center" },
                                React.createElement("span", { className: "w-full border-t" })),
                            React.createElement("span", { className: "relative bg-white px-2 text-sm text-slate-500" }, "or")),
                        React.createElement("div", { className: "grid gap-2" },
                            React.createElement(button_1.Button, { variant: "outline", type: "button", disabled: isLoading },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "mr-2 h-4 w-4" },
                                    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                                    React.createElement("circle", { cx: "12", cy: "12", r: "4" }),
                                    React.createElement("line", { x1: "21.17", x2: "12", y1: "8", y2: "8" }),
                                    React.createElement("line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14" }),
                                    React.createElement("line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14" })),
                                "Sign up with Google"))),
                    React.createElement("div", { className: "mt-4 text-center text-sm" },
                        "Already have an account?",
                        " ",
                        React.createElement(link_1["default"], { href: "/login", className: "text-emerald-600 hover:underline underline-offset-4" }, "Sign in")))))));
}
exports["default"] = RegisterPage;

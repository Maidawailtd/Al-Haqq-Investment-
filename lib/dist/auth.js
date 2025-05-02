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
exports.protectRoute = exports.getCurrentUser = exports.clearSessionCookie = exports.setSessionCookie = exports.createSessionToken = exports.loginUser = exports.registerUser = exports.verifyPassword = exports.hashPassword = void 0;
var bcryptjs_1 = require("bcryptjs");
var jose_1 = require("jose");
var headers_1 = require("next/headers");
var server_1 = require("next/server");
var mongodb_1 = require("mongodb");
// Secret key for JWT signing - in production, use environment variables
var JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-at-least-32-characters-long");
// MongoDB setup
var client = new mongodb_1.MongoClient(process.env.MONGO_URI || "mongodb://localhost:27017");
var db = client.db("alhaqq_investment");
var usersCollection = db.collection("users");
// Password hashing
function hashPassword(password) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, bcryptjs_1.hash(password, 10)];
        });
    });
}
exports.hashPassword = hashPassword;
// Password verification
function verifyPassword(password, hashedPassword) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, bcryptjs_1.compare(password, hashedPassword)];
        });
    });
}
exports.verifyPassword = verifyPassword;
// User registration
function registerUser(email, password, name) {
    return __awaiter(this, void 0, Promise, function () {
        var existingUser, passwordHash, newUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usersCollection.findOne({ email: email })];
                case 1:
                    existingUser = _a.sent();
                    if (existingUser) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, hashPassword(password)];
                case 2:
                    passwordHash = _a.sent();
                    newUser = { email: email, name: name, passwordHash: passwordHash, role: "user" };
                    return [4 /*yield*/, usersCollection.insertOne(newUser)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { email: newUser.email, name: newUser.name, role: newUser.role }];
            }
        });
    });
}
exports.registerUser = registerUser;
// User login
function loginUser(email, password) {
    return __awaiter(this, void 0, Promise, function () {
        var user, isPasswordValid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usersCollection.findOne({ email: email })];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, verifyPassword(password, user.passwordHash)];
                case 2:
                    isPasswordValid = _a.sent();
                    if (!isPasswordValid) {
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/, { email: user.email, name: user.name, role: user.role, id: user.id }];
            }
        });
    });
}
exports.loginUser = loginUser;
// Create session token
function createSessionToken(user) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            // Create JWT token that expires in 7 days
            return [2 /*return*/, new jose_1.SignJWT({
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                })
                    .setProtectedHeader({ alg: "HS256" })
                    .setIssuedAt()
                    .setExpirationTime("7d")
                    .sign(JWT_SECRET)];
        });
    });
}
exports.createSessionToken = createSessionToken;
// Set session cookie
function setSessionCookie(token) {
    return __awaiter(this, void 0, Promise, function () {
        var cookiesInstance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, headers_1.cookies()];
                case 1:
                    cookiesInstance = _a.sent();
                    cookiesInstance.set({
                        name: "session_token",
                        value: token,
                        httpOnly: true,
                        path: "/",
                        secure: process.env.NODE_ENV === "production",
                        maxAge: 60 * 60 * 24 * 7,
                        sameSite: "strict"
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.setSessionCookie = setSessionCookie;
// Clear session cookie
function clearSessionCookie() {
    return __awaiter(this, void 0, Promise, function () {
        var cookiesInstance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, headers_1.cookies()];
                case 1:
                    cookiesInstance = _a.sent();
                    cookiesInstance.set({
                        name: "session_token",
                        value: "",
                        httpOnly: true,
                        path: "/",
                        secure: process.env.NODE_ENV === "production",
                        maxAge: 0,
                        sameSite: "strict"
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.clearSessionCookie = clearSessionCookie;
// Get current user from session
function getCurrentUser() {
    var _a;
    return __awaiter(this, void 0, Promise, function () {
        var cookiesInstance, token, verified, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, headers_1.cookies()];
                case 1:
                    cookiesInstance = _b.sent();
                    return [4 /*yield*/, cookiesInstance.get("session_token")];
                case 2:
                    token = (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.value;
                    if (!token) {
                        return [2 /*return*/, null];
                    }
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, jose_1.jwtVerify(token, JWT_SECRET)];
                case 4:
                    verified = _b.sent();
                    return [2 /*return*/, verified.payload];
                case 5:
                    error_1 = _b.sent();
                    return [2 /*return*/, null];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getCurrentUser = getCurrentUser;
// Middleware to protect routes
function protectRoute(request) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cookiesInstance, token, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, headers_1.cookies()];
                case 1:
                    cookiesInstance = _b.sent();
                    return [4 /*yield*/, cookiesInstance.get("session_token")];
                case 2:
                    token = (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.value;
                    if (!token) {
                        return [2 /*return*/, server_1.NextResponse.redirect(new URL("/login", request.url))];
                    }
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, jose_1.jwtVerify(token, JWT_SECRET)];
                case 4:
                    _b.sent();
                    return [2 /*return*/, server_1.NextResponse.next()];
                case 5:
                    error_2 = _b.sent();
                    return [2 /*return*/, server_1.NextResponse.redirect(new URL("/login", request.url))];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.protectRoute = protectRoute;

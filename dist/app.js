"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const index_1 = require("./routes/index");
//ENV
require('dotenv').config();
const app = (0, express_1.default)();
//MIDDLEWARES
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//PASSPORT MIDDLEWARES
app.use((0, express_session_1.default)({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use(passport_1.default.session());
app.use('/', index_1.router);
// PORT CONNECT
const port = parseInt(process.env.PORT || '3000');
app.listen(port, '0.0.0.0', () => console.log(`Server is connected to port ${port}`));

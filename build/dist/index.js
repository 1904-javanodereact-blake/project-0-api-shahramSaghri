"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var user_router_1 = require("./routers/user-router");
//import { spaceshipRouter } from './routers/spaceship-router';
var session_middleware_1 = require("./middleware/session.middleware");
//import { findByUsernameAndPassword } from './daos/user.dao';
var user_dao_1 = require("./daos/user.dao");
var app = express_1.default();
app.use(function (req, res, next) {
    console.log("request made with url: " + req.url + " and method: " + req.method);
    // const headers = req.rawHeaders;
    // console.log(headers);
    next();
});
// attach an actual object to req.body
app.use(body_parser_1.default.json());
// attach the specific users session data to req.session
app.use(session_middleware_1.sessionMiddleware);
user_dao_1.readAllUsers();
/**
 * Register Routers
 */
app.use('/users', user_router_1.userRouter);
//app.use('/spaceships', spaceshipRouter);
// start up the application
app.listen(8080, function () {
    console.log("application started");
});
//# sourceMappingURL=index.js.map
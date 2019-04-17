"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import { requests } from '../state';
/**
 * request router will handle all requests starting with
 *  /users
 */
exports.requestRouter = express_1.default.Router();
/**
 * find all requests
 * endpoint: /request
 */
exports.requestRouter.get('', function (req, res) {
    //res.json(requests);
});
/**
 * find request by id
 * endpoint: /spaceships/:id
 */
exports.requestRouter.get('/:id', function (req, res) {
    console.log("retreiving spaceship with id: " + req.params.id);
    res.send("here is the spaceship with id: " + req.params.id);
});
/**
 * find request by employee id
 * endpoint: /request/by/:id
 */
exports.requestRouter.get('/empID/:empID', function (req, res) {
    //const reqByEmpID = requests.filter(aSingleReq => aSingleReq.empID === +req.params.empID);
    //res.json(reqByEmpID);
});
exports.requestRouter.post('', function (req, res) {
    console.log("creating spaceship", req.body);
    res.status(201);
    res.send('created spaceship');
});
exports.requestRouter.patch('', function (req, res) {
    console.log("updating spaceship", req.body);
    res.send('updated spaceship');
});
//# sourceMappingURL=spaceship-router.js.map
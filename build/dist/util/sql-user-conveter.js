"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../model/user");
function convertSqlUser(user) {
    return new user_1.User(user.user_id, user.username, undefined, user.full_name);
}
exports.convertSqlUser = convertSqlUser;
//# sourceMappingURL=sql-user-conveter.js.map
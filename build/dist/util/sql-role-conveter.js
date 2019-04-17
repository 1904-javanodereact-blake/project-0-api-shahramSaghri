"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("../model/role");
function convertSqlRole(role) {
    return new role_1.Role(role.id, role.role);
}
exports.convertSqlRole = convertSqlRole;
//# sourceMappingURL=sql-role-conveter.js.map
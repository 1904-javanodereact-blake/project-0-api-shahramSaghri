"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Requests = /** @class */ (function () {
    function Requests(reimbursementId, author, amount, dateSubmitted, dateResolved, description, resolver, status, type) {
        if (reimbursementId === void 0) { reimbursementId = 0; }
        if (author === void 0) { author = 0; }
        if (amount === void 0) { amount = 0; }
        if (dateSubmitted === void 0) { dateSubmitted = 0; }
        if (dateResolved === void 0) { dateResolved = 0; }
        if (description === void 0) { description = ''; }
        if (resolver === void 0) { resolver = 0; }
        if (status === void 0) { status = 0; }
        if (type === void 0) { type = 0; }
        this.reimbursementId = reimbursementId;
        this.author = author;
        this.amount = amount;
        this.dateSubmitted = dateSubmitted;
        this.dateResolved = dateResolved;
        this.description = description;
        this.resolver = resolver;
        this.status = status;
        this.type = type;
    }
    return Requests;
}());
exports.Requests = Requests;
//# sourceMappingURL=reimbursment.js.map
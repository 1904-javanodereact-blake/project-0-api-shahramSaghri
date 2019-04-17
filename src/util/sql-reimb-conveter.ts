import { Reimbursement } from '../model/reimbursment';
import { SqlReimb } from '../dto/sql-reimb.dto';


export function convertSqlReimb(reimb: SqlReimb) {
  return new Reimbursement(reimb.eimbursement_id, reimb.author, reimb.amount, reimb.date_submitted, reimb.date_resolved, reimb.description, 
    reimb.resolver, reimb.status, reimb.type);
}
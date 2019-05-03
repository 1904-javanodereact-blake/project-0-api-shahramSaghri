export class Reimbursement {
  reimbursementid: number; // primary key
  author: number;  // foreign key -> User, not null
  amount: number;  // not null
  datesubmitted: string; // not null
  dateresolved: string;
  description: string; // not null
  resolver: number; // foreign key -> User
  status: number; // foreign ey -> ReimbursementStatus, not null
  type: number; // foreign key -> ReimbursementType

  constructor (
      reimbursementid,
      author = 0,
      amount = 0,
      datesubmitted = '',
      dateresolved = '',
      description = '',
      resolver = 0,
      status = 0,
      type = 0
      ) 
    {

      this.reimbursementid = reimbursementid;
      this.author = author;
      this.amount = amount;
      this.datesubmitted = datesubmitted;
      this.dateresolved = dateresolved;
      this.description = description;
      this.resolver = resolver;
      this.status = status;
      this.type = type;
    }
}
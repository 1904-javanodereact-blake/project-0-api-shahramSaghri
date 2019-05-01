import { PoolClient } from 'pg';
import { connectionPool } from '.'; //The opject that holds the connection
import { convertSqlRole } from '../util/sql-role-conveter';
import { convertSqlUser } from '../util/sql-user-conveter';
//import { convertSqlReimb } from '../util/sql-reimb-conveter';

export async function findByUsernameAndPassword(username: string, password: string) {
  let client: PoolClient;
  try {
    console.log('I am in findByUser-Reimb');
    client = await connectionPool.connect();
    const queryString = `SELECT * FROM "ERS".emp_user as us
    INNER JOIN "ERS".role as ro ON (us.userid = ro.roleid)
    WHERE username = $1 AND password = $2`;
    const result = await client.query(queryString, [username, password]);
    console.log(`result = ${result}`);
    const user = result.rows[0];
    console.log(`this is the first property of the result: ${result.rows[0]}`);
    if (user) {
      const convertedUser = convertSqlUser(user);
      convertedUser.role = convertSqlRole(user);
      return convertedUser;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function readAllUsers()
{
  let client: PoolClient;
  try
  {
    client = await connectionPool.connect();
    console.log('connected successfully');
    const results = await client.query('SELECT * FROM "ERS".emp_user');
    console.log(results.rows);
    return results.rows[0];
  }
  catch(err)
  {
    console.log(err)
    return undefined;
  }
  finally
  {
    client && client.release();
  } 
}

export async function findByID_Reimb(reimbursementID: number) {
  let client: PoolClient;
  try {
    console.log('I am in findByID in side the Reimb');
    client = await connectionPool.connect();
    const queryString = `select *  from "ERS".reimbursement where status = $1`;
    const result = await client.query(queryString, [reimbursementID]);
    console.log(`result = ${result}`);
    return result.rows;
    // if (reimb) {
    //   const convertedReimb =  convertSqlReimb(reimb);
    //   //const convertedUser = convertSqlUser(user);
    //   //convertedUser.role = convertSqlRole(user);
    //   return convertedReimb;
    // } else {
    //   return undefined;
    // }
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function findByUserId_Reimb(userID: number) {
  let client: PoolClient;
  try {
    console.log('I am in findByUserId_Reimb in side the Reimb');
    client = await connectionPool.connect();
    const queryString = `SELECT * FROM "ERS".reimbursement AS re
    JOIN "ERS".emp_user AS us
    ON re.author = us.userid
      WHERE re.author = $1`;
    const result = await client.query(queryString, [userID]);
    console.log(`result = ${result}`);
    return result.rows;
    // if (reimb) {
    //   const convertedReimb =  convertSqlReimb(reimb);
    //   //const convertedUser = convertSqlUser(user);
    //   //convertedUser.role = convertSqlRole(user);
    //   return convertedReimb;
    // } else {
    //   return undefined;
    // }
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}


export async function reimbUpdate(freimbursementid: number, fauthor: number, famount: number, fdatesubmitted: string, 
  fdateresolved: string, fdescription: string, 
  fresolver: number, fstatus: number, ftype: number) {
  let client: PoolClient;
  try {
    console.log('I am in findByID');
    client = await connectionPool.connect();
    const queryString = `SELECT "ERS".update_reimb($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
    const result = await client.query(queryString, [freimbursementid, fauthor, famount, fdatesubmitted, 
      fdateresolved, fdescription, fresolver, fstatus, ftype ]);
    console.log(`result = ${result}`);
    const user = result.rows[0];
    if (user) {
      const convertedUser = convertSqlUser(user);
      convertedUser.role = convertSqlRole(user);
      return convertedUser;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function submitAndInsert(freimbursementid: number, fauthor: number, famount: number, fdatesubmitted: string, 
                                      fdateresolved: string, fdescription: string, 
                                      fresolver: number, fstatus: number, ftype: number) {
  let client: PoolClient;
  try {
    console.log('I am in submitAndInsert');
    client = await connectionPool.connect();
    const queryString = `select "ERS".insert_reimb ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
    const result = await client.query(queryString, [freimbursementid, fauthor, famount, fdatesubmitted, 
              											  fdateresolved, fdescription, fresolver, fstatus, ftype ]);
    console.log(`result = ${result}`);
    const user = result.rows[0];
    if (user) {
      const convertedUser = convertSqlUser(user);
      convertedUser.role = convertSqlRole(user);
      console.log('Your Request was submitted Successfully')
      //console.log(user)
      return user;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}
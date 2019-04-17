import { PoolClient } from 'pg';
import { connectionPool } from '.'; //The opject that holds the connection
import { convertSqlRole } from '../util/sql-role-conveter';
import { convertSqlUser } from '../util/sql-user-conveter';

export async function findByUsernameAndPassword(username: string, password: string) {
  let client: PoolClient;
  try {
    console.log('I am in findByUser');
    client = await connectionPool.connect();
    const queryString = `SELECT * FROM "ERS".emp_user as us
    INNER JOIN "ERS".role as ro ON (us.userid = ro.roleid)
    WHERE username = $1 AND password = $2`;
    const result = await client.query(queryString, [username, password]);
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

export async function findByID(userID: number) {
  let client: PoolClient;
  try {
    console.log('I am in findByID');
    client = await connectionPool.connect();
    const queryString = `SELECT * FROM "ERS".emp_user as us
    INNER JOIN "ERS".role as ro ON (us.userid = ro.roleid)
    WHERE userid = $1`;
    const result = await client.query(queryString, [userID]);
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


export async function updateByID(userID: number, username: string, password: string, firstname: string, lastname: string, 
  email: string, role: string) {
  let client: PoolClient;
  try {
    console.log('I am in findByID');
    client = await connectionPool.connect();
    const queryString = `select "ERS".update_user($1, $2, $3, $4, $5, $6, $7)`;
    const result = await client.query(queryString, [userID, username, password, firstname, lastname, 
                                      email, role ]);
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
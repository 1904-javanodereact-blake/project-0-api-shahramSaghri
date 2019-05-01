import express from 'express';
// import { users } from '../state';
//import { Reimbursement } from '../model/reimbursment';
import { authMiddleware } from '../middleware/auth.middleware';
import * as reimbDao from '../daos/reimb.dao.';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const reimbRouter = express.Router();


/**
 * find all users
 * endpoint: /users
 */
reimbRouter.get('', [
  authMiddleware(['admin']),
  async(req, res) => {
    console.log('retreiving all users');
    const user = await reimbDao.readAllUsers();
    console.log(`This is my user = ${user}`);
    if (user) {
    // attach the user data to the session object
      res.json(user);
    } else {
      res.sendStatus(401);
  }
  res.json(user);
  }]);

/**
 * find user by id
 * endpoint: /users/:id
 */
reimbRouter.get('/status/:id', [authMiddleware(['finance-manager']), async(req, res) => {
  const id: number = +req.params.id;
  console.log(`retreiving user with id: ${id}`);
  let reimbursement = await reimbDao.findByID_Reimb(id);
  //const user = users.find(u => u.userId === id);
  //const user = all_users.find(u => u.userId === id);
  if (reimbursement) {
    res.json(reimbursement);
  } else {
    res.sendStatus(404);
  }
}]);

reimbRouter.get('/author/userId/:userId', [authMiddleware(['finance-manager']), async(req, res) => {
  console.log('this is the rout handler for /author/userId/:userId')
  const userId: number = +req.params.userId;
  
  console.log(`retreiving user with id: ${userId}`);
  let reimbursement = await reimbDao.findByUserId_Reimb(userId);
  //const user = users.find(u => u.userId === id);
  //const user = all_users.find(u => u.userId === id);
  if (reimbursement) {
    res.json(reimbursement);
  } else {
    res.sendStatus(404);
  }
}]);

reimbRouter.patch('', [ authMiddleware(['finance-manager']), async(req, res) => {
  const { body } = req; // destructuring
  console.log(`updating user`, body);
  let user = await reimbDao.reimbUpdate(body.reimbursementid, body.author, body.amount, body.datesubmitted,
    body.dateresolved, body.description, body.resolver, body.status, body.type);
  
  if (!user) {
    res.sendStatus(404);
  } else {
    for (const field in user) {
      if (body[field] !== undefined) {
        user[field] = body[field];
      }
    }
    res.json(user);
  }
}]);


reimbRouter.post('', async(req, res) => {
  const { body } = req; // destructuring
  console.log(`insertin a new request`, body);
  let user = await reimbDao.submitAndInsert(body.reimbursementid, body.author, body.amount, body.datesubmitted,
    body.dateresolved, body.description, body.resolver, body.status, body.type);
  
    if (!user) {
    res.sendStatus(404);
  } else {
    for (const field in user) {
      if (body[field] !== undefined) {
        user[field] = body[field];
      }
    }
    res.json(user);
  }

});


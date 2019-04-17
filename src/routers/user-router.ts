import express from 'express';
// import { users } from '../state';
import { User } from '../model/user';
import { authMiddleware } from '../middleware/auth.middleware';
import * as userDao from '../daos/user.dao';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const userRouter = express.Router();


/**
 * find all users
 * endpoint: /users
 */
userRouter.get('', [
  authMiddleware(['admin']),
  async(req, res) => {
    console.log('retreiving all users');
    const user = await userDao.readAllUsers();
    console.log(`This is my user = ${user}`);
    if (user) {
    // attach the user data to the session object
      req.session.user = user;
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
userRouter.get('/:id', [authMiddleware(['finance-manager']), async(req, res) => {
  const id: number = +req.params.id;
  console.log(`retreiving user with id: ${id}`);
  let user = await userDao.findByID(id);
  //const user = users.find(u => u.userId === id);
  //const user = all_users.find(u => u.userId === id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
}]);


userRouter.post('', (req, res) => {
  console.log(`creating user`, req.body);
  const user: User = req.body;
  user.userId = Math.floor(Math.random() * 10000000);
  //users.push(user);
  res.status(201);
  res.send(user);
});

userRouter.patch('', [ authMiddleware(['admin']), async(req, res) => {
  const { body } = req; // destructuring
  console.log(`updating user`, body);
  let user = await userDao.updateByID(body.userId, body.username, body.password, 
                                      body.firstname, body.lastname, body.email, body.role);
  
  // const user = users.find((u) => {
  //   // console.log(`u = `, u);
  //   return u.userId === body.userId;
  // });
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


userRouter.post('/login', async (req, res) => {
  console.log('I am in login');
  const { username, password } = req.body;
  const user = await userDao.findByUsernameAndPassword(username, password);
  if (user) {
    // attach the user data to the session object
    req.session.user = user;
    res.json(user);
  } else {
    res.sendStatus(401);
  }
});
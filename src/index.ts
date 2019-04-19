import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routers/user-router';
import { reimbRouter } from'./routers/reimb-router';
//import { spaceshipRouter } from './routers/spaceship-router';
import { sessionMiddleware } from './middleware/session.middleware';
//import { findByUsernameAndPassword } from './daos/user.dao';
//import { readAllUsers } from './daos/user.dao'

const app = express();

app.use((req, res, next) => {
  console.log(`request made with url: ${req.url} and method: ${req.method}`);
   // const headers = req.rawHeaders;
   // console.log(headers);
  next();
});

// attach an actual object to req.body
app.use(bodyParser.json());

// attach the specific users session data to req.session
app.use(sessionMiddleware);

const myPort = process.env.PORT || 8080;

/**
 * Register Routers
 */
app.use('/users', userRouter);
app.use('/reimbursements', reimbRouter);
//readAllUsers();

// start up the application
app.listen(myPort, () => {
  console.log(`application started`);
});


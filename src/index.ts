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


// add CORS
app.use((req, resp, next) => {
  console.log(req.get('host'));
  (process.env.SHIP_API_STAGE === 'prod')
    ? resp.header('Access-Control-Allow-Origin')
    : resp.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
  resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  resp.header('Access-Control-Allow-Credentials', 'true');
  resp.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, PATCH');
  next();
 });
 
// attach the specific users session data to req.session
app.use(sessionMiddleware);

const myPort = process.env.PORT || 8081;

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


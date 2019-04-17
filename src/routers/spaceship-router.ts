import express from 'express';
//import { requests } from '../state';

/**
 * request router will handle all requests starting with
 *  /users
 */
export const requestRouter = express.Router();


/**
 * find all requests
 * endpoint: /request
 */
requestRouter.get('', (req, res) => {
  //res.json(requests);
})

/**
 * find request by id
 * endpoint: /spaceships/:id
 */
requestRouter.get('/:id', (req, res) => {
  console.log(`retreiving spaceship with id: ${req.params.id}`);
  res.send(`here is the spaceship with id: ${req.params.id}`);
})

/**
 * find request by employee id
 * endpoint: /request/by/:id
 */
requestRouter.get('/empID/:empID', (req, res) => {
  //const reqByEmpID = requests.filter(aSingleReq => aSingleReq.empID === +req.params.empID);
  //res.json(reqByEmpID);
})

requestRouter.post('', (req, res) => {
  console.log(`creating spaceship`, req.body);
  res.status(201);
  res.send('created spaceship');
})

requestRouter.patch('', (req, res) => {
  console.log(`updating spaceship`, req.body);
  res.send('updated spaceship');
})
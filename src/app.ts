require('dotenv').config();

import express from 'express';
import { graphqlHTTP }  from 'express-graphql';
import { schema } from './schema';

const PORT = 3000;

// Just an example of how middleware is used
const loggingMiddleware = (req : any, res: any, next: any) => {
  console.log('ip:', req.ip);
  console.log(req);
  next();
};

const app = express();

app.use(loggingMiddleware);

app.use('/graphql', graphqlHTTP({ 
  schema: schema, 
  graphiql: true 
}));

app.listen(PORT, () => {
  console.log('[APP] GraphQL server has started running on http://localhost:3000/graphql');
});

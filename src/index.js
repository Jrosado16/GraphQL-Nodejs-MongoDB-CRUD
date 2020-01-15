import expres from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

import { connect } from './database/database'

const app = expres();

// database
connect();
//Mostramos un mensaje al ingresar al directorio raiz
app.get('/', (req, res) => {
    res.json({
        message: 'Ingresa a http://localhost:3000/graphql'
    })
})
//init graphql
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,    
}))

//init server
app.listen(3000, () => {
    console.log(`server on port 3000`);
})
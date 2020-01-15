import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    "Consultamos cuantos usuario tenesmo cons Users de tipo User"
    type Query {
        Users: [User]
    }
    "estrucutura de como sera nuestro usuario"
    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }
    "creamos nuestras tipicas funciones para un CRUD"
    type Mutation {
        createUser(user: UserInput): User
        updateUser(_id: ID, user: UserInput): User
        deleteUser(_id:ID): User
    }
    "tipo de usuario que sera el que vamos a ingresar para actulizar uno"
    input UserInput {
        firstname: String!
        lastname: String
        age: Int
    }

`;

//sera nuestro esquema de graphql
export default makeExecutableSchema({
    typeDefs,
    resolvers
});


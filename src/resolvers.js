import User from './models/User';
export const resolvers = {

    Query: {
        //Listamos todos los datos guardados
        async Users(){
           return await User.find()
        }
    },
    //Creamos actualizamos y eliminamos un usuario
    Mutation: {
        createUser: async (_, { user }) => {
            const newUser = new User(user);
            console.log(newUser)
            return await newUser.save()
        },
        updateUser: async (_, {_id, user}) => {
            return await User.findByIdAndUpdate(_id, user, { new: true});
        },
        deleteUser: async (_, { _id }) => {
            return await User.findByIdAndDelete(_id);
        }
    }
}
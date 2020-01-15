import mongoose from 'mongoose';


export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/graphql-user',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('>> Database is connected <<')
    } catch (error) {
        console.log(error);
    }
}
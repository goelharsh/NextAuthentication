import mongoose from "mongoose"

const connectToDb = async()=>{
    const url = 'mongodb+srv://harshgoel626:YpJTI2N6dJzCta8X@cluster0.igur90m.mongodb.net/nextAuthentication'
    mongoose.connect(url).then(()=>console.log('DB Connected Successfully'))
    .catch(()=> console.log('Unable to Connect to DB'))
}

export default connectToDb
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();
//testing to make sure we are connected, or else error is thrown. 
//using env file to protect server info if anyone is seeing this on git, hello! 
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('You are connected to MongoDb');
})
.catch((err) => {
    console.log("error")
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on Port 3000!!');
}
);

//api route
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

//middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
import argon2 from "argon2";
import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const userSchema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    mobile:Number,
    gender:String,
    dateOfBirth:Date,
    age:Number,
    password:String,
    numberofsurvey:Number,
    surveycompleted:Number,
    amountearned:Number,
},{
    timestamps:true
})

userSchema.pre("save",async function(next){
    const user = this;
    if (!user.isModified("password")) {
      next();
    }
    try {
      const hash_password = await argon2.hash(this.password);
      user.password = hash_password;
    } catch (error) {
      console.log(error);
    }
  });

  userSchema.methods.comparePassword = async function(password) {
    return await argon2.verify(this.password, password);
  };

  userSchema.methods.generateAccessToken = async function() {
    try {
      return jwt.sign(
        {
          user_Id: this._id.toString(),
          email: this.email,
        },
        process.env.JWT_ACCESSTOKEN_SECRET_KEY,
        { expiresIn: "12h" }
      );
    } catch (error) {
      console.log(error);
    }
  };

const User = new model("user",userSchema);
export default User;



// process.env.JWT_ACCESSTOKEN_SECRET_KEY
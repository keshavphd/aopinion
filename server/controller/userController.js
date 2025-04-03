import generateHashPassword from "../model/generateHashPassword.js";
import User from "../model/userModel.js";

const createUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      mobile,
      gender,
      dateOfBirth,
      age,
      password,
    } = req.body;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !mobile ||
      !gender ||
      !dateOfBirth ||
      !age ||
      !password
    ) {
      return res.json("Enter all details");
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.json({
        msg: "Email already exist.Please enter another email",
      });
    }

    const saveDat = await User.create(req.body);
    return res.status(201).json({
      msg: "User created successfully",
      data: saveDat,
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.json({
        msg: "Email not registered, Please register first",
      });
    }

    const checkPassword = await userExist.comparePassword(password);
    if (!checkPassword) {
      return res.json({
        msg: "Invalid credential",
      });
    }

    const accessToken = await userExist.generateAccessToken();

    const cookieOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.cookie("accessToken", accessToken, cookieOption);

    res.status(200).json({
      msg: "Login Successfull",
      userToken: accessToken,
    });
  } catch (error) {
    res.status(400).json("Error in Login");
  }
};

const userDetail = async(req,res)=>{
  try {
    const userId = req.userId;
    const userDetail = await User.findById(userId).select({password:0})
    res.status(200).json({data:userDetail})
  } catch (error) {
    console.log(error);
  }
}

const updateUser = async (req, res) => {
  try {
    const userID = req.userId;
    const {password} = req.body;

    let hashPassword = "";
    if (password) {
      hashPassword = await generateHashPassword(password);
    }

    const changedValue = await User.findByIdAndUpdate(
      userID,
      {
             ...(password && { password: hashPassword }),
      },
      { new: true }
    );
    res.status(200).json({
      msg:"User updated successfully",
    });
  } catch (error) {
    res.status(400).json("Error in updating");
  }
};

export default { createUser,loginUser,userDetail,updateUser };

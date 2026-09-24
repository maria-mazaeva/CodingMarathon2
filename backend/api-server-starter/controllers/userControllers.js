const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// signup a user
const signupUser = async (req, res) => {
  const { 
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    address,
    } = req.body;

  try {
    // validation
    // if (!email || !password) {
    //   throw Error("All fields must be filled");
    // }
    // if (!validator.isEmail(email)) {
    //   throw Error("Email not valid");
    // }
    // if (!validator.isStrongPassword(password)) {
    //   throw Error("Password not strong enough");
    // }
    if (
        !name ||
        !email ||
        !password ||
        !phone_number ||
        !gender ||
        !date_of_birth ||
        !address
    ) {
        res.status(400);
        throw new Error("Please add all fields");
    }
    const exists = await User.findOne({ email });

    if (exists) {
      throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ 
        name,
        email,
        password: hash,
        phone_number,
        gender,
        date_of_birth,
        address,
    });

    // create a token
    if (user){
        const token = createToken(user._id);
        res.status(201).json({ email, token });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw Error("All fields must be filled");
    }

       const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = createToken(user._id);
      res.status(200).json({ email, token });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = { signupUser, loginUser };
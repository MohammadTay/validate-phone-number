import express from "express"
import User from "../models/User.js";
import bcrypt from "bcrypt"
import validate from "../middleware/validate.js";


const router = express.Router();

//REGISTER

router.post("/register", validate, async (req, res) => {
  console.log(req.tay.valid)
  // if (req.tay. === false) return ("phone number not valid")
  try {
    const salt = await bcrypt.genSalt(10)
    // salt rouns , can pass 10 //
    const newUser = new User({
      phoneNumber: req.body.phoneNumb,
      costumerName: req.body.name,
      costumerAddress: req.body.address,
      costumerEmail: req.body.email,
      password: await bcrypt.hash(req.body.password, salt)

    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }

}
);
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ phoneNumber: req.body.phoneNumb });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;








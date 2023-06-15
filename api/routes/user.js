import express from "express"
import User from "../models/User.js";
import bcrypt from "bcrypt"


const router = express.Router();


//GET  USER
router.get("/costumer", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.id }).exec();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET all USER
router.get("/costumers", async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 })
    res.status(200).send(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update
router.put("/update", async (req, res) => {
  // if (req.body.password) {
  //       const salt = await bcrypt.genSalt(10);
  //       req.body.password = await bcrypt.hash(req.body.password, salt);
  //     }
  try {
    await User.updateOne({ _id: req.body.id }, { $set: req.body }, { new: true });
    const user = await User.findOne({ _id: req.body.id }).exec();
    const { password, ...others } = user._doc;

    res.status(200).send(others);
  } catch (err) {
    res.status(401).send("You can update only your account!")
  }
}
);

//DELETE
router.delete("/delete", async (req, res) => {
  try {
    // const user = await User.findOne({ _id: req.body.id }).exec();
    await User.deleteOne({ _id: req.body.id })
    res.status(200).send("deleted");
  } catch (err) {
    res.status(401).send("You can delete only your account!")
  }
});



export default router;
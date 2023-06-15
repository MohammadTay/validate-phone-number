
import express from "express"
import Phone from "../models/Phone.js"
import axios from "axios"
const router = express.Router();



router.post("/phone", async (req, res) => {


  try {
    const { data } = await axios(`http://apilayer.net/api/validate?access_key=3d2feedd14ea5b4ffa0fa65f7df61eb5&number=${req.body.phoneNumb}`)


    const newPhone = new Phone({
      phoneNumber: data.local_format,
      valid: data.valid,
      countryName: data.country_name,
      countryCode: data.country_prefix,
      operatorName: data.carrier,
    });
    const phone = await newPhone.save();
    res.status(200).json(phone);
  } catch (err) {
    res.status(500).json(err);
  }

}
);

export default router;



const express = require("express");
const router = express.Router();
const SiteVisit = require("../models/SiteVisit");
const { ObjectID } = require('mongodb');

router.post("/siteVisit", async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    let user = await SiteVisit.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    user = await SiteVisit.create({
      name,
      email,
      mobile,
    });
    
    const saveProjectsDetails = await user.save();
    res.json(saveProjectsDetails);
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }  
});

module.exports = router;

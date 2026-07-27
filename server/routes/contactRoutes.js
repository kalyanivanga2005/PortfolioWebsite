const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST Contact Message
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({
      message: "Message sent successfully",
      contact
    });

  } catch (error) {
    res.status(500).json({
      message: "Error saving message",
      error: error.message
    });
  }
});

module.exports = router;
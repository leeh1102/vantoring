const mentorService = require("../services/mentorService");
const { parseMentorData } = require("../utils");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const mentors = await mentorService.getAll();
    res.status(200).json({
      success: true,
      data: mentors
    });
  } catch (error) {
    let message = "Internal server error";
    if (error instanceof Error) {
      message = error.message;
    }
    res.status(500).json({ success: false, error, message });
  }
});

router.post("/", async (req, res) => {
  try {
    const mentor = parseMentorData(req.body);
    const newMentor = await mentorService.create(mentor);
    res.status(200).json({ success: true, data: newMentor });
  } catch (error) {
    console.log(error);
    let message = "Something went wrong";
    if (error instanceof Error) {
      message = error.message;
    }
    res.status(400).json({ success: false, error, message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mentor = await mentorService.getOne(req.params.id);
    res.status(200).json({
      success: true,
      data: mentor
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
});

module.exports = router;

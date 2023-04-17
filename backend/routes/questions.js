const questionService = require("../services/questionService");
const { parsePostData } = require("../utils");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const questions = await questionService.getAll();
    res.status(200).json({
      success: true,
      data: questions
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
    const question = parsePostData(req.body);
    const newQuestion = await questionService.create(question);
    res.status(200).json({ success: true, data: newQuestion });
  } catch (error) {
    console.log(error);
    let message = "Something went wrong";
    if (error instanceof Error) {
      message = error.message;
    }
    res.status(400).json({ success: false, error, message });
  }
});

module.exports = router;

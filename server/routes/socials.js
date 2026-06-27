const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        github: "",
        linkedin: "",
        codeforces: "",
        leetcode: "",
        codechef: "",
        resume: ""
    });
});

module.exports = router;
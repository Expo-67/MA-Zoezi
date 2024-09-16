import express from "express";
const router = express.Router();

// Sign up route
router.post("/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  // Validation
  if (!name || !email || !password || password !== confirmPassword) {
    return res.status(400).json({ message: "Invalid data Input" });
  }

  try {
    // Hash password encryption
    const hashedPassword = await bcrypt.hash(password, 10);
    // create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

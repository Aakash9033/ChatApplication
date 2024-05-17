import User from "../models/user.model.js";

export const Signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.send(400).json({ error: "Username already exists" });
    }
  } catch (error) {}
};
export const login = async (req, res) => {
  console.log("loginUSer");
};
export const logout = async (req, res) => {
  console.log("logoutUSer");
};

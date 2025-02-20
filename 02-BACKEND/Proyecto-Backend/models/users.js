const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    minLength: [6, "La contraseña debe tener al menos 6 caracteres"],
  },
});

userSchema.pre("save", async function name(next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  console.log("🚀 MIDDLEWARE ~ update:", update);
  if (update.password) {
    const salt = await bcrypt.genSalt(10);
    update.password = await bcrypt.hash(update.password, salt);
  }
  next();
});

userSchema.methods.matchPassword = async (password, hashPassword) => {
  try {
    const test = await bcrypt.compare(password, hashPassword);
    return test;
  } catch (error) {
    console.log("🚀 ~ userSchema.methods.matchPassword= ~ error:", error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;

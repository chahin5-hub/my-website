const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// اتصال بقاعدة البيانات
mongoose.connect("mongodb://127.0.0.1:27017/prosite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// موديل المستخدم
const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
});

// تسجيل
app.post("/api/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// تسجيل دخول (بسيط)
app.post("/api/login", async (req, res) => {
  const user = await User.findOne(req.body);
  res.send(user);
});

// موديل خدمة
const Service = mongoose.model("Service", {
  title: String,
  price: Number,
  description: String,
});

// إضافة خدمة
app.post("/api/services", async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.send(service);
});

// عرض الخدمات
app.get("/api/services", async (req, res) => {
  const services = await Service.find();
  res.send(services);
});

app.listen(5000, () => console.log("Server running"));

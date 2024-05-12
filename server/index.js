const express = require("express");
const multer = require("multer");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect(`${DATABASE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Image Model
const Image = mongoose.model("Image", {
  imageUrl: String,
  imageData: Buffer,
});

// Multer middleware configuration for handling image uploads
const upload = multer({ dest: "uploads/" });

// Route for handling image uploads
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    let image;

    if (req.file) {
      // If image file was uploaded directly
      image = new Image({
        imageData: req.file.buffer,
      });
    } else if (req.body.imageUrl) {
      // If URL of the image was provided
      const response = await axios.get(req.body.imageUrl, {
        responseType: "arraybuffer",
      });
      image = new Image({
        imageUrl: req.body.imageUrl,
        imageData: Buffer.from(response.data, "binary"),
      });
    } else {
      return res.status(400).send("Neither image nor URL provided");
    }

    await image.save();
    res.send("Image uploaded successfully");
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).send("Error uploading image");
  }
});

app.get("/", (req, res) => {
  res.send("Running...");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

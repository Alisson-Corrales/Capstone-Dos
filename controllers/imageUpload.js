const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(
      req.files.image.tempFilePath,
      {
        use_filename: true,
        folder: "cappy",
      }
    );
    fs.unlinkSync(req.files.image.tempFilePath);
    console.log(result);
    return res.status(200).json({ image: { src: result.secure_url } });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { uploadImage };

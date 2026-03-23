import multer from "multer";
import path from "path";

// Storage config
const storage = multer.diskStorage({
  
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

// Multer instance
const upload = multer({ storage });

// Export
export default upload;

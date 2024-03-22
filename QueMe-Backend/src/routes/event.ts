import express, { Request, Response } from "express";
import { EventController } from "../features/user/controllers/event";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "events_image/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error("Only images are allowed"));
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export const eventRouter = express.Router();
eventRouter.get("/qm/getevent", EventController.getEvents);
eventRouter.post(
  "/qm/createevent",
  upload.single("image"),
  EventController.createEvent
);
eventRouter.delete("/qm/deleteevent", EventController.deleteEvent);

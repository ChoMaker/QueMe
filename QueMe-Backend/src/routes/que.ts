import express, { Request, Response } from "express";
import { QueController } from "../features/user/controllers/que";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
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

export const reserveQueRouter = express.Router();
reserveQueRouter.post("/qm/reserveque", QueController.reserveQue);
reserveQueRouter.get("/qm/getque", QueController.getQue);
reserveQueRouter.post(
  "/qm/uploadpayslip",
  upload.single("image"),
  QueController.uploadPayslip
);
reserveQueRouter.get("/qm/getallque", QueController.getAllQue);
reserveQueRouter.delete("/qm/deleteque", QueController.deleteQue);
reserveQueRouter.put("/qm/updatestatus", QueController.updateStatus);
reserveQueRouter.post("/qm/updateamount", QueController.updateAmount);

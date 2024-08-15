// const mongoose = require("mongoose");
import mongoose from "mongoose";

const adminUserSchema = mongoose.Schema(
  {
    company_name: {
      type: String,
      required: [true, "Please enter the company name"],
    },
    company_uername: {
      type: String,
      required: [true, "Please enter the company UserId"],
    },
    company_contact: {
      type: String,
      required: [true, "Please enter the contact number"],
    },
    company_email: {
      type: String,
      required: [true, "Please enter the email ID"],
    },
    password: {
      type: String,
      required: [true, "Need to enter your password"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("admin-user", adminUserSchema);

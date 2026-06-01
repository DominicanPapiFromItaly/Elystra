import fs from "fs";
import path from "path";

export default function handler(req, res) {
  return res.status(200).json({
    status: "ok",
    message: "Elystra è online 🧠"
  });
}

import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  req.user = jwt.verify(token, "SECRET_KEY");
  next();
}

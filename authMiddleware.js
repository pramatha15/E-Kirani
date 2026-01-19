import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    req.user = jwt.verify(token, "SECRET_KEY");
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}

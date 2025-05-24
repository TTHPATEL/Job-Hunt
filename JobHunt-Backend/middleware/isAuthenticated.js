import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("Token received in cookie:", token); // << Add this line to debug
    if (!token) {
      return res.status(401).json({
        message: "Login First (No token Provided)",
        status: false,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        status: false,
      });
    }

    req.id = decoded.userId;
    next();
  } catch (error) {
    return res.this.status(401).json({
      message: "Invalid token",
      status: false,
    });
  }
};

export default authenticateToken;

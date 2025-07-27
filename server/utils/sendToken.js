export const sendToken = (user, statusCode, message, res) => {
    try {
      const token = user.generateToken(); // Ensure this method exists in userModel.js
      res.status(statusCode).cookie("token", token, {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }).json({
        success: true,
        user,
        message,
        token,
      });
    } catch (error) {
      throw new Error("Token generation failed.");
    }
  };
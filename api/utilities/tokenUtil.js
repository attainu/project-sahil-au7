import crypto from "crypto";

const utils = {};

/**
 * Generate reset token and hashed reset token.
 * If the reset token is provided, generate hash using
 * the provided token, else create a new reset token.
 */
utils.generatePasswordResetToken = (token = null) => {
  //Generate reset token
  const resetToken = token ? token : crypto.randomBytes(32).toString("hex");

  //Generate hashed token
  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  return {
    resetToken,
    hashedResetToken,
  };
};

export default utils;

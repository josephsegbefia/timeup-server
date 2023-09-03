const { createMailTransporter } = require("./transporter.config");

const sendVerificationMail = (user) => {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: '"TimeApp" <joeelorm@outlook.com>',
    to: user.email,
    html: `<p>
            Hello 👋 ${user.firstName}, thank you for signing up to use our app. Please click on te link below to verify account.
            <a href = ${process.env.CLIENT_URL}/verify-email?emailToken=${user.emailToken}>Verify Email</a>
         </p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Verification sent");
    }
  });
};

module.exports = { sendVerificationMail };

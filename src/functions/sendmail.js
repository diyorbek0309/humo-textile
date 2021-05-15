const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;
const EMAIL = process.env.REACT_APP_EMAIL;

exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body);

  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL,
        accessToken,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
      },
    });

    return transporter;
  };

  const sendEmail = async (emailOptions) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
  };

  // const result = sendMail({
  //     from: [YOUR SMTP SERVER EMAIL ADDRESS],
  //     to: [RECIPIENT EMAIL ADDRESS],
  //     subject: `Sending with React, Nodemailer and Netlify`,
  //     html: `
  //         <h3>Email from ${data.name} ${data.email}<h3>
  //         <p>${data.message}<p>
  //         `
  // }, function(error, info) {
  //     if (error) {
  //         callback(error);
  //     } else {
  //         callback(null, {
  //         statusCode: 200,
  //         body: JSON.stringify({
  //                 'result': 'success'
  //             })
  //     });
  //     }
  // });
  try {
    const result = sendEmail({
      from: EMAIL,
      to: EMAIL,
      subject: "humo-teks.uz dan xabar keldi",
      html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `,
    });
    if (result) {
      console.log("contact-success");
    }
  } catch (error) {
    console.log("contact-failure");
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

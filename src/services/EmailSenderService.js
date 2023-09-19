const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_API_KEY_PUBLIC,
  process.env.MJ_API_KEY_PRIVATE
);

function emailSender({ email, fullName }, { subject, body }) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "beaujotryan@gmail.com",
          Name: "Mailjet Pilot",
        },
        To: [
          {
            Email: email,
            Name: fullName,
          },
        ],
        Subject: subject,
        TextPart: body,
        HTMLPart: `<h3>${body}</h3>`,
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body, "success");
    })
    .catch((err) => {
      console.log(err, "error");
    });
}

function kindChecker(kind, data) {
  switch (true) {
    case kind === "REGISTRATION":
      emailSender(data, {
        subject: "E mail de confirmation",
        body: "Bienvenue sur Instagram",
      });
      break;
    case kind === "FORGOTTEN_PASSWORD":
      break;
    case kind === "SUCCESS_ORDER":
      break;
  }
}

module.exports = kindChecker;

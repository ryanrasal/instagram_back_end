const connection = require("../../db");
const { passwordHasher } = require("../services/PasswordHelper");
const EmailSenderService = require("../services/EmailSenderService");

async function fetchUser() {
  const sql = "SELECT * FROM user";

  return connection
    .promise()
    .query(sql)
    .then(async ([rows]) => {
      return { status: 200, message: rows };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function deleteUser(id) {
  console.warn("je suis le id de deleteuser", id);
  let sqlQuery = `DELETE FROM user where id = ${id}`;

  return connection
    .promise()
    .query(sqlQuery)
    .then(async ([rows]) => {
      return { status: 200, message: {} };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function fetchSearchUser(firstname, userEmail) {
  const sql = `SELECT * FROM user WHERE firstname LIKE '%${firstname}%' AND email != '${userEmail}'`;
  return connection
    .promise()
    .query(sql)
    .then(async ([rows]) => {
      return { status: 200, message: rows };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function insertUser(data) {
  console.warn("data USerManager", data)
  const sql =
    "INSERT INTO user (firstname, lastname, pseudo, followers, suivies, image, role, email, password, address, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  data.password = await passwordHasher(data.password);

  let bodyResponse = { ...data };

  return connection
    .promise()
    .query(sql, Object.values(data))
    .then(async ([rows]) => {
      bodyResponse.id = rows.insertId;
      EmailSenderService("REGISTRATION", {
        email: data.email,
        fullName: data.firstname + " " + data.lastname,
      });

      return { status: 201, message: bodyResponse };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

module.exports = {
  fetchUser,
  insertUser,
  fetchSearchUser,
  deleteUser,
};

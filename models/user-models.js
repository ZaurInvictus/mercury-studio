const db = require("../database/db-config.js")

module.exports = {
  add,
  find,
  findBy,
  findById,
}

// POSTGRE & SQLITE
async function add(user) {
  let ids = await db("users").insert(user, "id")
  const [id] = ids
  return findById(id)
}

function find() {
  return db("users").select("*");
}

function findBy(filter) {
  return db("users").select("*").where(filter).first()
}

function findById(id) {
  return db("users").select("*").where({ id }).first()
}



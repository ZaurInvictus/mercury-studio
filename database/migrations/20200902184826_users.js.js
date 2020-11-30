exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments()
    tbl.string("first_name", 128).notNullable()
    tbl.string("last_name", 128).notNullable()
    tbl.string("email", 128).notNullable()
    tbl.string("date", 128).notNullable()
 
    tbl.timestamp("created_at").defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users")
}

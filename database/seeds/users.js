
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Zaur",
          last_name: "Guliyev",
          email: "test@gmail.com",
          date: "04/09/2020",
        },
        {
          first_name: "John",
          last_name: "Doe",
          email: "john@gmail.com",
          date: "05/06/2021",
        },
      ]);
    });
};

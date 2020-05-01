exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 12345678, make: 'FORD', model: "FOCUS", mileage: "100,000",},
        {VIN: 77543211, make: 'FORD', model: "TAURUS", mileage: "120,000",},
        {VIN: 54321111, make: 'TOYOTA', model: "CAMRY", mileage: "50,000",},
        {VIN: 12654389, make: 'HONDA', model: "", mileage: "10,000",}
      ]);
    });
}; 

exports.seed = function(knex) {
  return knex('resources').truncate()
  .then(function (){
    return knex('resources')
  .insert([
      {
        id: 1,
        resource_name: "My First Resource",
        resource_description: "Description of my first resource"
      },
      {
        id: 2,
        resource_name: "My Second Resource",
        resource_description: "Description of my Second resource"
      },
      {
        id: 3,
        resource_name: "My third Resource",
        resource_description: "Description of my third resource"
      }
    ])
  })
};

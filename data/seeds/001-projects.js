
exports.seed = function(knex) {
  return knex('projects').truncate()
  .then(function (){
    return knex('projects')
    .insert([
      {
        id: 1,
        project_name: 'Burnaby Construction Contract',
        project_description: "Fixing and building houses and roofs and such",
        project_completed: false
      },
      {
        id: 2,
        project_name: 'Homestead Land Contract',
        project_description: "This project is to buy a piece of land",
        project_completed: false
      },
      {
        id: 3,
        project_name: 'Native Roofing Contract',
        project_description: "Description of roofing contract and other construction activities",
        project_completed: false
      },
    ])
  })
  
};

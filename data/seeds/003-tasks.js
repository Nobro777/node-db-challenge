
exports.seed = function(knex) {
  return knex('tasks').truncate()
  .then(function (){
    return knex('tasks')
    .insert([
      {
        id: 1, 
        task_description: 'my 1th task',
        task_notes: 'my task notes',
        task_completed: false,
        project_id: 2
      },
      {
        id: 2, 
        task_description: 'my 2th task',
        task_notes: 'my task notes',
        task_completed: false,
        project_id: 1
      },
      {
        id: 3, 
        task_description: 'my 3th task',
        task_notes: 'my task notes',
        task_completed: false,
        project_id: 2
      },
      {
        id: 4, 
        task_description: 'my 4th task',
        task_notes: 'my task notes',
        task_completed: false,
        project_id: 3
      },
      {
        id: 5, 
        task_description: 'my 5th task',
        task_notes: 'my task notes',
        task_completed: false,
        project_id: 3
      },
      {
        id: 6, 
        task_description: 'my 6th task',
        task_notes: 'my task notes',
        task_completed: false,
        project_id: 1
      }
    ])
  }
)}

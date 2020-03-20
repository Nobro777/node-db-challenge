
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", item => {

        item.increments()
        item.string("project_name", 255)
        .notNullable()
        item.text("project_description")
        item.boolean("project_completed")
        .defaultTo(false)

    })

    .createTable("resources", item => {

        item.increments()
        item.string("resource_name", 255)
        .notNullable()
        .unique()
        item.string("resource_description")

    })
    
    .createTable("tasks", item => {

        item.increments()

        item.string("task_description")
        .notNullable()

        item.text("task_notes")

        item.boolean("task_completed")
        .defaultTo(false)

        item.integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")

    })

    .createTable("project-resources", item => {

        item.integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")

        item.integer("resource_id")
            .notNullable()
            .references("id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        item.primary(['project_id', 'resource_id'])

    })
};

exports.down = function(knex) {
    return (
    knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
    .dropTableIfExists("project-resources")
)};

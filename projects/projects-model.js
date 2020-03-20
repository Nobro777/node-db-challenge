const db = require('../data/dbConfig.js')

module.exports = {
    getProjects,
    addProject,
    getAllResources,
    addResource,
    getTasks,
    addTask
};

function getProjects() {
    return db('projects');
}

function findById(id) {
    return db('projects').where({ id }).first()
}

function getAllResources() {
    return db('resources')
}

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return findById(ids[0])
    });
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
}

function addTask(task) {
    return db('tasks')
    .insert(task)
}

function getTasks(id) {
    return db('projects')
    .join('tasks', 'tasks.project_id', 'projects.id')
    .select('*')
    .where({ 'tasks.project_id': id });
}


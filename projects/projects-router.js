const express = require('express')

const db = require('./projects-model.js')

const router = express.Router()

// WORKING
router.get('/', (req, res) => {
    db.getProjects()
    .then(projects => {
        if (projects){
        projects.map(project => {
            project.project_completed = project.project_completed === true;
        });
        res.status(200).json(projects);
        } else {
            res.status(404).json({
                error: "404 error"
            })
        }
    })
    .catch(err => {
        res.status(500).json({ 
            error: "Unable to access database" 
        });
        console.log(err)
    });
})

// WORKING
router.get('/resources', (req, res) => {
    db.getAllResources()
    .then(item => {
        res.status(200).json(item)
    })
    .catch((err) => {
        res.status(500).json({
            error: "500 error",
            err
        })
    })
})

//WORKING
router.post('/resources', (req, res) => {
    const resource = req.body;

    db.addResource(resource)

    .then(() => {
        db.getAllResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(() => {
            res.status(500).json({ error: "500 error cant access data" });
        });
    })
    .catch(() => {
        res.status(500).json({ error: "500 error cant add resource" });
    });
})

// WORKING
router.post('/', (req, res) => {
    db.addProject(req.body)
    .then(() => {
        db.getProjects()
        .then(items => {
            items.map(item => {
                res.status(201).json({
                    success: "item created",
                    item
                })
            })
        })
        .catch(err => console.log("404 error fix this"))
    })
    .catch((err) => {
        res.status(500).json({
            err: "500 error",
            err
        })
    })
})

// WORKING
router.get('/:id/tasks', (req, res) => {
    if (db.getTasks(req.params.id)){
    db.getTasks(req.params.id)
    .then(tasks => {
        if (tasks){
        console.log(tasks)
            tasks.map(task => {
                res.status(200).json({
                    tasks
                })
        })} else {
            res.status(404).json({
                error: "404 error not found"
            })
        }
    })
    .catch((err) => {
        res.status(500).json({
        error: "500 error not found",
        err
        })
    })
    } else {
        res.status(500).json({
            error: "id not found"
        })
    }
})

//WORKING
router.post('/:id/tasks', (req, res) => {
    const task = req.body;
    task.project_id = req.params.id;
    db.addTask(task)
        .then(() => {
        db.getTasks(req.params.id)
            .then(tasks => {
                tasks.map(task => {
                res.status(201).json({
                    success: "success",
                })
            });
            res.status(200).json(tasks);
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "500 error cant load" });
        });
    })
    .catch(() => {
        res.status(500).json({ errorMessage: "500 error cant add" });
    });
});


module.exports = router;
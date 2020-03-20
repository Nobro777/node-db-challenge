const server = require('./server')

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
})

server.get('/', (req, res) => {
    res.send('<h1>Server IS WORKING</h1>')
})
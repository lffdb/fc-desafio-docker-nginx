const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values ('Luis')`
connection.query(sql)

app.get('/', (req, res) => {    
    let html = '<h1>Full Cycle Rocks!!!</h1>'

    connection.query("SELECT name FROM people", (err, result) => {
        if (err) throw err

        html += "<ul>"
        result.forEach((people) => {
            html += `<li>${people.name}</li>`
        });
        html += "</ul>"
        res.send(html)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
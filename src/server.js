const PORT = 3003

const express = require('express')
const bodyParser = require('body-parser')
const requisicoes = require('./requisicoes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/tarefas',  (req, res) => {
    res.send(requisicoes.getTarefas())
})

app.get('/tarefas/:id', (req, res) => {
    const tarefa = requisicoes.getTarefa(req.params.id)

    res.send(tarefa)
})

app.delete('/tarefas/:id', (req, res) => {
    const tarefa = requisicoes.deletaTarefa(req.params.id)

    res.send(tarefa)
})

app.post('/tarefas', (req, res) => {
    const nomeTarefa = req.body.nome
    const horario = req.body.horario

    const tarefa = requisicoes.novaTarefa(nomeTarefa, horario)

    res.send(tarefa)
})

app.put('/tarefas/:id', (req, res) => {
    const nomeTarefa = req.body.nome
    const horario = req.body.horario
    const id = req.params.id

    const tarefa = requisicoes.novaTarefa(nomeTarefa, horario, id)

    res.send(tarefa)
})

app.listen(PORT, () => {
    console.log(`Rodando na porta: ${PORT}`)
})

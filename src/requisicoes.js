const fs = require('fs')

const caminhoBD = './BancodeDados/tarefas.json'
let tarefas = require(caminhoBD)

const atualizaTarefas = () => {
    fs.writeFileSync(`src/${caminhoBD}`, JSON.stringify(tarefas, null, 4), erro => console.log(erro))
    tarefas = require(caminhoBD)
}

const getTarefas = () => tarefas || {}
const getTarefa = id => tarefas[id] || {}

const deletaTarefa = id => {
    const tarefa = tarefas[id]
    delete tarefas[id]

    atualizaTarefas()

    return tarefa
}

const novaTarefa = (nome, horario, id) => {
    id = id || Object.keys(tarefas).length + 1

    const tarefa = {
        nome,
        horario,
        id
    }

    tarefas[id] = tarefa
    atualizaTarefas()

    return tarefa
}

module.exports = {
    getTarefas,
    getTarefa,
    deletaTarefa,
    novaTarefa
}
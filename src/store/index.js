import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        tarefas: []
    },
    mutations: {
        adicionarTarefa(state, tarefa){
            state.tarefas.push(tarefa);
        },
        editarTarefa(state, tarefa){
            state.tarefas.forEach(item => {
                if (item.id == tarefa.id) {
                    item = tarefa;
                }
            });
        },
        excluirTarefa(state, id){
            state.tarefas = state.tarefas.filter(item => item.id != id);
        },
        carregarTarefas(state, tarefas){
            state.tarefas = tarefas;
            console.log(state.tarefas);
        },
        tarefaConcluida(state, tarefa){
            state.tarefas.forEach(item => {
                if (item.id == tarefa.id) {
                    item.concluida = !tarefa.concluida;
                }
            });
        },
    },
    actions: {
        adicionarTarefa({ commit }, tarefa) {
            axios
                .post("http://localhost:8000/api/v1/todos/", tarefa)
                .then(response => {
                    commit('adicionarTarefa', tarefa);
                    alert("Tarefa adicionada com sucesso!!!");
                })
        },
        editarTarefa({ commit }, tarefa) {
            axios
                .put("http://localhost:8000/api/v1/todos/" + tarefa.id, {
                    "titulo": tarefa.titulo,
                    "tarefa": tarefa.tarefa,
                    "data": tarefa.data,
                    "concluida": tarefa.concluida
                })
                .then(response => {
                    commit('editarTarefa', tarefa);
                    alert("Tarefa editada com sucesso!!!");
                })
        },
        excluirTarefa({ commit }, id) {
            if(confirm("Deseja realmente excluir a tarefa?")){
                axios
                    .delete("http://localhost:8000/api/v1/todos/" + id)
                    .then(response => {
                        commit('excluirTarefa', id);
                        alert("Tarefa excluída com sucesso!!!");
                    })
            }
        },
        carregarTarefas({ commit }) {
            axios
                .get("http://localhost:8000/api/v1/todos/")
                .then(response => {
                    commit('carregarTarefas', response.data);
                })
        },
        tarefaConcluida({ commit }, tarefa) {
            axios
                .put("http://localhost:8000/api/v1/todos/" + tarefa.id, {
                    "titulo": tarefa.titulo,
                    "tarefa": tarefa.tarefa,
                    "data": tarefa.data,
                    "concluida": !tarefa.concluida
                })
                .then(response => {
                    commit('tarefaConcluida', tarefa);
                })
        },
        
    }
});

export default store;

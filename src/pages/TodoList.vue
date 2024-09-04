<script>
    // Código Javascript aqui
    import { mapState } from 'vuex';
    export default {
        data() {
            return {
                novaTarefa: {
                    titulo: "",
                    tarefa: "",
                    concluida: false
                },
                error: "",
                editar: false,
                id_editar: undefined
            }
        },
        methods: {
            adicionarTarefa(){
                // Código aqui
                if(this.novaTarefa.titulo && !this.editar) {
                    if(this.novaTarefa.titulo){
                        this.$store.dispatch('adicionarTarefa', this.novaTarefa);
                        this.novaTarefa = {
                            concluida: false
                        };
                        this.error = "";
                    } else {
                        this.error = "Você não informou um título ou tarefa!!!";
                    }
                    
                } else {
                    if(this.novaTarefa.titulo){
                        this.$store.dispatch('editarTarefa', this.novaTarefa);
                        this.editar = false;
                        this.id_editar = undefined;
                        this.novaTarefa = {
                            concluida: false
                        };
                        this.error = "";
                    } else {
                        this.error = "Você não informou a tarefa!!!";
                        // alert("Uma tarefa deve ser informada!!!");
                    }
                }
            },
            editarTarefa(tarefa) {
                // Código aqui
                this.novaTarefa = tarefa;
                this.novaTarefa.concluida = !tarefa.concluida;
                this.editar = true;
                this.id_editar = tarefa.id;
                this.$refs.tarefa.focus();
            },
            data_formatada(data) {
                let data_f = new Date(data);
                return data_f.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
            },
            tarefaConcluida(tarefa){
                this.$store.dispatch('tarefaConcluida', tarefa);
            },
        },
        computed: mapState([
            'tarefas'
        ]),
    }
</script>
<template>
    <!-- Código HTML aqui -->
    <h2 class="text-center subtitulo mb-3">Lista de Tarefas</h2>
    <section class="container text-center mb-5">
        <div class="row row-cols-1 row-cols-md-3 g-4 tarefas container">
            <div class="col" v-for="(tarefa, index) in tarefas">
                <div class="card h-100">
                    <img src="../assets/img/paisagens/paisagem-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body d-flex flex-column align-items-center">
                        <h5 class="card-title" 
                            :class="{ concluida : tarefa.concluida }">
                            {{ tarefa.titulo }}
                        </h5>
                        <div class="card-body">
                            <p class="text-center">{{ tarefa.tarefa }}</p>
                            <p class="text-center">{{ data_formatada(tarefa.data) }}</p>
                        </div>
                        <button 
                            @click="tarefaConcluida(tarefa)" 
                            class="btn btn-primary">
                            <span v-if="!tarefa.concluida">Concluir</span>
                            <span v-else>Refazer</span>
                        </button>
                        <button 
                            @click="editarTarefa(tarefa)" 
                            class="btn btn-warning">
                            Editar
                        </button>
                        <button 
                            @click="this.$store.dispatch('excluirTarefa', tarefa.id)"
                            type="button"
                            class="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#modalExcluir">
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="d-flex flex-column container-fluid margen-b">
        <form @submit.prevent class="d-flex flex-column align-items-center container">
            <input
                type="text"
                placeholder="Adicione um título para a tarefa..."
                class="form-control m-3"
                v-model="novaTarefa.titulo"
                ref="tarefa"
                required
            />
            <input
                type="text"
                placeholder="Adicione uma tarefa..."
                class="form-control"
                v-model="novaTarefa.tarefa"
                required
            />
            <input
                type="date"
                class="form-control"
                placeholder="Informe a data da tarefa..."
                v-model="novaTarefa.data"
            />
            <input
                type="checkbox"
                class="form-check-input"
                v-model="novaTarefa.concluida"
            />
            <span class="text-danger m-3" v-show="error">{{ error }}</span>
            <div class="d-flex flex-row justify-content-around">
                <button class="btn btn-primary" @click="adicionarTarefa()">
                    <span v-if="!this.editar">Adicionar</span>
                    <span v-else>Editar</span>
                </button>
                <button class="btn btn-warning" @click="cancelar()">
                    Cancelar Edição
                </button>
                <button class="btn btn-danger">
                    Limpar lista
                </button>
            </div>
        </form>
    </div>
</template>
<style scope>
    /* Estilização CSS aqui */
    .d-flex button {
        width: 160px;
        height: 50px;
        margin: 15px;
        padding: 5px;
    }

    .subtitulo {
        font-size: 35px;
        margin-bottom: 25px;
        padding-bottom: 5px;
        text-decoration: underline;
        text-align: center;
        font-weight: bold;
    }

    .item {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        line-height: 25px;
        width: 60%;
        padding: 25px;
    }

    .item:hover {
        cursor: pointer;
    }

    .concluida {
        text-decoration: line-through;
    }
    .margen-b {
        margin-bottom: 80px;
    }

    .card-tarefa {
        width: 18rem;
    }

    .tarefas {
        margin-bottom: 30px;
    }
</style>

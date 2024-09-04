<script>
    // Código Javascript aqui
</script>
<template>
    <!-- Código HTML aqui -->
    <h2 class="text-center subtitulo mb-3">Lista de Tarefas</h2>
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

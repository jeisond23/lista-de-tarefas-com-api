<script>
    // Código Javascript aqui
    export default {
        data() {
            return {
                // Propriedades aqui
            }
        }
    }
</script>
<template>
    <!-- Código HTML aqui -->
    <header class="mb-5">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand">
                    <img src="../assets/img/logo-firjan.png" alt="Logo" class="logo-firjan">
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">HOME</RouterLink>
                        </li>
                        <li class="nav-item">
                            
                            <RouterLink to="/tarefas" class="nav-link">TAREFAS</RouterLink>
                        </li>                    
                    </ul>
                </div>
            </div>
        </nav>
      <div class="container-fluid mt-5 text-center">
          <h1>Curso Programador FrontEnd</h1>
      </div>
    </header>
</template>
<style>
    /* Estilização CSS aqui */
</style>
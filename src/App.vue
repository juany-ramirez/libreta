<template>
  <div class="themeBiblioteca"><!--App.vue es el componente raiz, En el app esta el layout-->
  	<div >
      <nav class="nav-extended">
        <div class="nav-wrapper">

          <a href="#" class="brand-logo"><i class="large material-icons">face</i> Libreta de Contactos</a>
        </div>
      </nav>
  	</div>
  	<div>
  		<router-view ></router-view><!--Aqui se renderiza lo de cada ruta-->
  	</div>
    <footer class="page-footer">

      <div class="footer-copyright">
        <div class="container">
        © 2017 Copyright
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    logout(){
      this.$http.get('http://localhost:8000/v1/logout').then((response)=>{
        this.$router.push('/');
      });
    }
  }
}
</script>

<style scoped>
  .themeBiblioteca{
    background-color: #D1D1D1;
  }
  .nav-extended{
    padding-left: 100px;
    padding-right: 100px;
    background-color: #4C1B1B;
    font-family: 'Spectral', serif;
    font-size: 65px;
  }
  .page-footer{
    background-color: #4C1B1B;
  }
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }

</style>

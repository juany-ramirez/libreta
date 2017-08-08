<template>
	<div class="contenedor">
		<div class="contenedorCredenciales z-depth-5">
			<ul id="tabs-swipe-demo" class="tabs">
				 <li class="tab col s3"><a class="active" href="#test-swipe-11">LOGIN</a></li>
				 <li class="tab col s3"><a href="#test-swipe-21">REGISTRARSE</a></li>
			 </ul>
			 <div id="test-swipe-11" class="col s12">
				 	<div class="input-field col s6">
	          <i class="material-icons prefix">account_circle</i>
	          <input id="icon_prefix" type="text" v-model="user.username">
	          <label for="icon_prefix">Username</label>
	        </div>
					<div class="input-field col s6">
	          <i class="material-icons prefix">view_week</i>
	          <input id="icon_pass" type="password" v-model="user.password">
	          <label for="icon_pass">Password</label>
	        </div>
					<button class="btn waves-effect waves-light black" type="submit" v-on:click="login" >Login
					 	<i class="material-icons left">send</i>
				 	</button>
			 </div>
			 <div id="test-swipe-21" class="col s12">
				 <div class="input-field col s6">
					 <i class="material-icons prefix">account_circle</i>
					 <input id="icon_prefix1" type="text" v-model="usuario.username">
					 <label for="icon_prefix1">Username</label>
				 </div>
				 <div class="input-field col s6">
					 <i class="material-icons prefix">view_week</i>
					 <input id="icon_pass1" type="password" v-model="usuario.password">
					 <label for="icon_pass1">Password</label>
				 </div>
				 <button class="btn waves-effect waves-light black" type="submit" v-on:click="register">Register
					 <i class="material-icons left">send</i>
				 </button>
			 </div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'login',
		data(){
			return{
				loading: false,
				user:{
				},
				usuario:{

				}

			}
		},
		methods: {
			login(){
				this.$http.post('http://localhost:8000/v1/login', this.user).then((response)=>{
					this.$router.push('/home');
					swal("Bienvenido!", response.body.username.toUpperCase() ,"success");
				});
			},
			register(){
				console.log("ddddd");
				this.usuario.scope = ['admin'];
				this.$http.post('http://localhost:8000/v1/register', this.usuario).then((response)=>{
					this.$router.push('/home');
					swal("Se ha creado tu usuario", response.body.username, "success");
				});
			}
		},
		beforeMount(){

		},
		mounted(){
			$('ul.tabs').tabs();
		}
	}
</script>

<style scoped>
		.contenedor{
			background-image: url("https://static.pexels.com/photos/159621/open-book-library-education-read-159621.jpeg");
			background-size: cover;
	    background-repeat: no-repeat;
			padding-left: 30%;
			padding-right: 30%;
			padding-top: 15%;
			padding-bottom: 15%;
		}
		h2{
			font-family: 'Passion One', cursive;

		}
		button{
			background-color: #B8630B;
		}
		.contenedorCredenciales{

		}
			#test-swipe-11{
				/*background-color: #E6E2AF;*/
				background-color: white !important;
				color: #4C1B1B;
				padding-left: 50px;
				padding-right: 50px;
				padding-top: 20px;
				padding-bottom: 30px;
				text-align: center;
			}
			#test-swipe-21{
				/*background-color: #F6E497;*/
				background-color: white !important;
				color: #4C1B1B;
				padding-left: 50px;
				padding-right: 50px;
				padding-top: 20px;
				padding-bottom: 30px;
				text-align: center;
			}
			body{
				font-family: 'Libre Franklin', sans-serif;
				font-size: 20px;
			}
		.tabs .indicator {
			background-color: #A7A37E !important;
			color: #4C1B1B !important;
		}
		.tabs {
			background-color: #B9121B !important;
			color: #4C1B1B !important;
			font-family: 'Spectral', serif;
			font-weight: bold;
		}

		.tabs .tab a.active {
		  color: white;
		}

		.tabs .tab a:hover {
		  color: gray;
		}

		.tabs .tab a {
		  color: #4C1B1B;
		}
		.table thead{
			font-family: 'Josefin Slab', serif;
			font-weight: bold;
			font-size: 30px;
		}
		.table{
			font-family: 'Spectral', serif;
			font-size: 17px;

			background: white;
		  border-radius:3px;
		  border-collapse: collapse;
		  height: 320px;
		  padding:5px;
		  width: 100%;
		  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
		  animation: float 5s infinite;

		}
		#boton{
			background-color: #BD8D46;
		}
		th {
		  color:#D5DDE5;;
		  background:#1b1e24;
		  border-bottom:4px solid #9ea7af;
		  border-right: 1px solid #343a45;
		  font-size:23px;
		  font-weight: 100;
		  padding:24px;
		  text-align:left;
		  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
		  vertical-align:middle;
		}

		/* label focus color */

		.input-field input:focus + label {
			color: #4C1B1B !important;
		}
		/* label underline focus color */
		.row .input-field input:focus {
			border-bottom: 1px solid #4C1B1B !important;
			box-shadow: 0 1px 0 0 #4C1B1B !important
		}
		.input-field input:focus + label {
			color: #4C1B1B !important;
		}
		/* label underline focus color */
		.row .input-field input:focus {
			border-bottom: 1px solid #4C1B1B !important;
			box-shadow: 0 1px 0 0 #4C1B1B !important
		}
		.input-field textarea:focus + label {
			color: #4C1B1B !important;
		}
		/* label underline focus color */
		.row .input-field textarea:focus {
			border-bottom: 1px solid #4C1B1B !important;
			box-shadow: 0 1px 0 0 #4C1B1B !important
		}
</style>

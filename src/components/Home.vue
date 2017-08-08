<template>
	<div class="container">
		<br><br>
		<a class="waves-effect center waves-light btn modal-trigger btn-large" v-on:click="nuevoBook" href="#modal1" id="boton">
			<i class="large material-icons left">account_circle</i>Crear nuevo contacto</a>
  	<!-- Modal Structure -->
	  <div id="modal1" class="modal">
	    <div class="modal-content">
	      <h1 class="grey darken-4 white-text">Contacto</h1>
				<div class="row">
		        <div class="input-field col s6">
							<i class="material-icons prefix">account_circle</i>
							<input type="text" v-model="book.titulo" :disabled="loading"  id="Titulo">
		          <label for="Titulo">Nombre del contacto</label>
						</div>
						<div class="input-field col s6">
							<i class="material-icons prefix">phone</i>
							<input type="number" v-model="book.publicacion" :disabled="loading"  id="Publicación">
		          <label for="Publicación">Teléfono</label>
						</div>

						<div class="input-field col s12">
							<i class="material-icons prefix">email</i>
							<input type="text" v-model="book.titulo" :disabled="loading"  id="Correos">
		          <label for="Correos">Correos electrónicos</label>
						</div>
						<div class="input-field col s12">
							<i class="material-icons prefix">whatshot</i>
							<input type="number" v-model="book.publicacion" :disabled="loading"  id="Redes">
		          <label for="Redes">Redes Sociales</label>
						</div>
						<h2> Nuevo Vinculo </h2>
						<div class="input-field col s5">
							<i class="material-icons prefix">perm_contact_calendar</i>
							<input v-model="book.keywords" :disabled="loading" id="Keywords" type="text"  class="validate">
		          <label for="Keywords">Nombre</label>
		        </div>
						<div class="input-field col s5">
							<i class="material-icons prefix">fingerprint</i>
		          <input v-model="book.keywords" :disabled="loading" id="Keywords" type="text"  class="validate">
		          <label for="Keywords">Vinculo</label>
		        </div>
						<a v-on:click="startToModifyBook(book)" class="btn-floating btn-small waves-effect waves-light grey darken-4">
							<i class="material-icons">add</i>
						</a>
		      </div>
					<a class="waves-effect waves-light btn-large center" v-on:click="llamadoFuncion" :disabled="loading" id="boton">
						<i class="material-icons left" >check_circle</i> OK!
					</a>
	    </div>
	    <div class="modal-footer">

	    </div>
	  </div>
		<br><br>
		<table class="table centered">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Teléfono</th>
					<th>Correo Electrónico</th>
					<th>Redes Sociales</th>
					<th>Vinculos con otros Contactos</th>
					<th>Modificar</th>
					<th>Borrar</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="book in books">
					<td>{{book.titulo}}</td>
					<td>{{book.genero}}</td>
					<td>{{book.autor}}</td>
					<td>{{book.publicacion}}</td>
					<td>{{book.editorial}}</td>
					<td>
						<a v-on:click="startToModifyBook(book)" class="btn-floating btn-small waves-effect waves-light grey darken-4"><i class="material-icons">create</i></a>
					</td>
					<td>
						<a v-on:click="deleteBook(book._id)" class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">delete</i></a>
					</td>
				</tr>
			</tbody>
		</table>
		<br>
	</div>
</template>

<script>
	export default{
		name: 'home',
		data(){
			return{
				books: [],
				book:{
				},
				idModificar: '',
				accion:'',
				loading: false,

				contact: {},
				contacts: [],
				vinculo: {
					nombre: '',
					tipo: ''
				},
				vinculos: [
				],
				correos: [],
				redes:[]

			}
		},
		methods: {
			getBooks(){
				this.$http.get('http://localhost:8000/books').then((response)=>{
					this.books=response.body;
				});
			},
			nuevoBook(){
				this.book = {};
			},
			llamadoFuncion(){
				if(this.idModificar!=''){
					this.loading=true;
          Materialize.updateTextFields();
          this.$http.put('http://localhost:8000/books/update/'+this.idModificar,this.book)
  				.then((response)=>{
  					if(response.body.success){
              this.getBooks();
              this.loading=false;
  						sweetAlert("Modificado con exito!", "Los cambios estan en la tabla", "success");
              this.book= {};
  					}else{
  						sweetAlert("Oops...", "Error al modificar", "error");
              this.loading=false;
            }
  				});
				}else {
					this.loading=true;
					this.$http.post('http://localhost:8000/books/create',this.book)
					.then((response)=>{
						this.loading=false;
						if(response.body.success){
							swal("Creado con exito!", "Los cambios estan en la tabla", "success");
							this.getBooks();
						}else{
							sweetAlert("Oops...", "Error al crear", "error");
						}
					});
				}
			},
			startToModifyBook(book){
        this.selectedTab= 'test-swipe-2';
        this.idModificar = book._id;
        this.book = book;
				Materialize.updateTextFields();
				$('#modal1').modal('open');
        Materialize.updateTextFields();
			},
			// createBook(){
			// 	this.loading=true;
			// 	this.$http.post('http://localhost:8000/books/create',this.book)
			// 	.then((response)=>{
			// 		this.loading=false;
			// 		if(response.body.success){
			// 			swal("Creado con exito!", "Los cambios estan en la tabla", "success");
			// 			this.getBooks();
			// 		}else{
			// 			sweetAlert("Oops...", "Error al crear", "error");
			// 		}
			// 	});
			// },
			// modifyBook(){
      //   this.loading=true;
      //   if(this.idModificar!=''){
      //     Materialize.updateTextFields();
      //     this.$http.put('http://localhost:8000/books/update/'+this.idModificar,this.book)
  		// 		.then((response)=>{
  		// 			if(response.body.success){
      //         this.getBooks();
      //         this.loading=false;
  		// 				sweetAlert("Modificado con exito!", "Los cambios estan en la tabla", "success");
      //         this.book= {};
  		// 			}else{
  		// 				sweetAlert("Oops...", "Error al modificar", "error");
      //         this.loading=false;
      //       }
  		// 		});
      //   }
      // },
			deleteBook(id){
					this.loading=true;
					this.$http.delete('http://localhost:8000/books/delete/'+id)
						.then((response)=>{
						this.loading=false;
						this.getBooks();
						if(response.body.success){
							swal("Deleted!", "Se ha eliminado el Libro", "success");
						}else{
							sweetAlert("Oops...", "Error al borrar", "error");
						}
					});
			}
		},
		beforeMount(){
			this.getBooks();
		},
		mounted(){
			$('.modal').modal();
			$('ul.tabs').tabs();
			$('select').material_select();
		}
	}
</script>

<style scoped>
		h2{
			font-family: 'Passion One', cursive;

		}
			#test-swipe-1{
				/*background-color: #E6E2AF;*/
				color: #4C1B1B;
				padding-left: 50px;
				padding-right: 50px;
				padding-top: 20px;
				padding-bottom: 30px;
				text-align: center;
			}
			#test-swipe-2{
				/*background-color: #F6E497;*/
				color: #4C1B1B;
				padding-left: 50px;
				padding-right: 50px;
				padding-top: 20px;
				padding-bottom: 30px;
				text-align: center;
			}
			#test-swipe-3{
				/*background-color: #E6E2AF;*/
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
			border-radius: 30px;
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
			background-color: #B8630B;
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

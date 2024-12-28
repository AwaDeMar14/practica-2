<template>
    <div class="container-md">
        <b-card-group columns>
          <div columns v-for="proyecto in proyectos" :key="proyecto.id">
           <Card2 :autor="proyecto.autor" :srcimg="proyecto.srcimg" :alt="proyecto.alt" :titulo="proyecto.titulo" :texto="proyecto.texto" :url="proyecto.url"></Card2> 
          </div>
         </b-card-group>
     </div>
</template>

<script>
    import Card2 from '../components/Card2.vue' 
    //(para utilizar en localhos)
    //const lstProysJson = '/public/../proyectosWD2021.json';
    //para utilizar en produccion
    const lstProysJson = 'https://raw.githubusercontent.com/Lii-Rose/mijson/refs/heads/main/json.json';
    
    export default {
      props: {  
       name: {
          type: String,
          default: 'ListaProyectos'
        }
      },
      components: {
            Card2
          },
      data() {
          return {
            proyectos:[],
            githubPage: 1,
            page: 1,
            loading: false,
            perPage: 5
          }
        },
        mounted() {
          this.fetchData()
        },
        /*
        computed: {
          showRepos() {
            let start = (this.page - 1) * this.perPage;
            let end = start + this.perPage;
            return this.repositories.slice(start, end);
          },
          lastPage() {
            let length = this.repositories.length;
            return length / this.perPage;
          }
        },*/
        methods: {
            async fetchData() {
              const res = await fetch (lstProysJson);
              const val= await res.json();
              this.proyectos=val;
              console.log(val);
            }
          /*
          fetchData() {
            this.loading = true;
            axios.get(lstProysJson + this.githubPage)
              .then(({data}) => {
                this.repositories = this.repositories.concat(data.items);
                this.loading = false;
              })
              .catch((err) => {
                throw err;
              })
          },
          prevPage() {
            this.page--;
            window.scrollTo({top: 0, behavior: 'smooth'});
          },
          nextPage() {
            if (this.page == this.lastPage - 1) {
              this.githubPage++;
              this.fetchData();
            }
            this.page++;
            window.scrollTo({top: 0, behavior: 'smooth'});
          }
          */
        }
      }
    </script>
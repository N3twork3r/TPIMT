<template>
  <div class="formulaire">
     <div v-if="currentPersonne">
        <div class="input-group">   
            <span class="input-group-text" id="addon-wrapping">ID</span>
            <input type="text" class="form-control" placeholder="Identifiant" aria-label="Username" aria-describedby="addon-wrapping" id="id" 
                v-model="currentPersonne.id"/>
        </div>
        <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">Nom</span>
            <input type="text" class="form-control" placeholder="Dupont" aria-label="Username" aria-describedby="addon-wrapping" id="surname" 
              v-model="currentPersonne.name"/>
        </div>
        <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">Prenom</span>
            <input type="text" class="form-control" placeholder="Jean" aria-label="Username" aria-describedby="addon-wrapping" id="name" 
              v-model="currentPersonne.surname"/>
        </div>
        <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">Telephone</span>
            <input type="text" class="form-control" placeholder="0XXXXXXXXX" aria-label="Username" aria-describedby="addon-wrapping" id="phone" 
              v-model="currentPersonne.phone"/>
        </div>
        <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">Ville</span>
            <input type="text" class="form-control" placeholder="Paris" aria-label="Username" aria-describedby="addon-wrapping" id="city" 
              v-model="currentPersonne.city"/>
        </div>
    <a class="btn btn-warning" href="../" role="button">Annuler</a>
    <button class="btn btn-danger" @click="deletePersonne"> Supprimer </button>
    <button type="submit" class="btn btn-success" @click="updatePersonne"> Mettre à jour </button>

  </div>


<p>{{ message }}</p>

    
 </div>
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personne",
  data() {
    return {
      currentPersonne: null,
      message: ''
           };
         },

  methods: {
    getPersonne(id) {
      PersonneDataService.get(id)
        .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePersonne() {
      PersonneDataService.update(this.currentPersonne)
        .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
          this.submitted = true;
          this.message = 'Personne modifiée avec succès!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePersonne() {
      PersonneDataService.delete(this.currentPersonne.id)
        .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
          this.$router.push({ name:"personnes" });
        })
        .catch(e => {
          console.log(e);
        });

    }
  },
  mounted() {
    this.message = '';
    this.getPersonne(this.$route.params.id);
  }
};
</script>

<style>
.formulaire {
  max-width: 300px;
  margin: auto;
}
</style>

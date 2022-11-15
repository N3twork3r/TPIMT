<template>
  <div v-if="currentPersonne">
            <div class= "form-group">
              <label for="id">ID</label>
               <input type="text" class="" id="id" 
               v-model="currentPersonne.id"
              />
            </div>
            <div class= "form-group">
              <label for="id">Prénom</label>
              <input type="text" class="" id="surname" 
              v-model="currentPersonne.surname"
              />
            </div>
            <div class= "form-group">
              <label for="id">Nom</label>
              <input type="text" class="" id="name" 
              v-model="currentPersonne.name"
              />
            </div>
            <div class= "form-group">
              <label for="id">Téléphone</label>
              <input type="text" class="" id="phone" 
              v-model="currentPersonne.phone"
              />
            </div>
            <div class= "form-group">
              <label for="id">Ville</label>
              <input type="text" class="" id="city" 
              v-model="currentPersonne.city"
              />
            </div>
  </div>
    <button class="badge badge-danger mr-2" @click="deletePersonne"> Supprimer </button>
    <button type="submit" class="badge badge-success" @click="updatePersonne"> Mettre à jour </button>
    <p>{{ message }}</p>
    
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
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>

<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div v-if="personne">
            <div class= "form-group">
                <label for="id">ID</label>
                <input type="text" class="" id="id" 
                v-model="personne.id"/>
            </div>
              <div class= "form-group">
              <label for="id">Prénom</label>
              <input type="text" class="" id="surname" 
              v-model="personne.surname"/>
              </div>
            <div class= "form-group">
              <label for="id">Nom</label>
              <input type="text" class="" id="name" 
              v-model="personne.name"/>
            </div>
              <div class= "form-group">
                <label for="id">Téléphone</label>
                <input type="text" class="" id="phone" 
                v-model="personne.phone"/>
              </div>
            <div class= "form-group">
              <label for="id">Ville</label>
              <input type="text" class="" id="city" 
              v-model="personne.city"/>
            </div>
  </div>
  <div>
  <button @click="creerPersonne" class="btn btn-success">Ajouter</button>
</div>    
<!-- A COMPLETER -->

    </div>

    <div v-else>
      <h4>Personne ajoutée avec succès!</h4>
      <button class="btn btn-success" @click="resetForm">Ajouter une nouvelle personne</button>
    </div>
  </div>

</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "add-personne",
  data() {
    return {
      personne: {
        id: null,
        name: "",
        surname: "",
        phone: "",
        city: ""
      },
      submitted: false
    };
  }, 
methods: {
    creerPersonne() {
     var data = {
        id: this.personne.id,
        name: this.personne.name,
        surname: this.personne.surname,
        phone: this.personne.phone,
        city: this.personne.city,
        };
        
     

      // A COMPLETER
      PersonneDataService.create(data);
},

    resetForm() {
      this.submitted = false;
      this.personne = {};
     }
   }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>

<template>
  <div class="formulaire">
    <div v-if="!submitted">
      <div v-if="personne">
          <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">ID</span>
            <input type="text" class="form-control" placeholder="Identifiant obligatoire" aria-label="Username" aria-describedby="addon-wrapping" id="id" 
                v-model="personne.id" />
          </div>
          <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">Nom</span>
            <input type="text" class="form-control" placeholder="Dupont" aria-label="Username" aria-describedby="addon-wrapping" id="surname" 
              v-model="personne.name" />
          </div>
          <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">Prenom</span>
            <input type="text" class="form-control" placeholder="Jean" aria-label="Username" aria-describedby="addon-wrapping" id="name" 
              v-model="personne.surname"/>
          </div>
          <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">Telephone</span>
            <input type="text" class="form-control" placeholder="0XXXXXXXXX" aria-label="Username" aria-describedby="addon-wrapping" id="phone" 
              v-model="personne.phone"/>
          </div>
          <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">Ville</span>
            <input type="text" class="form-control" placeholder="Paris" aria-label="Username" aria-describedby="addon-wrapping" id="city" 
              v-model="personne.city"/>
          </div>
      </div>

        <div>
          <center>
            <a class="btn btn-warning" href="../" role="button">Annuler</a>
            <button @click="creerPersonne" class="btn btn-success">Ajouter</button>
          </center>
        </div>  
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

      PersonneDataService.create(data)
        .then(response => {
          this.personne = response.data;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });

    },


    resetForm() {
      this.submitted = false;
      this.personne = {};
     }
   }
};
</script>

<style>
.formulaire {
  max-width: 300px;
  margin: auto;
}
</style>

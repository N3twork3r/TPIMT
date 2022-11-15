<template>
  
  <ul>
    <li class=""
      :class="{ active: id == currentIndex }"
      v-for="(personne, id) in personnes"
      :key="id"
      @click="setActivePersonne(personne, id)"
    >
      {{ personne.surname }} {{ personne.name }}
    </li>
  </ul>

  <div v-if="currentPersonne"> <!-- si current pers existe dans ce cas là j'affiche ces valeur -->
    {{ currentPersonne.name }}
    {{ currentPersonne.surname }}
    {{ currentPersonne.phone }}
    {{ currentPersonne.city }}
    

    <router-link :to="'/personnes/' + currentPersonne.id" class="badge badge-warning">Modifier</router-link><!-- affiche le bouton modifier-->
  </div>
  <div v-else>
    <br>
    <p>Cliquez sur une des personnes pour afficher les détails.</p>
  </div>

</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personnes",
  data() {
    return {
      personnes: [],
      currentPersonne: null,
      currentIndex: -1,
    };
  },
  methods: {
    getPersonnes() {
      PersonneDataService.getAll()
        .then(response => {
          this.personnes = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    setActivePersonne(personne, index) {
      this.currentPersonne = personne;
      this.currentIndex = personne ? index : -1;
    },
  },
  mounted() {
    this.getPersonnes();
  }
};
</script>

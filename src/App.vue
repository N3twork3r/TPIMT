<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/Personnes" class="navbar-brand"> TP Front SpringBoot App Hamza</router-link><!-- balise routeur vers /Personnes -->
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/Personnes" class="nav-link">Personnes</router-link><!-- balise routeur vers /Personnes -->
        </li>
        <li class="nav-item">
          <router-link to="/ajouter-personne" class="nav-link">Ajouter</router-link> <!-- balise routeur vers /ajouter-personne -->
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

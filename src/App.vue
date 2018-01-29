<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-4">
        <div class="brand-logo">My e-Store</div>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background: #E3F2FD;
  margin: 0;
}
</style>

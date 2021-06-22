<template>
  <header class="hero">
    <div class="row sm:center">
      <h1 class="hero-headline">LightCSS Layout</h1>
    </div>
    <div class="row sm:center">
      <p class="hero-copy">A light css layout system based on the
        <a href="http://caniuse.com/#search=flexbox">
          <code class="inline-anchor">flex</code>
        </a> and
        <a href="http://caniuse.com/#search=grid">
          <code class="inline-anchor">grid</code>
        </a> display property.
      </p>
    </div>
    <div class="row sm:center">
      <a class="button invisible-xs visible-md" href="https://github.com/SimonMarcelLinden/LightCSS/archive/v1.0.0.zip">Download</a>
      <router-link class="button invisible-xs visible-md" to="/flex">Flex Layout</router-link>
      <router-link class="button invisible-xs visible-md" to="/grid">Grid Layout</router-link>
      <router-link class="button invisible-xs visible-md" to="/flex">Components</router-link>
      <a class="button" href="https://github.com/SimonMarcelLinden/LightCSS">Github</a></div>
  </header>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style>

</style>

<template>
  <div class="bg-white text-gray-500">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import "../node_modules/@simon.marcel.linden/lightcss/dist/lightcss.min.css";

blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

button,input,optgroup,select,textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0
}

button,select {
  text-transform: none
}

[type=button],[type=reset],[type=submit],button {
  -webkit-appearance: button
}

</style>

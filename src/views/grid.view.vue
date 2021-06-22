<template>
  <div class="container-fluid">
    <section class="page-section">
      <h2>Responsive</h2>
      <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs,
        sm, md &amp; lg viewport widths.</p>
      <div class="grid sm:grid-rows-3 sm:grid-columns-3">
        <div class="sm:grid-item sm:g-col-span-1-2 sm:g-row-span-1-2">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-2-3 sm:g-row-span-1-2">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-3-4 sm:g-row-span-1-2">
          <div class="box-row"></div>
        </div>

        <div class="sm:grid-item sm:g-col-span-1-2 sm:g-row-span-2-3">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-2-3 sm:g-row-span-2-3">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-3-4 sm:g-row-span-2-3">
          <div class="box-row"></div>
        </div>

        <div class="sm:grid-item sm:g-col-span-1-2 sm:g-row-span-3-4">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-2-3 sm:g-row-span-3-4">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-3-4 sm:g-row-span-3-4">
          <div class="box-row"></div>
        </div>

      </div>
      <pre>
<code>&lt;div class="grid sm:grid-rows-3 sm:grid-columns-3"&gt;
  &lt;div class="sm:grid-item sm:g-col-span-1-2 sm:g-row-span-1-2"&gt;
    &lt;div class="box-row"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
      </pre>
    </section>

    <!-- Rowspan -->
    <section class="page-section">
      <h2>Responsive</h2>
      <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs,
        sm, md &amp; lg viewport widths.</p>
      <div class="grid sm:grid-rows-3 sm:grid-columns-3">
        <div class="sm:grid-item sm:g-col-span-1-3 sm:g-row-span-1-3">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-3-4 sm:g-row-span-1-2">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-3-4 sm:g-row-span-2-3">
          <div class="box-row"></div>
        </div>

        <div class="sm:grid-item sm:g-col-span-1-2 sm:g-row-span-3-4">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-2-3 sm:g-row-span-3-4">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item sm:g-col-span-3-4 sm:g-row-span-3-4">
          <div class="box-row"></div>
        </div>

      </div>
      <pre>
<code>&lt;div class="grid sm:grid-rows-3 sm:grid-columns-3"&gt;
  &lt;div class="sm:grid-item sm:g-col-span-1-2 sm:g-row-span-1-2"&gt;
    &lt;div class="box-row"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
      </pre>
    </section>
    <!-- Gab -->
    <section class="page-section">
      <h2>Grid-Gab</h2>
      <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs,
        sm, md &amp; lg viewport widths.</p>
      <div class="grid sm:grid-rows-3 sm:grid-columns-3 sm:g-row-gab-1 sm:g-col-gab-1">
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>

        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>

        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>

      </div>
      <pre>
<code>&lt;div class="grid sm:grid-rows-3 sm:grid-columns-3 sm:g-row-gab-1 sm:g-col-gab-1"&gt;
  &lt;div class="sm:grid-item"&gt;
    &lt;div class="box-row"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
      </pre>
      <p>Alternative</p>
      <div class="grid sm:grid-rows-3 sm:grid-columns-3 sm:g-gab-0:1">
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>

        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>

        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>
        <div class="sm:grid-item">
          <div class="box-row"></div>
        </div>

      </div>
      <pre>
<code>&lt;div class="grid sm:grid-rows-3 sm:grid-columns-3 sm:g-gab-0:1"&gt;
  &lt;div class="sm:grid-item"&gt;
    &lt;div class="box-row"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
      </pre>
    </section>
  </div>
</template>

<script>
export default {
  name: "Flex",
  methods: {
    offset: function (index) {
      let offset = 12 - index;
      return `sm:col-${offset}-offset sm:col-${index}`
    }
  }
}
</script>

<style>

</style>

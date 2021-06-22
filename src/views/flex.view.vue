<template>
  <div class="container-fluid">
    <section class="page-section">
      <h2>Responsive</h2>
      <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs,
        sm, md &amp; lg viewport widths.</p>
      <div class="row">
        <div class="sm:col-12 md:col-3 lg:col-2 xl:col-1">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-6 md:col-6 lg:col-8 xl:col-10">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-6 md:col-3 lg:col-2 xl:col-1">
          <div class="box-row"></div>
        </div>
      </div>
      <div class="row">
        <div class="sm:col-12 md:col-3 lg:col-2 xl:col-1">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-12 md:col-9 lg:col-10 xl:col-11">
          <div class="box-row"></div>
        </div>
      </div>
      <div class="row">
        <div class="sm:col-10 md:col-6 lg:col-8 xl:col-10">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-2 md:col-6 lg:col-4 xl:col-2">
          <div class="box-row"></div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row"&gt;
  &lt;div class="col-xs-12 col-sm-8 col-md-6 col-lg-4"&gt;
    &lt;div class="box"&gt;Responsive&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
    </section>
    <section class="page-section">
      <br>
      <h2>Fluid</h2>
      <p>Percent based widths allow fluid resizing of columns and rows.</p>
      <div class="row">
        <div class="sm:col-12">
          <div class="box-row"></div>
        </div>
      </div>
      <div class="row">
        <div class="sm:col-1">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-11">
          <div class="box-row"></div>
        </div>
      </div>
      <div class="row">
        <div class="sm:col-2">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-10">
          <div class="box-row"></div>
        </div>
      </div>
      <div class="row">
        <div class="sm:col-3">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-9">
          <div class="box-row"></div>
        </div>
      </div>
      <div class="row">
        <div class="sm:col-4">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-8">
          <div class="box-row"></div>
        </div>
      </div>
      <div class="row">
        <div class="sm:col-5">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-7">
          <div class="box-row"></div>
        </div>
      </div>
      <div class="row">
        <div class="sm:col-6">
          <div class="box-row"></div>
        </div>
        <div class="sm:col-6">
          <div class="box-row"></div>
        </div>
      </div>
      <pre>
            <code>
.col-xs-6 {
  flex-basis: 50%;
}
            </code>
          </pre>
    </section>
    <section class="page-section">
      <h2>Simple Syntax</h2>
      <p>All you need to remember is row, column, content.</p>
      <pre>
            <code>
&lt;div class="row"&gt;
  &lt;div class="col-xs-12"&gt;
    &lt;div class="box"&gt;12&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
    </section>
    <!-- Offset -->
    <section class="page-section">
      <h2>Offsets</h2>
      <p>Offset a column</p>
      <div v-for="index in 12" class="row" :key="index">
        <div :class="offset(index)">
          <div class="box-row"></div>
        </div>
      </div>


      <pre><code>&lt;div class="row"&gt;
    &lt;div class="col-xs-offset-3 col-xs-9"&gt;
        &lt;div class="box"&gt;offset&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </section>
    <!-- Auto Width -->
    <section class="page-section"><h2>Auto Width</h2>
      <p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>
      <div class="row">
        <div class="sm:col">
          <div class="box-row"></div>
        </div>
        <div class="sm:col">
          <div class="box-row"></div>
        </div>
      </div>
      <div class="row">
        <div class="sm:col">
          <div class="box-row"></div>
        </div>
        <div class="sm:col">
          <div class="box-row"></div>
        </div>
        <div class="sm:col">
          <div class="box-row"></div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row"&gt;
  &lt;div class="sm:col"&gt;
    &lt;div class="box-row"&gt;auto&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
    </section>
    <!-- Nested -->
    <section class="page-section"><h2>Nested Grids</h2>
      <p>Nest grids inside grids inside grids.</p>
      <div class="row">
        <div class="sm:col-7">
          <div class="box box-container">
            <div class="row">
              <div class="sm:col-9">
                <div class="box-first box-container">
                  <div class="row">
                    <div class="sm:col-4">
                      <div class="box-nested"></div>
                    </div>
                    <div class="sm:col-8">
                      <div class="box-nested"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sm:col-3">
                <div class="box-first box-container">
                  <div class="row">
                    <div class="sm:col">
                      <div class="box-nested"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:col-5">
          <div class="box box-container">
            <div class="row">
              <div class="sm:col-12">
                <div class="box-first box-container">
                  <div class="row">
                    <div class="sm:col-6">
                      <div class="box-nested"></div>
                    </div>
                    <div class="sm:col-6">
                      <div class="box-nested"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row"&gt;
  &lt;div class="col-xs"&gt;
      &lt;div class="box"&gt;
          &lt;div class="row"&gt;
              &lt;div class="col-xs"&gt;
                  &lt;div class="box"&gt;auto&lt;/div&gt;
              &lt;/div&gt;
          &lt;/div&gt;
      &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
    </section>
    <!-- Alignment -->
    <section class="page-section">
      <h2>Alignment</h2>
      <p>Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a
        column</p>
      <h3><code>{breakpoint}:start</code></h3>
      <div class="row">
        <div class="sm:col-12">
          <div class="box box-container">
            <div class="row sm:start">
              <div class="sm:col-6">
                <div class="box-nested"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row sm:start"&gt;
  &lt;div class="sm:col-6"&gt;
    &lt;div class="box"&gt;
      sm:start
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
      <h3><code>{breakpoint}:center</code></h3>
      <div class="row">
        <div class="sm:col-12">
          <div class="box box-container">
            <div class="row sm:center">
              <div class="sm:col-6">
                <div class="box-nested"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row sm:center"&gt;
  &lt;div class="sm:col-6"&gt;
    &lt;div class="box"&gt;
      sm:center
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
      <h3><code>{breakpoint}:end</code></h3>
      <div class="row">
        <div class="sm:col-12">
          <div class="box box-container">
            <div class="row sm:end">
              <div class="sm:col-6">
                <div class="box-nested"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row sm:end"&gt;
  &lt;div class="sm:col-6"&gt;
    &lt;div class="box"&gt;
      sm:end
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
      <p>Here is an example of using the modifiers in conjunction to acheive different alignment at different
        viewport sizes.</p>
      <div class="row">
        <div class="sm:col-12">
          <div class="box box-container">
            <div class="row sm:center md:end xl:start">
              <div class="col-xs-6">
                <div class="box-nested"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      Example
      <pre>
            <code>
&lt;div class="row sm:center md:end xl:start"&gt;
  &lt;div class="sm:col-6"&gt;
    &lt;div class="box"&gt;
      All together now
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
      <h3><code>{breakpoint}:top</code></h3>
      <div class="row sm:top">
        <div class="sm:col-6">
          <div class="box-large"></div>
        </div>
        <div class="sm:col-6">
          <div class="box"></div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row sm:top"&gt;
  &lt;div class="sm:col-6"&gt;
      &lt;div class="box"&gt;
          top
      &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
      <h3><code>{breakpoint}:middle</code></h3>
      <div class="row sm:middle">
        <div class="sm:col-6">
          <div class="box-large"></div>
        </div>
        <div class="sm:col-6">
          <div class="box"></div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row sm:middle"&gt;
  &lt;div class="sm:col-6"&gt;
    &lt;div class="box"&gt;
      center
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
      <h3><code>{breakpoint}:bottom</code></h3>
      <div class="row sm:bottom">
        <div class="sm:col-6">
          <div class="box-large"></div>
        </div>
        <div class="sm:col-6">
          <div class="box"></div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row sm:bottom"&gt;
  &lt;div class="sm:col-6"&gt;
    &lt;div class="box"&gt;
      bottom
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </code>
          </pre>
    </section>
    <!-- Distribution -->
    <section class="page-section">
      <h2>Distribution</h2>
      <p>Add classes to distribute the contents of a row or column.</p>
      <h3><code>{breakpoint}:around</code></h3>
      <div class="row">
        <div class="sm:col-12">
          <div class="box box-container">
            <div class="row sm:around">
              <div class="sm:col-2">
                <div class="box-nested"></div>
              </div>
              <div class="sm:col-2">
                <div class="box-nested"></div>
              </div>
              <div class="sm:col-2">
                <div class="box-nested"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row around-xs"&gt;
  &lt;div class="col-xs-2"&gt;
    &lt;div class="box"&gt;
      around
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-xs-2"&gt;
    &lt;div class="box"&gt;
      around
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-xs-2"&gt;
    &lt;div class="box"&gt;
      around
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
      <h3><code>{breakpoint}:between</code></h3>
      <div class="row">
        <div class="sm:col-12">
          <div class="box box-container">
            <div class="row sm:between">
              <div class="sm:col-2">
                <div class="box-nested"></div>
              </div>
              <div class="sm:col-2">
                <div class="box-nested"></div>
              </div>
              <div class="sm:col-2">
                <div class="box-nested"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row between-xs"&gt;
  &lt;div class="col-xs-2"&gt;
    &lt;div class="box"&gt;
      between
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-xs-2"&gt;
    &lt;div class="box"&gt;
      between
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-xs-2"&gt;
    &lt;div class="box"&gt;
      between
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
    </section>
    <!-- Reordering -->
    <section class="page-section">
      <h2>Reordering</h2>
      <p>Add classes to reorder columns.</p>
      <h3><code>{breakpoint}:first</code></h3>
      <div class="row">
        <div class="sm:col-12">
          <div class="box box-container">
            <div class="row">
              <div class="sm:col-2">
                <div class="box-first">1</div>
              </div>
              <div class="sm:col-2">
                <div class="box-first">2</div>
              </div>
              <div class="sm:col-2">
                <div class="box-first">3</div>
              </div>
              <div class="sm:col-2">
                <div class="box-first">4</div>
              </div>
              <div class="sm:col-2">
                <div class="box-first">5</div>
              </div>
              <div class="sm:col-2 sm:first">
                <div class="box-nested">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row"&gt;
  &lt;div class="sm:col-2"&gt;
    &lt;div class="box"&gt;
      1
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="sm:col-2"&gt;
    &lt;div class="box"&gt;
      2
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="sm:col-2 sm:first"&gt;
    &lt;div class="box"&gt;
      3
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code>
          </pre>
      <h3><code>{breakpoint}:last</code></h3>
      <div class="row">
        <div class="sm:col-12">
          <div class="box box-container">
            <div class="row">
              <div class="sm:col-2 sm:last">
                <div class="box-nested">1</div>
              </div>
              <div class="sm:col-2">
                <div class="box-first">2</div>
              </div>
              <div class="sm:col-2">
                <div class="box-first">3</div>
              </div>
              <div class="sm:col-2">
                <div class="box-first">4</div>
              </div>
              <div class="sm:col-2">
                <div class="box-first">5</div>
              </div>
              <div class="sm:col-2">
                <div class="box-first">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>
            <code>
&lt;div class="row"&gt;
  &lt;div class="sm:col-2 sm:last"&gt;
    &lt;div class="box"&gt;
      1
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="sm:col-2"&gt;
    &lt;div class="box"&gt;
      2
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="sm:col-2"&gt;
    &lt;div class="box"&gt;
      3
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code>
          </pre>
    </section>
    <!-- Reversing -->
    <section class="page-section">
      <h2>Reversing</h2>
      <h3><code>.reverse</code></h3>
      <div class="row">
        <div class="sm:col-12">
          <div class="box box-container">
            <div class="row reverse">
              <div class="sm:col-2">
                <div class="box-nested">1</div>
              </div>
              <div class="sm:col-2">
                <div class="box-nested">2</div>
              </div>
              <div class="sm:col-2">
                <div class="box-nested">3</div>
              </div>
              <div class="sm:col-2">
                <div class="box-nested">4</div>
              </div>
              <div class="sm:col-2">
                <div class="box-nested">5</div>
              </div>
              <div class="sm:col-2">
                <div class="box-nested">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre><code>&lt;div class="row reverse"&gt;
    &lt;div class="col-xs-2"&gt;
        &lt;div class="box"&gt;
            1
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-xs-2"&gt;
        &lt;div class="box"&gt;
            2
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-xs-2"&gt;
        &lt;div class="box"&gt;
            3
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
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

<template>
  <div class="grid coding-preview1">
    <div class="relative z-10 radius-r-xl sm:radius-xl shadow-xl text-black mx-auto lg:mx-0 xl:mx-auto" style="transform-origin: 50% 50% 0px; width: 375px;">
      <div class="card bg-white radius-r-xl sm:radius-xl overflow-hidden p-8 text-center" style="transform-origin: 50% 50% 0;">
        <div class="relative z-10 overflow-hidden flex-none mx-auto w-32 h-32" style="transform-origin: 50% 50% 0; border-radius: 50%;">
          <img src="@/assets/sarah-dayan.jpg" alt="" class="absolute max-w-none object-cover bg-gray-100" style="width: 128px; height: 171px; left: 0; top: -21px; transform-origin: 50% 50% 0;">
        </div>
        <div class="flex flex-col pt-6" style="transform-origin: 50% 50% 0;">
          <div class="mb-4" style="transform-origin: 50% 50% 0;">
            <span class="font-semibold">
              “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”
            </span>
          </div>
          <div class="flex flex-col middle font-medium">
            <p class="text-cyan-600">Sarah Dayan</p>
            <p class="text-gray-500">Staff Engineer, Algolia</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto lg:max-w-2xl xl:max-w-none">
      <div class="relative overflow-hidden md:radius-xl shadow-2xl flex CodeWindow_root__1fMBP Hero_codeWindow__1W0zH bg-lightBlue-500 pb-6 md:pb-0">
        <div class="absolute inset-0 bg-black opacity-75"></div>
        <div class="relative w-full flex flex-col">
          <div class="flex h-11 flex middle px-4">
              <div class="w-3 h-3 mr-2 border-2 radius-full border-red-500"></div>
              <div class="w-3 h-3 mr-2 border-2 radius-full border-amber-400"></div>
              <div class="w-3 h-3 mr-2 border-2 radius-full border-green-400"></div>
          </div>
          <div class="relative border-t border-white min-h-0 flex-auto flex flex-col">
            <div class="hidden md:block absolute inset-y-0 left-0 bg-black opacity-25" style="width:50px"></div>
            <div class="w-full flex-auto flex min-h-0 overflow-auto">
              <div class="w-full relative flex-auto">
                <pre class="flex min-h-full text-xs md:text-sm p-0">
                  <div aria-hidden="true" class="hidden md:block text-black flex-none py-4 pr-4 text-right select-none" style="width:50px">
                    <template v-for="index in code.length">
                      {{index}}
                    </template>
                  </div>
                  <code class="flex-auto relative block text-white pt-4 pb-4 px-4 overflow-auto">
<span class="token tag" v-for="(code, index) in code" :key="index" v-html="code" />
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="none">
      <div class="-ml-8 g-col-end-2 g-col-start-1 flex pr-4 g-row-span-full g-row-start-1">
        <div class="bg-gray-100 w-full flex-none radius-3xl"></div>
        <div class="w-full flex-none -ml-full radius-3xl transform shadow-lg -rotate-1 sm:-rotate-2">
          <!-- todo: create gradient -->
        </div>
      </div>
      <div class="relative -mt-6 pb-6 pr-8 g-col-start-1 g-col-end-2 g-row-start-2 g-row-end-3 self-center sm:g-col-end-3 sm:g-col-start-2 sm:px-6 lg:-mt-32 lg:g-col-span-full lg:g-col-start-1 lg:pb-0 lg:px-0 md:-mt-16 md:pb-8 md:px-8 xl:mt-0 xl:g-col-end-3 xl:g-col-start-2 xl:g-row-end-4 xl:g-row-start-3">

      <div class="Hero_cardContainer__wrx9W max-w-xl xl:max-w-none flex items-center justify-center">
        <div class="w-full flex-none">
          <div class="xl:-mr-8">
            <div
                class="Hero_card__1yqlx relative z-10 radius-r-xl sm:radius-xl shadow-xl text-black mx-auto lg:mx-0 xl:mx-auto"
                style="transform-origin: 50% 50% 0; width: 375px;">
              <div class=" bg-red-500 radius-r-xl sm:radius-xl overflow-hidden p-8 text-center"
                   style="transform-origin: 50% 50% 0;">
                <div class="relative z-10 radius-0 overflow-hidden flex-none mx-auto w-32 h-32" style="transform-origin: 50% 50% 0;">
                  <img src="@/assets/logo.svg" alt=""
                       class="absolute max-w-none object-cover bg-gray-100 radius-full"
                       style="width: 100%; height: 100%; left: 0; top: 0; transform-origin: 50% 50% 0;">
                </div>
                <div class="pt-6" style="transform-origin: 50% 50% 0;">
                  <div class="mb-4" style="transform-origin: 50% 50% 0;">
                    <span class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;">
                      <span class="absolute top-0 left-0" style="font-weight: 600;">“Tailwind </span>
                      <span style="opacity: 0; font-weight: 600;">“Tailwind </span>
                    </span>
                    <span class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;">
                      <span class="absolute top-0 left-0" style="font-weight: 600;">CSS </span>
                      <span style="opacity: 0; font-weight: 600;">CSS </span>
                    </span>
                    <span class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;">
                      <span class="absolute top-0 left-0" style="font-weight: 600;">is </span>
                      <span style="opacity: 0; font-weight: 600;">is </span>
                    </span>
                    <span class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;">
                      <span class="absolute top-0 left-0" style="font-weight: 600;">the </span>
                      <span style="opacity: 0; font-weight: 600;">the </span>
                    </span><span class="relative inline-flex whitespace-pre text-lg"
                                 style="transform-origin: 50% 50% 0px;">
                    <span class="absolute top-0 left-0" style="font-weight: 600;">only </span>
                    <span style="opacity: 0; font-weight: 600;">only </span>
                  </span>
                    <span class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;">
                      <span class="absolute top-0 left-0" style="font-weight: 600;">framework </span>
                      <span style="opacity: 0; font-weight: 600;">framework </span>
                    </span>
                    <span class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;">
                      <span class="absolute top-0 left-0" style="font-weight: 600;">that </span>
                      <span style="opacity: 0; font-weight: 600;">that </span>
                    </span>
                    <span class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;">
                      <span class="absolute top-0 left-0" style="font-weight: 600;">I've </span><span
                        style="opacity: 0; font-weight: 600;">I've </span></span>
                    <span class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;">
                      <span class="absolute top-0 left-0" style="font-weight: 600;">seen </span>
                      <span style="opacity: 0; font-weight: 600;">seen </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">scale </span><span
                      style="opacity: 0; font-weight: 600;">scale </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">on </span><span
                      style="opacity: 0; font-weight: 600;">on </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">large </span><span
                      style="opacity: 0; font-weight: 600;">large </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">teams. </span><span
                      style="opacity: 0; font-weight: 600;">teams. </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">It’s </span><span
                      style="opacity: 0; font-weight: 600;">It’s </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">easy </span><span
                      style="opacity: 0; font-weight: 600;">easy </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">to </span><span
                      style="opacity: 0; font-weight: 600;">to </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">customize, </span><span
                      style="opacity: 0; font-weight: 600;">customize, </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">adapts </span><span
                      style="opacity: 0; font-weight: 600;">adapts </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">to </span><span
                      style="opacity: 0; font-weight: 600;">to </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">any </span><span
                      style="opacity: 0; font-weight: 600;">any </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">design, </span><span
                      style="opacity: 0; font-weight: 600;">design, </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">and </span><span
                      style="opacity: 0; font-weight: 600;">and </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">the </span><span
                      style="opacity: 0; font-weight: 600;">the </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">build </span><span
                      style="opacity: 0; font-weight: 600;">build </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">size </span><span
                      style="opacity: 0; font-weight: 600;">size </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">is </span><span
                      style="opacity: 0; font-weight: 600;">is </span></span><span
                      class="relative inline-flex whitespace-pre text-lg" style="transform-origin: 50% 50% 0px;"><span
                      class="absolute top-0 left-0" style="font-weight: 600;">tiny.” </span><span
                      style="opacity: 0; font-weight: 600;">tiny.” </span></span>
                  </div>
                  <div class="flex flex-col items-center" style="font-weight: 500;">
                    <p
                      style="color: rgb(8, 145, 178); transform-origin: 50% 50% 0px;">Sarah Dayan</p>
                    <p style="color: rgb(113, 113, 122); transform-origin: 50% 50% 0px;">Staff Engineer, Algolia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
      <div class=" relative g-col-start-1 g-row-start-1 g-row-end-2 self-center pt-8 md:px-8 lg:px-0 lg:pt-05 lg:g-col-start-1 xl:g-col-start-3 xl:g-col-end-4 xl:g-row-start-2 xl:g-row-end-5">
      <div class="bg-yellow-100" style="width: 100%; height: 150px"></div>
    </div>
    </div>
  </div>
</template>

<script>
function generateIndents( indents, tabulator = false ){
  let tab = "";
  for (let i = 0; i < indents; i++) {
    if ( tabulator )
      tab += '\t';
    else
      tab += '&nbsp;&nbsp;&nbsp;&nbsp;';
  }
  return tab;
}
export default {
  name: "CodingPreview",
  data() {
    return {
      code: this.preparePreview(),
    }
  },
  props: {
    preview: { required: false, default:
"<figure class='md:flex bg-gray-100 rounded-xl p-8 md:p-0'>" +
  "<img class='w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' src='/sarah-dayan.jpg' alt='' width='384' height='512'>" +
  "<div class='pt-6 md:p-8 text-center md:text-left space-y-4'>" +

  "</div>" +
"</figure>" },
  },
  methods: {
    preparePreview: function (){
      /** Remove any whitespace between >< **/
      let preview = this.preview.replace(/[>](\s*)[<]/g, '><');

      let length    = 0;
      let position  = 0;
      let code      = [];
      let output    = []
      while (position !== -1) {
        position = preview.indexOf('>', position + 1 );
        let temp = preview.slice(length, position + 1 )
        if ( temp !== "") {
          code.push( temp )
        }
        length = position + 1;
      }

      let indent = 0;
      code.forEach((value, index) => {
        let tag  = value.match(/<([^\s>]+)(\s|>)+/)[1]
        let attr = null;

        if ( tag ) {
          if ( tag.charAt(0) !== "/") {
            attr = value.match(/class=(["|'][a-zA-Z0-9:;\\.\s\\(\\)\-\\,]*["|'])/);
            if ( attr )
              attr = attr[1];
          }
        }

        if (attr) {
          let indents = generateIndents( indent );
          output[index] = `${indents}<span class="token punctuation">&lt;</span>${tag}&nbsp;<span class="token attr-name">class</span><span class="token punctuation">="</span><span class="token attr-value">${attr}"<span class="token punctuation">&gt;</span></br>`;
          indent++;
        } else {
          indent--;
          let indents = generateIndents( indent );
          output[index] = `${indents}<span class="token punctuation">&lt;</span>${tag}<span class="token punctuation">&gt;</span></br>`;
        }
      })
      return output;
    }
  },
}
</script>

<style lang="scss">
.coding-preview {
  grid-template-columns: 1fr minmax(min-content, 640px) 1fr;
}

@include breakpoint('tablet-wide', 'min') {
  .coding-preview {
    grid-template-columns : 2rem 1fr 59.375% 2rem;
    grid-template-rows    : auto 2.25rem auto 2.25rem;
  }
}

@include breakpoint('desktop', 'min') {
  .coding-preview {
    grid-template-columns: 2rem 1fr 52.5% 2rem;
  }
}
.bg-preview{
  background-image: linear-gradient(to bottom right, #22d3ee, #0ea5e9 );
}
.card {
  height: 26.25rem;
}

.token.class-name, .token.function, .token.selector, .token.selector .class, .token.tag {
  color: rgba(232,121,249, 1);
}
.token.module, .token.property, .token.punctuation {
  color: rgba(186,230,253,1);
}
.token.attr-name, .token.important, .token.keyword, .token.operator, .token.pseudo-class, .token.rule {
  color: rgba(34,211,238,1);
}
.token.attr-value, .token.class, .token.color, .token.number, .token.string, .token.unit {
  color: rgba(190,242,100,1);
}

</style>

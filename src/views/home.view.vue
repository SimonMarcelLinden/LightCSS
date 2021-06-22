<template>
  <div class="overflow-hidden">
    <header class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
      <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
        <div class="border-b-1 border-gray-200 py-4 flex middle between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div class="flex middle space-x-6 sm:space-x-10 ml-6 sm:ml-10">
            <a class="text-base line-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2" href="/docs">
              <span class="sm:hidden">Docs</span>
              <span class="hidden sm:inline">Documentation</span>
            </a>
            <a href="https://github.com/SimonMarcelLinden/LightCSS" class="ml-10 p-0 text-gray-400 hover:text-gray-500 transition-colors duration-200">
              <span class="sr-only">LightCSS on GitHub</span>
              <img src="@/assets/github.svg" width="24" height="24"/>
            </a>
          </div>
        </div>
        <img src="@/assets/logo.svg" class="w-auto h-7 sm:h-8"/>
        <h1 class="text-4xl sm:text-6xl lg:text-7xl line-none font-extrabold letter-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
          Rapidly build modern websites without ever leaving your HTML.</h1>
        <p class="max-w-screen-lg text-lg sm:text-2xl sm:line-10 font-medium mb-10 sm:mb-11">A utility-first CSS
          framework packed with classes like <code class="text-gray-900 font-bold ">flex</code>,<!-- --> <code
              class="text-gray-900 font-bold ">pt-4</code>, <code class="text-gray-900 font-bold ">text-center</code>
          and<!-- --> <code class="text-gray-900 font-bold ">rotate-90</code> that can be composed to build
          any design, directly in your markup.</p>
        <div class="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
          <a class="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg line-6
          font-semibold py-3 px-6 border-1 border-transparent radius-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
            href="/docs">Get started</a>
          <button type="button" class="w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 line-6 py-3 sm:px-6 border-1 border-gray-200 radius-xl flex middle center ml-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200">
            <span class="text-gray-900"><span class="hidden sm:inline text-gray-500" aria-hidden="true">
              $
            </span>npm install lightcss</span>
            <span class="sr-only">(click to copy to clipboard)</span>
            <img src="@/assets/copy.svg" class="ml-4" height="24px" width="24"/>
          </button>
        </div>
      </div>
      <coding-preview />
    </header>
  </div>
</template>

<script>

import CodingPreview from "../components/codingPreview.component";
export default {
  name: 'Home',
  components: {CodingPreview},
}
</script>

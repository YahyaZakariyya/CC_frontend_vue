<template>
    <nav class="bg-gray-800 text-white shadow-md">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <div class="text-xl font-bold">MinLang Compiler</div>
      <ul class="flex space-x-6">
        <li>
          <router-link
            to="/"
            class="hover:text-gray-400 transition-colors"
            active-class="text-yellow-500"
          >
            Compiler
          </router-link>
        </li>
        <li>
          <router-link
            to="/documentation"
            class="hover:text-gray-400 transition-colors"
            active-class="text-yellow-500"
          >
            Documentation
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
    <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>

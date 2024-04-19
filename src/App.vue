<template>
  <RouterView v-slot="{Component}">
    <Transition mode="out-in" name="bounce">
      <component :is="Component"/>
    </Transition>
  </RouterView>
  


  <footer class="flex items-center justify-center w-full pt-20 pb-6 bg-black">
    <a href="https://www.linkedin.com/in/matyas-janosek/" target="_blank">  
    <div class="text-white font-bold text-l items-center text-center py-4 px-12 rounded-full bg-[#121212]">
      © 2024 Matyáš Janošek
    </div>
    </a>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>


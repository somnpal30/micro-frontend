<template>
  <div>
    <h1>My Event</h1>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
//import { ref } from "@vue/composition-api"; // <-- Use this line if you're in a Vue 2 app with the composition API plugin
import { ref } from "vue"; // <-- Use this line if you're in a Vue 3 app

export default {
  setup() {
   
    const capacity = ref(0);

    function increaseCapacity() { 
      capacity.value++;
    }
    return { capacity, increaseCapacity };
  }
};
</script>

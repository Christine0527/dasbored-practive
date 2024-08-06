<template>
  <div class="navbar">
    <hamburger />
    <breadcrumb />
    <div class="navbar-right">
      <lang class="lang"/>
      <avatar />
    </div>
  </div>
</template>
<script setup>
import Hamburger from '@/layout/Headers/components/Hamburger.vue'
import breadcrumb from '@/layout/Headers/components/breadcrumb.vue'
import avatar from '@/layout/Headers/components/avatar.vue'
import lang from '@/layout/Headers/components/lang.vue'
</script>
<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%; /* Ensure header takes the full width of its container */
  height: 100%; /* Ensure header takes the full height of its container */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  margin: 0; /* Remove margin if any */
}
.navbar-right {
  margin-left: auto; /* Push this element to the right */
  display: flex;
  align-items: center;
}
.lang {
  margin-right: 10px; /* Adjust this value as needed */
}
</style>

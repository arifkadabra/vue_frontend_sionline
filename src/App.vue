<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from './store/auth.store';
const authStore = useAuthStore();
</script>

<template>
    <div class="app-container bg-light">
        <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
            <div class="navbar-nav">
                <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
                <!-- <RouterLink to="/profile" class="nav-item nav-link">Profile</RouterLink> -->
                <!-- <RouterLink to="/profile" class="nav-item nav-link">Schedule</RouterLink> -->
                <!-- <RouterLink to="/profile" class="nav-item nav-link">Booking</RouterLink> -->
                <RouterLink to="/mybooking" class="nav-item nav-link">My Booking</RouterLink>
                <RouterLink to="/shippinginstruction" class="nav-item nav-link">Shipping Instruction</RouterLink>
                <!-- <RouterLink to="/profile" class="nav-item nav-link">Finance</RouterLink> -->
                <!-- <RouterLink to="/shippingInstruction" class="nav-item nav-link">B/L</RouterLink> -->
                <a @click="authStore.logout()" class="nav-item nav-link">Logout</a>
            </div>
        </nav>
        <div class="container pt-4 pb-4">
            <RouterView />
        </div>
    </div>
</template>
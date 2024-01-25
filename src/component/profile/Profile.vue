<script setup>
import { ref, onMounted } from 'vue';
import AppService from '../../service/app.js';

const users = ref([]);

const getMe = async () => {
    AppService.me()
    .then(response => {
        users.value = response.data;
    });
}

onMounted(() => {
    getMe();
});
</script>
<template>
    <div>
        <h1>Profile Page</h1>
        <h2>Email : {{users.email}}</h2>
        <h2>Name : {{users.name}}</h2>
        <h2>Shipper : {{users.shipper}}</h2>
    </div>
</template>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Shipping Instruction</a></li>
            <li class="breadcrumb-item active" aria-current="page" v-if="si_number === ''">Create </li>
            <li class="breadcrumb-item active" aria-current="page" v-if="si_number != ''">Edit</li>
        </ol>
    </nav>
    <Header :currentPage="currentPage" />
    <Container v-if="currentPage === 1"/>
    <Detail v-if="currentPage === 2"/>
    <Confirm v-if="currentPage === 3"/>
    <SubmitFooter />
</template>

<script>
import Header from "./Header.vue"
import Container from "./Container.vue"
import Detail from "./Detail.vue"
import Confirm from "./Confirm.vue"
import SubmitFooter from "./Submit.vue"

import { useFormDataStore } from '../../store/_form'
import { storeToRefs } from "pinia"



export default {
    
    name: 'App',
    components: {   
                Header,
                Container,
                Detail, 
                SubmitFooter, 
                Confirm 
            },

    setup() {
        const formData = useFormDataStore()
        const { currentPage, si_number } = storeToRefs(formData)

        return {currentPage, si_number}
    }
  
}
</script>
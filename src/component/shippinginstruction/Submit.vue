<template>
    <section class="text-center">
        <button class="btn btn-warning" @click="handleGoBack" v-if="currentPage != 1"><i class="fa fa-arrow-left"></i>{{currentPage != 1 ? "Go Back" : ""}}</button> <button class="btn btn-success" @click="handleNextStep" v-if="currentPage != 3"><i class="fa fa-arrow-right"></i> Next Step</button> <button class="btn btn-primary" @click="handleConfirm" v-if="currentPage === 3">Confirm</button>
    </section>
</template>

<script>
import { useFormDataStore } from '../../store/_form'
import { storeToRefs } from "pinia"
import AppService from '../../service/app.js';
import { router } from '../../router';
import Swal from 'sweetalert2'

export default {
    setup() {
        
        const formData = useFormDataStore()
        
        const { currentPage,            
            container_no,
            email,
            list_container
        } = storeToRefs( formData )

        function handleNextStep() {
            if ( formData.currentPage === 1 ) {
                formData.updateCurrentPage( {
                    currentPage: formData.currentPage+1
                } )
                return
            }else if ( formData.currentPage === 2) 
            {
                formData.updateCurrentPage( {
                    currentPage: formData.currentPage + 1
                } )
            }
        }

        function handleGoBack() {
            if ( formData.currentPage > 1 ) {
                formData.updateCurrentPage( {
                    currentPage: formData.currentPage - 1
                } )
            }
        }

        function handleConfirm() {
            if(formData.list_container.filter(dt => dt.is_status == '1' ).length != 0){

                let allData = {
                    si_number: formData.si_number,
                    list_container: formData.list_container.filter(dt => dt.is_status == '1' ),
                    shipper: formData.shipper_name,
                    consignee: formData.consignee_name,
                    stc: formData.stc                
                }
                // console.log(allData);

                // let formData = new FormData();
                // formData.append("shipper", formData.shipper_name);
                // formData.append("voyage", voyage.value);

                if(formData.si_number === ''){
                    AppService.saveSI(allData)
                    .then(response => {
                        // formData.resetForm();
                        router.push('/shippinginstruction');
                    });
                }else{
                    AppService.updateSI(allData)
                    .then(response => {
                        // formData.resetForm();
                        router.push('/shippinginstruction');
                    });

                }
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Please choose container',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
            }
        }

        return {
            handleNextStep,
            handleGoBack,
            handleConfirm,
            currentPage,
            container_no,
            email,
            list_container
        }
    }
}
</script>
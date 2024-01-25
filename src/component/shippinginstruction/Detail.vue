<template>
    <div>
        <div class="card card-primary card-outline">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-map-signs"></i>
                    Detail Shipping Instruction
                </h3>
            </div>
            <!-- <pre>
                {{ list_container }}
            </pre> -->
            <div class="card-body">
                <div class="form-group">
                    <label for="shippername">Shipper Name</label>
                    <input type="text" class="form-control" id="shipper" placeholder="Enter shipper name" v-model="shipper_name" @blur="validateShipper">
                </div>
                <div class="form-group">
                    <label for="consigneename">Consignee Name</label>
                    <input type="text" class="form-control" id="consignee" placeholder="Enter consignee name" v-model="consignee_name" @blur="validateCongsignee">
                </div>
                <div class="form-group">
                    <label>STC (Said To Consignee)</label>
                    <textarea class="form-control" rows="5" placeholder="Enter STC" v-model="stc" @blur="validateSTC"></textarea>
                </div>

                <hr>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useFormDataStore } from '../../store/_form';
import { storeToRefs } from "pinia"

const formData = useFormDataStore()

const { shipper_name, consignee_name, stc } = storeToRefs( formData )

function validateShipper() {
    formData.updateShipper( {
        shipper_name: shipper_name.value,
    } )
}
function validateCongsignee() {
    formData.updateConsignee( {
        consignee_name: consignee_name.value,
    } )
}
function validateSTC() {
    formData.updateSTC( {
        stc: stc.value,
    } )
}
</script>
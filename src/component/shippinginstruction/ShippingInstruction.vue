<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Shipping Instruction</li>
            </ol>
        </nav>
        <div class="card card-primary card-outline">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-filter"></i>
                    <i class="fas fa-sort-amount-desc"></i>
                    Filter and Sort
                </h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Vessel</label>
                            <select class="form-control" v-model="vessel" @change="changeVessel">
                                <option></option>
                                <option :value="vessel.vessel"  v-for="vessel in vessels" >{{vessel.vessel_name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Voyage</label>
                            <select class="form-control" v-model="voyage" @change="changeVoyage">
                                <option></option>
                                <option :value="voyage.voyage"  v-for="voyage in voyages" >{{voyage.voyage}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <div class="radio">
                                <label>
                                    <input type="radio">Earliest Created
                                    <input type="radio">Earliest Departure
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 text-right">
                        <button class="btn btn-primary"><i class="fas fa-search"></i> Search</button> <button class="btn btn-success" @click="create"><i class="fas fa-plus"></i> Create</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="card card-primary card-outline" v-for="data in datas" @click="tes">
            <div class="card-content">
                <div class="card-body">
                    <div class="media d-flex">
                        <div class="col-6 text-left">
                            <span><i>SURABAYA-MAKASSAR</i></span>
                            <h3>{{data.vessel_id}} v.{{data.voyage}}</h3>
                            <span class="badge badge-success">{{data.si_number}}</span>
                        </div>
                        <div class="col-6 text-right">
                            <h6><i class="fa fa-clock-o"></i> Open Stack 29/11/2023</h6>
                            <h6><i class="fa fa-clock-o"></i> Closing Date 29/11/2023</h6>
                            <h6><i class="fa fa-ship"></i> ETD 29/11/2023</h6>
                            <h6><i class="fa fa-truck"></i> {{data.qty}} Container</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="row">
            <div class="col-xs-12 table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Route</th>
                            <th>Vessel Voyage</th>
                            <th>ETA</th>
                            <th>ETD</th>
                            <th>SI Number</th>
                            <th>Qty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in datas">
                            <td>#</td>
                            <td>IDJKT-IDBDJ</td>
                            <td>{{ data.vessel_id }} v.{{ data.voyage }}</td>
                            <td>{{ data.etd_comm }}</td>
                            <td>{{ data.etd_comm }}</td>
                            <td>{{ data.si_number }}</td>
                            <td>{{ data.qty }}</td>
                            <td>
                                <button class="btn btn-sm btn-primary" @click="edit(data)" v-if="data.bl_number != null"><i class="fas fa-pencil"></i></button> <button class="btn btn-sm btn-primary"><i class="fas fa-file"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script setup>
import { router } from '../../router';
import { useFormDataStore } from '../../store/_form';
import { storeToRefs } from "pinia"
import { ref, onMounted } from 'vue';
import AppService from '../../service/app.js';

const datas = ref([]);
const vessels = ref([]);
const voyages = ref([]);

const formData = useFormDataStore()
const { vessel, voyage } = storeToRefs( formData )

const getData = () => {
    formData.resetForm();
    AppService.data()
    .then(response => {
        // datas.value = response.data.data
        datas.value = response.data
    });
}

const getVessel = () => {
    AppService.vessel()
    .then(response => {
        // vessels.value = response.data.data //laravel
        vessels.value = response.data //express
    });
}

const getVoyage = () => {
    AppService.voyage(vessel.value)
    .then(response => {
        // voyages.value = response.data.data
        voyages.value = response.data
    });
}

function changeVessel(){
    formData.updateVessel( {
        vessel: vessel.value,
    } )
    getVoyage();
    
}

function changeVoyage(){
    formData.updateVoyage( {
        voyage: voyage.value,
    } )
}

function create(){
    router.push('/shippinginstruction/create');    
}

function edit(el){
    formData.updateVessel( {
        vessel: el.vessel_id,
    } )
    formData.updateVoyage( {
        voyage: el.voyage,
    } )
    formData.updateSI( {
        si_number: el.si_number,
    } )
    router.push('/shippinginstruction/create');
}

onMounted(() => {
    getData();
    getVessel();
});
</script>
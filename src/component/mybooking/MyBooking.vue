<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">My Booking</li>
            </ol>
        </nav>
        <!-- <div class="card card-primary card-outline">
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
        </div> -->
        
        <div class="row">
            <div class="col-xs-12 table-responsive">
                <table class="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Route</th>
                            <th>Vessel Voyage</th>
                            <th>ETD</th>
                            <th>Booking No</th>
                            <th>Qty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in datas.data">
                            <td>#</td>
                            <td>{{ data.data.bPol }}-{{ data.data.bPod }}</td>
                            <td>{{ data.data.bVesselName }} v.{{ data.data.bVoyage }}</td>
                            <td>{{ data.data.bPolEtdDate }}</td>
                            <td>
                                <small class="badge badge-danger" v-if="data.data.bBookingNumber === ''">Not Yet Approved</small>
                                <small class="badge badge-success" v-if="data.data.bBookingNumber != ''">{{ data.data.bBookingNumber }}</small>
                            </td>
                            <td>{{ data.data.bQuantity }}</td>
                            <td>
                                <button class="btn btn-sm btn-danger"><i class="fa fa-file-pdf-o"></i></button> <button class="btn btn-sm btn-warning"><i class="fa fa-file-pdf-o"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import BookingService from '../../service/booking.js';

const datas = ref([]);

const getData = () => {
    BookingService.data()
        .then(response => {
            datas.value = response
            // console.log(response.data)
        });
}

onMounted(() => {
    getData();
});
</script>
<template>
    <div class="row">
        <div class="col-3">
            <div class="small-box bg-success">
                <div class="inner">
                    <h3>46</h3>
                    <p>Booking</p>
                </div>
                <div class="icon">
                    <i class="fas fa-file"></i>
                </div>
            </div>
        </div>                    
        <div class="col-3">
            <div class="small-box bg-warning">
                <div class="inner">
                    <h3>13</h3>
                    <p>Pending SI</p>
                </div>
                <div class="icon">
                    <i class="fas fa-hourglass-end"></i>
                </div>
            </div>
        </div>      
        <div class="col-3">
            <div class="small-box bg-primary">
                <div class="inner">
                    <h3>28</h3>
                    <p>Bill Of Laden</p>
                </div>
                <div class="icon">
                    <i class="fas fa-file-text"></i>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="small-box bg-danger">
                <div class="inner">
                    <h3>156</h3>
                    <p>Container</p>
                </div>
                <div class="icon">
                    <i class="fas fa-truck"></i>
                </div>
            </div>
        </div> 
    </div>

    <div class="card card-outline">
        <div class="card-content">
            <div class="card-header">
                <h3 class="card-title"><b> <i class="fa fa-calendar"></i> Recommended Schedule</b></h3>
            </div>
            <div class="card-body">
                <div class="col-xs-12 table-responsive">
                    <table class="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Vessel Voyage</th>
                                <th>ETD</th>
                                <th>Open</th>
                                <th>Close</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in datas">
                                <td>{{ data.schFullRouteName }}</td>
                                <td>{{ data.schVesselName }} v.{{ data.schVoyage }}</td>
                                <td>{{ data.schPolEtdDate }}</td>
                                <td>{{ data.schStackingOpen }}</td>
                                <td>{{ data.schRcDocClose }}</td>
                                <td>
                                    <button class="btn btn-sm btn-primary"><i class="fa fa-book"></i> Book</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="card card-outline">
        <div class="card-content">
            <div class="card-header">
                <h3 class="card-title"><b> <i class="fa fa-calendar"></i> Next Schedule</b></h3>
            </div>
            <div class="card-body">
                <div class="col-xs-12 table-responsive">
                    <table class="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Vessel Voyage</th>
                                <th>ETD</th>
                                <th>Open</th>
                                <th>Close</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in datass">
                                <td>{{ data.schFullRouteName }}</td>
                                <td>{{ data.schVesselName }} v.{{ data.schVoyage }}</td>
                                <td>{{ data.schPolEtdDate }}</td>
                                <td>{{ data.schStackingOpen }}</td>
                                <td>{{ data.schRcDocClose }}</td>
                                <td>
                                    <button class="btn btn-sm btn-primary"><i class="fa fa-book"></i> Book</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="row"> -->
        <!-- <div class="card card-outline">
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title"><b> <i class="fa fa-calendar"></i> Recommendation Schedule</b></h3>
                </div>
                <div class="card-body">
                    <div class="card card-outline" v-for="data in datas">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="col-6 text-left">
                                        <span><i>{{ data.schFullRouteName }}</i></span>
                                        <h3>{{ data.schVesselName }} v.{{ data.schVoyage }}</h3>
                                    </div>
                                    <div class="col-4 text-right">
                                        <h6><i class="fa fa-clock-o"></i> Open Stack {{ data.schStackingOpen }}</h6>
                                        <h6><i class="fa fa-clock-o"></i> Closing Date {{ data.schRcDocClose }}</h6>
                                        <h6><i class="fa fa-ship"></i> ETD {{ data.schPolEtdDate }}</h6>
                                    </div>
                                    <div class="col-2 margin text-right">
                                        <button class="btn btn-primary"><i class="fas fa-file"></i> Book</button>
                                        <button class="btn btn-warning"><i class="fas fa-phone"></i> Quo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div> -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import ScheduleService from '../../service/schedule.js';

const datas = ref([]);
const datass = ref([]);

const getRecommended = () => {
    ScheduleService.recommended()
    .then(response => {
        datas.value = response.data
        // console.log(response)
    });
    // console.log('get')
}

const getNext = () => {
    ScheduleService.next()
    .then(response => {
        datass.value = response.data
        // console.log(response)
    });
    // console.log('get')
}

onMounted(() => {
    getRecommended();
    getNext();
});
</script>
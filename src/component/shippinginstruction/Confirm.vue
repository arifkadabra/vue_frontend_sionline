<template>
    <div>
        <div class="alert alert-danger alert-dismissible">
            <h4><i class="fas fa-exclamation-circle"></i> Alert!</h4>
            This is a Bill of Lading (Draft). After this data has been confirmed, become to B/L Original
        </div>
        <section class="invoice">
            <div class="row">
                <div class="col-12">
                    <h2 class="page-header">
                        <i class="fa fa-file"></i> Bill of Lading (DRAFT) <small class="pull-right">Date: 2/11/2023</small>
                    </h2>
                </div>
            </div>
            <div class="row invoice-info">
                <div class="col-sm-6"> 
                    Shipper
                    <br>
                    <b>{{ shipper_name }}</b>
                    <br>
                    Consignee
                    <br>
                    <b>{{ consignee_name }}</b>
                </div>
                <!-- <div class="col-sm-4 invoice-col"> Shipper <address>
                    <strong>{{ shipper_name }}</strong>
                    <br> Jl. Raya Cibarusah <br> Jonggol, Jawa Barat <br> Phone: (021) 123-5432
                    </address>
                </div>
                <div class="col-sm-4 invoice-col"> Consignee <address>
                    <strong>{{ consignee_name }}</strong>
                    <br> Jl. Raya Banjaran <br> Banjarmasin, Kalimantan <br> Phone: (021) 123-5432
                    </address>
                </div> -->
                <div class="col-sm-6 text-right">
                    <!-- <b>Shipping Instruction #007612</b> -->
                    <!-- <br> -->
                    <b>Vessel/Voyage:</b> INTAN DAYA 88 v.090A/23 <br>
                    <b>Route:</b> JAKARTA-BANJARMASIN <br>
                    <!-- <b>Order ID:</b> 4F3S8J <br> -->
                    <!-- <b>Payment Due:</b> 12/22/2023 <br>
                    <b>Account:</b> 968-34567 -->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Container No</th>
                                <th>Booking No</th>
                                <th>Seal No</th>
                                <th>Container Code</th>
                                <th>Commodity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(dt, index) in validContainer" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ dt.container_no }}</td>
                                <td></td>
                                <td>1P.871610</td>
                                <td>FD20</td>
                                <td>GENCAR</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.invoice {
    position: relative;
    background: #fff;
    border: 1px solid #f4f4f4;
    padding: 20px;
}
.page-header {
    margin: 10px;
    font-size: 22px;
}
.pull-right {
    float: right!important;
}
</style>

<script setup>
import { computed  } from 'vue';
import { useFormDataStore } from '../../store/_form';
import { storeToRefs } from "pinia"

const formData = useFormDataStore()

const { shipper_name, consignee_name, list_container } = storeToRefs( formData )

const validContainer = computed(() => {
    return list_container.value.filter(dt => dt.is_status == '1' );
})

</script>
<template>
    <div>
        <div class="card card-primary card-outline">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-truck"></i>
                    Select Container [{{ vessel }} v. {{ voyage }}]
                </h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4">
                        <div style="height:200px;overflow-y:auto;">
                            <table class="table table-sm table-hover table-bordered">
                                <thead>
                                    <tr align="center"><th>#</th><th>Container No</th><th><input type="checkbox" v-model="TcFalse" @click="checkAllDraft"></th></tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(dt, index) in draftContainer" :key="index">
                                        <td align="center">{{ index+1 }}</td>
                                        <td align="center">{{ dt.container_no }}</td>
                                        <td align="center"><input type="checkbox" id="{{dt.id}}" v-model="dt.id"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br>
                        <button class="btn btn-block btn-primary" @click="attach">Attach to B/L</button>
                        <br>
                        <div style="height:200px;overflow-y:auto;">
                            <table class="table table-sm table-hover table-bordered">
                                <thead>
                                    <tr align="center"><th>#</th><th>Container No</th><th>Checklist</th></tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(dt, index) in validContainer" :key="index">
                                        <td align="center">{{ index+1 }}</td>                                        
                                        <td align="center">{{ dt.container_no }}</td>
                                        <td align="center"><input type="checkbox" id="{{dt.id}}" v-model="dt.id"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br>
                        <button class="btn btn-block btn-danger" @click="deattach">Deattach to B/L</button>
                    </div>
                    <div class="col-sm-8">
                        <div style="height:530px;overflow-y:auto;">
                            <table class="table table-sm table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Container No</th>
                                        <th>Container Code</th>
                                        <th>Seal No</th>
                                        <th>Commodity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(dt, index) in validContainer" :key="index">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ dt.container_no }}</td>
                                        <td>FD20</td>
                                        <td>1P.871610</td>
                                        <td>GENCAR</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useFormDataStore } from '../../store/_form';
import { storeToRefs } from "pinia"
import { ref, onMounted, computed  } from 'vue';
import api from '../../service/api';

const formData = useFormDataStore()

const { vessel, voyage, list_container } = storeToRefs( formData )

const containers = ref([]);
const TcFalse = ref(false);

const fetchDataContainers = async () => {
    await api.get('/container')
    .then(response => {
        containers.value = response.data.data
    });
}

const checkAllDraft = function(){
    console.log(TcFalse.value)
    draftContainer.value.forEach((el) => {
        el.id = TcFalse.value;	
    })
}

const attach = function(){
    for(var x in draftContainer.value){
        if(draftContainer.value[x].id === true){                        
            draftContainer.value[x].is_status = '1';
            draftContainer.value[x].id = TcFalse.value;
            formData.updateListContainer( {
                list_container: validContainer.value,
            } )
        }
    }
}

const deattach = function(){
    for(var x in validContainer.value){
        if(validContainer.value[x].id === true){                        
            validContainer.value[x].is_status = '0';
            validContainer.value[x].id = TcFalse.value;
        }
    }
}

const draftContainer = computed(() => {
  return containers.value.filter(dt => dt.is_status == '0' );
})

const validContainer = computed(() => {
  return containers.value.filter(dt => dt.is_status == '1' );
})

onMounted(() => {
    fetchDataContainers();
});
</script>
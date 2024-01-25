import { defineStore } from 'pinia'

export const useFormDataStore = defineStore('formData', {
  state: () => {
    return {
      currentPage: 1,
      vessel: '',
      voyage: '',
      list_container: [],
      shipper_name: '',
      consignee_name: '',
      stc: '',
      si_number: '',
    }
  },
  actions: {
    updateCurrentPage( e ) {
      this.currentPage = e.currentPage
    },
    updateVessel( e ) {
      this.vessel = e.vessel
    },
    updateVoyage( e ) {
      this.voyage = e.voyage
    },
    updateListContainer( e ) {
      this.list_container = e.list_container
    },  
    updateShipper( e ) {
      this.shipper_name = e.shipper_name
    },  
    updateConsignee( e ) {
      this.consignee_name = e.consignee_name
    },  
    updateSTC( e ) {
      this.stc = e.stc
    },
    updateSI( e ) {
      this.si_number = e.si_number
    },
    resetForm( ) {
      this.currentPage= 1;
      this.vessel= '';
      this.voyage= '';
      this.list_container= [];
      this.shipper_name= '';
      this.consignee_name= '';
      this.stc= '';
      this.si_number='';
    },
  },
})
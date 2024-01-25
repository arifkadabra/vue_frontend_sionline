<template>
    <div class="bs-stepper">
        <div class="bs-stepper-header" role="tablist">
            <div class="step" data-target="#container-part" :class="{ active: currentPage === 1 }">
                <button type="button" class="step-trigger" role="tab" aria-controls="container-part" id="container-part-trigger" @click="toContainer">
                    <span class="bs-stepper-circle">1</span>
                    <span class="bs-stepper-label">Container</span>
                </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#customer-part" :class="{ active: currentPage === 2 }">
                <button type="button" class="step-trigger" role="tab" aria-controls="customer-part" id="customer-part-trigger" @click="toDetail">
                    <span class="bs-stepper-circle">2</span>
                    <span class="bs-stepper-label">Customer</span>
                </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#customer-part" :class="{ active: currentPage === 3 }">
                <button type="button" class="step-trigger" role="tab" aria-controls="customer-part" id="customer-part-trigger" @click="toResume">
                    <span class="bs-stepper-circle">!</span>
                    <span class="bs-stepper-label">Resume</span>
                </button>
            </div>
        </div>
        <div class="bs-stepper-content">
            <div id="container-part" class="content" role="tabpanel" aria-labelledby="container-part-trigger"></div>
            <div id="customer-part" class="content" role="tabpanel" aria-labelledby="customer-part-trigger"></div>
        </div>
    </div>
</template>
<script>

export default {
    props: ["currentPage"],

    setup(){
        function toContainer() {
            formData.updateCurrentPage( {
                currentPage: 1
            } )
        }
        function toDetail() {
            formData.updateCurrentPage( {
                currentPage: 2
            } )
        }
        function toResume() {
            formData.updateCurrentPage( {
                currentPage: 3
            } )
        }
    }
}
</script>

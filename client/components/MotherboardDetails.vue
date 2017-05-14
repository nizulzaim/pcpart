<template>
    <div style="padding-top: 20px;">
        <div class="font-title">Specifications</div>
        <divider></divider>
        <textfield class="textfield" v-if="productModify.manufacturerId" v-model="productModify.manufacturer().name" placeholder="Manufacturer" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.name" v-model="productModify.name" placeholder="Model" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.partNo" v-model="productModify.partNo" placeholder="Part #" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.socket" v-model="productModify.socket" placeholder="Socket" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.formFactor" v-model="productModify.formFactor" placeholder="Form Factor" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.chipset" v-model="productModify.chipset" placeholder="Chipset" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.memorySlot" v-model="productModify.memorySlot" placeholder="Chipset" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.memoryType" v-model="productModify.memoryType" placeholder="Chipset" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.maximumSupportedMemoryString" v-model="productModify.maximumSupportedMemoryString" placeholder="Maximum Memory" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.raidSupportString" v-model="productModify.raidSupportString" placeholder="RAID Support" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.onboardVideoString" v-model="productModify.onboardVideoString" placeholder="Onboard Video" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.crossFireSupportString" v-model="productModify.crossFireSupportString" placeholder="Cross Fire Support" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.onboardUsb3String" v-model="productModify.onboardUsb3String" placeholder="Onboard USB3" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.sliSupport" v-model="productModify.sliSupport" placeholder="SLI Support" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.sata6gb" v-model="productModify.sata6gb" placeholder="Sata 6GB" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.sataExpress" v-model="productModify.sataExpress" placeholder="Sata Express" :is-info="true"></textfield>
        <textfield class="textfield"  v-if="productModify.onboardEthernet" v-model="productModify.onboardEthernet" placeholder="Onboard Ethernet" :is-info="true"></textfield>
        <!-- <textfield class="textfield" v-if="productModify.liquidCooledString" v-model="productModify.liquidCooledString" placeholder="Liquid Cooled" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.bearingType" v-model="productModify.bearingType" placeholder="Bearing Type" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.noiseLevelString" v-model="productModify.noiseLevelString" placeholder="Noise Level" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.fanString" v-model="productModify.fanString" placeholder="Fan Speed" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.heightString" v-model="productModify.heightString" placeholder="Height" :is-info="true"></textfield>-->
    </div>
</template>

<script>
    export default {
        props: {
            value: "",
        },
        computed: {
            productModify() {
                let p = this.value;
                if (p) {
                    p.raidSupportString = p.raidSupport ? "Yes": "No";
                    p.onboardVideoString = p.onboardVideo ? "Yes": "No";
                    p.crossFireSupportString = p.crossFireSupport ? "Yes": "No";
                    p.onboardUsb3String = p.onboardUsb3 ? "Yes": "No";
                    // p.noiseLevelString = p.noiseLevel();
                    // p.fanString = p.fanSpeed();
                    // p.heightString = p.height + "mm";
                    p.maximumSupportedMemoryString = p.maximumSupportedMemory + "GB";
                    return p;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .textfield {
        margin-bottom: 0;
        padding-bottom: 0;
    }
</style>
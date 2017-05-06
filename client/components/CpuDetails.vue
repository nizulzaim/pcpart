<template>
    <div style="padding-top: 20px;">
        <div class="font-title">Specifications</div>
        <divider></divider>
        <textfield class="textfield" v-if="productModify.manufacturerId" v-model="productModify.manufacturer().name" placeholder="Manufacturer" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.name" v-model="productModify.name" placeholder="Model" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.partNo" v-model="productModify.partNo" placeholder="Part #" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.dataWidth" v-model="productModify.dataWidthString" placeholder="Data Width" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.socket" v-model="productModify.socket" placeholder="Socket" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.operatingFrequency" v-model="productModify.operatingFrequencyString" placeholder="Operating Frequency" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.maxTurboFrequency" v-model="productModify.maxTurboFrequencyString" placeholder="Max Turbo Frequency" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.cores" v-model="productModify.cores" placeholder="Cores" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.l1cache" v-model="productModify.l1Cache" placeholder="L1 cache" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.l2cache" v-model="productModify.l2Cache" placeholder="L2 cache" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.l3cache" v-model="productModify.l3Cache" placeholder="L3 cache" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.lithography" v-model="productModify.lithographyString" placeholder="Lithography" :is-info="true"></textfield>
        <textfield class="textfield" v-if="productModify.thermalDesignPower" v-model="productModify.thermalDesignPowerString" placeholder="Thermal Design Power" :is-info="true"></textfield>
        <textfield class="textfield" v-model="productModify.includeCpuCoolerString" placeholder="Include CPU Cooler" :is-info="true"></textfield>
        <textfield class="textfield" v-model="productModify.hyperThreadingString" placeholder="Hyper Threading" :is-info="true"></textfield>
        <textfield class="textfield" v-model="productModify.integratedGraphicsString" placeholder="Integrated Graphics" :is-info="true"></textfield>
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
                    p.operatingFrequencyString = p.operatingFrequency+ "GHz";
                    p.lithographyString = p.lithography + " nm";
                    p.thermalDesignPowerString = p.thermalDesignPower + " Watts";
                    p.dataWidthString = p.dataWidth + "-bit";
                    p.includeCpuCoolerString = p.includeCpuCooler ? "Yes": "No";
                    p.hyperThreadingString = p.hyperThreading ? "Yes": "No";
                    p.integratedGraphicsString = p.integratedGraphicsString? p.integratedGraphicsString: "No";
                    p.maximumSupportedMemoryString = p.maximumSupportedMemory + " GB";
                    p.maxTurboFrequencyString = p.maxTurboFrequency + "GHz";
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
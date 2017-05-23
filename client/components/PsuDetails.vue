<template>
    <div style="padding-top: 20px;">
        <div class="font-title">Specifications</div>
        <divider></divider>
         <textfield class="textfield" type="multiline" v-if="productModify.manufacturerId" v-model="productModify.manufacturer().name" placeholder="Manufacturer" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.name" v-model="productModify.name" placeholder="Model" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.partNo" v-model="productModify.partNo" placeholder="Part #" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.psuType" v-model="productModify.psuType" placeholder="Type" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.wattageString" v-model="productModify.wattageString"  placeholder="Wattage" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.fans" v-model="productModify.fans"  placeholder="Number of Fans" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.modular" v-model="productModify.modular"  placeholder="Modular" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.output" v-model="productModify.output"  placeholder="Output" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.efficienyCert" v-model="productModify.efficienyCert"  placeholder="Efficieny Certification" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.pcieConnector" v-model="productModify.pcieConnector"  placeholder="Number of PCIE Connector" :is-info="true"></textfield>
        <!--psuType: String,
        wattage: Number,
        fans: Number,
        modular: String,
        output: String,
        efficiencyCert: String,
        pcieConnector: Number,-->
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
                    p.wattageString = p.wattage + "W";
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
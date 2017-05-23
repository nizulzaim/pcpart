


<template>
    <div style="padding-top: 20px;">
        <div class="font-title">Specifications</div>
        <divider></divider>
        <textfield class="textfield" type="multiline" v-if="productModify.manufacturerId" v-model="productModify.manufacturer().name" placeholder="Manufacturer" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.name" v-model="productModify.name" placeholder="Model" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.partNo" v-model="productModify.partNo" placeholder="Part #" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.speed" v-model="productModify.speed" placeholder="Speed" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.size" v-model="productModify.size" placeholder="Size" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.casLatency" v-model="productModify.casLatency" placeholder="Cas Latency" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.timing" v-model="productModify.timing" placeholder="Timing" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.voltage" v-model="productModify.voltage" placeholder="Voltage" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.heatSpreaderString" v-model="productModify.heatSpreaderString" placeholder="Heat Spreader" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.eccString" v-model="productModify.eccString" placeholder="ECC" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.registeredString" v-model="productModify.registeredString" placeholder="Registered" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.color" v-model="productModify.color" placeholder="Color" :is-info="true"></textfield>
        <!--memoryType: String,
        speed: String,
        size: String,
        pricePerGb: Number,
        casLatency: Number,
        timing: String,
        voltage: String,
        heatSpreader: Boolean,
        ecc: Boolean,
        registered: Boolean,
        color: String,-->
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
                    p.pricePerGbString = "RM" + p.pricePerGb.toFixed(2);
                    p.heatSpreaderString = p.heatSpreaderString ? "Yes": "No";
                    p.eccString = p.eccString ? "Yes": "No";
                    p.registeredString = p.registeredString ? "Yes": "No";
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
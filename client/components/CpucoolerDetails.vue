<template>
    <div style="padding-top: 20px;">
        <div class="font-title">Specifications</div>
        <divider></divider>
        <textfield class="textfield" type="multiline" v-if="productModify.manufacturerId" v-model="productModify.manufacturer().name" placeholder="Manufacturer" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.name" v-model="productModify.name" placeholder="Model" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.partNo" v-model="productModify.partNo" placeholder="Part #" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.socket" v-model="productModify.socket" placeholder="Socket" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.liquidCooledString" v-model="productModify.liquidCooledString" placeholder="Liquid Cooled" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.bearingType" v-model="productModify.bearingType" placeholder="Bearing Type" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.noiseLevelString" v-model="productModify.noiseLevelString" placeholder="Noise Level" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.fanString" v-model="productModify.fanString" placeholder="Fan Speed" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.heightString" v-model="productModify.heightString" placeholder="Height" :is-info="true"></textfield>
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
                    p.liquidCooledString = p.liquidCooled ? "Yes": "No";
                    p.noiseLevelString = p.noiseLevel();
                    p.fanString = p.fanSpeed();
                    p.heightString = p.height + "mm";
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
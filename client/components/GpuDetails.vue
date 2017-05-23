<template>
    <div style="padding-top: 20px;">
        <div class="font-title">Specifications</div>
        <divider></divider>
        <textfield class="textfield" type="multiline" v-if="productModify.manufacturerId" v-model="productModify.manufacturer().name" placeholder="Manufacturer" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.name" v-model="productModify.name" placeholder="Model" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.partNo" v-model="productModify.partNo" placeholder="Part #" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.interface" v-model="productModify.interface" placeholder="Interface" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.chipset" v-model="productModify.chipset" placeholder="Chipset" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.memorySizeString" v-model="productModify.memorySizeString" placeholder="Memeory Size" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.memoryType" v-model="productModify.memoryType" placeholder="Memory Type" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.coreClockString" v-model="productModify.coreClockString" placeholder="Core Clock" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.boostClockString" v-model="productModify.boostClockString" placeholder="Boost Clock" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.tdp" v-model="productModify.tdp" placeholder="TDP" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.fanString" v-model="productModify.fanString" placeholder="Fan String" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.sliSupportString" v-model="productModify.sliSupportString" placeholder="SLI Support" :is-info="true"></textfield>

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
                    p.fanString = p.fan ? "Yes": "No";
                    p.sliSupportString = p.sliSupport ? "Yes": "No";
                    p.memorySizeString = p.memorySize + " GB";
                    p.coreClockString = p.coreClock + " GHz";
                    p.boostClockString = p.boostClock + " GHz";
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
<template>
    <div style="padding-top: 20px;">
        <div class="font-title">Specifications</div>
        <divider></divider>
        <textfield class="textfield" type="multiline" v-if="productModify.manufacturerId" v-model="productModify.manufacturer().name" placeholder="Manufacturer" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.name" v-model="productModify.name" placeholder="Model" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.partNo" v-model="productModify.partNo" placeholder="Part #" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.color" v-model="productModify.color" placeholder="Interface" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.includePowerSupply" v-model="productModify.includePowerSupply" placeholder="Chipset" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.motherboardCompatibility" v-model="productModify.motherboardCompatibility" placeholder="Memeory Size" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.frontUsb3portsString" v-model="productModify.frontUsb3portsString" placeholder="Memory Type" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.maximumVideoCardLengthString" v-model="productModify.maximumVideoCardLengthString" placeholder="Core Clock" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.size" v-model="productModify.size" placeholder="Boost Clock" :is-info="true"></textfield>
        <!--caseType: String,
        color: String,
        includePowerSupply: Boolean,
        external35Bays: Number,
        internal35Bays: Number,
        internal25Bays: Number,
        external25Bays: Number,
        internal525Bays: Number,
        external525Bays: Number,
        motherboardCompatibility: String,
        frontUsb3ports: Boolean,
        maximumVideoCardLength: Number,
        width: Number,
        sizeLength: Number,
        height: Number,-->
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
                    p.includePowerSupplyString = p.includePowerSupply ? "Yes": "No";
                    p.frontUsb3portsString = p.frontUsb3ports ? "Yes": "No";
                    p.memorySizeString = p.memorySize + " GB";
                    p.maximumVideoCardLengthString = p.maximumVideoCardLength + " mm";
                    p.size =  p.width + " mm X " + p.sizeLength + " mm X " + p.height + " mm";
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
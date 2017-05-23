<template>
    <div style="padding-top: 20px;">
        <div class="font-title">Specifications</div>
        <divider></divider>
        <textfield class="textfield" type="multiline" v-if="productModify.manufacturerId" v-model="productModify.manufacturer().name" placeholder="Manufacturer" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.name" v-model="productModify.name" placeholder="Model" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.partNo" v-model="productModify.partNo" placeholder="Part #" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.capacity" v-model="productModify.capacity" placeholder="Capacity" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.interface" v-model="productModify.interface" placeholder="Interface" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.cache" v-model="productModify.cache" placeholder="Cache" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.rpm" v-model="productModify.rpm" placeholder="RPM" :is-info="true"></textfield>
        <textfield class="textfield" type="multiline" v-if="productModify.formFactor" v-model="productModify.formFactor" placeholder="Form Factor" :is-info="true"></textfield>
        <!--capacity: Number,
        interface: String,
        cache: String,
        rpm: Number,
        formFactor: String,-->
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
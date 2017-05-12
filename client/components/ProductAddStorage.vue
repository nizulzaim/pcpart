<template>
    <cards-content>
        <div class="row has-gutter">
            <div class="col-xs-fluid-8">
                <textfield v-model="value.capacity" placeholder="Capacity"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.interface" placeholder="Interface"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.cache" placeholder="Cache"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.rpm" placeholder="RPM"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.formFactor" placeholder="Form Factor"></textfield>
            </div>
        </div>
    </cards-content>
</template>

<script>
    export default {
        props: {
            value: Object,
        }
    }

    // capacity: "0",
    // interface: "",
    // cache: "",
    // rpm: "0",
    // formFactor: "",
</script>


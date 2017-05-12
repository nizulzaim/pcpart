<template>
    <cards-content>
        <div class="row has-gutter">
            <div class="col-xs-fluid-8">
                <textfield v-model="value.type" placeholder="Type"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.wattage" placeholder="Wattage (Watt)"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.fans" placeholder="Fans"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.modular" placeholder="Modular"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.output" placeholder="Output"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.efficiencyCert" placeholder="Efficiency Certificate"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.pcieConnector" placeholder="Number of Pcie Connector"></textfield>
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
</script>


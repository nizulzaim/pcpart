<template>
    <cards-content>
        <div class="row has-gutter">
            <div class="col-xs-fluid-8">
                <textfield v-model="value.socket" placeholder="Socket"></textfield>
            </div>
            <div class="col-xs-fluid-10">
                <textfield v-model="value.bearingType" placeholder="Bearing Type"></textfield>
            </div>
            <div class="col-xs-fluid-10">
                <textfield v-model="value.maxNoiseLevel" placeholder="Max Noise Level (dbA)"></textfield>
            </div>
            <div class="col-xs-fluid-10">
                <textfield v-model="value.minNoiseLevel" placeholder="Min Noise Level (dbA)"></textfield>
            </div>
            <div class="col-xs-fluid-6">
                <textfield v-model="value.maxFan" placeholder="Max Fan RPM"></textfield>
            </div>
            <div class="col-xs-fluid-6">
                <textfield v-model="value.minFan" placeholder="Min Fan RPM"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.height" placeholder="Height (mm)"></textfield>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.liquidCooled = !value.liquidCooled">
                            <span slot="left">
                                <checkbox v-model="value.liquidCooled"></checkbox>
                            </span>
                            Liquid Cooled
                        </list-item>
                    </list>
                </div>
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

    // fields: {
    //     socket: String,
    //     liquidCooled: Boolean,
    //     bearingType: String,
    //     minNoiseLevel: Number,
    //     maxNoiseLevel: Number,
    //     minFan: Number,
    //     maxFan: Number,
    //     height: Number,
    // }
</script>


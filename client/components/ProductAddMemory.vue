<template>
    <cards-content>
        <div class="row has-gutter">
            <div class="col-xs-fluid-8">
                <textfield v-model="value.type" placeholder="Type"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.speed" placeholder="Speed"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.size" placeholder="Size"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.pricePerGb" placeholder="Price RM/GB"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.casLatency" placeholder="Cas Latency"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.timing" placeholder="Timing"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.voltage" placeholder="Voltage (V)"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.color" placeholder="Color"></textfield>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.heatSpreader = !value.heatSpreader">
                            <span slot="left">
                                <checkbox v-model="value.heatSpreader"></checkbox>
                            </span>
                            Heat Spreader
                        </list-item>
                    </list>
                </div>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.registered = !value.registered">
                            <span slot="left">
                                <checkbox v-model="value.registered"></checkbox>
                            </span>
                            Registered
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

    // memory: {
    //     type: "0",
    //     speed: "",
    //     size: "",
    //     pricePerGb: "0",
    //     casLatency: "0",
    //     timing: "",
    //     voltage: "",
    //     heatSpreader: false,
    //     ecc: false,
    //     registered: false,
    //     color: "",
    // },
</script>


<template>
    <cards-content>
        <div class="row has-gutter">
            <div class="col-xs-fluid-8">
                <textfield v-model="value.interface" placeholder="Interface"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.chipset" placeholder="Chipset"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.memorySize" placeholder="Memory Size"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.memoryType" placeholder="Memory Type"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.coreClock" placeholder="Core Clock"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.boostClock" placeholder="Boost Clock"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.tdp" placeholder="TDP"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.sizeLength" placeholder="Length"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.dviDualLink" placeholder="DVI Dual Link"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.hdmi" placeholder="Number of HDMI"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.vga" placeholder="Number of VGA"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.displayPort" placeholder="Display Port"></textfield>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.sliSupport = !value.sliSupport">
                            <span slot="left">
                                <checkbox v-model="value.sliSupport"></checkbox>
                            </span>
                            SLI Support
                        </list-item>
                    </list>
                </div>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.crossFireSupport = !value.crossFireSupport">
                            <span slot="left">
                                <checkbox v-model="value.crossFireSupport"></checkbox>
                            </span>
                            Cross Fire Support
                        </list-item>
                    </list>
                </div>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.fan = !value.fan">
                            <span slot="left">
                                <checkbox v-model="value.fan"></checkbox>
                            </span>
                            Fan
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

    // interface: String,
    // chipset: String,
    // memorySize: Number,
    // memoryType: String,
    // coreClock: Number,
    // boosClock: Number,
    // tdp: Number,
    // fan: Boolean,
    // sliSupport: Boolean,
    // crossFireSupport: Boolean,
    // length: Number,
    // dviDualLink: Number,
    // hdmi: Number,
    // vga: Number,
    // displayPort: Number,
</script>


<template>
    <cards-content>
        <div class="row has-gutter">
            <div class="col-xs-fluid-6">
                <textfield v-model="value.socket" placeholder="Socket"></textfield>
            </div>
            <div class="col-xs-fluid-6">
                <textfield v-model="value.formFactor" placeholder="Form Factor"></textfield>
            </div>
            <div class="col-xs-fluid-6">
                <textfield v-model="value.chipset" placeholder="Chipset"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.memorySlot" placeholder="Memory Slot"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.memoryType" placeholder="Memory Type"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.maximumSupportedMemory" placeholder="Max Supported Memory"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.sliSupport" placeholder="SLI Support"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.sata6gb" placeholder="Number of Sata 6GB"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.sataExpress" placeholder="Number of Sata Express"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.onboardEthernet" placeholder="Onboard Ethernet"></textfield>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.raidSupport = !value.raidSupport">
                            <span slot="left">
                                <checkbox v-model="value.raidSupport"></checkbox>
                            </span>
                            RAID Support
                        </list-item>
                    </list>
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.onboardVideo = !value.onboardVideo">
                            <span slot="left">
                                <checkbox v-model="value.onboardVideo"></checkbox>
                            </span>
                            Onboard Video
                        </list-item>
                    </list>
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.crossFireSupport = !value.crossFireSupport">
                            <span slot="left">
                                <checkbox v-model="value.crossFireSupport"></checkbox>
                            </span>
                            Cross Fire Support
                        </list-item>
                    </list>
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.onboardUsb3 = !value.onboardUsb3">
                            <span slot="left">
                                <checkbox v-model="value.onboardUsb3"></checkbox>
                            </span>
                            Onboard USB 3
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

    // motherboard: {
    //     formFactor: "",
    //     socket: "",
    //     chipset: "",
    //     memorySlot: "",
    //     memoryType: "",
    //     maximumSupportedMemory: "0",
    //     raidSupport: false,
    //     onboardVideo: false,
    //     crossFireSupport: false,
    //     sliSupport: "",
    //     sata6gb: "0",
    //     sataExpress: "0",
    //     onboardEthernet: "",
    //     onboardUsb3: false,
    // },
</script>


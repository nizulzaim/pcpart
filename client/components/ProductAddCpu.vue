<template>
    <cards-content>
        <div class="row has-gutter">
            <div class="col-xs-fluid-6">
                <dropdown-select v-model="value.dataWidth" label="Data Width">
                    <menu-option :value="32">32-bit</menu-option>
                    <menu-option :value="64">64-bit</menu-option>
                </dropdown-select>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.socket" placeholder="Socket"></textfield>
            </div>
            <div class="col-xs-fluid-10">
                <textfield v-model="value.operatingFrequency" placeholder="Operating Freq. (GHz)"></textfield>
            </div>
            <div class="col-xs-fluid-10">
                <textfield v-model="value.maxTurboFrequency" placeholder="Max Turbo Freq. (GHz)"></textfield>
            </div>
            <div class="col-xs-fluid-6">
                <textfield v-model="value.cores" placeholder="Cores"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.thermalDesignPower" placeholder="Thermal Power (Watts)"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.l1Cache" placeholder="L1 Cache"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.l2Cache" placeholder="L2 Cache"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.l3Cache" placeholder="L3 Cache"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <dropdown-select v-model="value.maximumSupportedMemory" label="Maximum Memory">
                    <menu-option :value="2">2GB</menu-option>
                    <menu-option :value="4">4GB</menu-option>
                    <menu-option :value="8">8GB</menu-option>
                    <menu-option :value="16">16GB</menu-option>
                    <menu-option :value="32">32GB</menu-option>
                    <menu-option :value="64">64GB</menu-option>
                    <menu-option :value="128">128GB</menu-option>
                </dropdown-select>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.integratedGraphics" placeholder="Integrated Graphics"></textfield>
            </div>
            <div class="col-xs-fluid-8">
                <textfield v-model="value.lithography" placeholder="Lithography (nm)"></textfield>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.includeCpuCooler = !value.includeCpuCooler">
                            <span slot="left">
                                <checkbox v-model="value.includeCpuCooler"></checkbox>
                            </span>
                            Include CPU Cooler
                        </list-item>
                    </list>
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.hyperThreading = !value.hyperThreading">
                            <span slot="left">
                                <checkbox v-model="value.hyperThreading"></checkbox>
                            </span>
                            Hyper Threading
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
// cpu: {
//     name: "",
//     dataWidth: "",
//     socket: "",
//     operatingFrequency: "",
//     maxTurboFrequency: "",
//     cores: "",
//     l1Cache: "",
//     l2Cache: "",
//     l3Cache: "",
//     lithography: "",
//     thermalDesignPower: "",
//     includeCpuCooler: false,
//     hyperThreading: false,
//     maximumSupportedMemory: "",
//     integratedGraphics: "",
//     manufacturer: "",
//     partNo: "",
// },
</script>


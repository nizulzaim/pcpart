<template>
    <cards-content>
        <div class="row has-gutter">
            <div class="col-xs-fluid-8">
                <textfield v-model="value.caseType" placeholder="Type"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.color" placeholder="Color"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.external35Bays" placeholder="External 35 Bays"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.internal35Bays" placeholder="Internal 35 Bays"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.external25Bays" placeholder="External 25 Bays"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.internal25Bays" placeholder="Internal 25 Bays"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.external525Bays" placeholder="External 525 Bays"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.internal525Bays" placeholder="Internal 525 Bays"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.motherboardCompatibility" placeholder="Motherboard Compatibility"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.maximumVideoCardLength" placeholder="Maximum Video Card Length (cm)"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.width" placeholder="Width"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.sizeLength" placeholder="Length"></textfield>
            </div>
            <div class="col-xs-fluid-12">
                <textfield v-model="value.height" placeholder="Height"></textfield>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.frontUsb3ports = !value.frontUsb3ports">
                            <span slot="left">
                                <checkbox v-model="value.frontUsb3ports"></checkbox>
                            </span>
                            Front USB 3.0 Ports
                        </list-item>
                    </list>
                </div>
            </div>
            <div class="col-xs-fluid-24">
                <div style="margin-left: -12px; margin-right: -12px;">
                    <list class="hover" :dense="false">
                        <list-item v-on:click="value.includePowerSupply = !value.includePowerSupply">
                            <span slot="left">
                                <checkbox v-model="value.includePowerSupply"></checkbox>
                            </span>
                            Include Power Supply
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

    // type: "",
    // color: "",
    // external35Bays: "",
    // internal35Bays: "",
    // internal25Bays: "",
    // external25Bays: "",
    // internal525Bays: "",
    // external525Bays: "",
    // motherboardCompatibility: "",
    // maximumVideoCardLength: "",
    // width: "",
    // length: "",
    // height: "",
    // includePowerSupply: false,
    // frontUsb3ports: false,
</script>


<template>
    <div>
         <data-table>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td v-for="(item, index) in value"><img :src="item.getImageLink()" alt="" class="no-margin" style="width: 150px;"></td>
                    </tr>
                    <tr>
                        <td class="font-light">Product Name</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.name}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Manufacturer</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.manufacturer().name}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Operating Frequency</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.operatingFrequencyString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Lithography</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.lithographyString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Thermal Design Power</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.thermalDesignPowerString }}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Data Width</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.dataWidthString }}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Maximum Supported Memory</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.maximumSupportedMemoryString }}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Cpu Cooler Includes</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.includeCpuCoolerString }}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Hyper Threading</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.hyperThreadingString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Integrated Graphic Cards</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.integratedGraphicsString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Max Turbo Frequency</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.maxTurboFrequencyString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Max Turbo Frequency</td>
                        <td v-for="(item, index) in productsModify">
                            <router-link :to="'/product/details/' + item._id">
                                <raised-button class="primary" v-ripple>
                                    View
                                </raised-button>
                            </router-link>
                        </td>
                    </tr>

                </tbody>
            </table>
        </data-table>
    </div>
</template>

<script>
    export default {
        props: {
            value: Array,
        },
        computed: {
            productsModify() {
                this.value.forEach(p => {
                    p.operatingFrequencyString = p.operatingFrequency+ "GHz";
                    p.lithographyString = p.lithography + " nm";
                    p.thermalDesignPowerString = p.thermalDesignPower + " Watts";
                    p.dataWidthString = p.dataWidth + "-bit";
                    p.includeCpuCoolerString = p.includeCpuCooler ? "Yes": "No";
                    p.hyperThreadingString = p.hyperThreading ? "Yes": "No";
                    p.integratedGraphicsString = p.integratedGraphicsString? p.integratedGraphicsString: "No";
                    p.maximumSupportedMemoryString = p.maximumSupportedMemory + " GB";
                    p.maxTurboFrequencyString = p.maxTurboFrequency + "GHz";
                })

                return this.value;
            }
        }
    }
</script>

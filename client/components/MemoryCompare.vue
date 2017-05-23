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
                        <td class="font-light">Speed</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.speed}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">CAS Latency</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.casLatency}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Timing</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.timing}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Voltage</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.voltage}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Heat Spreader</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.heatSpreaderString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">ECC</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.eccString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Registered</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.registeredString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Color</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.color}}</span></td>
                    </tr>
                    
                    <tr>
                        <td class="font-light"></td>
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
                this.value.forEach((p) => {
                    p.pricePerGbString = "RM" + p.pricePerGb.toFixed(2);
                    p.heatSpreaderString = p.heatSpreaderString ? "Yes": "No";
                    p.eccString = p.eccString ? "Yes": "No";
                    p.registeredString = p.registeredString ? "Yes": "No";
                });

                return this.value;
            }
        }
    }
</script>

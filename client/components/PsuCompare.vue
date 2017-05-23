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
                        <td class="font-light">Type</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.psuType}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Wattage</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.wattageString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Fans</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.fans}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Modular</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.modular}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Output</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.output}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Efficiency Certification</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.efficienyCert}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">PCIE Connector</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.pcieConnector}}</span></td>
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
                this.value.forEach(p => {
                    p.wattageString = p.wattage + "W";
                })
                return this.value;
            }
        }
    }
</script>

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
                        <td class="font-light">Interface</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.interface}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Chipset</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.chipset}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Memory Size</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.memorySizeString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Memory Type</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.memoryType}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Core Clock</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.coreClockString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Boost Clock</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.boostClockString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">TDP</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.tdp}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Fan</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.fanString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">SLI Support</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.sliSupportString}}</span></td>
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
                this.value.forEach((p)=> {
                    p.fanString = p.fan ? "Yes": "No";
                    p.sliSupportString = p.sliSupport ? "Yes": "No";
                    p.memorySizeString = p.memorySize + " GB";
                    p.coreClockString = p.coreClock + " GHz";
                    p.boostClockString = p.boostClock + " GHz";
                })
                return this.value;
            }
        }
    }
</script>

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
                        <td class="font-light">Socket</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.socket}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Liquid Cooled</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.liquidCooledString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Bearing Type</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.bearingType}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Noise Level</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.noiseLevelString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Fan Speed</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.fanString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Height</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.heightString}}</span></td>
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
                    p.liquidCooledString = p.liquidCooled ? "Yes": "No";
                    p.noiseLevelString = p.noiseLevel();
                    p.fanString = p.fanSpeed();
                    p.heightString = p.height + "mm";
                });

                return this.value;
            }
        }
    }
</script>

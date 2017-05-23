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
                        <td class="font-light">Form Factor</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.formFactor}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Chipset</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.chipset}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Memory Slot</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.memorySlot}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Memory Type</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.memoryType}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Maximum Supported Memory</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.maximumSupportedMemoryString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">RAID Support</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.raidSupportString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Onboard Video</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.onboardVideoString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Cross Fire Support</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.crossFireSupportString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Onboard USB3</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.onboardUsb3String}}</span></td>
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
                    p.raidSupportString = p.raidSupport ? "Yes": "No";
                    p.onboardVideoString = p.onboardVideo ? "Yes": "No";
                    p.crossFireSupportString = p.crossFireSupport ? "Yes": "No";
                    p.onboardUsb3String = p.onboardUsb3 ? "Yes": "No";
                    p.maximumSupportedMemoryString = p.maximumSupportedMemory + "GB";
                });

                return this.value;
            }
        }
    }
</script>

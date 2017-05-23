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
                        <td class="font-light">Color</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.color}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Include Power Supply</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.includePowerSupply}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Motherboard Compatibility</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.motherboardCompatibility}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Front USB 3 Ports</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.frontUsb3portsString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Maximum Video Card Length</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.maximumVideoCardLengthString}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Size</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.size}}</span></td>
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
                    p.includePowerSupplyString = p.includePowerSupply ? "Yes": "No";
                    p.frontUsb3portsString = p.frontUsb3ports ? "Yes": "No";
                    p.memorySizeString = p.memorySize + " GB";
                    p.maximumVideoCardLengthString = p.maximumVideoCardLength + " mm";
                    p.size =  p.width + " mm X " + p.sizeLength + " mm X " + p.height + " mm";
                })
                return this.value;
            }
        }
    }
</script>

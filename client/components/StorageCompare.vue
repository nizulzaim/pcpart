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
                        <td class="font-light">Capacity</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.capacity}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Interface</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.interface}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Cache</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.cache}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">RPM</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.rpm}}</span></td>
                    </tr>
                    <tr>
                        <td class="font-light">Form Factor</td>
                        <td v-for="(item, index) in productsModify"><span class="font-subhead no-margin">{{item.formFactor}}</span></td>
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

                return this.value;
            }
        }
    }
</script>

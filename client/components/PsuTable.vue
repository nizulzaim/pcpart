<template>
    <div>
        <clearfix>
            <div class="pull-left">
                <raised-button @click="goToCompare" class="primary" v-ripple :disabled="!showButtonCompare">Compare Selected</raised-button>
            </div>
        </clearfix>
        <data-table class="sortable">
            <table>
                <thead>
                    <tr>
                        <th class="unsortable"></th>
                        <th class="">Power Supply</th>
                        <th>Wattage</th>
                        <th>Output</th>
                        <th># of fans</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(v, index) in value" :key="index" style="cursor: pointer">
                        <td>
                            <checkbox style="margin-top: -12px; margin-bottom: -12px;" v-model="checkbox[index]" :disabled="v.checkboxDisabled"></checkbox>
                        </td>
                        <td @click="goTo(v._id)" v-if="v.manufacturer()">{{v.manufacturer().name}} {{v.name}}</td>
                        <td @click="goTo(v._id)">{{v.wattage}} W</td>
                        <td @click="goTo(v._id)">{{v.output}}</td>
                        <td @click="goTo(v._id)">{{v.fans}}</td>
                        <td @click="goTo(v._id)" ><span v-if="v.lowestPrice()">RM {{v.lowestPrice().toFixed(2)}}</span></td>
                    </tr>
                    <tr v-if="!$subReady">
                        <td colspan="100"  class="font-center">Loading</td>
                    </tr>
                    <tr v-if="$subReady && value.length === 0">
                        <td colspan="100" class="font-center">No Data</td>
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
        data() {
            return {
                checkbox: [],
                itemToCompare: [],
                showButtonCompare: false,
            }
        },
        mounted() {
            this.value.forEach(item=> {
                this.checkbox.push(false);
            })
        },
        watch: {
            checkbox() {
                let itemCount = 0;;
                this.itemToCompare = [],
                this.checkbox.forEach((item, index)=> {
                    if (item) {
                        itemCount++;
                        this.itemToCompare.push(this.value[index]._id);
                    }
                })
                this.showButtonCompare = itemCount > 1;

                if (this.itemToCompare.length === 3) {
                    this.value.forEach((item, index) => {
                        item.checkboxDisabled = !this.checkbox[index];
                    })
                } else {
                    this.value.forEach((item, index) => {
                        item.checkboxDisabled = false;
                    })
                }
            }
        },
        methods: {
            goTo(id) {
                this.$router.push("/product/details/" + id);
            },
            goToCompare() {
                this.$router.push("/product/compare?type=psu&compare="+ this.itemToCompare);
            }
            
        },
    }
</script>
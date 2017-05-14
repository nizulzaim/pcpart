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
                        <th class="">Motherboard</th>
                        <th>Socket</th>
                        <th>Form Factor</th>
                        <th>RAM Slots</th>
                        <th>Max RAM</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(v, index) in value" style="cursor: pointer">
                        <td>
                            <checkbox style="margin-top: -12px; margin-bottom: -12px;" v-model="checkbox[index]" :disabled="v.checkboxDisabled"></checkbox>
                        </td>
                        <td @click="goTo(v._id)" v-if="v.manufacturer()">{{v.manufacturer().name}} {{v.name}}</td>
                        <td @click="goTo(v._id)">{{v.socket}}</td>
                        <td @click="goTo(v._id)">{{v.formFactor}}</td>
                        <td @click="goTo(v._id)">{{v.memorySlot}}</td>
                        <td @click="goTo(v._id)">{{v.maximumSupportedMemory}} GB</td>
                        <td @click="goTo(v._id)"></td>
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
                this.$router.push("/product/compare?type=motherboard&compare="+ this.itemToCompare);
            }
            
        },
    }
</script>
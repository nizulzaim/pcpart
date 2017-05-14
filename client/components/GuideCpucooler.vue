<template>
    <reveal v-model="value.showReveal" :enable-overlay-click="false">
        <div class="col-md-12">
            <data-table class="sortable" v-depth="3">
                <form @submit.prevent="nextFunction">
                    <cards-content>
                        <div class="font-subhead no-margin">Select CPU Cooler</div>
                        <textfield v-model="searchTerm" placeholder="Search"></textfield>
                    </cards-content>
                    <divider></divider>
                    <cards-content-scrollbar>
                        <table>
                            <thead>
                                <tr>
                                    <th class="unsortable"></th>
                                    <th class="">CPU Cooler</th>
                                    <th class="">Fan Speed</th>
                                    <th class="">Noise Level</th>
                                    <th>Height</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, index) in products" :key="v._id" style="cursor: pointer">
                                    <td>
                                        <checkbox style="margin-top: -12px; margin-bottom: -12px;" v-model="checkbox[index]" :disabled="v.checkboxDisabled"></checkbox>
                                    </td>
                                    <td v-if="v.manufacturer()">{{v.manufacturer().name}} {{v.name}}</td>
                                    <td>{{v.fanSpeed()}}</td>
                                    <td>{{v.noiseLevel()}}</td>
                                    <td>{{v.height}} mm</td>
                                </tr>
                                <tr v-if="!$subReady">
                                    <td colspan="100"  class="font-center">Loading</td>
                                </tr>
                                <tr v-if="$subReady && products.length === 0">
                                    <td colspan="100" class="font-center">No Data</td>
                                </tr>
                            </tbody>
                        </table>
                    </cards-content-scrollbar>
                    <divider></divider>
                    <cards-action>
                        <div class="pull-right">
                            <flat-button type="submit" v-ripple class="primary" :disabled="value.id === ''">Next</flat-button>
                        </div>
                    </cards-action>
                </form>
            </data-table>
        </div>
    </reveal>
</template>

<script>
    import {Product, Cpu} from "/imports/model/Product";
    export default {
        props: {
            value: Object,
        },
        methods: {
            nextFunction() {
                this.$emit("done");
            }
        },
        data() {
            return {
                checkbox: [],
                itemToCompare: [],
                showButtonCompare: false,
                searchTerm: "",
            }
        },
        watch: {
            checkbox() {
                let itemCount = 0;;
                this.itemToCompare = [],
                this.checkbox.forEach((item, index)=> {
                    if (item) {
                        itemCount++;
                        this.itemToCompare.push(this.products[index]._id);
                        let val = this.value;
                        val.id = this.products[index]._id;
                        this.$emit("input", val);
                    }
                })
                this.showButtonCompare = itemCount > 1;

                if (this.itemToCompare.length === 1) {
                    this.products.forEach((item, index) => {
                        item.checkboxDisabled = !this.checkbox[index];
                    })
                } else {
                    this.products.forEach((item, index) => {
                        item.checkboxDisabled = false;
                    })
                    let val = this.value;
                    val.id = "";
                    this.$emit("input", val);
                }
            }
        },
        meteor: {
            subscribe: {
                productsSearch() {
                    return ["Cpucooler", this.searchTerm];
                },
            },
            products() {
                let prods = Product.find({type: "Cpucooler"});

                if (prods) {
                    this.checkbox = [];
                    prods.forEach(item=> {
                        this.checkbox.push(false);
                    })
                }

                return prods;
            }
        }
    }
</script>

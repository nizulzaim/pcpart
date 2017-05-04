<template>
    <div class="appbar-padding" style="overflow-x: hidden;">
        <div class="row" style="height: 3000px">
            <div class="col-md-6">

            </div>
            <div class="col-md background-white" v-depth="1">
                <div style="padding: 20px;">
                    <div class="row has-gutter">
                        <div class="col-xs-fluid-24">
                            <div class="font-title">Parts</div>
                            <divider style="margin-bottom: 40px;"></divider>

                            <cpu-table v-model="products"></cpu-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Product, Cpu} from "/imports/model/Product";
    export default {
        meteor: {
            subscribe: {
                products: ["Cpu"],
            },
            products() {
                return Product.find();
            }
        }
    }
</script>
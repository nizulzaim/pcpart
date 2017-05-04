<template>
    <div class="appbar-padding" style="overflow-x: hidden;">
        <div class="row" v-if="$subReady && $subReady.products" style="min-height: 100%;">
            <div class="col-xs-fluid-24">
                <div style="padding: 80px 0; z-index: 100" v-depth="1" class="background-blue-grey-700">
                    <div class="font-subhead font-bold font-center color-grey-200">
                        {{product.type.toUpperCase()}}
                    </div>
                    <div class="font-display2 font-center color-white">
                        {{product.manufacturer().name}} {{product.name}}
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div style="padding: 40px;">
                    <cards>
                        <cards-image :img="product.getImageLink()" style="padding-bottom: 100%"></cards-image>
                    </cards>
                    <cpu-details v-if="product.type === 'Cpu'" v-model="product"></cpu-details>
                </div>
            </div>
            <div class="col-md background-white" v-depth="1">
                <div style="padding: 40px;">
                    <cpu-details-seller v-if="product.type === 'Cpu'" v-model="product"></cpu-details-seller>
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
                products() {
                    return ["Cpu", this.$route.params.id];
                },
            },
            product() {
                return Product.findOne();
            }
        },
        
    }
</script>
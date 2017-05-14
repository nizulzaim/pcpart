<template>
    <div style="overflow-x: hidden; min-height: 100vh" >
        <div class="row appbar-padding" v-if="$subReady && $subReady.products" style="min-height: inherit">
             <div class="col-xs-fluid-24">
                <div style="padding: 80px 0; z-index: 100; height: 100%" v-depth="1" class="background-blue-grey-700">
                    <div class="font-subhead font-bold font-center color-grey-200">
                        {{product.type.toUpperCase()}}
                    </div>
                    <div class="font-display2 font-center color-white">
                        {{product.manufacturer().name}} {{product.name}}
                    </div>
                </div>
            </div>
            <div class="col-md-7 background-grey-200">
                <div style="padding: 40px;">
                    <cards>
                        <cards-image v-if="product.getImageLink()" :img="product.getImageLink()" style="padding-bottom: 100%"></cards-image>
                    </cards>
                    <component :is="product.type.toLowerCase() + '-details'" v-model="product"></component>
                </div>
            </div>
            <div class="col-md background-grey-100" v-depth="1">
                <div style="padding: 40px;">
                    <details-seller v-model="product"></details-seller>
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
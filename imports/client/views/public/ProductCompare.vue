<template>
    <div class="appbar-padding" v-wheight>
        <page-container>
            <div class="row has-gutter">
                <div class="col-xs-fluid-24">
                    <component :is="type +'-compare'" v-model="products"></component>
                </div>
            </div>
        </page-container>
    </div>
</template>

<script>
    import {Product} from "/imports/model/Product";
    
    export default {
        data() {
            return {
                ids: this.$route.query.compare.split(','),
                type: this.$route.query.type,
                products: [],
            }
        },
        meteor: {
            subscribe: {
                productsByArrayOfID() {
                    return [this.ids];
                },
            },
            products() {
                return Product.find();
            }
        }
    }
</script>
<template>
    <div class="appbar-padding" style="overflow-x: hidden; height: 100vh;" >
        <page-container style="height:100%">
            <div class="row center-xs" style="height: 100%;">
                <!--<div class="col-md-fluid-6  background-grey-200">
                    <div style="padding: 36px;">
                        <div class="row">
                            <div class="col-xs-fluid-24">
                                <div class="font-caption no-margin">Max Price</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-1" style="max-width: 90px;-webkit-flex-basis: 90px;-ms-flex-preferred-size: 90px;flex-basis: 90px;">
                                <span style="line-height: 48px;vertical-align: middle">RM {{parseInt(rangeValue)}}</span>
                            </div>
                            <div class="col-xs">
                                <range-slider v-model="rangeValue" :max-value="3000"></range-slider>
                            </div>
                        </div>
                    </div>
                </div>-->
                <div class="col-md-fluid-18 background-grey-100" v-depth="1" style="width:100%">
                    <div style="padding: 20px;">
                        <div class="row has-gutter">
                            <div class="col-xs-fluid-24">
                                <div class="font-title">Parts</div>
                                <divider style="margin-bottom: 40px;"></divider>
                                <component :is="type + '-table'" v-model="products"></component>
                            </div>
                        </div>
                    </div>
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
                rangeValue: 3000,
                type: this.$route.params.type,
            }
        },
        methods: {
            convert_case(str) {
                var lower = str.toLowerCase();
                return lower.replace(/(^| )(\w)/g, function(x) {
                    return x.toUpperCase();
                });
            }
        },
        meteor: {
            subscribe: {
                products() {
                    return [this.convert_case(this.type)]
                },
            },
            products() {
                return Product.find({type: this.convert_case(this.type)});
            }
        }
    }
</script>
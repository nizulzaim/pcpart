<template>
    <div class="appbar-padding" v-wheight>
        <page-container>
            <div class="row has-gutter">
                <div class="col-xs-fluid-24 col-md-fluid-8" v-for="(guide, index) in guides" :key="guide._id">
                    <transition name="slide-fade">
                       <guide-card v-model="guides[index]"></guide-card>
                    </transition>
                </div>
            </div>
        </page-container>
    </div>
</template>

<script>
    import {Guide} from '/imports/model/Guide.js';
    export default {
        meteor: {
            subscribe: {
                guides: [],
            },
            guides() {
                return Guide.find();
            }
        },
        
    }
</script>

<style>
    .slide-fade-enter-active{
        transition: all .3s cubic-bezier(.4, 0, .2, 1);
    }
    .slide-fade-enter{
        opacity: 0;
    }
</style>


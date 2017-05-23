<template>
    <div class="appbar-padding" v-wheight>
        <page-container>
            <div class="row has-gutter">
                <div class="col-xs-fluid-24 col-md-fluid-8" v-for="(guide, index) in guides" :key="guide._id">
                    <transition name="slide-fade">
                       <guide-card v-model="guides[index]" :show-delete="true"></guide-card>
                    </transition>
                </div>
                <div class="col-xs-fluid-24 col-md-fluid-8" v-if="guides && guides.count() === 0">
                    <cards>
                        <cards-content>
                            <div class="font-subhead font-center">
                                No Guide Exist. Create one
                            </div>
                            <div class="button-center-container">
                                <router-link to="/dashboard/post-guide">
                                    <color-button class="primary" v-ripple>Create Guide</color-button>
                                </router-link>
                            </div>
                        </cards-content>
                    </cards>
                </div>
            </div>
        </page-container>
    </div>
</template>

<script>
    import {Guide} from '/imports/model/Guide.js';
    import {User} from '/imports/model/User.js';
    export default {
        meteor: {
            subscribe: {
                guides: [],
            },
            guides() {
                return Guide.find({author: Meteor.userId()});
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


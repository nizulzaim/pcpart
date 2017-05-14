<template>
    <div class="row no-margin no-gutter" style="height:100%;">
        <router-view class="col-xs-5" style="height:100%;" name="navigation"></router-view>
        <div class="col-xs" style="height:100%; overflow: hidden;">
            <div style="height:100%;">
                <scroll-bar>
                    <span>
                        <router-view name="toolbar"></router-view>
                        <transition name="slide-fade">
                            <router-view ></router-view>
                        </transition>
                    </span>
                </scroll-bar>
            </div>
        </div>
        <confirmation-dialog></confirmation-dialog>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$router.beforeEach((to, from, next) => {
                setTimeout(()=>{
                    next();
                }, 250)
            })
        }
        
    }
</script>

<style>
    .slide-fade-enter-active {
        transition: all .3s cubic-bezier(.4, 0, .2, 1);
    }
    .slide-fade-leave-active {
        transition: all .175s cubic-bezier(.4, 0, 0 , 1);
        display: none;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        opacity: 0;
    }
</style>

<template>
    <div class="appbar-padding" v-wheight>
         
    </div>
</template>

<script>
    export default {
        meteor: {
            subscribe: {
                guides() {
                    return [this.$route.params.id];
                },
            }
        }
    }
</script>

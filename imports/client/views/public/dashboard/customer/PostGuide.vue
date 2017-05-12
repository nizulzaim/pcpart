<template>
    <div class="appbar-padding" v-wheight>
         <page-container>
             <div class="row has-gutter center-xs">
                <div class="col-xs-fluid-24 col-md-12">
                    <cards>
                        <form @submit.prevent="postGuide">
                            <cards-content>
                                <div class="font-title no-margin">Post your guide with every details</div>
                            </cards-content>
                            <divider></divider>
                            <cards-content>
                                <textfield v-model="post.title" placeholder="Title of Your Guide"></textfield>
                                <textfield v-model="post.GeneralDescription" type="multiline" placeholder="General Description"></textfield>
                                <textfield v-model="post.CpuAndCoolerDescription" type="multiline" placeholder="CPU & Cooler Description"></textfield>
                                <textfield v-model="post.MotherboardDescription" type="multiline" placeholder="MotherboardDescription"></textfield>
                                <textfield v-model="post.MemoryDescription" type="multiline" placeholder="Memory Description"></textfield>
                                <textfield v-model="post.StorageDescription" type="multiline" placeholder="Storage Description"></textfield>
                                <textfield v-model="post.VideocardDescription" type="multiline" placeholder="Video Card/GPU Description"></textfield>
                                <textfield v-model="post.PSUDescription" type="multiline" placeholder="PSU Description"></textfield>
                                <textfield v-model="post.CaseDescription" type="multiline" placeholder="Casing Description"></textfield>
                            </cards-content>
                            <divider></divider>
                            <cards-action>
                                <div class="pull-right">
                                    <color-button class="primary" type="submit" v-ripple>Post Guide</color-button>
                                </div>
                            </cards-action>
                        </form>
                    </cards>
                </div>
             </div>
         </page-container>
    </div>
</template>

<script>
    import {Guide} from "/imports/model/Guide";
    
    export default {
        data() {
            return {
                post: {
                    title: "",
                    GeneralDescription: "",
                    CpuAndCoolerDescription: "",
                    MotherboardDescription: "",
                    MemoryDescription: "",
                    StorageDescription: "",
                    VideocardDescription: "",
                    PSUDescription: "",
                    CaseDescription: "",
                }
            }
        },
        methods: {
            postGuide() {
                let guide = new Guide();
                if (this.post.title === "") {
                    this.$snackbar.run("Please enter the title");
                }

                if (this.post.GeneralDescription === "") {
                    this.$snackbar.run("Please enter the general description of this post");
                }
                guide.callMethod("create", this.post, (err, res)=> {
                    if (err) {
                        return this.$snackbar.run("Error when creating the guide" + err.reason, ()=>{}, "OK", "error");
                    }
                    this.$snackbar.run("Successfully create guide");

                    return this.$router.push("/guides/" + res);
                });
            }
        }
    }
</script>


<template>
    <div class="appbar-padding" v-wheight>
         <page-container>
             <div class="row has-gutter center-xs">
                <div class="col-xs-fluid-24 col-md-12">
                    <cards>
                        <form @submit.prevent="nextShow(0)">
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
                                    <color-button class="primary" type="submit" v-ripple>Next</color-button>
                                </div>
                            </cards-action>
                        </form>
                    </cards>
                </div>
            </div>
        </page-container>
        <guide-cpu v-model="element[0]" @done="nextShow(1)"></guide-cpu>
        <guide-cpucooler v-model="element[1]" @done="nextShow(2)"></guide-cpucooler>
        <guide-motherboard v-model="element[2]" @done="nextShow(3)"></guide-motherboard>
        <guide-memory v-model="element[3]" @done="nextShow(4)"></guide-memory>
        <guide-storage v-model="element[4]" @done="nextShow(5)"></guide-storage>
        <guide-gpu v-model="element[5]" @done="nextShow(6)"></guide-gpu>
        <guide-psu v-model="element[6]" @done="nextShow(7)"></guide-psu>
        <guide-case v-model="element[7]" @done="postGuide"></guide-case>
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
                },
                element: [
                    {
                        id: "",
                        showReveal: false,
                    },
                    {
                        id: "",
                        showReveal: false,
                    },
                    {
                        id: "",
                        showReveal: false,
                    },
                    {
                        id: "",
                        showReveal: false,
                    },
                    {
                        id: "",
                        showReveal: false,
                    },
                    {
                        id: "",
                        showReveal: false,
                    },
                    {
                        id: "",
                        showReveal: false,
                    },
                    {
                        id: "",
                        showReveal: false,
                    }
                ]
                
            }
        },
        methods: {
            nextShow(val) {
                if (val > 0) {
                    this.element[val - 1].showReveal = false;
                }
                this.element[val].showReveal = true;
            },
            postGuide() {
                this.element[7].showReveal = false;
                let guide = new Guide();
                if (this.post.title === "") {
                    this.$snackbar.run("Please enter the title");
                }

                if (this.post.GeneralDescription === "") {
                    this.$snackbar.run("Please enter the general description of this post");
                }
                guide.callMethod("create", this.post, this.element, (err, res)=> {
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


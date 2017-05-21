<template>
    <div class="appbar-padding" v-wheight>
        <div v-if="guide">
            <div class="background-blue-grey">
                <page-container style="padding-top: 30px; padding-bottom: 30px;">
                    <div class="font-center font-display2 color-white">{{guide.title}}</div>
                    <div class="font-subhead font-center color-white">{{guide.createdAt | moment("DD MMMM YYYY HH:mm A") }}</div>
                    <div style="margin: 0 auto; display: table;">
                        <div class="row middle-xs" v-if="guide.authorUser()">
                            <avatar :text="guide.authorUser().username" class="pull-left"></avatar>
                            <div style="height: 24px;">
                                <div class="pull-right color-grey-100" style="margin-left: 10px;">{{guide.authorUser().profile.firstname}} {{guide.authorUser().profile.lastname}}</div>
                            </div>
                        </div>
                        
                    </div>
                </page-container>
            </div>
            <page-container>
                <div class="row has-gutter center-xs">
                    <div class="col-xs-fluid-24 col-md-fluid-18">
                        <cards v-if="guide">
                            <cards-content style="padding: 20px;">
                                <div class="font-headline">Decription</div>
                                <divider></divider>
                                <div class="font-subhead">{{guide.GeneralDescription}}</div>

                                <div class="font-headline">CPU And Cooler</div>
                                <divider></divider>
                                <div class="font-subhead">{{guide.CpuAndCoolerDescription}}</div>

                                <div class="font-headline">Motherboard</div>
                                <divider></divider>
                                <div class="font-subhead">{{guide.MotherboardDescription}}</div>

                                <div class="font-headline">Memory</div>
                                <divider></divider>
                                <div class="font-subhead">{{guide.MemoryDescription}}</div>

                                <div class="font-headline">Storage</div>
                                <divider></divider>
                                <div class="font-subhead">{{guide.StorageDescription}}</div>

                                <div class="font-headline">Video Card</div>
                                <divider></divider>
                                <div class="font-subhead">{{guide.VideocardDescription}}</div>

                                <div class="font-headline">PSU</div>
                                <divider></divider>
                                <div class="font-subhead">{{guide.PSUDescription}}</div>

                                <div class="font-headline">Case</div>
                                <divider></divider>
                                <div class="font-subhead">{{guide.CaseDescription}}</div>

                                 <!--MotherboardDescription: {type: String, optional: true},
        MemoryDescription: {type: String, optional: true},
        StorageDescription: {type: String, optional: true},
        VideocardDescription: {type: String, optional: true},
        PSUDescription: {type: String, optional: true},
        CaseDescription: {type: String, optional: true},-->
                            </cards-content>
                        </cards>
                    </div>
                </div>
            </page-container>
        </div>
        
    </div>
</template>

<script>
    import {Guide} from '/imports/model/Guide.js';
    export default {
        meteor: {
            subscribe: {
                guides() {
                    return [this.$route.params.id];
                },
            },
            guide() {
                return Guide.findOne();
            }
        }
    }
</script>

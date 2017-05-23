<template>
    <div class="appbar-padding" v-wheight>
        <div v-if="guide">
            <div class="background-blue-grey">
                <page-container style="padding-top: 30px; padding-bottom: 30px;">
                    <div class="font-center font-display2 color-white">{{guide.title}}</div>
                    <div class="font-subhead font-center color-white">{{guide.createdAt | moment("DD MMMM YYYY HH:mm A") }}</div>
                    <div style="margin: 0 auto; display: table;">
                        <div class="row middle-xs" v-if="guide.authorUser()">
                            <avatar class="pull-left background-theme" :text="guide.authorUser().profile.firstname">
                                <img v-if="guide.authorUser().image()" :src="guide.authorUser().image().link()" alt="">
                            </avatar>
                            <!--<avatar :text="guide.authorUser().username" ></avatar>-->
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
                            </cards-content>
                        </cards>

                        <cards>
                            <cards-content>
                                <div class="row has-gutter middle-xs">
                                    <div class="col-xs-2">Components</div>
                                    <div class="col-xs-1"></div>
                                    <div class="col-xs-1"></div>
                                    <div class="col-xs">Product Name</div>
                                    <div class="col-xs-2">Price</div>
                                </div>
                                <divider style="margin-top: 10px; margin-bottom: 20px;"></divider>
                                <div v-for="p in products">
                                    <div class="row has-gutter middle-xs">
                                        <div class="col-xs-2">
                                            <router-link :to="'/product/' + p.type.toLowerCase()">
                                                <div class="font-subhead no-margin">{{p.type.toUpperCase()}}</div>
                                            </router-link>
                                        </div>
                                        <div class="col-xs-1">
                                            <router-link :to="'/product/details/' + p._id">
                                                <!--<cards-image style="padding-bottom: 100%"></cards-image>-->
                                                <cards-image :img="p.getImageLink() ? p.getImageLink() : ''" style="padding-bottom: 100%"></cards-image>
                                            </router-link>
                                        </div>
                                        <div class="col-xs-1"></div>
                                        <div class="col-xs">
                                            <div>
                                                <router-link :to="'/product/details/' + p._id">
                                                    <span v-if="p.manufacturer()">{{p.manufacturer().name}} {{p.name}}</span>
                                                </router-link>
                                            </div>
                                        </div>
                                        <div class="col-xs-2">
                                            <span v-if="p.lowestPrice()">RM {{p.lowestPrice().toFixed(2)}}</span>
                                        </div>
                                    </div>
                                    <divider style="margin-top: 10px; margin-bottom: 20px;"></divider>
                                </div>
                                
                            </cards-content>
                        </cards>
                        <div v-if="guide && guideComments">
                            <div class="row" v-for="g in guideComments" :key="g._id" style="margin-top: 20px; margin-bottom: 10px;">
                                <div class="col-xs-1" v-if="g.user()">
                                    <avatar class="background-theme" :text="g.user().profile.firstname">
                                        <img v-if="g.user().image()" :src="g.user().image().link()" alt="">
                                    </avatar>
                                </div>
                                <div class="col-xs" >
                                    <cards v-if="g.user()">
                                        <cards-content>
                                            <div>{{g.text}}</div>
                                        </cards-content>
                                        <divider></divider>
                                        <cards-content class="background-grey-50">
                                            <div class="font-caption no-margin">{{g.createdAt | moment("DD MMMM YYYY HH:mm A")}} | <span v-if="g.user()">{{g.user().profile.firstname}}</span></div>
                                        </cards-content>
                                    </cards>
                                </div>
                            </div>
                        </div>
                        
                        <cards v-if="!loginUser">
                            <cards-content>
                                <div class="font-subhead font-center">Login/Register to continue</div>
                                <div class="button-center-container">
                                    <flat-button class="primary"  @click="showRegister" v-ripple>Register</flat-button>
                                    <raised-button class="primary" @click="showLogin" v-ripple>Sign In</raised-button>
                                </div>
                            </cards-content>
                        </cards>
                        <cards v-if="loginUser">
                            <form @submit.prevent="postComment">
                                <cards-content>
                                    <textfield v-model="textComment" type="multiline" placeholder="Your Comment"></textfield>
                                </cards-content>
                                <divider></divider>
                                <cards-action>
                                    <div class="pull-right">
                                        <raised-button type="submit" class="primary" v-ripple>Comment</raised-button>
                                    </div>
                                </cards-action>
                            </form>
                        </cards>
                    </div>
                </div>
            </page-container>
        </div>
        
    </div>
</template>

<script>
    import {Guide} from '/imports/model/Guide.js';
    import {GuideComment} from '/imports/model/GuideComment.js';
    import {Product} from '/imports/model/Product.js';
    import {User} from '/imports/model/User.js';

    export default {
        data() {
            return {
                textComment: "",
            }
        },
        methods:{
            postComment() {
                let comment = new GuideComment();
                comment.callMethod("create", this.textComment, this.$route.params.id, (err, reason)=> {
                    this.textComment = "";
                    if(err) {
                        return this.$snackbar.run(err.reason, ()=> {}, "OK", "error");
                    }

                    return this.$snackbar.run("Successfully add new comment", ()=> {});
                });
            },
            showLogin() {
                setTimeout(()=> {
                    Session.set("signInPlease", Math.random())
                }, 100)
            },
            showRegister() {
                Session.set("registerPlease", Math.random())
            }
        },
        meteor: {
            subscribe: {
                guideDetails() {
                    return [this.$route.params.id];
                },
                loginUser: [],
                // guidecomments() {
                //     return [this.$route.params.id];
                // },
            },
            products() {
                return Product.find();
            },
            guide() {
                return Guide.findOne();
            },
            guideComments() {
                return GuideComment.find();
            },
            loginUser() {
                return User.findOne(Meteor.userId());
            }
        },
    }
</script>

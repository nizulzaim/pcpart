<template>
     <cards>
        <cards-content>
            <div class="row middle-xs">
                <div class="col-xs-fluid-8">
                    <cards-image v-ripple :img="value.image()" style="padding-bottom: 100%"></cards-image>
                </div>
                <div class="col-xs-fluid-16">
                    <div class="font-title no-margin">{{value.title}}</div>
                    <div class="font-subhead no-margin color-grey-600" style="height: 48px; overflow-y: hidden;">{{value.GeneralDescription}}</div>
                </div>
            </div>
        </cards-content>
        <divider></divider>
        <cards-action>
            <router-link :to="'/guides/' + value._id">
                <color-button v-ripple class="primary"><icon name="book"></icon> Read</color-button>
            </router-link>
            <div class="pull-right">
                <span style="line-height: 48px; padding-right: 20px;cursor:pointer">{{value.love.count()}}</span>
                <icon-button v-if="showDelete" @click="deleteGuide(value)" name="delete" v-ripple></icon-button>
                <icon-button @click="loveGuide(value._id)" :name="heart" :class="{accent: true, disabled: !isLogin}" v-ripple></icon-button>
            </div>
        </cards-action>
    </cards>
</template>

<script>
import {Guide} from '/imports/model/Guide.js';
import {User} from "/imports/model/User";
export default {
    props: {
        value: Object,
        showDelete: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        heart() {
            if (this.isLogin) {
                if (this.loveByMe) {
                    return "heart";
                }
            }
            return "heart-outline";
        },
    },
    methods: {
        loveGuide(guideId) {
            this.value.heartFull = true;
            this.loveByMe = !this.loveByMe;
            if (this.loveByMe) {
                this.value.numberOfLove++;
            } else {
                this.value.numberOfLove--;
            }

            let guide = Guide.findOne(guideId);

            guide.callMethod("love", (err, res) => {
                if (err) {
                    return console.log(err);
                }
                // this.$subscribe("guides");
            })
        },
        deleteGuide(guide) {
            this.$confirmation.run("Are you sure you want to delete this guide?", ()=> {
                guide.callMethod("removeGuide", (err, reason) => {
                    if(err) {
                        return this.$snackbar.run(err.reason, ()=> {}, "OK", "error");
                    }
                    return this.$snackbar.run("Successfully remove", ()=> {});
                })
            })
        }
    },
    meteor: {
        subscribe: {
            loginUser: [],
        },
        isLogin() {
            let ans = User.findOne(Meteor.userId()) !== undefined;
            return ans;
        },
        loveByMe() {
            let isLogin = User.findOne(Meteor.userId());
            if (isLogin === undefined) {
                return false;
            }
            return this.value.love.indexOf(isLogin._id) > -1;
        }
    }
}
</script>


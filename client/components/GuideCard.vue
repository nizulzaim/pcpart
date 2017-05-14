<template>
     <cards>
        <cards-content>
            <div class="row middle-xs">
                <div class="col-xs-fluid-8">
                    <cards-image v-ripple img="/img/favicon.png" style="padding-bottom: 100%"></cards-image>
                </div>
                <div class="col-xs-fluid-16">
                    <div class="font-title no-margin">{{value.title}}</div>
                    <div class="font-subhead no-margin color-grey-600">{{value.GeneralDescription}}</div>
                </div>
            </div>
        </cards-content>
        <divider></divider>
        <cards-action>
            <router-link :to="'/guides/' + value._id">
                <color-button v-ripple class="primary"><icon name="book"></icon> Read</color-button>
            </router-link>
            <div class="pull-right">
                <span style="line-height: 48px; padding-right: 20px;cursor:pointer">{{value.numberOfLove}}</span>
                <icon-button @click="loveGuide(value._id)" :name="heart" class="accent" v-ripple></icon-button>
            </div>
        </cards-action>
    </cards>
</template>

<script>
import {GuideLove} from '/imports/model/GuideLove.js';
export default {
    props: {
        value: Object,
    },
    data() {
        return {
            loveByMe: GuideLove.findOne({guideId: this.value._id, userId: Meteor.userId()}) !== undefined,
        }
    },
    computed: {
        heart() {
            if (this.loveByMe) {
                return "heart";
            }

            return "heart-outline";
        }
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

            let love = new GuideLove();

            love.callMethod("create", guideId, (err, res) => {
                if (err) {
                    return console.log(err);
                }
                this.$subscribe("guides");
            })
        }
    }
}
</script>


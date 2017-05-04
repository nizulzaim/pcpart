<template> 
    <div>
        <clearfix>
            <div class="pull-right" v-if="loginUser && loginUser.isCustomer()">
                <raised-button @click="showAdd= true" class="primary" v-ripple><icon name="plus"></icon> Add New</raised-button>
            </div>
        </clearfix>

        <data-table class="sortable" style="box-shadow: none">
            <table>
                <thead>
                    <tr>
                        <th class="unsortable"></th>
                        <th>Website</th>
                        <th>Price</th>
                        <th></th>
                        <!--<th class="th-action unsortable"></th>-->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="v in sellers">
                        <td></td>
                        <td>{{v.websiteName()}}</td>
                        <td>RM {{v.price.toFixed(2)}}</td>
                        <td class="td-number">
                            <div class="pull-right">
                                <a :href="v.link" target="_blank">
                                    <icon-button name="link"></icon-button>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="!$subReady && !subReady.sellers">
                        <td colspan="100"  class="font-center">Loading</td>
                    </tr>
                    <tr v-if="$subReady && !sellers.count()">
                        <td colspan="100" class="font-center">No Seller</td>
                    </tr>
                </tbody>
            </table>
        </data-table>
        <reveal v-model="showAdd" >
            <div class="col-md-7">
                <cards v-depth="3">
                    <form @submit.prevent="add">
                        <cards-content>
                            <div class="font-subhead no-margin">Add New Seller Source</div>
                        </cards-content>
                        <divider></divider>
                        <cards-content-scrollbar>
                            <div class="row has-gutter">
                                <div class="col-xs-fluid-24">
                                    <textfield type="text" v-model="parse.link" placeholder="Link (URL)"></textfield>
                                </div>
                                <div class="col-xs-fluid-12">
                                    <textfield type="text" v-model="parse.price" placeholder="Price (RM)"></textfield>
                                </div>
                                <div class="col-xs-fluid-12">
                                    <dropdown-select v-model="parse.websiteType" label="Website Type">
                                        <menu-option :value="0">Amazon</menu-option>
                                        <menu-option :value="1">Lazada</menu-option>
                                        <menu-option :value="2">Lelong</menu-option>
                                        <menu-option :value="3">IpMart</menu-option>
                                    </dropdown-select>
                                </div>
                            </div>
                        </cards-content-scrollbar>
                        <divider></divider>
                        <cards-action>
                            <div class="pull-right">
                                <flat-button v-ripple @click="showAdd = false">Cancel</flat-button>
                                <flat-button type="submit" v-ripple class="primary">Add</flat-button>
                            </div>
                        </cards-action>
                    </form>
                </cards>
            </div>
        </reveal>
    </div>
    
</template>

<script>
    import {Seller} from "/imports/model/Seller";
    import {User} from "/imports/model/User";
    export default {
        data(){
            return {
                parse: {
                    link: "",
                    price: "",
                    websiteType:"",
                },
                showAdd: false,
            }
        },
        meteor: {
            subscribe: {
                sellers() {
                    return [this.$route.params.id];
                },

                loginUser: [],
            },
            sellers() {
                return Seller.find();
            },
            loginUser() {
                return User.findOne(Meteor.userId());
            }
        },
        
        methods: {
            clearText() {
                this.parse = {
                    link: "",
                    price: "",
                    websiteType:"",
                };
            },
            add() {
                let s = new Seller();
                let obj = this.parse;
                obj.productId = this.$route.params.id;

                s.callMethod("create", obj, (err, res) => {
                    if(err) {
                        return this.$snackbar.run(err.reason, ()=> {}, "OK", "error");
                    }
                    this.clearText();
                    return this.$snackbar.run("Successfully add new product");
                })
            }
        }
    }
</script>
<template>
    <span>
        <app-bar :title="title" :fixed="true" background-color="blue-grey-800" v-depth="depth">
            <div slot="left">
                <icon-button name="menu" v-open v-ripple="{background: '#fff'}"></icon-button>
            </div>
            <!--<div slot="center" style="margin-right: 8px;">
                <search-box v-model="value"></search-box>
            </div>-->
            <div slot="right" v-if="$subReady && $subReady.loginUser">
                <div style="padding-top: 8px" v-if="!loginUser">
                    <flat-button @click="showRegister = true" class="white" v-ripple>Register</flat-button>
                    <raised-button @click="showLogin = true" class="accent" v-ripple><icon name="key"></icon> Sign In</raised-button>
                </div>
                <div style="padding-top: 8px; padding-right: 8px;" v-else>
                    <dropdown-menu>
                        <avatar trigger-menu style="cursor: pointer" :text="loginUser.profile.firstname">
                            <img v-if="loginUser.image()" :src="loginUser.image().link()" alt="">
                        </avatar>
                        <menu-content>
                            <div v-if="loginUser.isAdmin()">
                                <menu-item @click="goToAddProduct">Add Product</menu-item>
                                <divider></divider>
                            </div>
                            <div v-if="loginUser.isCustomer()">
                                <menu-item @click="goToPostGuide">Post Guide</menu-item>
                                <divider></divider>
                            </div>
                            <menu-item @click="goToMyAccount">My Account</menu-item>
                            <menu-item @click="signOut">Sign Out</menu-item>
                        </menu-content>
                    </dropdown-menu>
                </div>
            </div>
        </app-bar>
        <reveal v-model="showLogin" >
            <div class="col-md-7">
                <cards v-depth="3">
                    <form @submit.prevent="signIn">
                        <cards-content>
                            <div class="font-subhead no-margin">Sign In</div>
                        </cards-content>
                        <divider></divider>
                        <cards-content-scrollbar>
                            <textfield type="text" v-model="username" placeholder="Username"></textfield>
                            <textfield type="password" v-model="password" placeholder="Password"></textfield>
                        </cards-content-scrollbar>
                        <divider></divider>
                        <cards-action>
                            <div class="pull-right">
                                <flat-button v-ripple @click="showLogin = false">Cancel</flat-button>
                                <flat-button type="submit" v-ripple class="primary">Sign In</flat-button>
                            </div>
                        </cards-action>
                    </form>
                </cards>
            </div>
        </reveal>

        <reveal v-model="showRegister" >
            <div class="col-xs-fluid-24 col-md-7">
                <cards v-depth="3">
                    <form @submit.prevent="register">
                        <cards-content>
                            <div class="font-subhead no-margin">Register New Account</div>
                        </cards-content>
                        <divider></divider>
                        <cards-content-scrollbar>
                            <textfield type="text" v-model="username" placeholder="Username"></textfield>
                            <textfield type="text" v-model="email" placeholder="Email"></textfield>
                            <textfield type="text" v-model="firstname" placeholder="Firstname"></textfield>
                            <textfield type="text" v-model="lastname" placeholder="Lastname"></textfield>
                            <textfield type="password" v-model="password" placeholder="Password"></textfield>
                            <textfield type="password" v-model="cpassword" placeholder="Confirm Password"></textfield>
                        </cards-content-scrollbar>
                        <divider></divider>
                        <cards-action>
                            <div class="pull-right">
                                <flat-button v-ripple @click="showRegister = false">Cancel</flat-button>
                                <flat-button type="submit" v-ripple class="primary">Register</flat-button>
                            </div>
                        </cards-action>
                    </form>
                </cards>
            </div>
        </reveal>
    </span>
</template>

<script>
import {User} from "/imports/model/User";
export default {
    data() {
        return {
            value: "",
            title: "",
            username: "",
            password: "",
            cpassword: "",
            email:"",
            firstname: "",
            lastname: "",
            showLogin: false,
            showRegister: false,
        }
    },
    head: {
        title() {
            return {
                inner: this.title,
            }
        },
    },
    computed: {
        depth() {
            if(this.$route.meta.depth !== undefined) {
                return this.$route.meta.depth;
            }
            return 0;
        }
    },
    methods: {
        updateTitle() {
            if (this.$route) {
                if(this.$route.matched.some(record => record.meta.pageTitle)) {
                    this.title = this.$route.meta.pageTitle
                    this.$emit('updateHead')
                }
            }
        },
        signIn() {
            Meteor.loginWithPassword(this.username, this.password, err => {
                this.password = "";
                this.username = "";
                this.firstname = "";
                this.lastname = "";
                this.email = "";
                this.cpassword ="";
                if (err) {
                    return this.$snackbar.run(err.reason, ()=> {}, "OK", "error");
                }
                this.$snackbar.run("Succesfully login");
                this.showLogin = false;
                
            })
        },
        register() {
            let user = new User();
            if (this.password !== this.cpassword) {
                this.cpassword ="";
                this.password ="";
                return this.$snackbar.run("Password and Confirm Password must be same", ()=> {}, "OK", "error");
            }

            if (this.password.length < 8) {
                this.cpassword ="";
                this.password ="";
                return this.$snackbar.run("Password must be at least 8 characters", ()=> {}, "OK", "error");
            }

            user.callMethod("create", {username: this.username, password: this.password}, {
                email: this.email, firstname: this.firstname, lastname: this.lastname,
            }, (err,res) => {
                if (err) {
                    return this.$snackbar.run(err.reason, ()=> {}, "OK", "error");
                }
                this.$snackbar.run("Account Register : " + this.username);
                this.signIn();
                this.showRegister =  false;
            })
        },
        signOut() {
            Meteor.logout(err=> {
                if (err) {
                    return this.$snackbar.run(err.reason, ()=> {
                        this.signOut();
                    }, "Retry", "error");
                }
                this.$snackbar.run("Succesfully logout");
                this.$router.push("/");
            });
        },
        goToAddProduct() {
            this.$router.push("/dashboard/product/add")
        },
        goToPostGuide() {
            this.$router.push("/dashboard/post-guide")
        },
        goToMyAccount() {
            this.$router.push("/dashboard/my-account")
        },
        clickRegister() {
            this.showRegister = true;
        }
    },
    watch: {
        value(newVal) {
            Session.set("searchValue", newVal);
        },
    },
    beforeRouteEnter: (to, from, next) => {
        if(to.matched.some(record => record.meta.pageTitle)) {
            next(vm => {
                vm.title = to.meta.pageTitle;
                vm.$emit('updateHead');
            });
        }
    },
    meteor: {
        subscribe: {
            loginUser: [],
        },
        loginUser() {
            return User.findOne(Meteor.userId());
        },
        changingSignInPlease() {
            if (Session.get("signInPlease")) {
                this.showLogin = true;
            }
            
            return Session.get("signInPlease");
        },
        changingRegisterPlease() {
            if (Session.get("registerPlease")) {
                this.clickRegister();
            }
            return Session.get("registerPlease");
        }
    }
}
</script>

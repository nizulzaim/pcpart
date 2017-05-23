<template>
    <scroll-bar class="flex-fill-height">
        <router-link to="/" exact>
            <nav-list class="nav-item">
                <icon name="home"></icon> PC Part Home
            </nav-list>
        </router-link>
        <div>
            <router-link to="/guides" exact>
                <nav-list class="nav-item">
                    <icon name="newspaper"></icon> Build Guides
                </nav-list>
            </router-link>
        </div>
        <div v-if="loginUser">
            <div v-if="loginUser.isAdmin()">
                <router-link to="/dashboard/product/add" exact>
                    <nav-list class="nav-item">
                        <icon name="plus"></icon> Add Product
                    </nav-list>
                </router-link>
            </div>
            <div v-if="loginUser">
                <router-link to="/dashboard/my-guide" exact>
                    <nav-list class="nav-item">
                        <icon name="newspaper"></icon> My Guide
                    </nav-list>
                </router-link>
            </div>
            <divider></divider>
            <router-link to="/dashboard/my-account" exact>
                <nav-list class="nav-item">
                    <icon name="account"></icon> My Account
                </nav-list>
            </router-link>
            <nav-list class="nav-item" @click="signOut">
                <icon name="key"></icon> Sign Out
            </nav-list>
        </div>
        
    </scroll-bar>
</template>

<script>
    import {User} from "/imports/model/User";
    export default {
        methods: {
            signOut() {
                Meteor.logout(err=> {
                    if (err) {
                        return this.$snackbar.run(err.reason, ()=> {
                            this.signOut();
                        }, "Retry", "error");
                    }
                    this.$snackbar.run("Succesfully logout");
                });
            }
        },
        meteor : {
            subscribe: {
                loginUser: [],
            },
            loginUser() {
                return User.findOne(Meteor.userId());
            }
        }
    }
</script>

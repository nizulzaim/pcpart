<template>
    <div class="appbar-padding" v-wheight>
        <page-container>
            <div class="row center-xs">
                <div class="col-xs-fluid-24 col-md-7" v-if="loginUser">
                    <div style="max-width: 250px; width: 250px; height: 250px; margin: 0 auto; margin-bottom: 20px;">
                        <cards-image :img="image" style=" padding-bottom: 100%; margin-bottom: 20px; border-radius: 50%;">
                            <div class="row center-xs middle-xs" style="z-index: 100; height: 100%; width: 100%; position: absolute; top: 0; left: 0;">
                                <div class="col-xs-fluid-24">
                                    <div class="button-center-container">
                                        <raised-button @click="addFile" v-ripple><icon name="upload"></icon> {{buttonAddText}}</raised-button>
                                    </div>
                                </div>
                            </div>
                        </cards-image>
                    </div>
                    
                    <input type="file" style="display: none" ref="inputFile" @change="upload">
                    <cards v-if="loginUser">
                        <form @submit.prevent="edit">
                            <cards-content>
                                <div class="font-subhead no-margin">My Account</div>
                            </cards-content>
                            <divider></divider>
                            <cards-content>
                                <textfield type="text" v-model="loginUser.username" placeholder="Username"></textfield>
                                <textfield type="text" v-model="loginUser.profile.email" placeholder="Email"></textfield>
                                <textfield type="text" v-model="loginUser.profile.firstname" placeholder="Firstname"></textfield>
                                <textfield type="text" v-model="loginUser.profile.lastname" placeholder="Lastname"></textfield>
                            </cards-content>
                            <divider></divider>
                            <cards-action>
                                <div class="pull-right">
                                    <flat-button type="submit" v-ripple class="primary">Update</flat-button>
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
    import {User} from '/imports/model/User.js';
    import {Images} from "/imports/model/Images";
    export default {
        data() {
            return {
                image: "",
            }
        },
        meteor: {
            subscribe: {
                loginUser:[],
            },
            loginUser() {
                let u = User.findOne(Meteor.userId());

                if (u && u.image()) {
                    this.image = u.image().link();
                }

                return u;
            }
        },
        computed: {
            buttonAddText() {
                if (this.image) {
                    return "Change Photo";
                }
                return "Add Photo";
            },
        },
        methods: {
            edit() {
                let obj = {
                    email: this.loginUser.profile.email,
                    firstname: this.loginUser.profile.firstname,
                    lastname: this.loginUser.profile.lastname,
                };

                if (this.loginUser.profile.imageId) {
                    obj.imageId = this.loginUser.profile.imageId;
                }

                this.loginUser.callMethod("update",this.loginUser.username, obj, (err, reason) => {
                    if(err) {
                        return this.$snackbar.run(err.reason, ()=> {}, "OK", "error");
                    }
                    return this.$snackbar.run("Successfully update account", ()=> {});
                })
            },
            addFile() {
                this.$refs.inputFile.click();
            }, 
            upload() {
                let self = this;
                let fileInput = this.$refs.inputFile;

                if (fileInput.files && fileInput.files[0]) {
                    var upload = Images.insert({
                        file: fileInput.files[0],
                        streams: 'dynamic',
                        chunkSize: 'dynamic'
                    }, false);
    
                    upload.on('start',function() {
                        // self.uploadNewData = false;
                        // setTimeout(()=> {
                        //     self.currentUpload.set(this);
                        //     self.showCardsUploader = true;
                        // }, 300);
                    });
    
                    upload.on('end', (error, fileObj) => {
                        if (error) {
                            return this.$snackbar.run('Error during upload: ' + error.reason, ()=> {}, "OK", "error");
                        } 
                        
                        
                        this.loginUser.profile.imageId = fileObj._id;
                        this.image = fileObj._downloadRoute + "/images/" + fileObj._id + "/original/" + fileObj._id + "." +fileObj.extension;
                        this.loginUser.callMethod("update",this.loginUser.username, {imageId: fileObj._id}, (err, reason) => {
                            if(err) {
                                return this.$snackbar.run(err.reason, ()=> {}, "OK", "error");
                            }
                            return this.$snackbar.run('File "' + fileObj.name + '" successfully uploaded');
                        })
                        // this.currentUpload.set(false);
                    });
                    upload.start();
                }
            },
        }
    }
</script>


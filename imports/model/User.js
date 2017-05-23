import {
    Class
} from 'meteor/jagi:astronomy';
import {
    Meteor
} from "meteor/meteor";

import {Images} from '/imports/model/Images.js';

export const UserProfile = Class.create({
    name: 'UserProfile',
    fields: {
        firstname: String,
        lastname: String,
        email: String,
        imageId: {type: String, optional: true},
        userType: {
            type: [Number],
            default: [2],
        },
    }
});

export const User = Class.create({
    name: "User",
    collection: Meteor.users,
    fields: {
        username: String,
        profile: UserProfile,
    },
    behaviors: {
        timestamp: {
            hasCreatedField: true,
            createdFieldName: 'createdAt',
            hasUpdatedField: true,
            updatedFieldName: 'updatedAt'
        },
        softremove: {
            removedFieldName: 'removed',
            hasRemovedAtField: true,
            removedAtFieldName: 'removedAt'
        }
    },
    helpers: {
        isAdmin() {
            return this.profile.userType.indexOf(0) > -1;
        },
        isSaler() {
            return this.profile.userType.indexOf(1) > -1;
        },
        isCustomer() {
            return this.profile.userType.indexOf(2) > -1;
        },
        image() {
            if(!this.profile.imageId) {
                return null;
            }
            return Images.findOne(this.profile.imageId);
        }
    }
});

if (Meteor.isServer) {
    User.extend({
        meteorMethods: {
            create(userObj, profileObj = {}) {
                userObj.profile = profileObj;
                Accounts.createUser(userObj);
            },
            update(username,profileObj) {
                this.username = username;
                this.set({
                    profile: profileObj,
                }, { merge: true });
                return this.save();
            }
        }
    });

    Meteor.publishComposite('loginUser', function(refresh = 0) {
        return {
            find: function() {
                return User.find(this.userId);
            },
            children:[
                {
                    find(user) {
                        if (user.profile.imageId) {
                            return Images.find(user.profile.imageId).cursor;
                        }

                        return undefined;
                    }
                }
            ],
        };
    });

    if (!User.findOne()) {
        let user = new User();
        user.create({
            username: "admin",
            password: "n",
        }, {
            firstname: "Admin",
            lastname: "Account",
            userType: [0],
            email: "mnizulzaim@gmail.com",
        });
    }

}
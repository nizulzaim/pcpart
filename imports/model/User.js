import {
    Class
} from 'meteor/jagi:astronomy';
import {
    Meteor
} from "meteor/meteor";

export const UserProfile = Class.create({
    name: 'UserProfile',
    fields: {
        firstname: String,
        lastname: String,
        email: String,
        imageId: String,
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
            update(profileObj) {
                this.set({
                    profile: profileObj,
                }, { merge: true });
                console.log(this.save());
            }
        }
    });

    Meteor.publishComposite('loginUser', function(refresh = 0) {
        return {
            find: function() {
                return User.find(this.userId);
            },
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
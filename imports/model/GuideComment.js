import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from "meteor/meteor";
import {User} from "./User";
import {Images} from "./Images";

export const GuideComment = Class.create({
    name: "GuideComment",
    collection: new Mongo.Collection("guidecomments"),
    fields: {
        text: String,
        guideId: String,
        userId: String,
        root: {
            type: String,
            optional: true,
            default: 0,
        }
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
        user() {
            return User.findOne(this.userId);
        }
    }
});

if (Meteor.isServer) {
    GuideComment.extend({
        meteorMethods: {
            create(text, guideId) {
                this.text = text;
                this.guideId = guideId;
                this.userId = Meteor.userId();
                return this.save();
            },
        }
    });

    Meteor.publishComposite('guidecomments', function(id) {
        return {
            find: function() {
                return GuideComment.find({guideId: id});
            },
            children: [
                {
                    find(gc) {
                        return User.find(gc.userId);
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
                }
            ]
        };
    });
}
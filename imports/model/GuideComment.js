import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from "meteor/meteor";

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
});

if (Meteor.isServer) {
    GuideComment.extend({
        meteorMethods: {
            create(name) {
                this.name = name;
                this.save();
            },
        }
    });

    Meteor.publishComposite('guidecomments', function() {
        return {
            find: function() {
                return GuideComment.find();
            },
        };
    });
}
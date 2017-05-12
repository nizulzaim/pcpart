import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from "meteor/meteor";

export const GuideLove = Class.create({
    name: "GuideLove",
    collection: new Mongo.Collection("guideloves"),
    fields: {
        guideId: String,
        userId: String,
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
    GuideLove.extend({
        meteorMethods: {
            create(name) {
                this.name = name;
                this.save();
            },
        }
    });

    Meteor.publishComposite('guideloves', function() {
        return {
            find: function() {
                return GuideLove.find();
            },
        };
    });
}
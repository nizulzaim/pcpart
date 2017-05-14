import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from "meteor/meteor";

import {Guide} from '/imports/model/Guide.js';

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
    afterSave(e) {
        let doc = e.currentTarget;
    }
});

if (Meteor.isServer) {
    GuideLove.extend({
        meteorMethods: {
            create(guideId) {
                this.guideId = guideId;
                this.userId = Meteor.userId();

                let find = GuideLove.findOne({guideId, userId: Meteor.userId});
                let guide = Guide.findOne({_id: guideId});
                guide.numberOfLove = guide.numberOfLove + 1;
                console.log(guide.numberOfLove);
                guide.save();
                if (find) {
                    return find.remove();
                } else {
                    return this.save();
                }
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
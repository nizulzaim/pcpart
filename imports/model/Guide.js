import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from "meteor/meteor";

export const Guide = Class.create({
    name: "Guide",
    collection: new Mongo.Collection("guides"),
    fields: {
        title: {type: String},
        GeneralDescription: {type: String},
        CpuAndCoolerDescription: {type: String, optional: true},
        MotherboardDescription: {type: String, optional: true},
        MemoryDescription: {type: String, optional: true},
        StorageDescription: {type: String, optional: true},
        VideocardDescription: {type: String, optional: true},
        PSUDescription: {type: String, optional: true},
        CaseDescription: {type: String, optional: true},
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
    Guide.extend({
        meteorMethods: {
            create(obj) {
                this.set(obj, {merge: true, cast: true});
                return this.save();
            },
        }
    });

    Meteor.publishComposite('guides', function() {
        return {
            find: function() {
                return Guide.find();
            },
        };
    });
}
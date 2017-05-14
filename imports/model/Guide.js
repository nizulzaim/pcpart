import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from "meteor/meteor";
import {Product} from "./Product";
import {GuideLove} from "./GuideLove";


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
        element: [String],
        numberOfLove: {
            type: Number,
            optional: true,
            default: 1,
        },
        randomSeed: {
            type: Number,
            optional: true,
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
        products() {
            return Product.find({_id: {$in: this.element}});
        },
    }
});

if (Meteor.isServer) {
    Guide.extend({
        meteorMethods: {
            create(obj, element) {
                let el = element.map((item)=> item.id);
                obj.element = el;
                this.set(obj, {merge: true, cast: true});
                return this.save();
            },
        },
        events: {
            afterInit(e) {
                
            }
        }
    });

    Meteor.publishComposite('guides', function(id) {
        return {
            find: function() {
                if (id) {
                    return Guide.find(id);
                }
                return Guide.find();
            },
            children: [
                {
                    find(guide) {
                        
                        return Product.find({_id: {$in: guide.element}});
                    }
                }, {
                    find(guide) {
                        return GuideLove.find({guideId: guide._id, userId: this.userId});
                    }
                }
                
            ]
        };
    });
}
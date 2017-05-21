import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from "meteor/meteor";
import {Product} from "./Product";
import {GuideLove} from "./GuideLove";
import {GuideComment} from "./GuideComment";
import {User} from "./User";


export const Guide = Class.create({
    name: "Guide",
    collection: new Mongo.Collection("guides"),
    fields: {
        title: {type: String},
        author: {type: String, optional: true},
        GeneralDescription: {type: String},
        CpuAndCoolerDescription: {type: String, optional: true},
        MotherboardDescription: {type: String, optional: true},
        MemoryDescription: {type: String, optional: true},
        StorageDescription: {type: String, optional: true},
        VideocardDescription: {type: String, optional: true},
        PSUDescription: {type: String, optional: true},
        CaseDescription: {type: String, optional: true},
        element: [String],
        love: {
            type: [String],
            default: [],
            optional : true,
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
        authorUser() {
            return User.findOne(this.author);
        }
    }
});

if (Meteor.isServer) {
    Guide.extend({
        meteorMethods: {
            create(obj, element) {
                let el = element.map((item)=> item.id);
                obj.element = el;
                obj.author = Meteor.userId();
                this.set(obj, {merge: true, cast: true});
                return this.save();
            },
            love() {
                let indexOf = this.love.indexOf(Meteor.userId());

                if (indexOf > -1) {
                    this.love.splice(indexOf,1);
                } else {
                    this.love.push(Meteor.userId());
                }

                return this.save();
            }
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
                    },
                    
                },
                {
                    find(guide) {
                        return User.find(guide.author);
                    }
                },
                {
                    find(guide) {
                        return GuideComment.find({guideId: guide._id});
                    },
                }
                
            ]
        };
    });
}
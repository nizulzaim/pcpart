import {
    Class
} from 'meteor/jagi:astronomy';
import {
    Meteor
} from "meteor/meteor";

import {Manufacturer} from "./Manufacturer";
import {Images} from "./Images";

export const Product = Class.create({
    name: "Product",
    typeField: 'type',
    collection: new Mongo.Collection("products"),
    fields: {
        name: String,
        manufacturerId: String,
        partNo: String,
        imageId: String,
        // model: Number,
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
        manufacturer() {
            return Manufacturer.findOne(this.manufacturerId);
        },
        getImageLink() {
            let image = Images.findOne(this.imageId);
            if (!image) {
                return "";
            }
            return image._downloadRoute + "/images/" + image._id + "/original/" + image._id + "." + image.extension;
        }
    }
});

export const Cpu = Product.inherit({
    name: 'Cpu',
    fields: {
        dataWidth: Number,
        socket: String,
        operatingFrequency: String,
        maxTurboFrequency: String,
        cores: Number,
        l1Cache: String,
        l2Cache: String,
        l3Cache: String,
        lithography: Number,
        thermalDesignPower: Number,
        includeCpuCooler: Boolean,
        hyperThreading: Boolean,
        maximumSupportedMemory: Number,
        integratedGraphics: String,
    }
});

if (Meteor.isServer) {
    Product.extend({
        meteorMethods: {
            create(general, specific) {
                this.set(general, {
                    merge: true,
                    cast: true,
                });
                this.set(specific, {
                    merge: true,
                    cast: true,
                });
                return this.save();
            },
            update(profileObj) {
                this.set({
                    profile: profileObj,
                }, { merge: true });
                console.log(this.save());
            }
        }
    });
    let children = [
        {
            find: function(p) {
                return Manufacturer.find(p.manufacturerId);
            }
        },
        {
            find: function(p) {
                return Images.find(p.imageId).cursor;
            }
        }
    ];

    Meteor.publishComposite('products', function(type ="", id="") {
        return {
            find: function() {
                if (id) {
                    return Product.find(id);
                }
                if (type) {
                    return Product.find({type});
                }
                return Product.find();
            },
            children,
        };
    });

    Meteor.publishComposite('productsByArrayOfID', function(arrayId) {
        return {
            find: function() {
                return Product.find({_id: {$in: arrayId}});
            },
            children,
        };
    });
}
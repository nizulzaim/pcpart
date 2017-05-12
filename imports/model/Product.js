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


export const Cpucooler = Product.inherit({
    name: 'Cpucooler',
    fields: {
        socket: String,
        liquidCooled: Boolean,
        bearingType: String,
        minNoiseLevel: Number,
        maxNoiseLevel: Number,
        minFan: Number,
        maxFan: Number,
        height: Number,
    }
});

export const Motherboard = Product.inherit({
    name: 'Motherboard',
    fields: {
        formFactor: String,
        socket: String,
        chipset: String,
        memorySlot: String,
        memoryType: String,
        maximumSupportedMemory: Number,
        raidSupport: Boolean,
        onboardVideo: Boolean,
        crossFireSupport: Boolean,
        sliSupport: String,
        sata6gb: Number,
        sataExpress: Number,
        onboardEthernet: String,
        onboardUsb3: Boolean,
    }
});


export const Memory = Product.inherit({
    name: 'Memory',
    fields: {
        type: String,
        speed: String,
        size: String,
        pricePerGb: Number,
        casLatency: Number,
        timing: String,
        voltage: String,
        heatSpreader: Boolean,
        ecc: Boolean,
        registered: Boolean,
        color: String,
    }
});

export const Storage = Product.inherit({
    name: 'Memory',
    fields: {
        capacity: Number,
        interface: String,
        cache: String,
        rpm: Number,
        formFactor: String,
    }
});


export const Gpu = Product.inherit({
    name: 'Gpu',
    fields: {
        interface: String,
        chipset: String,
        memorySize: Number,
        memoryType: String,
        coreClock: Number,
        boosClock: Number,
        tdp: Number,
        fan: Boolean,
        sliSupport: Boolean,
        crossFireSupport: Boolean,
        length: Number,
        dviDualLink: Number,
        hdmi: Number,
        vga: Number,
        displayPort: Number,
    }
});

export const Psu = Product.inherit({
    name: 'Psu',
    fields: {
        type: String,
        wattage: Number,
        fans: Number,
        modular: String,
        output: String,
        efficiencyCert: String,
        pcieConnector: Number,
    }
});

export const Case = Product.inherit({
    name: 'Case',
    fields: {
        type: String,
        color: String,
        includePowerSupply: Boolean,
        external35Bays: Number,
        internal35Bays: Number,
        internal25Bays: Number,
        external25Bays: Number,
        internal525Bays: Number,
        external525Bays: Number,
        motherboardCompatibility: String,
        frontUsb3ports: Boolean,
        maximumVideoCardLength: Number,
        width: Number,
        length: Number,
        height: Number,
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
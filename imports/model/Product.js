import {
    Class
} from 'meteor/jagi:astronomy';
import {
    Meteor
} from "meteor/meteor";

import {Manufacturer} from "./Manufacturer";
import {Images} from "./Images";
import {Seller} from "./Seller";

export const Product = Class.create({
    name: "Product",
    typeField: 'type',
    collection: new Mongo.Collection("products"),
    fields: {
        name: {type: String},
        manufacturerId: String,
        partNo: {type: String},
        imageId: {type: String},
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
        },
        lowestPrice() {
            let sellers = Seller.find({productId: this._id});
            if (sellers && sellers.count() !== 0) {
                let s = sellers.fetch();
                s.sort((a, b) => {
                    return a.price - b.price;
                })

                return s[0].price;
            }

            return null;
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
    },
    helpers: {
        noiseLevel() {
            if (this.minNoiseLevel) {
                return this.minNoiseLevel + " - " + this.maxNoiseLevel + " dB";
            }

            return this.maxNoiseLevel + " dB";
        },
        fanSpeed() {
            if (this.minFan) {
                return this.minFan + " - " + this.maxFan + " rpm";
            }
            return this.maxFan + " rpm";
        }
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
        memoryType: String,
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
    name: 'Storage',
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
        boostClock: Number,
        tdp: Number,
        fan: Boolean,
        sliSupport: Boolean,
        crossFireSupport: Boolean,
        sizeLength: Number,
        dviDualLink: Number,
        hdmi: Number,
        vga: Number,
        displayPort: Number,
    }
});

export const Psu = Product.inherit({
    name: 'Psu',
    fields: {
        psuType: String,
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
        caseType: String,
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
        sizeLength: Number,
        height: Number,
    },
    helpers: {
        includePowerSupplyString() {
            return this.includePowerSupply ? "Yes": "No";
        },
        dimensions() {
            return this.width + "mm x " + this.sizeLength + "mm x " + this.height + "mm";
        }
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
        },
        {
            find: function(p) {
                return Seller.find({productId: p._id});
            }
        },
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

    Meteor.publishComposite('productsSearch', function(type="", search = "",limit = 10) {
        return {
            find: function() {
                if (search) {
                    return Product.find({type, name: {'$regex' : search, '$options' : 'i'}}, {limit});
                }
                return Product.find({type}, {limit});
            },
            children,
        };
    });
}
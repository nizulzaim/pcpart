import {
    Class
} from 'meteor/jagi:astronomy';
import {
    Meteor
} from "meteor/meteor";



export const Seller = Class.create({
    name: "Seller",
    collection: new Mongo.Collection("sellers"),
    fields: {
        userId: String,
        productId: String,
        link: String,
        websiteType: Number,
        price: Number,
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
        websiteName() {
            let res = "";
            res = this.websiteType === 0? "Amazon": res;
            res = this.websiteType === 1? "Lazada": res;
            res = this.websiteType === 2? "Lelong": res;
            res = this.websiteType === 3? "IP Mart": res;

            return res;
        }
    }
});

if (Meteor.isServer) {
    const possibleHostName = [
        "amazon.com",
        "lazada.com.my",
    ];

    Seller.extend({
        meteorMethods: {
            create(obj) {
                this.set(obj, {
                    merge: true,
                    cast: true,
                });
                let extractHostname = function (url) {
                    var hostname;
                    if (url.indexOf("://") > -1) {
                        hostname = url.split('/')[2];
                    }
                    else {
                        hostname = url.split('/')[0];
                    }
                    hostname = hostname.split(':')[0];
                    return hostname;
                };


                console.log(extractHostname(obj.link));

                this.userId = Meteor.userId();
                return this.save();
            },
        }
    });

    Meteor.publishComposite('sellers', function(productId = "") {
        return {
            find: function() {
                return Seller.find({productId});
            },
        };
    });

}
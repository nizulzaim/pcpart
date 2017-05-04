import {
    Class
} from 'meteor/jagi:astronomy';
import {
    Meteor
} from "meteor/meteor";


export const Manufacturer = Class.create({
    name: "Manufacturer",
    collection: new Mongo.Collection("manufacturers"),
    fields: {
        name: String,
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
    Manufacturer.extend({
        meteorMethods: {
            create(name) {
                this.name = name;
                return this.save();
            },
        }
    });

    Meteor.publishComposite('manufacturers', function(refresh = 0) {
        return {
            find: function() {
                return Manufacturer.find();
            },
        };
    });

    if (!Manufacturer.findOne()) {
        let m = new Manufacturer();
        m.name = "Intel";
        m.save();

        m = new Manufacturer();
        m.name = "AMD";
        m.save();

        m = new Manufacturer();
        m.name = "Cooler Master";
        m.save();
    }

}
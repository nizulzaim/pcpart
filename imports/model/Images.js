import {FilesCollection} from 'meteor/ostrio:files';
import { Class } from 'meteor/jagi:astronomy';
import {Meteor} from "meteor/meteor";

export const Images = new FilesCollection({
    collectionName: 'Image',
    allowClientCode: false, // Disallow remove files from Client
    // debug: true,
    storagePath: '/images/pc-part',
    permissions: 0774,
    parentDirPermissions: 0774,
    collectionName: 'images',
    onBeforeUpload: function (file) {
        if (/jpg|png/i.test(file.extension)) {
            return true;
        } else {
            return 'Please input txt or csv file';
        }
    }
});

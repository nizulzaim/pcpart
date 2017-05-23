import {IndexNavigation, IndexToolbar} from "/imports/client/template";
import PostGuide from '/imports/client/views/public/dashboard/customer/PostGuide.vue';
import MyGuide from '/imports/client/views/public/dashboard/customer/MyGuideList.vue';
import MyAccount from '/imports/client/views/public/dashboard/MyAccount.vue';

let routesParent = "/dashboard";
export default [{
    path: `${routesParent}/post-guide`,
    name: "PostGuide",
    meta: { fixToolbar: true, depth: 1, pageTitle: "Post Guide" },
    components: {
        default: PostGuide,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
}, {
    path: `${routesParent}/my-guide`,
    name: "MyGuide",
    meta: { fixToolbar: true, depth: 1, pageTitle: "My Post Guide" },
    components: {
        default: MyGuide,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
}, {
    path: `${routesParent}/my-account`,
    name: "MyAccount",
    meta: { fixToolbar: true, depth: 1, pageTitle: "My Account" },
    components: {
        default: MyAccount,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
}, ];
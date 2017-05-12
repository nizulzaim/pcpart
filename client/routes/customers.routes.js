import {IndexNavigation, IndexToolbar} from "/imports/client/template";
import PostGuide from '/imports/client/views/public/dashboard/customer/PostGuide.vue';

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
}, ];
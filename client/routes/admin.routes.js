import {IndexNavigation, IndexToolbar} from "/imports/client/template";
import ProductAdd from '/imports/client/views/public/dashboard/admin/ProductAdd.vue';

let routesParent = "/dashboard";
export default [{
    path: `${routesParent}/product/add`,
    name: "ProductAdd",
    meta: { fixToolbar: true, depth: 1, pageTitle: "Add Product" },
    components: {
        default: ProductAdd,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
}, ];
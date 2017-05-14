import {IndexNavigation, IndexToolbar} from "/imports/client/template";
import IndexPage from '/imports/client/views/public/Index.vue';
import Product from '/imports/client/views/public/Product.vue';
import ProductDetails from '/imports/client/views/public/ProductDetails.vue';
import ProductCompare from '/imports/client/views/public/ProductCompare.vue';
import Guide from '/imports/client/views/public/Guide.vue';
import Guides from '/imports/client/views/public/Guides.vue';

let routesParent = "";
export default [{
    path: `${routesParent}/`,
    name: "Index",
    meta: { fixToolbar: true, pageTitle: "PC Part" },
    components: {
        default: IndexPage,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
},{
    path: `${routesParent}/product/compare`,
    name: "ProductCompare",
    meta: { fixToolbar: true,depth: 1, pageTitle: "Product Comparison" },
    components: {
        default: ProductCompare,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
}, {
    path: `${routesParent}/product/:type`,
    name: "Products",
    meta: { fixToolbar: true,depth: 1, pageTitle: "Parts" },
    components: {
        default: Product,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
}, {
    path: `${routesParent}/product/details/:id`,
    name: "ProductDetails",
    meta: { fixToolbar: true,depth: 1, pageTitle: "Product Details" },
    components: {
        default: ProductDetails,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
},{
    path: `${routesParent}/guides/:id`,
    name: "Guide",
    meta: { fixToolbar: true,depth: 1, pageTitle: "Guide" },
    components: {
        default: Guide,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
},{
    path: `${routesParent}/guides/`,
    name: "Guide",
    meta: { fixToolbar: true,depth: 1, pageTitle: "Guides List" },
    components: {
        default: Guides,
        toolbar: IndexToolbar,
        navigation: IndexNavigation,
    }
},];

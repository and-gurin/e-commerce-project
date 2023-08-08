import Breadcrumbs from "@/layouts/breadcrumbs/Breadcrumbs";
import {OurProducts} from "@/layouts/our-products/OurProducts";

const ShopPage = () => {
    return (
        <>
            <Breadcrumbs pageTitle={true}/>
            <OurProducts pagination={true} />
        </>
    );
};

export default ShopPage;
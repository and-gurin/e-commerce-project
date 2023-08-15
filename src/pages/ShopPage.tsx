import Breadcrumbs from "@/layouts/breadcrumbs/Breadcrumbs";
import {OurProducts} from "@/layouts/our-products/OurProducts";
import SortPanel from "@/layouts/sort-panel/SortPanel";
import {useState} from "react";
import Advantages from "@/layouts/advantages/advantages";

const ShopPage = () => {

    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [sort, setSort] = useState('default');
    const onChangeItemsPerPage = (e) => setItemsPerPage(e)
    const onChangeSort = (e) => setSort(e)

    return (
        <>
            <Breadcrumbs pageTitle={true}/>
            <SortPanel itemsPerPage={itemsPerPage}
                       onChangeItemsPerPage={onChangeItemsPerPage}
                       sort={sort}
                       onChangeSort={onChangeSort}
                       />
            <OurProducts pagination={true} itemsPerPage={itemsPerPage} sort={sort}/>
            <Advantages/>
        </>
    );
};

export default ShopPage;
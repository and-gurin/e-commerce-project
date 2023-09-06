import {useState} from "react";
import React from "react";
import Advantages from '@/layouts/advantages/advantages';
import Breadcrumbs from "@/layouts/breadcrumbs/Breadcrumbs";
import {OurProducts} from "@/layouts/our-products/OurProducts";
import SortPanel from "@/layouts/sort-panel/SortPanel";

const ShopPage = () => {

    const [itemsPerPage, setItemsPerPage] = useState(16);
    const [sort, setSort] = useState('default');

    return (
        <>
            <Breadcrumbs pageTitle={true}/>
            <SortPanel itemsPerPage={itemsPerPage}
                       onChangeItemsPerPage={(e) => setItemsPerPage(e)}
                       sort={sort}
                       onChangeSort={(e) => setSort(e)}
                       />
            <OurProducts pagination={true} itemsPerPage={itemsPerPage} sort={sort}/>
            <Advantages/>
        </>
    )
};

export default ShopPage;
import React from 'react';
import NewCollection from "../layouts/new-collection/NewCollection";
import BrowseTheRange from "../layouts/browse-the-range/BrowseTheRange";
import OurProducts from "../layouts/our-products/OurProducts";

const HomePage = () => {
    return (
        <>
            <NewCollection/>
            <BrowseTheRange/>
            <OurProducts/>
        </>
    );
};

export default HomePage;
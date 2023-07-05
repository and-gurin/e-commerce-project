import React from 'react';
import NewCollection from "../layouts/new-collection/NewCollection";
import BrowseTheRange from "../layouts/browse-the-range/BrowseTheRange";

const HomePage = () => {
    return (
        <>
            <NewCollection/>
            <BrowseTheRange/>
        </>
    );
};

export default HomePage;
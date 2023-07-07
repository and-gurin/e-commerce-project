import React from 'react';
import NewCollection from '../layouts/new-collection/NewCollection';
import BrowseTheRange from '../layouts/browse-the-range/BrowseTheRange';
import OurProducts from '../layouts/our-products/OurProducts';
import RoomsInspiration from '../layouts/rooms-inspiration/RoomsInspiration';

const HomePage = () => {
    return (
        <>
            <NewCollection/>
            <BrowseTheRange/>
            <OurProducts/>
            <RoomsInspiration/>
        </>
    );
};

export default HomePage;
import React from 'react';
import NewCollection from '../layouts/new-collection/NewCollection';
import BrowseTheRange from '../layouts/browse-the-range/BrowseTheRange';
import {OurProducts} from '../layouts/our-products/OurProducts';
import RoomsInspiration from '../layouts/rooms-inspiration/RoomsInspiration';
import FurniroFurniture from "../layouts/furniro-furniture/FurniroFurniture";

const HomePage = () => {
    return (
        <>
            <NewCollection/>
            <BrowseTheRange/>
            <OurProducts title={'Our Products'}/>
            <RoomsInspiration/>
            <FurniroFurniture/>
        </>
    );
};

export default HomePage;
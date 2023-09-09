import NewCollection from '@/layouts/new-collection/NewCollection';
import BrowseTheRange from '@/layouts/browse-the-range/BrowseTheRange';
import {OurProducts} from '@/layouts/our-products/OurProducts';
import RoomsInspiration from '@/layouts/rooms-inspiration/RoomsInspiration';
import FurniroFurniture from "@/layouts/furniro-furniture/FurniroFurniture";
import {useState} from "react";
import React from 'react';

const HomePage = ({setIsOpen}: {setIsOpen: (isOpen: boolean) => void}) => {

    const [amount, setAmount] = useState(4)

    return (
        <>
            <NewCollection/>
            <BrowseTheRange/>
            <OurProducts amount={amount}
                         onClick={() => setAmount(amount + 4)}
                         title={'Our Products'}
                         itemsPerPage={2}
                         sort={null}
                         pagination={false}
                         setIsOpen={setIsOpen}
            />
            <RoomsInspiration/>
            <FurniroFurniture/>
        </>
    );
};

export default HomePage;
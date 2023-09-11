import Breadcrumbs from "@/layouts/breadcrumbs/Breadcrumbs";
import Advantages from "@/layouts/advantages/advantages";
import React from "react";
import Comparison from "@/layouts/comparison/Comparison";

const ComparisonPage = ({setIsOpen}: {setIsOpen: (isOpen: boolean) => void}) => {

    return (
        <>
            <Breadcrumbs pageTitle={true}/>
            <Comparison setIsOpen={setIsOpen}/>
            <Advantages/>
        </>
    );
};

export default ComparisonPage;
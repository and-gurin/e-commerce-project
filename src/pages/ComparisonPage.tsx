import Breadcrumbs from "@/layouts/breadcrumbs/Breadcrumbs";
import Advantages from "@/layouts/advantages/advantages";
import React from "react";
import Comparison from "@/layouts/comparison/Comparison";

const ComparisonPage = () => {

    return (
        <>
            <Breadcrumbs pageTitle={true}/>
            <Comparison/>
            <Advantages/>
        </>
    );
};

export default ComparisonPage;
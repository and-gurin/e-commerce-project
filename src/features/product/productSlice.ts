import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import syltherine from "@/assets/furniture/syltherine.png";
import liviosa from "@/assets/furniture/leviosa.png";
import lolito from "@/assets/furniture/lolito.png";
import respira from "@/assets/furniture/respira.png";
import grifo from "@/assets/furniture/grifo.png";
import muggo from "@/assets/furniture/muggo.png";
import pingky from "@/assets/furniture/pingky.png";
import potty from "@/assets/furniture/potty.png";

export type ProductType = {
    id: number
    rating: number | null
    src: string
    alt: string
    title: string
    description: string
    price: number
    oldPrice: number | ''
    status: string
    quantity: number
    general: GeneralObjectType
    product: ProductObjectType
    dimensions: DimensionsObjectType
    warranty: WarrantyObjectType
}

type GeneralObjectType = {
    'Sales Package': string
    'Model Number': string
    'Secondary Material': string
    'Configuration': string
    'Upholstery Material': string
    'Upholstery Color': string
}

type ProductObjectType = {
    'Filling Material': string
    'Finish Type': string
    'Adjustable Headrest': string
    'Maximum Load Capacity': string
    'Origin of Manufacture': string
}

type DimensionsObjectType = {
    'Width': string
    'Height': string
    'Depth': string
    'Weight': string
    'Seat Height': string
    'Leg Height': string
}

type WarrantyObjectType = {
    'Warranty Summary': string
    'Warranty Service Type': string
    'Covered in Warranty': string
    'Not Covered in Warranty': string
    'Domestic Warranty': string
}

const initialState: ProductType[] = [
    {
        id: 1,
        rating: 3,
        src: syltherine,
        alt: 'syltherine',
        title: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 2500000,
        oldPrice: 3500000,
        status: '-30%',
        quantity: 1,
        general: {
            'Sales Package': '1 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '1 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '1 Year'
        },
    },
    {
        id: 2,
        src: liviosa,
        rating: 3,
        alt: 'liviosa',
        title: 'Liviosa',
        description: 'Stylish cafe chair',
        price: 2500000,
        oldPrice: '',
        status: '',
        quantity: 1,
        general: {
            'Sales Package': '1 Three Seater, 2 Single Seater',
            'Model Number': 'ZCBBLIGRBL6SRHSSVB',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '1.2 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '1.2 Year'
        },
    },
    {
        id: 3,
        src: lolito,
        rating: 3,
        alt: 'lolito',
        title: 'Lolito',
        description: 'Luxury big sofa',
        price: 7000000,
        oldPrice: 14000000,
        status: '-50%',
        quantity: 1,
        general: {
            'Sales Package': '5 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&Matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '2.1 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '2.1 Year'
        },
    },
    {
        id: 4,
        rating: 3,
        src: respira,
        alt: 'respira',
        title: 'Respira',
        description: 'Outdoor bar table and stool',
        price: 500000,
        oldPrice: '',
        status: '',
        quantity: 1,
        general: {
            'Sales Package': '3 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&Matte&Foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '3.1 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '3.1 Year'
        },
    },
    {
        id: 5,
        rating: 3,
        src: grifo,
        alt: 'grifo',
        title: 'Grifo',
        description: 'Night lamp',
        price: 1500000,
        oldPrice: '',
        status: '',
        quantity: 1,
        general: {
            'Sales Package': '5 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '5 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '5 Year'
        },
    },
    {
        id: 6,
        rating: 3,
        src: muggo,
        alt: 'muggo',
        title: 'Muggo',
        description: 'Small mug',
        price: 150000,
        oldPrice: '',
        status: 'New',
        quantity: 1,
        general: {
            'Sales Package': '6 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '6 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '6 Year'
        },
    },
    {
        id: 7,
        rating: 3,
        src: pingky,
        alt: 'pingky',
        title: 'Pingky',
        description: 'Cute bed set',
        price: 7000000,
        oldPrice: 14000000,
        status: '-50%',
        quantity: 1,
        general: {
            'Sales Package': '7 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '7 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '7 Year'
        },
    },
    {
        id: 8,
        rating: 3,
        src: potty,
        alt: 'potty',
        title: 'Potty',
        description: 'Minimalist flower pot',
        price: 1500000,
        oldPrice: '',
        status: 'New',
        quantity: 1,
        general: {
            'Sales Package': '8 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&matte&foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '8 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '8 Year'
        },
    },
    {
        id: 9,
        rating: 3,
        src: syltherine,
        alt: 'syltherine',
        title: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 2500000,
        oldPrice: 3500000,
        status: '-30%',
        quantity: 1,
        general: {
            'Sales Package': '1 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '1 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '1 Year'
        },
    },
    {
        id: 10,
        rating: 3,
        src: liviosa,
        alt: 'liviosa',
        title: 'Liviosa',
        description: 'Stylish cafe chair',
        price: 2500000,
        oldPrice: '',
        status: '',
        quantity: 1,
        general: {
            'Sales Package': '1 Three Seater, 2 Single Seater',
            'Model Number': 'ZCBBLIGRBL6SRHSSVB',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '1.2 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '1.2 Year'
        },
    },
    {
        id: 11,
        rating: 3,
        src: lolito,
        alt: 'lolito',
        title: 'Lolito',
        description: 'Luxury big sofa',
        price: 7000000,
        oldPrice: 14000000,
        status: '-50%',
        quantity: 1,
        general: {
            'Sales Package': '5 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&Matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '2.1 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '2.1 Year'
        },
    },
    {
        id: 12,
        rating: 3,
        src: respira,
        alt: 'respira',
        title: 'Respira',
        description: 'Outdoor bar table and stool',
        price: 500000,
        oldPrice: '',
        status: '',
        quantity: 1,
        general: {
            'Sales Package': '3 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&Matte&Foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '3.1 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '3.1 Year'
        },
    },
    {
        id: 13,
        rating: 3,
        src: grifo,
        alt: 'grifo',
        title: 'Grifo',
        description: 'Night lamp',
        price: 1500000,
        oldPrice: '',
        status: '',
        quantity: 1,
        general: {
            'Sales Package': '5 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '5 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '5 Year'
        },
    },
    {
        id: 14,
        rating: 3,
        src: muggo,
        alt: 'muggo',
        title: 'Muggo',
        description: 'Small mug',
        price: 150000,
        oldPrice: '',
        status: 'New',
        quantity: 1,
        general: {
            'Sales Package': '6 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '6 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '6 Year'
        },
    },
    {
        id: 15,
        rating: 3,
        src: pingky,
        alt: 'pingky',
        title: 'Pingky',
        description: 'Cute bed set',
        price: 7000000,
        oldPrice: 14000000,
        status: '-50%',
        quantity: 1,
        general: {
            'Sales Package': '7 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '7 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '7 Year'
        },
    },
    {
        id: 16,
        rating: 3,
        src: potty,
        alt: 'potty',
        title: 'Potty',
        description: 'Minimalist flower pot',
        price: 1500000,
        oldPrice: '',
        status: 'New',
        quantity: 1,
        general: {
            'Sales Package': '8 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&matte&foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '8 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '8 Year'
        },
    },
    {
        id: 17,
        rating: 3,
        src: syltherine,
        alt: 'syltherine',
        title: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 2500000,
        oldPrice: 3500000,
        status: '-30%',
        quantity: 1,
        general: {
            'Sales Package': '1 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '1 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '1 Year'
        },
    },
    {
        id: 18,
        rating: 3,
        src: liviosa,
        alt: 'liviosa',
        title: 'Liviosa',
        description: 'Stylish cafe chair',
        price: 2500000,
        oldPrice: '',
        status: '',
        quantity: 1,
        general: {
            'Sales Package': '1 Three Seater, 2 Single Seater',
            'Model Number': 'ZCBBLIGRBL6SRHSSVB',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '1.2 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '1.2 Year'
        },
    },
    {
        id: 19,
        rating: 3,
        src: lolito,
        alt: 'lolito',
        title: 'Lolito',
        description: 'Luxury big sofa',
        price: 7000000,
        oldPrice: 14000000,
        status: '-50%',
        quantity: 1,
        general: {
            'Sales Package': '5 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&Matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '2.1 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '2.1 Year'
        },
    },
    {
        id: 20,
        rating: 3,
        src: respira,
        alt: 'respira',
        title: 'Respira',
        description: 'Outdoor bar table and stool',
        price: 500000,
        oldPrice: '',
        status: '',
        quantity: 1,
        general: {
            'Sales Package': '3 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&Matte&Foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '3.1 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '3.1 Year'
        },
    },
    {
        id: 21,
        rating: 3,
        src: grifo,
        alt: 'grifo',
        title: 'Grifo',
        description: 'Night lamp',
        price: 1500000,
        oldPrice: '',
        status: '',
        quantity: 1,
        general: {
            'Sales Package': '5 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '5 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '5 Year'
        },
    },
    {
        id: 22,
        rating: 3,
        src: muggo,
        alt: 'muggo',
        title: 'Muggo',
        description: 'Small mug',
        price: 150000,
        oldPrice: '',
        status: 'New',
        quantity: 1,
        general: {
            'Sales Package': '6 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '6 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '6 Year'
        },
    },
    {
        id: 23,
        rating: 3,
        src: pingky,
        alt: 'pingky',
        title: 'Pingky',
        description: 'Cute bed set',
        price: 7000000,
        oldPrice: 14000000,
        status: '-50%',
        quantity: 1,
        general: {
            'Sales Package': '7 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&matte',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '7 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '7 Year'
        },
    },
    {
        id: 24,
        rating: 3,
        src: potty,
        alt: 'potty',
        title: 'Potty',
        description: 'Minimalist flower pot',
        price: 1500000,
        oldPrice: '',
        status: 'New',
        quantity: 1,
        general: {
            'Sales Package': '8 sectional sofa',
            'Model Number': 'TFCBLIGRBL6SRHS',
            'Secondary Material': 'Solid Wood',
            'Configuration': 'L-shaped',
            'Upholstery Material': 'Fabric + Cotton',
            'Upholstery Color': 'Bright Grey & Lion'
        },
        product: {
            'Filling Material': 'Foam&matte&foam',
            'Finish Type': 'Bright Grey & Lion',
            'Adjustable Headrest': 'No',
            'Maximum Load Capacity': '280 KG',
            'Origin of Manufacture': 'India'
        },
        dimensions: {
            'Width': '265.32 cm',
            'Height': '76 cm',
            'Depth': '167.76 cm',
            'Weight': '45 KG',
            'Seat Height': '41.52 cm',
            'Leg Height': '5.46 cm',
        },
        warranty: {
            'Warranty Summary': '8 Year Manufacturing Warranty',
            'Warranty Service Type': 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            'Covered in Warranty': 'Warranty Against Manufacturing Defect',
            'Not Covered in Warranty': 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            'Domestic Warranty': '8 Year'
        },
    },
]

export type AppInitialStateType = ReturnType<typeof productSlice.getInitialState>

export const productSlice = createSlice({
        name: 'products',
        initialState,
        reducers:{
            changeRating: (state, action: PayloadAction<{ id: number | undefined, ratingValue: number | null }>) => {
                const product = state.find(product => product.id === action.payload.id);
                if (product)
                product.rating = action.payload.ratingValue
            }
        }
    }
)

export const {changeRating} = productSlice.actions;
export const productReducer = productSlice.reducer
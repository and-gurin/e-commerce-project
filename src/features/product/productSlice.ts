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

export type GeneralObjectType = {
    salesPackage: string
    modelNumber: string
    secondaryMaterial: string
    configuration: string
    upholsteryMaterial: string
    upholsteryColor: string
}

type ProductObjectType = {
    fillingMaterial: string
    finishType: string
    adjustableHeadrest: string
    maximumLoadCapacity: string
    originOfManufacture: string
}

type DimensionsObjectType = {
    width: string
    height: string
    depth: string
    weight: string
    seatHeight: string
    legHeight: string
}

type WarrantyObjectType = {
    warrantySummary: string
    warrantyServiceType: string
    coveredInWarranty: string
    notCoveredInWarranty: string
    domesticWarranty: string
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
            salesPackage: '1 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1 Year'
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
            salesPackage: '1 Three Seater',
            modelNumber: 'ZCBBLIGRBL6SRHSSVB',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '1.2 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1.2 Year'
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
            salesPackage: '5 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&Matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '2.1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '2.1 Year'
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
            salesPackage: '3 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&Matte&Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '3.1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '3.1 Year'
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
            salesPackage: '5 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '5 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '5 Year'
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
            salesPackage: '6 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '6 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '6 Year'
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
            salesPackage: '7 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '7 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '7 Year'
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
            salesPackage: '8 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&matte&foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '8 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '8 Year'
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
            salesPackage: '1 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1 Year'
        },
    },
    {
        id: 10,
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
            salesPackage: '1 Three Seater',
            modelNumber: 'ZCBBLIGRBL6SRHSSVB',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '1.2 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1.2 Year'
        },
    },
    {
        id: 11,
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
            salesPackage: '5 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&Matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '2.1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '2.1 Year'
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
            salesPackage: '3 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&Matte&Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '3.1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '3.1 Year'
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
            salesPackage: '5 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '5 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '5 Year'
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
            salesPackage: '6 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '6 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '6 Year'
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
            salesPackage: '7 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '7 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '7 Year'
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
            salesPackage: '8 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&matte&foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '8 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '8 Year'
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
            salesPackage: '1 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1 Year'
        },
    },
    {
        id: 18,
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
            salesPackage: '1 Three Seater',
            modelNumber: 'ZCBBLIGRBL6SRHSSVB',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '1.2 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '1.2 Year'
        },
    },
    {
        id: 19,
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
            salesPackage: '5 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&Matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '2.1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '2.1 Year'
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
            salesPackage: '3 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&Matte&Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '3.1 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '3.1 Year'
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
            salesPackage: '5 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '5 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '5 Year'
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
            salesPackage: '6 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '6 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '6 Year'
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
            salesPackage: '7 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&matte',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '7 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '7 Year'
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
            salesPackage: '8 sectional sofa',
            modelNumber: 'TFCBLIGRBL6SRHS',
            secondaryMaterial: 'Solid Wood',
            configuration: 'L-shaped',
            upholsteryMaterial: 'Fabric + Cotton',
            upholsteryColor: 'Bright Grey & Lion'
        },
        product: {
            fillingMaterial: 'Foam&matte&foam',
            finishType: 'Bright Grey & Lion',
            adjustableHeadrest: 'No',
            maximumLoadCapacity: '280 KG',
            originOfManufacture: 'India'
        },
        dimensions: {
            width: '265.32 cm',
            height: '76 cm',
            depth: '167.76 cm',
            weight: '45 KG',
            seatHeight: '41.52 cm',
            legHeight: '5.46 cm',
        },
        warranty: {
            warrantySummary: '8 Year Manufacturing Warranty',
            warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com',
            coveredInWarranty: 'Warranty Against Manufacturing Defect',
            notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
            domesticWarranty: '8 Year'
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
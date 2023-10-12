import Breadcrumbs from '@/layouts/breadcrumbs/Breadcrumbs';
import Advantages from '@/layouts/advantages/advantages';
import React from 'react';
import {Contacts} from '@/layouts/contacts/Contacts';

const ContactsPage = () => {

    return (
        <>
            <Breadcrumbs pageTitle={true}/>
            <Contacts/>
            <Advantages/>
        </>
    );
};

export default ContactsPage;
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import BackDrop from '../components/LandingPageContent/BackDrop';
import MiniBanner from '../components/LandingPageContent/MiniBanner';
import Navbar from '../components/LandingPageContent/Navbar';
import Shop from '../components/LandingPageContent/Shop';
import SideDrawer from '../components/LandingPageContent/SideDrawer';
import { GET_PRODUCTS_QUERY } from '../queries';

export default function LandingPage() {
    const [activeCurrency] = useState('USD');
    const [sideDrawerVisibility, setSideDrawerVisibility] = useState(false);

    const { data: products } = useQuery(GET_PRODUCTS_QUERY, {
        variables: { currency: activeCurrency }
    });

    function toggleSideDrawer() {
        setSideDrawerVisibility(!sideDrawerVisibility);
    }

    return (
        <>
            <Navbar toggleSideDrawer={toggleSideDrawer} />
            <SideDrawer visible={sideDrawerVisibility} toggleSideDrawer={toggleSideDrawer} />
            <BackDrop sideDrawerVisibility={sideDrawerVisibility} />
            <MiniBanner />
            <Shop products={products} />
        </>
    );
}

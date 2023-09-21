import React from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';

const MainLayout = () => {

    const navigation = useNavigation()

    const isLoadingState = navigation.state === 'loading'

    console.log(isLoadingState);

    return (
        <div className='max-w-[1600px] mx-auto'>
            <Navbar></Navbar>
            {isLoadingState ? <div>Spinner</div> : <div className='my-10'>
            <Outlet></Outlet>
            </div>}
        </div>
    );
};

export default MainLayout;
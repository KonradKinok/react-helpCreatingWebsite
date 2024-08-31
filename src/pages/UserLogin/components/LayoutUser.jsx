import { Outlet, Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { AppBarUser } from "./AppBarUser/AppBarUser";
import { Suspense } from 'react';

export const LayoutUser = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <AppBarUser />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};


export default LayoutUser;
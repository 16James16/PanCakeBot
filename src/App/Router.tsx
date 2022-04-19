import { RouteObject, useRoutes } from 'react-router-dom';

import {
    Home,
    Wallet,
    SwapSettingModal,
    SecuritySettingModal,
    WalletSettingModal
} from 'pages';

const routes: RouteObject[] = [
    {
        path:"/",
        element: <Home />,
        children: [],
    },
    {
        path: "/Home",
        element: <Home />,
        children: [],
    },
    {
        path: "/Wallet",
        element: <Wallet />,
        children: [],
    },
    {
        path: "/Setting",
        element: <SwapSettingModal />,
        children: [],
    },
    {
        path: "/Setting/Swap",
        element: <SwapSettingModal />,
        children: [],
    },
    {
        path: "/Setting/Security",
        element: <SecuritySettingModal />,
        children: [],
    },
    {
        path: "/Setting/Wallet",
        element: <WalletSettingModal />,
        children: [],
    },
];

const Router: React.FC = () => {
    
    const routing = useRoutes(routes);
    return (
        <>
            {routing}
        </> 
    );
}

export default Router;
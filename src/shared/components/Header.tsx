import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import Logo from './Logo';
import { MenuIcon , SettingsIcon} from './Icon';
import { SwapModal , WalletModal , SecurityModal } from './Modal';

const Header: React.FC = () => {
    const navigate = useNavigate();
    let [showSwap, setShowSwap] = useState(false)
    let [showWallet, setShowWallet] = useState(false)
    let [showSecurity, setSecuritySwap] = useState(false)


    return(
        <Container>
            <Logo />
            <MenuGroup>
                <Menu onClick = {() => navigate("/")}><MenuIcon src = "./home.svg"/></Menu>
                <Menu onClick = {() => navigate("/Wallet")}><MenuIcon src = "./wallet.svg"/></Menu> 
            </MenuGroup>
            <SettingGroup>
                <Setting onClick = {() => setShowSwap(true)}><SettingsIcon src = "./security.svg" /></Setting>
                <Setting onClick = {() => setShowWallet(true)}><SettingsIcon src = "./wallet-settings.svg" /></Setting>
                <Setting onClick = {() => setSecuritySwap(true)}><SettingsIcon src = "./robot.svg" /></Setting>
            </SettingGroup>
            {showSwap && <SwapModal onClose = {() => setShowSwap(false)} />}
            {showWallet && <WalletModal onClose = {() => setShowSwap(false)} />}
            {showSecurity && <SecurityModal onClose = {() => setShowSwap(false)} />}
        </Container>
    );
}

const Container = styled.div`

`;
const MenuGroup = styled.div`

`;
const SettingGroup = styled.div`

`;
const Menu = styled.div`

`;
const Setting = styled.div`

`;


export default Header;
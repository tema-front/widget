import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, HashRouter, useLocation } from 'react-router-dom'
import { Bridge } from './Bridge';
import { DAO } from './DAO';
import { Dashboard } from './Dashboard'
import { Earn } from './Earn';
import { History } from './History';
import { Investments } from './Investments';
import { NFT } from './NFT';
import { Settings } from './Settings';
import { Swap } from './Swap';

export const Router = () => {


    return (
        <HashRouter>
            <Routes>
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Investments' element={<Investments />} />
                <Route path='/Swap' element={<Swap />} />
                <Route path='/Earn' element={<Earn />} />
                <Route path='/Bridge' element={<Bridge />} />
                <Route path='/DAO' element={<DAO />} />
                <Route path='/NFT' element={<NFT />} />
                <Route path='/History' element={<History />} />
                <Route path='/Settings' element={<Settings />} />
                <Route path='*' element={<Navigate replace to="/Dashboard" />} />
            </Routes>
        </HashRouter>
    )
}

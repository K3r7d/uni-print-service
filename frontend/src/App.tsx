
import { memo } from 'react';
import type { FC } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import classes from './App.module.css';
import { UserProvider } from './UserContext';
import resets from './components/_resets.module.css';
import { HomePageLoginOffALL } from './components/HomePageLoginOffALL/HomePageLoginOffALL.js';
import UserPage from './components/UserPage/user.js'
import Information from './components/Information/user';
import Payment from './components/Payment/user';
import History from './components/PrintHistory/user';
import { PrintingUploadCustomer } from './components/PrintingUploadCustomer/PrintingUploadCustomer';
import { SetProperties } from './components/SetProperties/SetProperties';
import { PrintingSelectionPrinterCustom } from './components/PrintingSelectionPrinterCustom/PrintingSelectionPrinterCustom';
import SelectPrinter from './components/SelectPrinter/SelectPrinter'



interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className={`${resets.clapyResets} ${classes.root}`}>
          <Routes>
            <Route path="/" element={<HomePageLoginOffALL />} />
            <Route path="/user/:username" element={<UserPage />} />
            <Route path="/admin/:username" element={<UserPage />} />
            <Route path="/user/:username/info" element={<Information />} />
            <Route path="/user/:username/payment" element={<Payment></Payment>} />
            <Route path="/user/:username/history"
              element={<History
                searchReal= ""
                searchResult={[]}
                setSearch={() => { }}
              />}
            ></Route>          {/* <Route path="/user/:username/history" element={<History></History>}></Route> */}
            <Route path="/print/upload" element={<PrintingUploadCustomer></PrintingUploadCustomer>} />
            <Route path="/print/setprop" element={<SetProperties></SetProperties>} />
            <Route path="/print/printer" element={<SelectPrinter></SelectPrinter>} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { HomePageLoginOffALL } from './components/HomePageLoginOffALL/HomePageLoginOffALL.js';
import UserPage from './components/UserPage/user.js'

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <BrowserRouter>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <Routes>
          <Route path="/" element={<HomePageLoginOffALL />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/admin/:username" element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
});

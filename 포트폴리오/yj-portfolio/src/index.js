import {createRoot} from 'react-dom/client';
import { Layout } from "./components/layout/Layout";
import Explanation from "./components/page/Explanation";
import { Main } from "./components/page/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="bowling" element={<Explanation cat="bowling" />} />
                    <Route path="nexis" element={<Explanation cat="nexis" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />)
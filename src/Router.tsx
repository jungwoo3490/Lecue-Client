import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DetailPage from './Detail/page/DetailPage';
import HomePage from './Home/page/HomePage';
import LecueNotePage from './LecueNote/page/LeceuNotePage';
import Login from './Login/page';
import StickerPack from './StickerPack/page/StickerPack';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="create-note" element={<LecueNotePage />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sticker-pack" element={<StickerPack />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScreenHome from './pages/Screen-home/Screen';
import ScreenAbout from './pages/Screen-about/Screen';
import ScreenPricing from './pages/Screen-pricing/Screen';
import ScreenContact from './pages/Screen-contact/Screen';
import ScreenStyleSources from './pages/Screen-style-sources/Screen';
import ScreenStyleProbe from './pages/Screen-style-probe/Screen';
import ScreenUnreadable from './pages/Screen-unreadable/Screen';
import ScreenAddProps from './pages/Screen-add-props/Screen';
import ScreenFocus from './pages/Screen-focus/Screen';
import ScreenTokens from './pages/Screen-tokens/Screen';
import ScreenMultiComponent from './pages/Screen-multi-component/Screen';
import ScreenMuiSx from './pages/Screen-mui-sx/Screen';
import ScreenMuiSize from './pages/Screen-mui-size/Screen';
import ScreenMuiImports from './pages/Screen-mui-imports/Screen';
import ScreenMuiBarrel from './pages/Screen-mui-barrel/Screen';
import ScreenMuiTheme from './pages/Screen-mui-theme/Screen';

/**
 * Адреса экранов приложения.
 *
 * Файл ведёт редактор: экран добавляется, переименовывается и удаляется вместе
 * со своим адресом. Править вручную можно — адрес в этом файле и есть истина.
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenHome />} />
        <Route path="/about/:recordKey?" element={<ScreenAbout />} />
        <Route path="/pricing/:recordKey?" element={<ScreenPricing />} />
        <Route path="/contact/:recordKey?" element={<ScreenContact />} />
        <Route path="/style-sources/:recordKey?" element={<ScreenStyleSources />} />
        <Route path="/style-probe/:recordKey?" element={<ScreenStyleProbe />} />
        <Route path="/unreadable/:recordKey?" element={<ScreenUnreadable />} />
        <Route path="/add-props/:recordKey?" element={<ScreenAddProps />} />
        <Route path="/focus/:recordKey?" element={<ScreenFocus />} />
        <Route path="/tokens/:recordKey?" element={<ScreenTokens />} />
        <Route path="/multi-component/:recordKey?" element={<ScreenMultiComponent />} />
        <Route path="/mui-sx/:recordKey?" element={<ScreenMuiSx />} />
        <Route path="/mui-size/:recordKey?" element={<ScreenMuiSize />} />
        <Route path="/mui-imports/:recordKey?" element={<ScreenMuiImports />} />
        <Route path="/mui-barrel/:recordKey?" element={<ScreenMuiBarrel />} />
        <Route path="/mui-theme/:recordKey?" element={<ScreenMuiTheme />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

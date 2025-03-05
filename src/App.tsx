import { BookmarkProvider } from "./context/BookmarkContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddBookmark from "./pages/AddBookmark";
import SettingLayout from "./pages/settings/SettingLayout";
import Account from "./pages/settings/Account";
import Tips from "./pages/settings/Tips";
import TagSetting from "./pages/settings/TagSetting";
import ThemeSetting from "./pages/settings/ThemeSetting";
import ImportSetting from "./pages/settings/ImportSetting";
import ExportSettings from "./pages/settings/ExportSettings";
import Integration from "./pages/settings/Integration";
import EditBookmark from "./pages/EditBookmark";
import HistoryPage from "./pages/HistoryPage";
const App = () => {
  return (
    <BookmarkProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/new' element={<AddBookmark />} />
          <Route path='/settings' element={<SettingLayout />}>
            <Route path='account' element={<Account />} />
            <Route path='tips' element={<Tips />} />
            <Route path='tag' element={<TagSetting />} />
            <Route path='theme-setting' element={<ThemeSetting />} />
            <Route path='import' element={<ImportSetting />} />
            <Route path='export' element={<ExportSettings />} />
            <Route path='integration' element={<Integration />} />
          </Route>
          <Route path='/edit-bookmark' element={<EditBookmark />} />
          <Route path='/history' element={<HistoryPage />} />
        </Routes>
      </Router>
    </BookmarkProvider>
  );
};

export default App;

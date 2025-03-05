import { BookmarkProvider } from "./context/BookmarkContext";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddBookmark from "./pages/AddBookmark";
import EditBookmark from "./pages/EditBookmark";
import HistoryPage from "./pages/HistoryPage";
import { usePageContext } from "./context/PageContext";
import Settings from "./pages/settings/Settings";
const App = () => {
  const { page } = usePageContext();
  return (
    <BookmarkProvider>
      {page === "home" && <Home />}
      {page === "search" && <Search />}
      {page === "new" && <AddBookmark />}
      {page === "settings" && <Settings />}
      {page === "edit" && <EditBookmark />}
      {page === "history" && <HistoryPage />}
    </BookmarkProvider>
  );
};

export default App;

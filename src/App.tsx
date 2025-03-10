import { BookmarkProvider } from "./context/BookmarkContext";
import Home from "./pages/Home";
// import Search from "./pages/Search";
import AddBookmark from "./pages/AddBookmark";
import EditBookmark from "./pages/EditBookmark";
import HistoryPage from "./pages/HistoryPage";
import { usePageContext } from "./context/PageContext";
import ExtensionPage from "./pages/ExtensionPage";
import { FormProvider } from "./context/from-Context";
import { ExtensionProvider } from "./context/ExtensionContext";
const App = () => {
  const { page } = usePageContext();
  return (
    <ExtensionProvider> 
    <BookmarkProvider>
      <FormProvider>
        {page === "home" && <Home />}
        {/* {page === "search" && <Search />} */}
        {page === "new" && <AddBookmark />}
        {page === "edit" && <EditBookmark />}
        {page === "history" && <HistoryPage />}
        {page === "extensions" && <ExtensionPage />}
      </FormProvider>
    </BookmarkProvider>
    </ExtensionProvider>
  );
};

export default App;

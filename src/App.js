import "./App.css";
import Addform from "./components/AddForm";
import AppContainer from "./components/AppContainer";
import Header from "./components/Header";
import Lists from "./components/Lists";
import { ListProvider } from "./contexts/ListCtx";

function App() {
  return (
    <ListProvider>
      <AppContainer>
        <Header />
        <Addform />
        <Lists />
      </AppContainer>
    </ListProvider>
  );
}

export default App;

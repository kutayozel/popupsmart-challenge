import { AppProvider } from "./context";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <AppProvider>
        <MainPage/>
      </AppProvider>
    </div>
  );
}

export default App;

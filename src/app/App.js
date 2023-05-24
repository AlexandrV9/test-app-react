import { BrowserRouter } from "react-router-dom";
import AppRouter from "app/providers/AppRouter";
import "app/styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

import Reac from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Customers from "./pages/Customers";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Body>
        <BrowserRouter>
          <Customers path="/" />
        </BrowserRouter>
      </Body>
    </ThemeProvider>
  );
}

export default App;

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component.jsx";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <h1> Da Szop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

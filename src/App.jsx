import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Numbers from "./routes/Numbers";
import Strings from "./routes/Strings";
import Boolean from "./routes/Boolean";
import Array1 from "./routes/Array1";
import Array2 from "./routes/Array2";
import Object from "./routes/Object"; 

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/boolean" element={<Boolean />} />
          <Route path="/strings" element={<Strings />} />
          <Route path="/array1" element={<Array1 />} />
          <Route path="/array2" element={<Array2 />} />
          <Route path="/object" element={<Object />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

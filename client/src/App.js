import { Route, Routes } from "react-router-dom";
import DashBoard from "./component/dashboard/dashboard";
import Create from "./component/create/create";
import Header from "./component/header/header";
import NoMatch from "./component/nomatch/nomatch";
import Update from "./component/update/update";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<DashBoard></DashBoard>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/user/:id" element={<Update></Update>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </>
  );
}

export default App;

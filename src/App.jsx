import { Route, Routes, Link, useMatch } from "react-router-dom";
import Home from "./pages/Home";
import Issue from "./pages/Issue";
import AddIssue from "./pages/AddIssue";
import FetchingIndicator from "./components/FetchingIndicator";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import AddCustomer from "./components/AddCustomer";
import {Helmet} from "react-helmet";
import CustomerViewFunc from "./components/CustomerView";


function App() {
  const isRootPath = useMatch({ path: "/", end: true });
  return (
    <>    <Helmet>
<script src="../src/assets/js/main.js"></script>
<script type="module" src="../src/main.jsx"></script>
<script src="../src/assets/vendor/apexcharts/apexcharts.min.js"></script>
<script src="../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../src/assets/vendor/chart.js/chart.umd.js"></script>
<script src="../src/assets/vendor/echarts/echarts.min.js"></script>
<script src="../src/assets/vendor/quill/quill.min.js"></script>
<script src="../src/assets/vendor/simple-datatables/simple-datatables.js"></script>
<script src="../src/assets/vendor/tinymce/tinymce.min.js"></script>
<script src="../src/assets/vendor/php-email-form/validate.js"></script>
</Helmet>
    <div className="App">
      <Header/>
      <SideBar/>
      {!isRootPath ? (
        <Link to="/">Back to Issues List</Link>
      ) : (
        <span>&nbsp;</span>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addCustomer" element={<AddCustomer />} />
        <Route path="/customerView" element={<CustomerViewFunc />} />
        <Route path="/add" element={<AddIssue />} />
        <Route path="/issue/:number" element={<Issue />} />
      </Routes>
      <FetchingIndicator />
    </div>
    </>

  );
}


export default App;

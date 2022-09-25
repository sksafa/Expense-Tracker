import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AllTransaction from "./components/AllTransaction/AllTransaction";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";


function App() {
    return (
        <Layout>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/all-transaction" element={<AllTransaction/>} />
                </Routes>
            </Router>
        </Layout>
    );
}

export default App;

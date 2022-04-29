import Countries from "./components/countries/Countries";
import Country from "./components/country/Country";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar />
                            <Countries />
                        </>
                    }
                />
                <Route
                    path="/country/:id"
                    element={
                        <>
                            <NavBar />
                            <Country />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

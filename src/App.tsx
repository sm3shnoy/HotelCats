import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { CityPage } from "./pages/CityPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AppRoutes } from "./components/constants";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.main} element={<Layout />}>
            <Route index element={<MainPage />}></Route>
            <Route path={AppRoutes.cityId} element={<CityPage />}></Route>
          </Route>
          <Route path={AppRoutes.login} element={<LoginPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./design/Layout"
import Homepage from "./pages/Homepage"
import ManageShopPage from "./pages/ManageShopPage"
import UserProfilePage from "./pages/UserProfilePage"
import ShopsPage from "./pages/ShopsPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Layout><Homepage /></Layout>} />
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path="/manage-shop" element={<Layout>< ManageShopPage /></Layout>} />
            <Route path="/shops" element={<Layout><ShopsPage /></Layout>} />
            <Route path="/shops/:search" element={<Layout><ShopsPage /></Layout>} />
        </Routes>
    )
}
export default AppRoutes
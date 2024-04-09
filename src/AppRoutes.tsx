import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./design/Layout"
import Homepage from "./pages/Homepage"
import ManageShopPage from "./pages/ManageShopPage"
import UserProfilePage from "./pages/UserProfilePage"
import ShopsPage from "./pages/ShopsPage"
import AuthPage from "./pages/AuthPage"
import ManageProductPage from "./pages/ManageProductPage"
import ShopPage from "./pages/ShopPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Layout><Homepage /></Layout>} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path="/manage-shop" element={<Layout>< ManageShopPage /></Layout>} />
            <Route path="/manage-product" element={<Layout>< ManageProductPage /></Layout>} />
            <Route path="/shops" element={<Layout><ShopsPage /></Layout>} />

            {/* gan id vao duong dan /shop/shopId */}
            <Route path="/shop" element={<Layout><ShopPage /></Layout>} />

            {/* gan id vao duong dan /product/productId */}
            <Route path="/product" element={<Layout><ProductDetailsPage /></Layout>} />

            <Route path="/shops/:search" element={<Layout><ShopsPage /></Layout>} />
        </Routes>
    )
}
export default AppRoutes
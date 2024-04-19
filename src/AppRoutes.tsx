/* eslint-disable @typescript-eslint/no-explicit-any */
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
import ECommerce from "./Admin/src/pages/Dashboard/ECommerce"
import PageTitle from "./Admin/src/components/PageTitle"
import Calendar from "./Admin/src/pages/Calendar"
import Settings from "./Admin/src/pages/Settings"
import Profile from "./Admin/src/pages/Profile"
import FormElements from "./Admin/src/pages/Form/FormElements"
import FormLayout from "./Admin/src/pages/Form/FormLayout"
import Tables from "./Admin/src/pages/Tables"
import Chart from "./Admin/src/pages/Chart"
import Alerts from "./Admin/src/pages/UiElements/Alerts"
import Buttons from "./Admin/src/pages/UiElements/Buttons"
import SignIn from "./Admin/src/pages/Authentication/SignIn"
import SignUp from "./Admin/src/pages/Authentication/SignUp"
import DefaultLayout from "./Admin/src/layout/DefaultLayout"
import ListManageProduct from "./components/Admin-manage/Products/ListManageProduct"
import { useSelector } from "react-redux"
import Modal from "./components/Modal/Modal"
import CartDetails from "./components/Cart/CartDetails"
import ManageCouponPage from "./pages/ManageCouponPage"
import ListManageCoupon from "./components/Admin-manage/Coupons/ListManageCoupon"

const AppRoutes = () => {
  const { isShowModal, childrenModal} = useSelector(
    (state: any) => state.app
  );
  console.log({isShowModal, childrenModal})
  return (
      <div>
      {isShowModal && <Modal>{childrenModal}</Modal>}
      
        <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Layout><Homepage /></Layout>} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path="/manage-shop" element={<Layout>< ManageShopPage /></Layout>} />
            <Route path="/admin/create-product" element={<DefaultLayout>< ManageProductPage /></DefaultLayout>} />
        <Route path="/admin/manage-product" element={<DefaultLayout>< ListManageProduct /></DefaultLayout>} />
        <Route path="/admin/create-coupon" element={<DefaultLayout><ManageCouponPage /></DefaultLayout>} />
            <Route path="/admin/manage-coupon" element={<DefaultLayout><ListManageCoupon /></DefaultLayout>} />

            <Route path="/shops" element={<Layout><ShopsPage /></Layout>} />

              {/* gan id vao duong dan /shop/shopId */}
              <Route path="/shop/:sid/:nameShop" element={<Layout><ShopPage /></Layout>} />

              {/* gan id vao duong dan /product/productId */}
        <Route path="/product/:pid" element={<Layout><ProductDetailsPage /></Layout>} />
        
        <Route path="/cart" element={<Layout><CartDetails /></Layout>} />

            <Route path="/shops/:search" element={<Layout><ShopsPage /></Layout>} />

            <Route
                path="/admin/dashboard"
                element={
                    <>
                    <PageTitle title="Prohome Dashboard Admin" />
                    <ECommerce />
                    </>
                }
            />
            <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
      </div>
    )
}
export default AppRoutes
export type UserType = {
    _id: string,
    email: string,
    password: string,
    roleId: string,
    phonenumber: number,
    address: string,
    createdAt: Date,
}

export type ShopType = {
    _id: string,
    shopName: string,
    address: string,
    thumb: string,
    categoryProductList: string[]
}
export type CategoryProduct = {
    _id: string;
    name: string;
    slug: string;
    description: string;
    brand: string[];
};
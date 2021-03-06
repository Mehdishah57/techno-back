//development || production
export const production = process.env.NODE_ENV.trim() === "production";

//api versions and information
export const USER_API_V1 = "/api/user";
export const PRODUCT_API_V1 = "/api/product";
export const BID_API_V1 = "/api/bid";
export const CATEGORY_API_V1 = "/api/category";
export const LOCATION_API_V1 = "/api/location";
export const MESSAGE_API_V1 = "/api/message";
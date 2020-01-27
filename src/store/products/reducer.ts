import {Types} from "./actions";
import {IProduct} from "../../types/Product";
import {productsArray} from './products';

export interface IProductsReducer {
    products: Array<IProduct>;
}

export const defaultState: IProductsReducer = {
    products: productsArray,
};

const productReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case Types.PRODUCT_CREATE:
            return {
                ...state,
                products: state.products.concat([action.payload])
            };
        case Types.PRODUCT_DELETE:
            return {
                ...state,
                products: state.products.filter((product) => product.code !== action.payload)
            };
        case Types.PRODUCT_EDIT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.code === action.payload.code
                        ? action.payload.product
                        : product
                )
            };
        default:
            return state;
    }
};

export default productReducer;

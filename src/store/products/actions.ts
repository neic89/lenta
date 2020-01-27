import {IProduct} from "../../types/Product";

export type SuccessCallbackType = (() => void);
export type ErrorCallbackType = ((error: string) => void);

export const Types = {
    PRODUCT_CREATE: "PRODUCT_CREATE",
    PRODUCT_DELETE: "PRODUCT_DELETE",
    PRODUCT_EDIT: "PRODUCT_EDIT"
};

// actions
export const createProduct = (product: IProduct, successCallback: SuccessCallbackType, errorCallback: ErrorCallbackType) => {
    return (dispatch: any, getState: any) => {
        const products = getState().products;
        if (products.find((item: IProduct) => item.code === product.code) != null) {
            errorCallback('Товар с таким код уже существует.');
            return;
        }

        dispatch({
            type: Types.PRODUCT_CREATE,
            payload: product
        });
        successCallback();
    }
};

export const deleteProduct = (code: string) => ({
    type: Types.PRODUCT_DELETE,
    payload: code
});

export const editProduct = (code: string, product: IProduct, successCallback: SuccessCallbackType, errorCallback: ErrorCallbackType) => {
    return (dispatch: any, getState: any) => {
        const products = getState().products;
        if (code !== product.code && products.find((item: IProduct) => item.code === product.code) != null) {
            errorCallback('Товар с таким код уже существует.');
            return;
        }

        dispatch({
            type: Types.PRODUCT_EDIT,
            payload: {code, product}
        });
        successCallback();
    }
};

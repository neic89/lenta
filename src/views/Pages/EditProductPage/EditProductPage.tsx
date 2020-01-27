import React, {useState} from 'react';
import './EditProductPage.scss';
import {IProduct} from "../../../types/Product";
import * as productActions from '../../../store/products/actions';
import {connect} from "react-redux";
import {useHistory, withRouter} from 'react-router-dom';
import EditProduct from "../../Components/EditProduct/EditProduct";
import {SuccessCallbackType} from "../../../store/products/actions";
import {ErrorCallbackType} from "../../../store/products/actions";

interface IEditProductPageProps {
    product: IProduct | null;

    editProduct(code: string, product: IProduct, successCallback: SuccessCallbackType, errorCallback: ErrorCallbackType): void;
}

const EditProductPage: React.FC<IEditProductPageProps> = ({product, editProduct}) => {
    const history = useHistory();
    const [error, setError] = useState<string | null>(null);

    if (product == null) {
        return <div className="details-page box">
            Товар не найден!
        </div>;
    }

    const successCb = () => {
        history.push('/');
    };

    const errorCb = (error: string) => {
        setError(error)
    };

    const onProductCodeChange = () => {
        setError(null)
    };

    const onSaveProductButtonClick = (saveProduct: IProduct) => {
        editProduct(product.code, {
            code: saveProduct.code,
            shortName: saveProduct.shortName,
            fullName: saveProduct.fullName,
            availability: {value: saveProduct.availability.value, unit: saveProduct.availability.unit},
            image_url: saveProduct.image_url
        }, successCb, errorCb);

    };

    return (
        <div className="edit-product-page box">
            <EditProduct product={product} error={error} saveProductHandler={onSaveProductButtonClick} changeCodeHandler={onProductCodeChange}/>
        </div>
    );
};

const mapStateToProps = (state: any, ownState: any) => {
    const productCode = ownState.match.params.code;
    const product = state.products.find((product: IProduct) => product.code === productCode);
    return {product}
};

const mapDispatchToProps = {
    editProduct: productActions.editProduct
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProductPage));

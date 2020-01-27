import React, {useState} from 'react';
import './AddProductPage.scss';
import {IProduct} from "../../../types/Product";
import * as productActions from '../../../store/products/actions';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import EditProduct from "../../Components/EditProduct/EditProduct";
import {SuccessCallbackType} from "../../../store/products/actions";
import {ErrorCallbackType} from "../../../store/products/actions";

interface IAddProductPageProps {
    createProduct(product: IProduct, successCallback: SuccessCallbackType, errorCallback: ErrorCallbackType): void;
}

const AddProductPage: React.FC<IAddProductPageProps> = ({createProduct}) => {
    const history = useHistory();
    const [error, setError] = useState<string | null>(null);

    const successCb = () => {
        history.push('/')
    };

    const errorCb = (error: string) => {
        setError(error)
    };

    const onProductCodeChange = () => {
        setError(null)
    };

    const onAddProduct = (product: IProduct) => {
        createProduct({
            code: product.code,
            shortName: product.shortName,
            fullName: product.fullName,
            availability: {value: product.availability.value, unit: product.availability.unit},
            image_url: product.image_url
        }, successCb, errorCb);
    };

    return (
        <div className="add-product-page box">
            <EditProduct error={error} saveProductHandler={onAddProduct} changeCodeHandler={onProductCodeChange}/>
        </div>
    );
};

const empty = {};
const mapStateToProps = (state: any) => (empty);

const mapDispatchToProps = {
    createProduct: productActions.createProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage);

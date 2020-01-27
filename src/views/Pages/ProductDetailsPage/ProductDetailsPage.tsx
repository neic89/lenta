import React from 'react';
import './ProductDetailsPage.scss';
import {IProduct} from "../../../types/Product";
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';
import Button from "../../Components/Button/Button";
import * as productActions from '../../../store/products/actions';

interface IProductDetailsPageProps {
    product?: IProduct;
    deleteProduct(code: string): void;
    history: any;
}

const ProductDetailsPage: React.FC<IProductDetailsPageProps> = ({product, deleteProduct, history}) => {
    if (product == null) {
        return <div className="details-page box">
            Товар не найден!
        </div>;
    }

    const {fullName, shortName, code, availability, image_url} = product;

    const onDeleteProductButtonClick = () => {
        deleteProduct(code);
        history.push('/');
    };

    return (
        <div className="details-page box">
            <div className="details-page__fullname">
                {fullName}
            </div>
            <div className="details-page__content">
                <div>
                    <img className="details-page__img" src={image_url} alt={fullName}/>
                </div>
                <div>
                    <div>Код товара: <span>{code}</span></div>
                    <div>Краткое название: <span>{shortName}</span></div>
                    <div>Наличие товара: <span>{availability.value}</span> <span>{availability.unit}</span></div>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <Link to={`/product/edit/${code}`} className="btn">Отредактировать</Link>
                <Button text="Удалить" extraClassNames="btn_error" clickHandler={onDeleteProductButtonClick}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownState: any) => {
    const productCode = ownState.match.params.code;
    const product = state.products.find((product: IProduct) => product.code === productCode);
    return {product, history: ownState.history}
};

const mapDispatchToProps = {
    deleteProduct: productActions.deleteProduct
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage));

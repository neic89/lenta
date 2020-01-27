import React from 'react';
import './ProductTable.scss';
import {IProduct} from "../../../types/Product";
import ProductTableRow from "./ProductTableRow/ProductTableRow";
import {withRouter} from 'react-router-dom';

interface IProductTableProps {
    products: Array<IProduct>;
}

const ProductTable: React.FC<any> = ({history, products}) => {
    const onSelectProduct = (code: string) => {
        history.push(`/product/details/${code}`);
    };

    return (
        <table className="product-table">
            <thead>
            <tr>
                <th className="product-table__img">Изображение</th>
                <th className="product-table__code">Код товара</th>
                <th className="product-table__short-name">Название товара</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product: IProduct) =>
                <ProductTableRow key={product.code} selectHandler={onSelectProduct} product={product}/>)}
            </tbody>
        </table>
    );
};

export default withRouter(ProductTable);

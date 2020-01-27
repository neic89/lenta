import React from 'react';
import './ProductTableRow.scss';
import {IProduct} from "../../../../types/Product";

interface IProductTableRowProps {
    product: IProduct;

    selectHandler(code: string): void;
}

const ProductTableRow: React.FC<IProductTableRowProps> = ({product, selectHandler}) => {
    const onClick = () => {
        selectHandler(product.code)
    };

    const {shortName, code, image_url} = product;

    return (
        <tr className="product-table-row" onClick={onClick}>
            <td className="product-table__img">
                <img className="product-table-row__img" src={image_url} alt={shortName}/>
            </td>
            <td className="product-table__code">{code}</td>
            <td className="product-table__short-name">{shortName}</td>
        </tr>
    );
};

export default ProductTableRow;

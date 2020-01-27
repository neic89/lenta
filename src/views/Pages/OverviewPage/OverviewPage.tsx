import React, {useState} from 'react';
import './OverviewPage.scss';
import ProductTable from "../../Components/ProductTable";
import Pagination from "../../Components/Pagination/Pagination";
import {IProduct} from "../../../types/Product";
import {connect} from "react-redux";
import {useLocation, useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

interface IOverviewPageProps {
    products: Array<IProduct>;
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const ITEMS_ON_PAGE = 5;

const OverviewPage: React.FC<IOverviewPageProps> = ({products = []}) => {
    const query = useQuery();
    const history = useHistory();
    let paramPage: any = query.get('page');
    if (paramPage == null || Number.isNaN(parseInt(paramPage))) {
        paramPage = 1
    } else {
        paramPage = parseInt(paramPage)
    }

    const [currentPage, setCurrentPage] = useState(paramPage);

    const maxPages = Math.ceil(products.length / ITEMS_ON_PAGE);
    const pageIsCorrect = currentPage >= 1 && currentPage <= maxPages;
    const startProductIndex = ITEMS_ON_PAGE * (currentPage - 1);
    const displayedProducts: Array<IProduct> = pageIsCorrect
        ? products.slice(startProductIndex, startProductIndex + ITEMS_ON_PAGE)
        : [];

    const onCurrentPageSelect = (page: number) => {
        history.replace(`/?page=${page}`);
        setCurrentPage(page);
    };

    return (
        <div className="overview-page box">
            <div className="d-flex justify-content-end">
                <Link to={`/product/add`} className="btn">Добавить +</Link>
            </div>
            <div className="overview-page__content">
                {pageIsCorrect
                    ? <ProductTable products={displayedProducts}/>
                    : <div className="overview-page__empty">Запрашиваемой страницы не существует</div>
                }
            </div>
            <Pagination page={currentPage} maxPages={maxPages} changePageHandler={onCurrentPageSelect}/>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        products: state.products,
    }
};

export default connect(mapStateToProps)(OverviewPage);

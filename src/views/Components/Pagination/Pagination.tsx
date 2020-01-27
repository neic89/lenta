import React, {useState} from 'react';
import './Pagination.scss';
import Button from "../Button/Button";

interface IPaginationProps {
    page: number;
    maxPages: number;

    changePageHandler(page: number): void;
}

export const START_OFFSET_PAGE = 8;

const Pagination: React.FC<IPaginationProps> = ({page, maxPages, changePageHandler}) => {
    const [pageInput, setPageInput] = useState<string>(page.toString());
    const onPrevPageButton = () => {
        if (page > 1) {
            changePageHandler(page - 1)
        }
    };

    const onNextPageButton = () => {
        if (page < maxPages) {
            changePageHandler(page + 1)
        }
    };

    const onPageInputChange = (e: any) => {
        setPageInput(e.target.value);
    };

    const renderPageItems = () => {
        const pageItems = [];
        for (let i = 1; i <= maxPages; i++) {
            pageItems.push(
                <li key={i} className={`pagination__list-item ${page === i ? 'pagination__list-item_active' : ''}`} onClick={() => changePageHandler(i)}>{i}</li>)
        }
        return pageItems;
    };

    const onForwardToPage = () => {
        let parsePageInput = parseInt(pageInput);
        if (Number.isNaN(parsePageInput) || parsePageInput === 0) {
           parsePageInput = 1;
        }
        changePageHandler(parsePageInput)
    };

    const getListOffsetLeft = (): number => page <= START_OFFSET_PAGE ? 0 : (page - START_OFFSET_PAGE) * 30;

    return (
        <div className="pagination">
            <div className="pagination__left">
                <Button text="< Предыдущая страница" extraClassNames="pagination__button pagination__button_prev" isDisabled={page === 1} clickHandler={onPrevPageButton}/>
                <div className="pagination__list-container">
                    <ul className="pagination__list" style={{transform: `translateX(-${getListOffsetLeft()}px`}}>
                        {renderPageItems()}
                    </ul>
                </div>
                <Button text="Следующая страница >" extraClassNames="pagination__button pagination__button_next" isDisabled={page === maxPages} clickHandler={onNextPageButton}/>
            </div>
            <div className="pagination__right">
                <input className="pagination__input" value={pageInput} type="number" onChange={onPageInputChange} min={1} max={maxPages}/>
                <span>из {maxPages}</span>
                <button onClick={onForwardToPage}>Перейти</button>
            </div>
        </div>
    );
};

export default Pagination;

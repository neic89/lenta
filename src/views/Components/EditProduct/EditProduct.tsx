import React, {useRef, useState} from 'react';
import './EditProduct.scss';
import {IProduct} from "../../../types/Product";
import Button from "../../Components/Button/Button";
import {Link} from 'react-router-dom';

export const UNITS = ['кг', 'гр', 'шт', 'л', 'мл'];

interface IEditProductPageProps {
    product?: IProduct | null;
    error?: string | null;
    saveProductHandler(product: IProduct): void;
    changeCodeHandler(): void
}

const EditProductPage: React.FC<IEditProductPageProps> = ({saveProductHandler, error, product, changeCodeHandler}) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [code, setCode] = useState(product == null ? '' : product.code);
    const [shortName, setShortName] = useState(product == null ? '' : product.shortName);
    const [fullName, setFullName] = useState(product == null ? '' : product.fullName);
    const [availabilityValue, setAvailabilityValue] = useState(product == null ? '0' : product.availability.value);
    const [availabilityUnit, setAvailabilityUnit] = useState(product == null ? UNITS[0] : product.availability.unit);
    const [imageUrl, setImageUrl] = useState(product == null ? '' : product.image_url);

    const onSendForm = (e: any) => {
        if (formRef.current == null) {
            return;
        }

        const formIsValid = formRef.current.reportValidity();
        if (formIsValid === false) {
            return false;
        }

        e.preventDefault();
        saveProductHandler({
            code,
            shortName,
            fullName,
            availability: {value: availabilityValue, unit: availabilityUnit},
            image_url: imageUrl
        });
        return false;
    };

    const onCodeChange = (e: any) => {
        setCode(e.target.value);
        changeCodeHandler();
    };
    const onShortNameChange = (e: any) => setShortName(e.target.value);
    const onFullNameChange = (e: any) => setFullName(e.target.value);
    const onAvailabilityValueChange = (e: any) => setAvailabilityValue(e.target.value);
    const onAvailabilityUnitChange = (e: any) => {
        setAvailabilityUnit(e.target.value)
    };
    const onImageUrlChange = (e: any) => setImageUrl(e.target.value);

    return (
        <div className="edit-product-component">
            {error != null && <div className="error">{error}</div>}
            <form className="edit-product-component__form" onSubmit={onSendForm} ref={formRef}>
                <div className="edit-product-component__row">
                    <label className="edit-product-component__label">Код товара:</label>
                    <input className="edit-product-component__input" required={true} placeholder="Введите код в формате P-0000000" type="text" value={code} onChange={onCodeChange}/>
                </div>
                <div className="edit-product-component__row">
                    <label className="edit-product-component__label">Краткое название:</label>
                    <input className="edit-product-component__input" required={true} placeholder="Введите краткое название товара от 2 до 60 символов" minLength={2} maxLength={60} type="text" value={shortName} onChange={onShortNameChange}/>
                </div>

                <div className="edit-product-component__row">
                    <label className="edit-product-component__label">Полное название:</label>
                    <input className="edit-product-component__input" required={true} placeholder="Введите полное название товара от 2 до 100 символов" type="text" minLength={2} maxLength={100} value={fullName} onChange={onFullNameChange}/>
                </div>
                <div className="edit-product-component__row">
                    <label className="edit-product-component__label">Наличие товара:</label>
                    <input className="edit-product-component__input" required={true} type="number" min={0} placeholder="Введите число остатка" value={availabilityValue} onChange={onAvailabilityValueChange}/>
                    <select className="edit-product-component__input" required={true} value={availabilityUnit} onChange={onAvailabilityUnitChange}>
                        {UNITS.map((unit) => <option key={unit} value={unit}>{unit}</option>)}
                    </select>
                </div>
                <div className="edit-product-component__row">
                    <label className="edit-product-component__label">Изображение:</label>
                    <input className="edit-product-component__input" required={true} placeholder="https://lenta.gcdn.co/globalassets/1/-/35/28/72/238094.png" type="text" value={imageUrl} onChange={onImageUrlChange}/>
                </div>
                <div>
                    <Button text="Сохранить" clickHandler={onSendForm}/>
                    <Link to="/" className="btn btn_error">Отмена</Link>
                </div>
            </form>
        </div>
    );
};

export default EditProductPage;

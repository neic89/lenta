import productReducer, {defaultState} from './reducer';
import {Types} from './actions';

test('productReducer add product', () => {
    const testProduct = {
        fullName: 'Полное название товара',
        shortName: 'Краткое название товара',
        code: 'P-00001',
        availability: {value: 555, unit: 'кг'},
        image_url: 'image_url'
    };

    const newState = productReducer(defaultState, {type: Types.PRODUCT_CREATE, payload: testProduct});
    expect(newState.products).toContain(testProduct);
    expect(newState.products.length).toEqual(defaultState.products.length + 1);
});

test('productReducer delete product', () => {
    const deleteProduct = defaultState.products[0];

    const newState = productReducer(defaultState, {type: Types.PRODUCT_DELETE, payload: deleteProduct.code});
    expect(newState.products).not.toContain(deleteProduct);
    expect(newState.products.length).toEqual(defaultState.products.length - 1);
});

test('productReducer edit product', () => {
    const editProduct = defaultState.products[0];
    const newProductData = {...editProduct, availability: {...editProduct.availability}}; // делаем копирование объекта
    newProductData.fullName = 'Тест';
    const newState = productReducer(defaultState, {type: Types.PRODUCT_EDIT, payload: {code: editProduct.code, product: newProductData}});
    expect(newState.products).toContain(newProductData);
    expect(newState.products.length).toEqual(defaultState.products.length);
    expect(newState.products[0].fullName).toEqual('Тест');
});

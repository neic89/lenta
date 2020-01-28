import {IProduct} from "../../types/Product";

export const productsArray: Array<IProduct> = [];

for (let i = 0; i < 100; i++) {
    productsArray.push({
        fullName: 'Биойогурт СЛОБОДА с клубникой 2% без змж (Россия) 290г',
        shortName: 'Биойогурт СЛОБОДА 290г',
        code: `P-000${i}`,
        availability: {value: 5, unit: 'кг'},
        image_url: 'https://lenta.gcdn.co/globalassets/1/-/35/28/72/238094.png'
    })
}

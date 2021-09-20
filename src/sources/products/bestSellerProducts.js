import BreadImg from '../images/bestSellers/bread.png';
import PepperImg from '../images/bestSellers/peper.png';
import OrangeImg from '../images/bestSellers/orange.png';
import AggsImg from '../images/bestSellers/eggs.png';
import OilImg from '../images/bestSellers/oil.png';
import BodyLotionImg from '../images/bestSellers/bodyLotion.png';
import { v4 as uuidv4 } from 'uuid';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as StarIconRegular } from '@fortawesome/free-regular-svg-icons'


const bestSellerProductsJSON = [
  {
    "id": uuidv4(),
    "hot": "Hot",
    "img": BreadImg,
    "text": "Fresh Bread",
    "oldPrice": 15,
    "price": 12,
    "star": faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": PepperImg,
    "text": "BreadImg",
    "oldPrice": 20,
    "price": 15,
    "star": faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": "Hot",
    "img": OrangeImg,
    "text": "Orange Beverage",
    "oldPrice": 30,
    "price": 20,
    "star": faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": AggsImg,
    "text": "Dozen Eggs",
    "oldPrice": 15,
    "price": 12,
    "star": faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": "Hot",
    "img": OilImg,
    "text": "Cooking Oil",
    "oldPrice": 20,
    "price": 15,
    "star": faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": BodyLotionImg,
    "text": "Body Lotion",
    "oldPrice": 30,
    "price": 20,
    "star": faStar,
    "starRegular": StarIconRegular
  }
];
export default bestSellerProductsJSON;
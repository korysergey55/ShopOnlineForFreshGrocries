import BeefImg from '../images/prendingProducts/beef.png';
import BrocaliImg from '../images/prendingProducts/brocali-removebg-preview.png';
import StrawberriesImg from '../images/prendingProducts/strawberries-removebg-preview.png';
import HoneyImg from '../images/prendingProducts/honey.png';
import MilkImg from '../images/prendingProducts/milk.png';
import MangoImg from '../images/prendingProducts/mango.png';
import { v4 as uuidv4 } from 'uuid';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as StarIconRegular } from '@fortawesome/free-regular-svg-icons'


const trendingProductsJSON = [
  {
    "id": uuidv4(),
    "hot": "Hot",
    "img": BeefImg,
    "text": "Beef Steak",
    "oldPrice": 15,
    "price": 12,
    "star": faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": BrocaliImg,
    "text": "Broccoli",
    "oldPrice": 20,
    "price": 15,
    "star":  faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": StrawberriesImg,
    "text": "Strawberries",
    "oldPrice": 30,
    "price": 20,
    "star":  faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": HoneyImg,
    "text": "Fresh Honey",
    "oldPrice": 50,
    "price": 40,
    "star":  faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": MilkImg,
    "text": "Fresh Milk",
    "oldPrice": 10,
    "price": 0.8,
    "star":  faStar,
    "starRegular": StarIconRegular
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": MangoImg,
    "text": "Mango Beverage",
    "oldPrice": 22,
    "price": 18,
    "star":  faStar,
    "starRegular": StarIconRegular
  }
];
export default trendingProductsJSON;
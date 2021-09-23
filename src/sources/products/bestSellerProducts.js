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
    "imgArr": [BreadImg, BreadImg, BreadImg, BreadImg, BreadImg],
    "text": "Fresh Bread",
    "oldPrice": 15,
    "price": 12,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Fresh Bread - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": PepperImg,
    "imgArr": [PepperImg, PepperImg, PepperImg, PepperImg, PepperImg],
    "text": "BreadImg",
    "oldPrice": 20,
    "price": 15,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'BreadImg - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": "Hot",
    "img": OrangeImg,
    "imgArr": [OrangeImg, OrangeImg, OrangeImg, OrangeImg, OrangeImg,],
    "text": "Orange Beverage",
    "oldPrice": 30,
    "price": 20,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Orange Beverage - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": AggsImg,
    "imgArr": [AggsImg, AggsImg, AggsImg, AggsImg, AggsImg,],
    "text": "Dozen Eggs",
    "oldPrice": 15,
    "price": 12,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Dozen Eggs - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": "Hot",
    "img": OilImg,
    "imgArr": [OilImg, OilImg, OilImg, OilImg, OilImg,],
    "text": "Cooking Oil",
    "oldPrice": 20,
    "price": 15,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Cooking Oil - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": BodyLotionImg,
    "imgArr": [BodyLotionImg, BodyLotionImg, BodyLotionImg, BodyLotionImg, BodyLotionImg,],
    "text": "Body Lotion",
    "oldPrice": 30,
    "price": 20,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Body Lotion - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  }
];
export default bestSellerProductsJSON;
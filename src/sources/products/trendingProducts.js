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
    "imgArr": [BeefImg, BeefImg, BeefImg, BeefImg, BeefImg],
    "text": "Beef Steak",
    "oldPrice": 15,
    "price": 12,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Beef Steak - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": BrocaliImg,
    "imgArr": [BrocaliImg, BrocaliImg, BrocaliImg, BrocaliImg, BrocaliImg],
    "text": "Broccoli",
    "oldPrice": 20,
    "price": 15,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Broccoli - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": StrawberriesImg,
    "imgArr": [StrawberriesImg, StrawberriesImg, StrawberriesImg, StrawberriesImg, StrawberriesImg],
    "text": "Strawberries",
    "oldPrice": 30,
    "price": 20,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Strawberries - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": HoneyImg,
    "imgArr": [HoneyImg, HoneyImg, HoneyImg, HoneyImg, HoneyImg],
    "text": "Fresh Honey",
    "oldPrice": 50,
    "price": 40,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Fresh Honey - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": MilkImg,
    "imgArr": [MilkImg, MilkImg, MilkImg, MilkImg, MilkImg],
    "text": "Fresh Milk",
    "oldPrice": 10,
    "price": 0.8,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Fresh Milk - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": MangoImg,
    "imgArr": [MangoImg, MangoImg, MangoImg, MangoImg, MangoImg],
    "text": "Mango Beverage",
    "oldPrice": 22,
    "price": 18,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Mango Beverage - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  }
];
export default trendingProductsJSON;

import BeefImg from '../images/prendingProducts/beef.png';
import BrocaliImg from '../images/prendingProducts/brocali-removebg-preview.png';
import StrawberriesImg from '../images/prendingProducts/strawberries-removebg-preview.png';
import HoneyImg from '../images/prendingProducts/honey.png';
import { v4 as uuidv4 } from 'uuid';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as StarIconRegular } from '@fortawesome/free-regular-svg-icons'


const relatedProductsJSON = [
  {
    "id": uuidv4(),
    "hot": "Hot",
    "img": BeefImg,
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, HoneyImg],
    "text": "Beef Steak",
    "oldPrice": 15,
    "price": 12,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Beef Steak - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
    "aboutProductLi": [
      {
        id: 1,
        title: 'Description',
        text: 'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      {
        id: 2,
        title: 'Additional Information',
        text: 'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      {
        id: 3,
        title: 'Reviews',
        text: 'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
    ]
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": BrocaliImg,
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, HoneyImg],
    "text": "Broccoli",
    "oldPrice": 20,
    "price": 15,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Beef Steak - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
    "aboutProductLi": [
      {
        id: 1,
        title: 'Description',
        text: 'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      {
        id: 2,
        title: 'Additional Information',
        text: 'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      {
        id: 3,
        title: 'Reviews',
        text: 'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
    ]
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": StrawberriesImg,
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, HoneyImg],
    "text": "Strawberries",
    "oldPrice": 30,
    "price": 20,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Beef Steak - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
    "aboutProductLi": [
      {
        id: 1,
        title: 'Description',
        text: 'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      {
        id: 2,
        title: 'Additional Information',
        text: 'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      {
        id: 3,
        title: 'Reviews',
        text: 'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
    ]
  },
  {
    "id": uuidv4(),
    "hot": null,
    "img": HoneyImg,
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, HoneyImg],
    "text": "Fresh Honey",
    "oldPrice": 50,
    "price": 40,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Beef Steak - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
    "aboutProductLi": [
      {
        id: 1,
        title: 'Description',
        text: 'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      {
        id: 2,
        title: 'Additional Information',
        text: 'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      {
        id: 3,
        title: 'Reviews',
        text: 'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
    ]
  },
  
];
export default relatedProductsJSON;
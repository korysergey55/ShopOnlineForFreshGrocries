import BeefImg from '../images/Main/trendingProducts/beef.png';
import BrocaliImg from '../images/Main/trendingProducts/brocali-removebg-preview.png';
import StrawberriesImg from '../images/Main/trendingProducts/strawberries-removebg-preview.png';
import HoneyImg from '../images/Main/trendingProducts/honey.png';
import MilkImg from '../images/Main/trendingProducts/milk.png';
import MangoImg from '../images/Main/trendingProducts/mango.png';

import { v4 as uuidv4 } from 'uuid';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as StarIconRegular } from '@fortawesome/free-regular-svg-icons'


const trendingProductsJSON = [
  {
    "id": uuidv4(),
    "hot": "Hot",
    "img": BeefImg,
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, MangoImg],
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
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, MangoImg],
    "text": "Broccoli",
    "oldPrice": 20,
    "price": 15,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Broccoli - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, MangoImg],
    "text": "Strawberries",
    "oldPrice": 30,
    "price": 20,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Strawberries - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, MangoImg],
    "text": "Fresh Honey",
    "oldPrice": 50,
    "price": 40,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Fresh Honey - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
    "img": MilkImg,
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, MangoImg],
    "text": "Fresh Milk",
    "oldPrice": 10,
    "price": 0.8,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Fresh Milk - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
    "img": MangoImg,
    "imgArr": [BeefImg, BrocaliImg, StrawberriesImg, HoneyImg, MangoImg],
    "text": "Mango Beverage",
    "oldPrice": 22,
    "price": 18,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Mango Beverage - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
  }
];
export default trendingProductsJSON;

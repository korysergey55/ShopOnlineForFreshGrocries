import BreadImg from '../images/Main/bestSellers/bread.png';
import PepperImg from '../images/Main/bestSellers/peper.png';
import OrangeImg from '../images/Main/bestSellers/orange.png';
import AggsImg from '../images/Main/bestSellers/eggs.png';
import OilImg from '../images/Main/bestSellers/oil.png';
import BodyLotionImg from '../images/Main/bestSellers/bodyLotion.png';
// import { v4 as uuidv4 } from 'uuid';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as StarIconRegular } from '@fortawesome/free-regular-svg-icons'


const bestSellerProductsJSON = [
  {
    "id": "10",
    "hot": "Hot",
    "img": BreadImg,
    "imgArr": [BreadImg, PepperImg, OrangeImg, AggsImg, OilImg],
    "text": "Fresh Bread",
    "oldPrice": 15,
    "price": 12,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Fresh Bread - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.'
  },
  {
    "id": "11",
    "hot": null,
    "img": PepperImg,
    "imgArr": [BreadImg, PepperImg, OrangeImg, AggsImg, OilImg],
    "text": "Pepper",
    "oldPrice": 20,
    "price": 15,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'BreadImg - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
    "id": "12",
    "hot": "Hot",
    "img": OrangeImg,
    "imgArr": [BreadImg, PepperImg, OrangeImg, AggsImg, OilImg],
    "text": "Orange Beverage",
    "oldPrice": 30,
    "price": 20,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Orange Beverage - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
    "id": "13",
    "hot": null,
    "img": AggsImg,
    "imgArr": [BreadImg, PepperImg, OrangeImg, AggsImg, OilImg],
    "text": "Dozen Eggs",
    "oldPrice": 15,
    "price": 12,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Dozen Eggs - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
    "id": "14",
    "hot": "Hot",
    "img": OilImg,
    "imgArr": [BreadImg, PepperImg, OrangeImg, AggsImg, OilImg],
    "text": "Cooking Oil",
    "oldPrice": 20,
    "price": 15,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Cooking Oil - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
    "id": "15",
    "hot": null,
    "img": BodyLotionImg,
    "imgArr": [BreadImg, PepperImg, OrangeImg, AggsImg, OilImg],
    "text": "Body Lotion",
    "oldPrice": 30,
    "price": 20,
    "star": faStar,
    "starRegular": StarIconRegular,
    "overview": 'Body Lotion - Neque porro quisquam est aui dolorem iesum ruia sit amet consectetur, adipisci velit sed quia non numeius modi tempora incidunt ut labore et dolore magnavolutatem exercitationem ullam.',
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
export default bestSellerProductsJSON;
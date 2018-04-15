import Realm,{ObjectSchema} from 'realm';
import moment from 'moment';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
const uuid = require('uuid');





class Product {
  static schema = {
    name: 'Product',
    properties: {
      title: {type: 'string'},
      description: {type: 'string',optional: true},
      barcodeNumber:{type: 'string',optional: true},
      imageURL:{type:'string',optional: true},
    }
  }
}


export const getAllProducts = () => {
  const allRecords = realm.objects(Product.schema.name)
  obje=[];
  for(let i=0;i<allRecords.length;i++)
  {
    obje.push(allRecords[i]);
  }
  return obje;
}



export const createProduct = (title,description,barcodeNumber,imageURL) => {
  realm.write(() => {
    realm.create(Product.schema.name, {
      title: title,
      description:description,
      barcodeNumber:barcodeNumber,
      imageURL:imageURL
    })
  })
}


export const deleteAllRecords=()=>
{
    realm.write(() => {
      let allRecord = realm.objects(Product.schema.name)
      realm.delete(allRecord);
    })
}



const realm = new Realm({schema: [Product]})

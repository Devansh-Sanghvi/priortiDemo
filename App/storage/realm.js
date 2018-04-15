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
  for(let i=0;i<=allRecords.length;i++)
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

/*
* Alerts read/unread ends
*/

/*
* CachedNewsletters starts
*/
class CachedNewsletters {
  static get () { return realm.objects(CachedNewsletters.schema.name) }
  static schema = {
    name: 'newsletters',
    primaryKey: 'id',
    properties: {
      id: {type: 'int'},
      title: {type: 'string'},
      term: {type: 'int'},
      week: {type: 'int'},
      pdf_path: {type: 'string'},
      created_at: {type: 'date'},
      day: {type: 'string'},
      date: {type: 'string'},
    }
  }
}

export const getCachedNewsletters = () => {
  var cachedNewsLetters = {};
  var cachedNewsLettersArr=Array();
  try{
  cachedNewsLetters = cachedNewsLetters.get().sorted('created_at');
  let len = cachedNewsLetters.length;
  for (let i = 0; i < len; i++) {
    cachedNewsLettersArr.push(cachedNewsLetters[i]);
  }
}catch (e) {
  console.log("Error on getting ");
  console.log(e);
}
  return cachedNewsLettersArr;
}

export const getCachedNewsletter = (id) => {
  const cachedNewsletter = realm.objectForPrimaryKey(CachedNewsletters, id)
  return cachedNewsletter;
}

export const createCachedNewsletter = (data) => {
  try {
  realm.write(() => {
    realm.create(CachedNewsletters.schema.name, data)
  });
}catch (e) {
  console.log("Error on creation");
  console.log(e);
}
}

export const deleteCachedNewsletter = (cachedNewsletter) => {
  realm.delete(cachedNewsletter);
}
/*
* CachedNewsletters ends
*/



class CachedNoticeDetail {
  static get () { return realm.objects(CachedNotices.schema.name) }
  static schema  = {
    name: 'dailynoticesdetail',

    properties: {
         category_id:'int',
         category_title:'string',
         notice_list:{type : 'list',objectType:'dailynoticesdetaillist'},
         uid:'int'

    }


}
}



export const createCachedNoticeDetails = (data) => {
  try {
    console.log(data);
  realm.write(() => {
    realm.create(CachedNoticeDetail.schema.name, data)
  });
}catch (e) {
  console.log("Error on creation");
  console.log(e);
}

var cachedNotices= {};
try{
cachedNotices = realm.objects(CachedNoticeDetail.schema.name);
let len = cachedNotices.length;
console.log(len);
}catch (e) {
console.log("Error on getting notices");
console.log(e);
}





}


export const createCachedNoticeDetailsList = (data) => {
  try {
    console.log(data);
  realm.write(() => {
    realm.create(CachedNoticeDetailList.schema.name, data)
  });
}catch (e) {
  console.log("Error on creation");
  console.log(e);
}
}



// export const getCachedNotices = () => {
//   var cachedNotices= {};
//   var CachedNoticesArr=Array();
//     var CachedNoticesDeatailsArr=Array();
//   try{
//   cachedNotices = CachedNotices.get().sorted('publish_date');
//   let len = cachedNotices.length;
//  for (let i = 0; i < len; i++) {
//
//     data=  {
//       category_id:'int',
//       category_title:'string',
//            ,
//       notice_list:cachedNotices[i].notices
//       }
//       console.log(data);
//     CachedNoticesArr.push(data);
//   }
// }catch (e) {
//   console.log("Error on getting notices");
//   console.log(e);
// }
//   return CachedNoticesArr;
// }







class CachedNoticeDetailList {

static schema= {
    name: 'dailynoticesdetaillist',

    properties: {
    notice_category_id:'int',
    created_at: 'string',
    title:'string',
    description:'string',
    id:'int',
    publish_date:'string',

  }

}
}



//
// created_at
//
// deleted_at
//
// description
//
// id
//
//
// notice_category_id
//
// publish_date
//
// title
//
// updated_at



// export const getCachedNoticesDetails = () => {
//
//   return CachedNoticesArr;
// }




class CachedNotices {
  static get () { return realm.objects(CachedNotices.schema.name) }
  static schema = {
    name: 'dailynotices',
    primaryKey: 'id',
    properties: {
      id:  'int',
      total:'string',
      publish_date:'date',
      day: 'string',
      month: 'string',
      notices:{type : 'list',objectType:'dailynoticesdetail'}
    }



  }
}

export const getCachedNotices = () => {
  var cachedNotices= {};
  var CachedNoticesArr=Array();
    var CachedNoticesDeatailsArr=Array();
  try{
  cachedNotices = CachedNotices.get().sorted('publish_date');
  let len = cachedNotices.length;
 for (let i = 0; i < len; i++) {

    data=  {
      id:  cachedNotices[i].id,
      total:cachedNotices[i].total,
      publish_date:moment(cachedNotices[i].publish_date).format('YYYY-MM-DD'),
      day: cachedNotices[i].day,
      month: cachedNotices[i].month,
      notices:cachedNotices[i].notices
      }
      console.log(data);
    CachedNoticesArr.push(data);
  }
}catch (e) {
  console.log("Error on getting notices");
  console.log(e);
}
  return CachedNoticesArr;
}


export const getCachedNotice = (id) => {
  console.log(id);

  const CachedNotice = realm.objectForPrimaryKey(CachedNotices, id)

  return CachedNotice;
}

export const createCachedNotice = (data) => {
  try {
  realm.write(() => {
    realm.create(CachedNotices.schema.name, data)
  });
}catch (e) {
  console.log("Error on creation");
  console.log(e);
}
}

export const deleteCachedNotice = (cachedNotice) => {
  realm.delete(cachedNotice);
}

export const deleteExpiredCachedNotice = () => {

  // realm.write(() => {
  //   var sevenDaysBeforeDate = moment().subtract(7, "days").toDate();
  //   var fifteenDaysAfterDate = moment().add(15, "days").toDate();
  //   let eventsToDelete = realm.objects('events').filtered('start_date_time >= $0 || start_date_time < $1', fifteenDaysAfterDate, sevenDaysBeforeDate);
  //   realm.delete(eventsToDelete);
  // });
}

const realm = new Realm({schema: [Product,CachedNewsletters,CachedNotices,CachedNoticeDetail,CachedNoticeDetailList]})

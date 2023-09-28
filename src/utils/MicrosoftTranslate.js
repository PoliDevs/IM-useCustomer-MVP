// import axios from 'axios';
// // import  uuidv4  from "uuid";
// import { v4 as uuidv4 } from "uuid";
// import dotenv from "dotenv";
// dotenv.config();

// let key = "7cb91588e50b4b12beffd5ab477bce1a";
// let endpoint = "https://api.cognitive.microsofttranslator.com";

// // location, also known as region.
// // required if you're using a multi-service or regional (not global) resource. It can be found in the Azure portal on the Keys and Endpoint page.
// let location = "brazilsouth";

// axios({
//   baseURL: endpoint,
//   url: "/translate",
//   method: "post",
//   headers: {
//     "Ocp-Apim-Subscription-Key": key,
//     // location required if you're using a multi-service or regional (not global) resource.
//     "Ocp-Apim-Subscription-Region": location,
//     "Content-type": "application/json",
//     "X-ClientTraceId": uuidv4().toString(),
//   },
//   params: {
//     "api-version": "3.0",
//     from: "en",
//     to: ["fr", "zu"],
//   },
//   data: [
//     {
//       text: "I would really like to drive your car around the block a few times!",
//     },
//   ],
//   responseType: "json",
// }).then(function (response) {
//   console.log(JSON.stringify(response.data, null, 4));
// });

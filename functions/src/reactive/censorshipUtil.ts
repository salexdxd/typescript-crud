// // import * as functions from "firebase-functions";
// // import { ImplCensorship } from "../models/models";
// import { db } from "../config/firestore.config";
// import createRestfulFunction, { MethodEnum } from "../utils/helpers";
// import { createCensorshipRequest } from "../helpers/helpers";
// import { ImplCensorshipRequest } from "../models/models";
// import { myCensorshipList } from "../utils/helpers";

// const createCensoredWords = createRestfulFunction({
//     method:MethodEnum.POST,
//     callback: async (req, res) => {
//         try {
            

//             const body: ImplCensorshipRequest = req.body;

//             // const myCensor = createCensorshipRequest({
//             //     censoredWords:body.censoredWords
//             // });


//             // const myCensoredList = createCensorshipRequest({
//             //     censoredWords: myCensorshipList
//             // });

//             const ref = await db.collection("reviews").add(myCensoredList);
//             const doc = await ref.get();

//             res.status(200).json({
//                 message:"Censorship list created",
//                 data:{
//                     id:doc.id,
//                     censoredWords:doc.data()
//                 }
//             })
//         } catch (err) {
//             res.status(400).json({
//                 message:"Error",
//                 err
//             })
//         }      
//     }
// })



// export default createCensoredWords;
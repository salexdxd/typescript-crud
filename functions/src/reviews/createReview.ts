import { db } from "../config/firestore.config";
import createRestfulFunction, { MethodEnum } from "../utils/helpers";
import { createReviewRequest } from "../helpers/helpers";
import { ImplCreateReviewRequest } from "../models/models";


const createReview = createRestfulFunction({
    method:MethodEnum.POST,
    callback: async (req, res) => {
        try {
            const body: ImplCreateReviewRequest = req.body;

            const query = db.collection("censored").doc("mydoc");
            const querySnapshot = await query.get();

            let stringToSplit = body.description;
            let splitted = stringToSplit.split(" ");
            let arrayOfWordsToCensor = new Array();
            for(const element of splitted){
                arrayOfWordsToCensor.push(element);
            }

            let myNewReview:string = "";

            let myChecker:string[] = querySnapshot.get("censored");

            for (let i=0; i<arrayOfWordsToCensor.length;i++){
                let temp = arrayOfWordsToCensor[i];
                for(const element of myChecker){
                    if(arrayOfWordsToCensor[i]===element){
                        temp="*".repeat(element.length);
                        break;
                    }
                }
                if(i===arrayOfWordsToCensor.length-1){
                    myNewReview+=temp;
                } else{
                    myNewReview+=temp+" ";
                }
            }            

            const review = createReviewRequest({
                title: body.title,
                description:myNewReview,
            });

            //getting reviews db
            const ref = await db.collection("reviews").add(review);
            const doc = await ref.get();           



            res.status(200).json({
                message:"Review created",
                data:{
                    id:doc.id,
                    review:review
                }
            })
        } catch (err) {
            res.status(500).json({
                message:"Error",
                err
            })
        }      
    }
})

export default createReview;
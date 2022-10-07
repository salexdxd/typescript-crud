import * as functions from "firebase-functions";
import { Request, Response } from "firebase-functions";
import * as cors from "cors";
const corsHandler = cors({ origin: true });

export enum MethodEnum {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

interface ImplRestfulFunctionArgs {
    method: MethodEnum;
    callback: (req:Request, res:Response) => void;
}

const createRestfulFunction = (args: ImplRestfulFunctionArgs) => {
    return functions.https.onRequest((request,response) => {
        if(request.method === args.method) {
            corsHandler(request,response, ()=>{});
            args.callback(request,response);
        } else{
            response.status(400).json({message:"Bad Request from callback function"})
        }
    })
}


export const myCensorshipList = [{censored:["test","jedan", "dva", "tri", "pet"]}]

export default createRestfulFunction;
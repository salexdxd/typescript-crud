import { db } from "../config/firestore.config";
import createRestfulFunction, { MethodEnum } from "../utils/helpers";


const updateReview = createRestfulFunction({
  method: MethodEnum.PATCH,
  callback: async (req, res) => {
    try {
      const docId = req.params["0"];
      const myReviews = req.body;

      const query = db.collection("reviews").doc(docId);
      await query.set(myReviews);
      const snap = await query.get();

      res.status(200).json({
        message: "Review updated",
        data: {
          id: docId,
          review: snap.data(),
        },
      });
    } catch (err) {
      res.status(400).json({
        message: "Error",
        err,
      });
    }
  },
});


export default updateReview;
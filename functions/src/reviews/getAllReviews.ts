import { db } from "../config/firestore.config";
import createRestfulFunction, { MethodEnum } from "../utils/helpers";


const getAllReviews = createRestfulFunction({
  method: MethodEnum.GET,
  callback: async (req, res) => {
    try {
      const query = db.collection("reviews");
      const querySnapshot = await query.get();
      const data: { id: string; review: FirebaseFirestore.DocumentData }[] = [];

      querySnapshot.docs.forEach((doc) =>
        data.push({
          id: doc.id,
          review: doc.data(),
        })
      );

      res.status(200).json({
        data,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default getAllReviews;
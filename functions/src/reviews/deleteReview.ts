import { db } from "../config/firestore.config";
import createRestfulFunction, { MethodEnum } from "../utils/helpers";

const deleteReviewById = createRestfulFunction({
  method: MethodEnum.DELETE,
  callback: async (req, res) => {
    try {
      const docId = req.params["0"];

      const query = db.collection("reviews").doc(docId);
      await query.delete();

      res.status(200).json({
        message: "Review deleted",
        data: {
          id: docId,
        },
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default deleteReviewById;
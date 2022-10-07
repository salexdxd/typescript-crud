import { ImplCensorship, ImplCensorshipRequest, ImplCreateReviewRequest, ImplReview } from "../models/models";

export const createReviewRequest = (review: ImplCreateReviewRequest): ImplReview => {
    return { ...review, dateCreated: Date.now().toString(), isCensored:false};
}

export const createCensorshipRequest = (censoredWords: ImplCensorshipRequest): ImplCensorship => {
    return {...censoredWords};
}
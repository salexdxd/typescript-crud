export interface ImplReview{
    title:string;
    description:string;
    dateCreated:string;
    isCensored:boolean;
}

export interface ImplCreateReviewRequest{
    title:string;
    description:string;
}

export interface ImplCensorshipRequest{
    censoredWords:string[];
}

export interface ImplCensorship {
    censoredWords:string[];
}

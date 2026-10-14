export interface Review {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar?: string;
    comment: string;
    rating: number;
    verified: boolean;
    projectName?: string;
    projectUrl?: string;
    createdAt: string;
}

export interface CreateReviewInput {
    name: string;
    email: string;
    role: string;
    projectName: string;
    comment: string;
    rating: number;
    consentToPublish: boolean;
}

export interface VerifyReviewInput {
    reviewerName: string;
    projectName: string;
    email: string;
}

export interface ReviewServiceResponse {
    success: boolean;
    message: string;
}
import type {
    CreateReviewInput,
    ReviewServiceResponse,
    VerifyReviewInput,
} from "../types/review.types";

export const reviewService = {
    async createReview(
        input: CreateReviewInput,
    ): Promise<ReviewServiceResponse> {
        // TODO: conectar con el endpoint de creación de testimonios.
        void input;

        throw new Error(
            "El envío de testimonios todavía no está disponible.",
        );
    },

    async requestVerification(
        input: VerifyReviewInput,
    ): Promise<ReviewServiceResponse> {
        // TODO: conectar con el endpoint de solicitudes de verificación.
        void input;

        throw new Error(
            "La verificación de testimonios todavía no está disponible.",
        );
    },
};
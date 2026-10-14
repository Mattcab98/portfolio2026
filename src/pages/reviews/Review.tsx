
import { useState } from "react";
import { MessageSquareQuote } from "lucide-react";

import { ReviewCard } from "./components/ReviewCard";
import { ReviewForm } from "./components/ReviewForm";
import { VerifyReview } from "./components/VerifyReview";

const reviews = [
    {
        id: 1,
        name: "Client Example",
        role: "Business Owner",
        company: "Independent Business",
        avatar: undefined,
        comment:
            "The collaboration was smooth and professional. The final result reflected the goals and needs of the project.",
        rating: 5,
        verified: false,
        projectName: "Business Website",
    },
];

const Reviews = () => {
    const [verificationReview, setVerificationReview] =
        useState<(typeof reviews)[number] | null>(null);

    const closeVerification = () => {
        setVerificationReview(null);
    };

    return (
        <section id="reviews" className="relative mx-auto w-full">
            <div className="mx-auto flex max-w-6xl flex-col gap-5">
                {/* Encabezado */}
                <div className="flex flex-col gap-3">
                    <div className="inline-flex w-45 items-center justify-center gap-2 rounded-2xl border border-brand-hover bg-background/60 py-1 font-mono text-sm uppercase tracking-widest text-white">
                        <MessageSquareQuote size={18} />
                        Client Reviews
                    </div>

                    <h2 className="font-display text-3xl font-bold text-background md:text-5xl">
                        Experiences that speak for themselves.
                    </h2>

                    <p className="text-sm text-background">
                        Every project starts with an idea and a collaboration.
                        Here, clients can share their experience working with me.
                    </p>
                </div>

                {/* Listado de reseñas */}
                <div className="flex flex-col gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="flex flex-col gap-4">
                            <ReviewCard
                                name={review.name}
                                role={review.role}
                                company={review.company}
                                avatar={review.avatar}
                                comment={review.comment}
                                rating={review.rating}
                                verified={review.verified}
                            />

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setVerificationReview(review)
                                    }
                                    className="text-xs text-white/70 transition-colors hover:text-background/50"
                                >
                                    Request testimonial verification
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Popup de verificación */}
                {verificationReview && (
                    <VerifyReview
                        reviewerName={verificationReview.name}
                        projectName={verificationReview.projectName}
                        onClose={closeVerification}
                    />
                )}

                {/* Formulario de reseñas */}
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                            Worked with me?
                        </p>

                        <h3 className="font-display text-2xl font-bold text-background md:text-3xl">
                            Share your experience.
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-gray-800">
                            Your feedback can help future clients understand
                            what it is like to work together.
                        </p>
                    </div>

                    <ReviewForm />
                </div>
            </div>
        </section>
    );
};

export { Reviews };

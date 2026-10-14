
import { useState, type FormEvent } from "react";
import { Send, Star, CheckCircle2 } from "lucide-react";

const ReviewForm = () => {
    const [rating, setRating] = useState(5);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // La conexión con el backend se agregará más adelante.
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="rounded-3xl border border-brand/30 bg-surface p-8 text-center">

                <CheckCircle2
                    size={36}
                    className="mx-auto mb-4 text-brand"
                />

                <h3 className="font-display text-xl font-bold text-white">
                    Thank you for your feedback!
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                    Your review has been submitted for demonstration.
                    The submission service is not connected yet.
                </p>

                <button
                    type="button"
                    onClick={() => {
                        setSubmitted(false);
                        setRating(5);
                    }}
                    className="text-sm text-brand transition-colors hover:text-brand-hover"
                >
                    Submit another review
                </button>

            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="
                rounded-3xl border border-zinc-800
                bg-surface p-6 md:p-8 flex flex-col gap-5
            "
        >
            <div className="">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand">
                    Your experience matters
                </p>

                <h3 className="font-display text-2xl font-bold text-white">
                    Share your experience
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                    Worked with me? Share your feedback to help others
                    learn about your experience.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {/* Nombre */}
                <div>
                    <label
                        htmlFor="review-name"
                        className="mb-2 block text-sm text-zinc-300"
                    >
                        Full name
                    </label>

                    <input
                        id="review-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        required
                        maxLength={100}
                        className="
                            w-full rounded-xl border border-zinc-800
                            bg-background px-4 py-3 text-sm text-white
                            outline-none transition-colors
                            placeholder:text-zinc-600
                            focus:border-brand
                        "
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="review-email"
                        className="mb-2 block text-sm text-zinc-300"
                    >
                        Email address
                    </label>

                    <input
                        id="review-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        maxLength={254}
                        className="
                            w-full rounded-xl border border-zinc-800
                            bg-background px-4 py-3 text-sm text-white
                            outline-none transition-colors
                            placeholder:text-zinc-600
                            focus:border-brand
                        "
                    />
                </div>

                {/* Cargo */}
                <div>
                    <label
                        htmlFor="review-role"
                        className="mb-2 block text-sm text-zinc-300"
                    >
                        Role or position
                    </label>

                    <input
                        id="review-role"
                        name="role"
                        type="text"
                        placeholder="e.g. Business owner"
                        maxLength={100}
                        className="
                            w-full rounded-xl border border-zinc-800
                            bg-background px-4 py-3 text-sm text-white
                            outline-none transition-colors
                            placeholder:text-zinc-600
                            focus:border-brand
                        "
                    />
                </div>

                {/* Proyecto */}
                <div>
                    <label
                        htmlFor="review-project"
                        className="mb-2 block text-sm text-zinc-300"
                    >
                        Project or service
                    </label>

                    <input
                        id="review-project"
                        name="project"
                        type="text"
                        placeholder="Project name"
                        required
                        maxLength={150}
                        className="
                            w-full rounded-xl border border-zinc-800
                            bg-background px-4 py-3 text-sm text-white
                            outline-none transition-colors
                            placeholder:text-zinc-600
                            focus:border-brand
                        "
                    />
                </div>
            </div>

            {/* Valoración */}
            <fieldset className="">
                <legend className="mb-3 text-sm text-zinc-300">
                    Your rating
                </legend>

                <div className="flex gap-2">
                    {Array.from({ length: 5 }, (_, index) => {
                        const value = index + 1;

                        return (
                            <button
                                key={value}
                                type="button"
                                aria-label={`${value} star${value > 1 ? "s" : ""}`}
                                aria-pressed={rating === value}
                                onClick={() => setRating(value)}
                                className="rounded-md transition-transform hover:scale-110"
                            >
                                <Star
                                    size={25}
                                    fill={
                                        value <= rating
                                            ? "currentColor"
                                            : "none"
                                    }
                                    className={
                                        value <= rating
                                            ? "text-brand"
                                            : "text-zinc-600"
                                    }
                                />
                            </button>
                        );
                    })}
                </div>
            </fieldset>

            {/* Comentario */}
            <div className="">
                <label
                    htmlFor="review-comment"
                    className="mb-2 block text-sm text-zinc-300"
                >
                    Your feedback
                </label>

                <textarea
                    id="review-comment"
                    name="comment"
                    rows={5}
                    placeholder="Tell us about your experience..."
                    required
                    minLength={10}
                    maxLength={1500}
                    className="
                        w-full resize-y rounded-xl
                        border border-zinc-800 bg-background
                        px-4 py-3 text-sm text-white
                        outline-none transition-colors
                        placeholder:text-zinc-600
                        focus:border-brand
                    "
                />
            </div>

            {/* Consentimiento */}
            <div className="">
                <label className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400">
                    <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-1 brand"
                    />

                    <span>
                        I authorize the publication of my review and the
                        name I provided on this website.
                    </span>
                </label>
            </div>

            {/* Envío */}
            <button
                type="submit"
                className="
                    inline-flex w-full items-center
                    justify-center gap-2 rounded-xl
                    bg-brand px-5 py-3
                    text-sm font-semibold text-black
                    transition-colors hover:bg-brand-hover
                    sm:w-auto
                "
            >
                Submit review
                <Send size={16} />
            </button>

            <p className="text-[10px] text-center leading-relaxed text-zinc-500">
                Your email will not be displayed publicly. Reviews will
                require approval and verification before publication.
            </p>
        </form>
    );
};

export { ReviewForm };

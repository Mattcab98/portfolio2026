
import { useEffect, useState, type FormEvent } from "react";
import { ShieldCheck, X, Send } from "lucide-react";

interface VerifyReviewProps {
    reviewerName?: string;
    projectName?: string;
    onClose: () => void;
}

const VerifyReview = ({
    reviewerName = "",
    projectName = "",
    onClose,
}: VerifyReviewProps) => {
    const [name, setName] = useState(reviewerName);
    const [project, setProject] = useState(projectName);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "unavailable">("idle");

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Backend not connected yet.
        setStatus("unavailable");
    };

    return (
        <div
            className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="verify-review-title"
                className="relative my-auto w-full max-w-lg rounded-3xl border border-zinc-800 bg-black p-6 shadow-2xl shadow-black/50 sm:p-8"
            >
                {/* Header */}
                <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                        <ShieldCheck size={25} />
                    </div>

                    <div className="flex-1">
                        <h2
                            id="verify-review-title"
                            className="font-display text-xl font-bold text-white sm:text-2xl"
                        >
                            Verify a Testimonial
                        </h2>

                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                            Help us confirm your collaboration and the
                            authenticity of your testimonial.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close verification dialog"
                        className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white focus-visible:outline-2 focus-visible:outline-brand"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="mb-6 h-px bg-zinc-800" />

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="verify-name"
                            className="mb-2 block text-sm font-medium text-zinc-200"
                        >
                            Your name
                        </label>

                        <input
                            id="verify-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            maxLength={100}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Enter your full name"
                            className="w-full rounded-xl border border-zinc-800 bg-surface px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-brand"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="verify-project"
                            className="mb-2 block text-sm font-medium text-zinc-200"
                        >
                            Project name
                        </label>

                        <input
                            id="verify-project"
                            name="projectName"
                            type="text"
                            required
                            maxLength={150}
                            value={project}
                            onChange={(event) => setProject(event.target.value)}
                            placeholder="Name of the project"
                            className="w-full rounded-xl border border-zinc-800 bg-surface px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-brand"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="verify-email"
                            className="mb-2 block text-sm font-medium text-zinc-200"
                        >
                            Email address
                        </label>

                        <input
                            id="verify-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            maxLength={254}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-zinc-800 bg-surface px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-brand"
                        />

                        <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                            Your email will only be used for verification
                            purposes and will not be displayed publicly.
                        </p>
                    </div>

                    {status === "unavailable" && (
                        <p
                            role="alert"
                            className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3 text-sm leading-relaxed text-amber-200"
                        >
                            Verification requests are not available yet.
                            The backend has not been connected, so your
                            information has not been sent.
                        </p>
                    )}

                    {/* Actions */}
                    <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white focus-visible:outline-2 focus-visible:outline-brand"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                            <Send size={16} />
                            Request verification
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export { VerifyReview };

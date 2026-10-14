
import { Star, ShieldCheck, ExternalLink } from "lucide-react";
import { Card } from "../../../components/card/Card";

interface ReviewCardProps {
    name: string;
    role: string;
    company: string;
    avatar?: string;
    comment: string;
    rating: number;
    verified?: boolean;
    projectUrl?: string;
}

const ReviewCard = ({
    name,
    role,
    company,
    avatar,
    comment,
    rating,
    verified = false,
    projectUrl,

}: ReviewCardProps) => {
    
    return (
        <Card
            className="bg-background border-zinc-900"
            hoverMove="hover:-translate-y-1"
        >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
                {/* Avatar */}
                <div className="shrink-0">
                    {avatar ? (
                        <img
                            src={avatar}
                            alt={name}
                            loading="lazy"
                            className="
                                h-16 w-16 rounded-full
                                border border-brand
                                object-cover
                                md:h-20 md:w-20
                            "
                        />
                    ) : (
                        <div
                            aria-label={`Avatar de ${name}`}
                            className="
                                grid h-16 w-16 place-items-center
                                rounded-full border border-zinc-700
                                bg-surface font-display text-xl
                                font-bold text-brand
                                md:h-20 md:w-20
                            "
                        >
                            {name.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>

                {/* Testimonio */}
                <div className="min-w-0 flex-1">
                    {/* Valoración */}
                    <div
                        className="mb-3 flex gap-1 text-brand"
                        aria-label={`${rating} de 5 estrellas`}
                    >
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star
                                key={index}
                                size={17}
                                fill={index < rating ? "currentColor" : "none"}
                                strokeWidth={1.5}
                                className={
                                    index < rating
                                        ? ""
                                        : "text-zinc-700"
                                }
                            />
                        ))}

                    </div>

                    {/* Comentario */}
                    <blockquote className="mb-5 text-base font-medium italic leading-relaxed text-zinc-200 md:text-lg">
                        “{comment}”
                    </blockquote>

                    {/* Datos del cliente */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-display text-sm font-bold text-brand">
                                    {name}
                                </h3>

                                {verified && (
                                    <span
                                        className="
                                            inline-flex items-center gap-1
                                            text-xs text-brand-hover
                                        "
                                        title="Testimonio verificado"
                                    >
                                        <ShieldCheck size={14} />
                                        Verified
                                    </span>
                                )}
                            </div>

                            <p className="mt-1 text-xs text-zinc-400">
                                {role} · {company}
                            </p>
                        </div>

                        {projectUrl && (
                            <a
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex items-center gap-1.5
                                    text-xs text-zinc-400
                                    transition-colors
                                    hover:text-brand
                                "
                            >
                                View project
                                <ExternalLink size={13} />
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </Card>
    );
};

export { ReviewCard };

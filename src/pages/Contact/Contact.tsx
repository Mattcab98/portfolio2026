
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send, Mail, MapPin } from "lucide-react";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO: conectar con una API o servicio de envío de mensajes.
        console.log("Contact form:", formData);
    };

    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden text-black"
        >
            {/* Grilla sutil de fondo */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px)
                    `,
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="relative grid max-w-7xl grid-cols-1 gap-8">
                {/* Información de contacto */}
                <div className="flex flex-col items-start gap-3">

                    <div className="bg-background/90 text-brand gap-2 py-1 px-2 rounded-3xl flex justify-center items-center">

                        <Send className=""/>
                        <span className="text-[10px]">
                            DIRECT CONTACT
                        </span>
                    </div>

                    <h2 className="max-w-2xl font-display text-5xl font-extrabold leading-[0.92] tracking-tight">
                        Let's Build
                        <br />
                        Something
                        <br />
                        <span className="inline-block rounded-2xl bg-black px-3 py-1 text-brand">
                            Great
                        </span>
                    </h2>

                    <p className="max-w-xl text-sm leading-relaxed text-black">
                        Have a project in mind or looking to take your web presence to the next level? Send me a message, and let's schedule a video call.
                    </p>

                    {/* Datos de contacto */}
                    <div className="flex flex-col gap-4">

                        <a
                            href="mailto:contact@matdev.vercel.app"
                            className="group flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-70 sm:text-base"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-brand">
                                <Mail size={18} />
                            </span>

                            <span className="break-all">
                                matiasalvarezbustos@gmail.com
                            </span>
                        </a>

                        <div className="flex items-center gap-3 text-sm font-medium">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-brand">
                                <MapPin size={18} />
                            </span>

                            <span>
                                Available for remote projects worldwide.
                            </span>
                        </div>

                    </div>

                </div>

                {/* Formulario de contacto */}
                <div className="w-full rounded-3xl bg-black p-5 text-white shadow-xl sm:p-7 md:p-8 lg:p-7 xl:p-8">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        {/* Nombre */}
                        <div>
                            <label
                                htmlFor="contact-name"
                                className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-brand/70"
                            >
                                Name
                            </label>

                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Your name or company"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                maxLength={100}
                                className="w-full rounded-xl border border-zinc-800 bg-[#19191c] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-white"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="contact-email"
                                className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-brand/70"
                            >
                                Email
                            </label>

                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                maxLength={254}
                                className="w-full rounded-xl border border-zinc-800 bg-[#19191c] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-white"
                            />
                        </div>

                        {/* Mensaje */}
                        <div>
                            <label
                                htmlFor="contact-message"
                                className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-brand/70"
                            >
                                Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows={4}
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                maxLength={3000}
                                className="min-h-32 w-full resize-y rounded-xl border border-zinc-800 bg-[#19191c] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-white"
                            />
                        </div>

                        {/* Enviar */}
                        <button
                            type="submit"
                            className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand/90 px-5 py-3 text-sm font-display text-background transition-colors hover:bg-brand active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            Send Message
                            <Send size={15} />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export { Contact };

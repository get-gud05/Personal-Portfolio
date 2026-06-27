import { ArrowUpRight } from "lucide-react";

function SocialCard({ title, subtitle, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
            group

            flex

            items-center

            justify-between

            rounded-2xl

            bg-white

            p-6

            shadow-sm

            transition-all

            duration-300

            hover:-translate-y-1

            hover:shadow-2xl
            "
        >

            <div>

                <h3 className="text-2xl font-bold">
                    {title}
                </h3>

                <p className="mt-2 text-gray-500">
                    {subtitle}
                </p>

            </div>

            <ArrowUpRight
                size={34}
                className="
                transition-transform
                duration-300
                group-hover:rotate-45
                "
            />

        </a>
    );
}

export default SocialCard;
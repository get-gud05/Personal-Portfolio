import SocialLinks from "../Intro/SocialLinks";

function AboutPanel() {
    return (
        <div className="absolute inset-0">

            <div className="grid h-full grid-cols-2">

                <div
                    className="
                    flex
                    flex-col
                    justify-center
                    px-20
                    text-white
                    "
                >
                    <p className="mb-6 text-sm tracking-[0.35em] uppercase">
                        ABOUT.
                    </p>

                    <h2 className="text-7xl font-black">
                        Akshat
                        <br />
                        <span className="text-black">
                            Dangwal.
                        </span>
                    </h2>

                    <p className="mt-10 max-w-md text-lg leading-8 text-red-100">

                        Competitive Programmer.

                        <br />

                        Full Stack Developer.

                        <br />

                        Learning LLMs, RAG & AI.

                    </p>

                    <a
                        href="/Resume.pdf"
                        className="
                        mt-12
                        w-fit
                        border-2
                        border-white
                        px-8
                        py-4
                        font-semibold
                        transition
                        hover:bg-white
                        hover:text-red-500
                        "
                    >
                        View Resume →
                    </a>

                </div>

                <SocialLinks />

            </div>

        </div>
    );
}

export default AboutPanel;
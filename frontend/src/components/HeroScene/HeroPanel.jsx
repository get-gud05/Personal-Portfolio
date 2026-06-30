import ScrollIndicator from "./ScrollIndicator";

function HeroPanel() {
    return (
        <div className="absolute inset-0">

            <div
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                "
            >
                <h1 className="text-[12rem] font-black leading-none">
                    AK
                    <br />
                    SHAT
                    <span className="text-red-500">.</span>
                </h1>
            </div>

            <ScrollIndicator />

        </div>
    );
}

export default HeroPanel;
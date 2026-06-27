import { ChevronDown } from "lucide-react";

function ScrollIndicator() {
  return (
    <div
      className="
        absolute
        right-10
        bottom-10
        flex
        flex-col
        items-center
        gap-8
      "
    >
      <span
        className="
          rotate-90
          text-xs
          uppercase
          tracking-[0.4em]
        "
      >
        Scroll
      </span>

      <ChevronDown
        size={24}
        className="animate-bounce"
      />
    </div>
  );
}

export default ScrollIndicator;
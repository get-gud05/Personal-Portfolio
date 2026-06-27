import SocialCard from "./SocialCard";

const socials = [
    {
        title: "GitHub",
        subtitle: "Open Source & Personal Projects",
        href: "https://github.com/get-gud05",
    },
    {
        title: "LinkedIn",
        subtitle: "Professional Experience",
        href: "https://www.linkedin.com/in/akshat-dangwal-0682a8415/",
    },
    {
        title: "Codeforces",
        subtitle: "Competitive programming",
        href: "https://codeforces.com/profile/get-gud",
    },
    {
        title: "LeetCode",
        subtitle: "Problem solving",
        href: "https://leetcode.com/u/get-gud/",
    },
    {
        title: "CodeChef",
        subtitle: "Programming contests",
        href: "https://www.codechef.com/users/get_gud",
    },
];

function SocialLinks() {
    return (
        <div className="bg-neutral-100 flex flex-col justify-center px-20 gap-5">

            {socials.map((item) => (
                <SocialCard
                    key={item.title}
                    {...item}
                />
            ))}

        </div>
    );
}

export default SocialLinks;
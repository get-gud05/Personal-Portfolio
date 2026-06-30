function SplitBackground() {
    return (
        <div className="absolute inset-0 -z-10 flex">
            <div className="w-1/2 bg-red-500" />
            <div className="w-1/2 bg-neutral-100" />
        </div>
    );
}

export default SplitBackground;
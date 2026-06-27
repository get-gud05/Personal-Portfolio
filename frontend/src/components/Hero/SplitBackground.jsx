function SplitBackground() {
  return (
    <>
      <div className="absolute left-0 top-0 h-full w-1/2 bg-red-500" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-neutral-100" />
    </>
  );
}

export default SplitBackground;
export default function NeuButton({ parallaxRef }: { parallaxRef: any }) {
  return (
    <button
      onClick={() => {
        parallaxRef.current.scrollTo(1);
      }}
      className="px-6 py-2 font-medium bg-black text-white text-2xl w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
    >
      Learn More
    </button>
  );
}

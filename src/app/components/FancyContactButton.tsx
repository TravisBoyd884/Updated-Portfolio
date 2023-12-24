export default function Contact({ text }: { text: string }) {
  return (
    <a
      href="/contact"
      className="px-6 py-2 font-medium bg-black text-white text-2xl w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
    >
      {text}
    </a>
  );
}

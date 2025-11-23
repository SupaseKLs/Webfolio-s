import Link from "next/link";

const ButtonHover10 = () => {
  return (
    <Link href="/Works">
      <button className="group relative h-12 rounded-xl border-2 bg-gradient-to-r dark:from-[#0f0f0f] dark:to-[#0f0f0f] from-[#0f0f0f] to-[#0f0f0f] px-5 text-white">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
            Readmore
          </div>
          <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            Readmore
          </div>
        </span>
      </button>
    </Link>
  );
};

export default ButtonHover10;

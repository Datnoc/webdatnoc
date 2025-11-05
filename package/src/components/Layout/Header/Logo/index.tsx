import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-white text-32 font-bold hover:text-primary transition-colors">
        datnoc
      </span>
    </Link>
  );
};

export default Logo;

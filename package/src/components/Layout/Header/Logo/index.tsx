import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-40 font-bold transition-colors">
        <span className="text-white">dat</span>
        <span className="text-primary">noc</span>
      </span>
    </Link>
  );
};

export default Logo;

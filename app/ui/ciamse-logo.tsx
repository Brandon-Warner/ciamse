import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function CiamLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <CodeBracketIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[40px]">ciam.se</p>
    </div>
  );
}

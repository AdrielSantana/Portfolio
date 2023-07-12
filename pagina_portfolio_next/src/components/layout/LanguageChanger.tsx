import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import brazil from "../../../public/images/extra/locales/brazil.png";
import usa from "../../../public/images/extra/locales/usa.png";

export default function LanguageChanger() {
  const pathName = usePathname();
  
  const setCookies = async (locale: string) => {
    try {
      const res = await fetch('/api/cookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ locale })
      })
      const data = await res.json()
      console.log(data.message)
    } catch (error) {
      console.log(error)
    }
  }

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="locales-container">
      <span className="locale">
        <Link onClick={() => setCookies("pt-BR")} href={redirectedPathName("pt-BR")}>
          <Image draggable={false} src={brazil} width={48} height={48} alt="pt-BR" />
        </Link>
      </span>
      <span className="locale">
        <Link onClick={() => setCookies("en")} href={redirectedPathName("en")}>
          <Image draggable={false} src={usa} width={48} height={48} alt="en" />
        </Link>
      </span>
    </div>
  );
}

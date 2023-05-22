"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";
import Image from "next/image";

import brazil from "../../../public/images/extra/locales/brazil.png";
import usa from "../../../public/images/extra/locales/usa.png";
import { Row, Col } from "react-bootstrap";

export default function LanguageChanger() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="locales-container">
      <span className="locale">
        <Link href={redirectedPathName("pt")}>
          <Image src={brazil} width={48} height={48} alt="pt" />
        </Link>
      </span>
      <span className="locale">
        <Link href={redirectedPathName("en")}>
          <Image src={usa} width={48} height={48} alt="en" />
        </Link>
      </span>
    </div>
  );
}

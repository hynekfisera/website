import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  children?: string;
  className: string;
};

export default function TransLink({ href, children, className }: Props) {
  return (
    <Link href={href || ""}>
      <a className={className || ""}>{children}</a>
    </Link>
  );
}

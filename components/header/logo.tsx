import Image from "next/image";

export function Logo() {
  return (
    <>
      <Image src="/logo.png" width={120} height={81} alt="logo"/>
    </>
  );
}

import Image from 'next/image'

function Logo() {
  return <Image src="/logo.svg" onload="SVGInject(this)" alt="Guns and Thighs" width="250" height="20" fill="#fff"/>
}

export default Logo
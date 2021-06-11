import Image from 'next/image'

function Menu() {
  return <Image src="/menu-btn.svg" onload="SVGInject(this)" alt="Guns and Thighs Menu" width="15" height="38" fill="#fff" />
}

export default Menu
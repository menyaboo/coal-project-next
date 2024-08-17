import { PiTelegramLogo } from 'react-icons/pi'
import { FaWhatsapp } from 'react-icons/fa'
import type { ISocialLinks, ITelephoneLinks } from '@/interfaces/data'

const socialLinks: ISocialLinks[] = [
  {
    name: 'Telegram',
    url: 'https://t.me/Roman_Amerkhanov',
    svg: <PiTelegramLogo className="text-blue-300 size-5" />,
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/79095100873',
    svg: <FaWhatsapp className="text-green-500 size-5" />,
  },
]

const telephoneLinks: ITelephoneLinks[] = [
  {
    telephone: '+7 909 510-08-73',
    href: 'tel:+79095100873',
  },
  {
    telephone: '+7 913 286-73-64',
    href: 'tel:+79132867364',
  },
]

export {
  socialLinks,
  telephoneLinks,
}

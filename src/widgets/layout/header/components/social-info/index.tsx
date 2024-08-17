import type { FC } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

interface ISocialInfoComponentProps {
  hide: boolean
  setHide: () => void
}

export const SocialInfoComponent: FC<ISocialInfoComponentProps> = ({ hide, setHide }) => (
  <div className="flex justify-between items-center">
    <div>
      <h5 className="uppercase font-bold">Доставка угля</h5>
      <p className="mobile:w-[200px]">
        Уголь из Кузбасса в Томской области
      </p>
    </div>

    <div onClick={setHide} className="md:hidden *:size-6 p-4 -m-4 cursor-pointer">
      {hide
        ? <IoIosArrowDown />
        : <IoIosArrowUp />}
    </div>
  </div>
)

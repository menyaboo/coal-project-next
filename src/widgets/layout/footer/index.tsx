import type { FC } from 'react'
import {ContainerComponent} from "@/shared/ui";

export const FooterComponent: FC = () => (
  <footer className="py-6 text-white bg-gray-700 mt-6">
    <ContainerComponent className="flex flex-col gap-3">
      <b>Предложение не является публичной оффертой</b>
      <p className="text-[12px]">
        Обращаем ваше внимание на то, что данный интернет-сайт,
        а также вся информация о товарах, предоставленная на нём,
        носит исключительно информационный характер и ни при каких
        условиях не является публичной офертой, определяемой
        положениями Статьи 437 Гражданского кодекса Российской Федерации.
      </p>
    </ContainerComponent>
  </footer>
)

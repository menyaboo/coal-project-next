'use client'

import {FC, HTMLAttributes, useState} from 'react'
import {SocialInfoComponent, TitleHeader} from "@/widgets/layout/header/components";
import {ContainerComponent} from "@/shared/ui";

export const HeaderComponent: FC<HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => {
    const [ hide, setHide ] = useState(false)

    return (
        <header className={`fixed z-10 bg-[rgba(0,0,0,0.8)] py-6 w-full text-white ${className}`} {...props}>
            <ContainerComponent className="grid items-center grid-cols-auto-fit-350 gap-3 w-full mobile:grid-cols-auto-fit-250">
                <SocialInfoComponent hide={hide} setHide={() => setHide(prevState => !prevState)} />
                <TitleHeader hide={hide} />
            </ContainerComponent>
        </header>
    )
}

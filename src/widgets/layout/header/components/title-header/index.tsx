import type { FC } from 'react'
import { socialLinks, telephoneLinks } from '@/shared/data'
import Link from "next/link";

export const TitleHeader: FC<{ hide: boolean }> = ({ hide }) => (
  <>
    {!hide && (
      <div className="grid items-center grid-cols-auto-fit-350 gap-3 w-full">
        <div>
          <b>Cвязаться с нами через:</b>
          <div className="flex mobile:flex-col gap-x-3">
            {
              socialLinks.map(({ name, url, svg }, index) => (
                <Link href={url} target="_blank" key={index} className="flex items-center gap-1 hover:opacity-70 transition">
                  {svg}
                  <span>{name}</span>
                </Link>
              ))
            }
          </div>
        </div>

        <div className="mobile:w-[250px]">
          <b>Или позвоните нам по номеру телефона:</b>
          <div className="flex mobile:flex-col gap-x-3">
            {telephoneLinks.map(({ href, telephone }, index) =>
              <Link key={index} href={href} target="_blank" className="hover:opacity-70 transition">{telephone}</Link>)}
          </div>
        </div>
      </div>
    )}
  </>
)

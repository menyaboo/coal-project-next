import type { FC, HTMLAttributes } from 'react'

export const ContainerComponent: FC<HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
  <div className={`container ${className}`} {...props}/>
)

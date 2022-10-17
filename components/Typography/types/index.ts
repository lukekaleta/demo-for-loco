import { ReactNode } from 'react'

export interface ITypographyProps {
  children: ReactNode
  parserHtml?: string
  uppercase?: boolean
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'span'
    | 'strong'
  background?: string
  className?: string
  fitContent?: boolean
}

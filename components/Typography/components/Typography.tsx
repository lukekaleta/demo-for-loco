import { ITypographyProps } from "../types"

const Typography = ({
  children,
  uppercase = false,
  variant = 'body1',
  background = '',
  className = '',
  fitContent = false
}: ITypographyProps) => {

  const isUppercase = uppercase ? 'uppercase' : 'normal-case'
  const isFitContent = fitContent ? 'mx-auto w-fitContent' : ''

  // font types
  const h1 = 'text-5xl laptop:text-6xl desktop:text-8xl font-light'
  const h2 = 'text-4xl laptop:text-5xl desktop:text-6xl font-light'
  const h3 = 'text-3xl laptop:text-4xl desktop:text-5xl font-normal'
  const h4 = 'text-2xl laptop:text-3xl desktop:text-4xl font-normal'
  const h5 = 'text-lg desktop:text-2xl font-normal'
  const h6 = 'text-md desktop:text-xl font-medium'
  const subtitle1 = 'text-base font-normal'
  const subtitle2 = 'text-sm font-medium'
  const body1 = 'text-sm desktop:text-base font-normal'
  const body2 = 'text-sm font-normal'
  const span = 'italic font-serif text-sm'
  const strong = 'text-md font-bold'

  const getVariant = (): string => {
    switch (variant) {
      case 'h1':
        return h1
        break
      case 'h2':
        return h2
        break
      case 'h3':
        return h3
        break
      case 'h4':
        return h4
        break
      case 'h5':
        return h5
        break
      case 'h6':
        return h6
        break
      case 'subtitle1':
        return subtitle1
        break
      case 'subtitle2':
        return subtitle2
        break
      case 'body1':
        return body1
        break
      case 'body2':
        return body2
        break
      case 'span':
        return span
        break
      case 'strong':
        return strong
        break
    }
  }

  return (
    <div
      className={`
        ${getVariant()}
        ${isUppercase}
        ${background}
        ${className}
        ${isFitContent}
      `}
    >
      {children}
    </div>
  )
}

export default Typography
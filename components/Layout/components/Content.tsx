import { IContentProps } from "../types"

const Content = ({ children }: IContentProps) => {
  return (
    <div className="h-contentLayout bg-gray-800 text-center">
      <div className="pt-20">{children}</div>
    </div>
  )
}

export default Content
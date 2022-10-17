import { IRootProps } from "../types"
// components
import Appbar from "./Appbar"
import Content from "./Content"

const Root = ({ children }: IRootProps) => {
  return (
    <>
      <Appbar />
      <Content>
        {children}
      </Content>
    </>
  )
}

export default Root
import { ReactNode } from "react";
import AppProvider from "providers/app.provider";

type MasterProviderProps = {
  children: ReactNode
}

const MasterProvider = (props: MasterProviderProps) => {
  const { children } = props

  return (
    <AppProvider>
      {children}
    </AppProvider>
  )
}

export default MasterProvider
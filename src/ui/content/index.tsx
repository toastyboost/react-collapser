import * as React from "react"

import { AccordionContainer } from "./styles"

export const Content: React.FC = (props: any) => {
  const ref = React.useRef("")

  const { isOpen } = props
  const [defaultHeight, setDefaultHeight] = React.useState<number | null>(null)

  React.useEffect(() => {
    const { clientHeight }: any = ref.current
    ref.current && setDefaultHeight(clientHeight)
  }, [])

  return (
    <AccordionContainer
      {...props}
      ref={ref}
      style={defaultHeight && { maxHeight: isOpen ? defaultHeight : 0 }}
    />
  )
}

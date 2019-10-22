import * as React from "react"

interface CreateElementProps {
  name: string
  props?: {
    isOpen: boolean
    onClick?: (e: React.SyntheticEvent) => void
    style?: number
  }
}

export const createElement = (childrens: React.ReactNode, data: CreateElementProps) => {
  return React.Children.map(childrens, (child: any) => {
    const styledName = child.type.target && child.type.target.name
    const plainName = child.type && child.type.name

    return (
      (data.name === styledName || data.name === plainName) &&
      React.cloneElement(child, { ...data.props, ...child.props })
    )
  })
}

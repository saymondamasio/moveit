import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface Props extends LinkProps {
  children: ReactElement
  activeClassName: string
}

export function ActiveLink({ children, activeClassName, ...rest }: Props) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ''

  console.log(asPath, rest.href, className)

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}

import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
//↑プリレンダリングしてくれる

//型定義
type Props = {
  label: string
  href: string
}

const Button: FC<Props> = (props) => {
  return <StyledBtn href={props.href}>{props.label}</StyledBtn>
}

const StyledBtn = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border-radius: 25px;
  background: #999;
  color: #fff;
`

export default Button

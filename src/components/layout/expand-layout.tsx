import Header from '../organisms/header'
// import Header from '@/components/organisms/header'
import Footer from '../organisms/footer'
// import Footer from '@/components/organisms/footer'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Button from '../atoms/button'

type Props = {
  children: ReactNode
}

const ExpandLayout: FC<Props> = (props) => {
  return (
    <>
      <Main>{props.children}</Main>
      <Footer />
    </>
  )
}

const Main = styled.main``

export default ExpandLayout

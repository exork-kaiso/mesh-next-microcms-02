import styled from 'styled-components'
import { GetStaticProps, NextPageWithLayout } from 'next'
import { client } from '../lib/client'
import DefaultLayout from '../components/layout/default-layout'
// import ExpandLayout from '../components/layout/expand-layout'

const Home: NextPageWithLayout = (props) => {
  console.log(props)

  return (
    <>
      <Main>
        <h1>
          Next.jsでつくったページ（expand-layoutによって、フッターを削除した。）
        </h1>
      </Main>
    </>
  )
}

const Main = styled.main``

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.get({ endpoint: 'news' })

  return {
    props: {
      data: res.contents,
    },
  }
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>
// Home.getLayout = (page) => <ExpandLayout>{page}</ExpandLayout>

export default Home

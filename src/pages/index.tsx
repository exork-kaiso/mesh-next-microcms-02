import styled from 'styled-components'
import { GetStaticProps, NextPageWithLayout } from 'next'
import { client } from '../lib/client'
import DefaultLayout from '../components/layout/default-layout'
// import { useState, useEffect } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// type Props = {
//   data: []
// }

const Home: NextPageWithLayout = (props) => {
  const router = useRouter()
  // const [indexState, setIndexState] = useState(props.data)

  console.log(props)

  useEffect(() => {
    // alert('indexStateが変更されました。')
    console.log(router)
    // }, [indexState])
  }, [router])

  return (
    <>
      {/* <button
      onClick={() => {
        setIndexState([])
      }}
      > */}
      {/* button */}
      {/* </button> */}
      {/* {indexState.map((item: any) => (
        <>
          <div key={item.id}>{item.title}</div>
          <div key={item.id}>{item.content}</div>
        </>
      ))} */}
      <Main></Main>
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

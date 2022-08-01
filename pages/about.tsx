import { NextPage } from 'next'
import Head from 'next/head'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | 上大久保中学校 - 非公式</title>
      </Head>
      <div className='h-full px-5 py-5'>
        <div className='text-4xl'>このサイトについて</div>
      </div>
    </>
  )
}

export default About

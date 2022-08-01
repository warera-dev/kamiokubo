import { NextPage } from 'next'
import Head from 'next/head'

const Official: NextPage = () => {
  return (
    <>
      <Head>
        <title>上大久保中学校</title>
      </Head>
      <div className='w-full h-screen px-5 py-5'>
        <iframe
          className='w-full h-full'
          src='https://kamiokubo-j.saitama-city.ed.jp/'
          allowFullScreen={false}
          loading='lazy'
        ></iframe>
      </div>
    </>
  )
}

export default Official

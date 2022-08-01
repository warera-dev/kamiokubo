import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Loading = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>loading...</title>
    </Head>
    <div className='h-screen w-full bg-blue-400 flex justify-center items-center flex-col'>
      <div className='animate-ping h-4 w-4 bg-gray-600 rounded-full'></div>
      <div className='text-4xl text-white py-5 px-5'>上大久保中学校</div>
      <div></div>
    </div>
    </>
  )
}
export default Loading

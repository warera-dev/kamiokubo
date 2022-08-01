import { NextPage } from 'next'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import useSWR from 'swr'

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      'User-Agent':
        '	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      'Sec-Fetch-Mode': 'no-cors',
    },
  })
    .then((res) => res.text())
    .then((data) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(data, 'text/html')
    })

const Home: NextPage = () => {
  return (
    <>
      <div className='h-full px-5 py-5'>
        <div className='container px-3 py-3 content-center items-center'>
          <div className='w-2/3'>
            <Carousel autoPlay={true} showStatus={false} infiniteLoop={false} showThumbs={false}>
              <div>
                <img src='/carousels/1.jpg' alt='image1' />
              </div>
              <div>
                <img src='/carousels/2.jpg' alt='image1' />
              </div>
            </Carousel>
          </div>
        </div>
        <div className='container py-3 rounded'>
          <div className='text-3xl'>お知らせ</div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home

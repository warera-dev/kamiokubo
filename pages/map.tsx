import { NextPage } from 'next'

const Map: NextPage = () => {
  return (
    <>
      <div className='h-full px-5 py-5'>
        <div className='text-4xl'>マップ</div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8589.677168547889!2d139.61874435804825!3d35.873070127996805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c18f13b535ab%3A0x5b940ea6a1b0dcc9!2z44GV44GE44Gf44G-5biC56uL5LiK5aSn5LmF5L-d5Lit5a2m5qCh!5e0!3m2!1sja!2sjp!4v1659329637296!5m2!1sja!2sjp'
          width='600'
          height='450'
          allowFullScreen={false}
          loading='lazy'
          
        ></iframe>
      </div>
    </>
  )
}

export default Map

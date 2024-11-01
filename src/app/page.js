import Navbar from '@/components/Navbar/page';
import Image from 'next/image';
import Wise from '@/assets/img/p1.jpg';
import Ais from '@/assets/img/p2.jpg';
import Chula from '@/assets/img/p3.jpg'
import Portfolio_aye from '@/assets/img/p5.jpg'
import Furniture from '@/assets/img/p6.png'
import ClipPathSvg from '@/components/ClipPathSvg/page'
import Link from 'next/link';
import Text_opacity from '../components/text-gradient-opacity/page'
import Text_Parallax from '../components/text-parallax/page'
import Zoom_Parallax from '../components/ZoomParallax/page'
import Sticky_Footer from '../components/Sticky-Footer/page'
import CircleText from '../components/CircleText/page'
import { NumberTicker } from '../components/NumberTicker/page'
export default function Home() {
  return (
    <>
      <div className="relative before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
     before:bg-[url('https://cliply.co/wp-content/uploads/2021/07/402107790_STATIC_NOISE_400.gif')]">
        <div className="fixed top-[700px] right-0">
          <CircleText />

        </div>


        <div className='bg-s'>
          <Navbar />
        </div>

        <Text_opacity className="text-white uppercase" />

        <section className='h-full' id='about'>


          <div className="relative py-20 flex justify-center">
            <ClipPathSvg />
            <video
              src="./s.MP4"
              autoPlay
              loop
              muted
              className="w-11/12 rounded-xl h-8/12 object-cover"
              style={{ clipPath: 'url(#customClipPath)' }}
            />
            {/* <div className='absolute mb-24 ml-[550px]'>
            <Link href="#" className='text-white px-12 py-4 bg-[#022b62]' >Play/Pause</Link>
          </div> */}
          </div>

        </section>

        <section className='px-6 py-10 bg-gradient-to-t from-[#104893] to-[#0E0F11] h-full flex-row md:flex justify-around items-center'>
          <div className='text-5xl text-white font-semibold w-11/12 md:w-6/12'>
            <h1 className='uppercase'>Explore my creative projects and get inspired! Here</h1>
          </div>
          <div>
            <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
              <NumberTicker value={6} /><span>+</span>
            </p>
          </div>
        </section>

        <Zoom_Parallax />
        <section className='w-11/12 mx-auto'>
          <div className='h-96 flex items-center text-white'>
            <div className='pl-6 uppercase'>
              <h1 className='text-3xl'>• Our Work</h1>
              <h1 className='text-6xl pt-2 md:text-8xl'>Explore see <br />the project</h1>
            </div>
          </div>
          <div className='card grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href="" className='pl-6 card-child my-10 w-10/12 flex flex-col items-center'>
              <div className=' w-full h-auto'>
                <Image className='rounded-xl' src={Wise} alt='Wise' />
              </div>
              <div className='pt-6 text-white text-left'>
                <p className='text-xl md:text-2xl text-gray-500 font-bold py-2'>• UX/UI DESIGN</p>
                <h1 className='text-2xl md:text-4xl'><span className='text-4xl md:text-5xl font-bold'>Wise +</span> It is a long established fact that a reader will be distracted.</h1>
              </div>
            </Link>
            <Link href="" className='pl-6 card-child my-10 flex w-10/12 flex-col items-center'>
              <div>
                <Image className='rounded-xl' src={Ais} alt='Ais' />
              </div>
              <div className='pt-6 text-white text-left'>
                <p className='text-xl md:text-2xl text-gray-500 font-bold py-2'>• UI DESIGN</p>
                <h1 className='text-2xl md:text-4xl'><span className='text-4xl md:text-5xl font-bold'>ArmFlag</span> It is a long established fact that a reader will be distracted.</h1>
              </div>
            </Link>
            <Link href="" className='pl-6 card-child my-10 w-10/12 flex flex-col items-center'>
              <div>
                <Image className='rounded-xl' src={Chula} alt='Chula' />
              </div>
              <div className='pt-6 text-white text-left'>
                <p className='text-xl md:text-2xl text-gray-500 font-bold py-2'>• UX/UI Design</p>
                <h1 className='text-2xl md:text-4xl'><span className='text-4xl md:text-5xl font-bold'>PayGuard</span> It is a long established fact that a reader will be distracted.</h1>
              </div>
            </Link>
            <Link href="" className='pl-6 card-child my-10 w-10/12 flex flex-col items-center'>
              <div>
                <Image className='rounded-xl' src={Portfolio_aye} alt='Portfolio_aye' />
              </div>
              <div className='pt-6 text-white text-left'>
                <p className='text-xl md:text-2xl text-gray-500 font-bold py-2'>• FRONT-END DEV</p>
                <h1 className='text-2xl md:text-4xl'><span className='text-4xl md:text-5xl font-bold'>Webfolio - Aye</span> It is a long established fact that a reader will be distracted.</h1>
              </div>
            </Link>
            <Link href="" className='pl-6 card-child my-10 w-10/12 flex flex-col items-center'>
              <div>
                <Image className='rounded-xl' src={Furniture} alt='Furniture' />
              </div>
              <div className='pt-6 text-white text-left'>
                <p className='text-xl md:text-2xl text-gray-500 font-bold py-2'>• COMING SOON</p>
                <h1 className='text-2xl md:text-4xl'><span className='text-4xl md:text-5xl font-bold'>SYNLIVING</span> It is a long established fact that a reader will be distracted.</h1>
              </div>
            </Link>
            <Link href="" className='pl-6 card-child my-10 w-10/12 flex flex-col items-center'>
              <div>
                <Image className='rounded-xl' src={Furniture} alt='Furniture' />
              </div>
              <div className='pt-6 text-white text-left'>
                <p className='text-xl md:text-2xl text-gray-500 font-bold py-2'>• FRONT-END DEV</p>
                <h1 className='text-2xl md:text-4xl'><span className='text-4xl md:text-5xl font-bold'>MULTICAMP</span> It is a long established fact that a reader will be distracted.</h1>
              </div>
            </Link>
            
          </div>
        </section>
        <Text_Parallax />

        <Sticky_Footer />
      </div>
      {/* <section>

      </section>

      <footer>
        
      </footer> */}
    </>
  );
}

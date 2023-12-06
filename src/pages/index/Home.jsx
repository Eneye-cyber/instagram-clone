import Footer from '../../components/Footer'
import SideNav from '../../components/SideNav'
import './Home.css'





function Home() {
  return (
    <div className='w-full h-full bg-white relative'>
      <SideNav />

      <div className='body ml-auto h-full flex flex-col'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
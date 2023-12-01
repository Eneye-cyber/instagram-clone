import SideLink from '../../components/nav/SideLink'
import './Home.css'

const links = [
  {icon: '/icons/Home.svg', text: 'Home'},
  {icon: '/icons/Search.svg', text: 'Search'},
  {icon: '/icons/Explore.svg', text: 'Explore'},
  {icon: '/icons/Reels.svg', text: 'Reels'},
  {icon: '/icons/Messenger.svg', text: 'Messages'},
  {icon: '/icons/Notifications.svg', text: 'Notifications'},
  {icon: '/icons/New post.svg', text: 'Create'},
]

function Home() {
  

  return (
    <div className='w-full h-full bg-white relative'>
      <aside className={`sideNav fixed top-0 bottom-0 flex-col flex p-3`}>
          <div className='py-8 px-4 mb-1'>
            <img className='' src="/icons/Instagram.svg" alt='Instagram' width={`103px`} height={29}/>
          </div>

          {!!links.length && 
            links.map((item, key) => <SideLink key={key} icon={item.icon} text={item.text} />)
          }
      </aside>
    </div>
  )
}

export default Home
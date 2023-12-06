import SideLink from './nav/SideLink'

const links = [
{icon: '/icons/Home.svg', text: 'Home'},
{icon: '/icons/Search.svg', text: 'Search'},
{icon: '/icons/Explore.svg', text: 'Explore'},
{icon: '/icons/Reels.svg', text: 'Reels'},
{icon: '/icons/Messenger.svg', text: 'Messages'},
{icon: '/icons/Notifications.svg', text: 'Notifications'},
{icon: '/icons/New post.svg', text: 'Create'},
]

function SideNav() {
  return (
    <aside className={`sideNav sm:w-nav-narrow lg:w-nav-medium fixed top-0 bottom-0 flex-col flex p-3`}>
      <header aria-label='side-nav-header' className='py-6 lg:py-8 lg:px-4 mb-1'>
        <img className='hidden lg:block' src="/icons/Instagram.svg" alt='Instagram' width={`103px`} height={29}/>
        <img className='mx-auto lg:hidden' src="/icons/Instagram-mobile.svg" alt='Instagram' width={24} height={24}/>
      </header>

      <section aria-label='side-nav-section'>
        {!!links.length && 
          links.map((item, key) => <SideLink key={key} icon={item.icon} text={item.text} />)
        }
      </section>

      <footer aria-label='side-nav-footer' className='mt-auto'>
        <SideLink icon={'/icons/Settings.svg'} text={'More'} />
      </footer>
    </aside>
  )
}

export default SideNav
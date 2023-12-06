const footerLink = [
    {text: 'Meta', to: '#', blank: false},
    {text: 'About', to: '#', blank: false},
    {text: 'Blog', to: '#', blank: false},
    {text: 'Jobs', to: '#', blank: false},
    {text: 'Help', to: '#', blank: false},
    {text: 'API', to: '#', blank: false},
    {text: 'Privacy', to: '#', blank: false},
    {text: 'Terms', to: '#', blank: false},
    {text: 'Locations', to: '#', blank: false},
    {text: 'Instagram Lite', to: '#', blank: false},
    {text: 'Threads', to: '#', blank: false},
    {text: 'Contact Uploading & Non-Users', to: '#', blank: false},
    {text: 'Meta Verified', to: '#', blank: false},
  ]

function Footer() {
  return (
    <footer className='w-full px-4 mt-auto'>
			<section className='mb-16 w-full'>
				<nav className='w-full mb-5' aria-label='footer-nav'>
					<ul className='w-full mx-auto flex justify-center gap-3 max-w-[80%]'>
						{!!footerLink.length && footerLink.map(({text, to},key) => 
							<li key={key}><a href={to} className='text-xs text-gray-400'>{ text }</a></li>
						)}
					</ul>

					<ul className='w-full mx-auto flex justify-center gap-3 my-3'>
						<li><a href='#' className='text-xs text-gray-400'>© 2023 Instagram from Meta</a></li>
					</ul>
				</nav>
			</section>
		</footer>
  )
}

export default Footer
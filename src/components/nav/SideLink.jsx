
function SideLink({ icon, text }) {
  return (
    <div style={{margin: '4px 0'}} className='p-3 flex items-center gap-3 rounded-lg cursor-pointer hover:bg-ig-hover-overlay'>
      {icon && <img src={icon} alt={text ?? 'icon'} width={22} height={22} />}
      <p className=' sm:hidden lg:inline text-base font-medium'>{text ?? 'NavLink'}</p>
    </div>
  )
}

export default SideLink

function SideLink({ icon, text }) {
  return (
    <div style={{margin: '2px 0'}} className='p-3 flex items-center gap-3 rounded-lg'>
      {icon && <img src={icon} alt={text ?? 'icon'} width={22} height={22} />}
      <p className=' text-base font-medium'>{text ?? 'NavLink'}</p>
    </div>
  )
}

export default SideLink
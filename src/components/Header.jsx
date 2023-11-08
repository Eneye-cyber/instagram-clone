
function Header() {
  const auth = false
  return (
    <header className='w-full border-b border-b-[#dbdbdb] bg-white py-2 fixed top-0 z-10 flex items-center justify-center'>
      { !auth ? (
          <div className="w-full max-w-[975px] px-3 ">
            <div className="bg-[url('/img/form-logo.png')] h-[30px] w-[96px] mt-2 bg-[length:96.32px]"></div>
          </div>
        ) : (
          <div></div>
        )
      }
    </header>
  )
}

export default Header
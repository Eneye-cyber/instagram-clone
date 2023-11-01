import LoginForm from "../../components/auth/LoginForm"
function Login() {


  return (
    <section className="w-full flex justify-center gap-7 items-center mt-8"> 
      <div className="bg-[url('/img/home-phones-2x.png')] bg-[length:468.32px_634.15px] bg-[-42px_0] self-center h-[589px] min-w-[380.32px]">
      </div>
      <div className="max-w-[358px] w-full flex flex-col">
        <div className="form border w-full border-neutral-200 flex flex-col">
          <LoginForm />
        </div>

        <div className="form border w-full border-neutral-200 flex flex-col py-5 my-2 text-center">
          <h5 className="text-sm font-medium">Don&apos;t have an account? <a href="#" className="text-[#0095f6]">Sign up</a></h5>
        </div>

        <div className="w-full text-center mt-2">
          <p className="font-normal mx-auto text-sm">Get the app.</p>
          <div className="flex justify-center items-center gap-4 my-2">
            <img src="/img/apple-image.png" className="h-[40px]" alt="" />
            <img src="/img/play-image.png" className="h-[40px]" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
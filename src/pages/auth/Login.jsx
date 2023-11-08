import { useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react';

const LoginForm = lazy(() => import('../../components/auth/LoginForm'));

function Login() {
  let query = useLocation();
  
  // console.log(query)
  // where do we keep reuseable hooks

  return (
    <section className="w-full bg-white flex justify-center gap-7 items-center mt-8">
      {!query.pathname.includes('accounts') && 
        <div className="hidden lg:block bg-[url('/img/home-phones-2x.png')] bg-[length:468.32px_634.15px] bg-[-42px_0] self-center h-[589px] min-w-[380.32px]" />
      }
      <div className="max-w-[358px] w-full flex flex-col">
        <div className="form sm:border w-full border-neutral-200 flex flex-col">
          <Suspense fallback={<div>Lazy Loading...</div>}>
            <LoginForm />
          </Suspense>
        </div>

        <div className="form border w-full border-neutral-200 flex flex-col py-5 my-2 text-center">
          <h5 className="text-sm font-medium">Don&apos;t have an account? <a href="#" className="text-[#0095f6]">Sign up</a></h5>
        </div>

        <div className="w-full hidden sm:block text-center mt-2">
          <p className="font-normal mx-auto text-sm">Get the app.</p>
          <div className="flex justify-center items-center gap-4 my-2">
            <img src="/img/apple-image.png" className="h-[40px]" alt="appleLogo" />
            <img src="/img/play-image.png" className="h-[40px]" alt="PlayStoreLogo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
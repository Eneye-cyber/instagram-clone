import Login from "../../pages/auth/Login";
import Accounts from "../../pages/accounts/Base";
import Error from "../../pages/error/Error";
import Home from "../../pages/index/Home"
export const routes = [
    {
      path: "/",
      element: <Login />,
      loader: (e) => {console.log(['this Element has been mounted', e]); return null},
      action: async (e) => { 
        const formData = await e.request.formData();
        const userName = formData.get("username");
        const passWord = formData.get("password"); 
        console.log([userName, passWord])
        console.log(['An action was called', e]);
        return [userName, passWord]
      },
      errorElement: <Error />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: "/accounts", // not necessary in child routes
      // lazy: () => import('../../pages/accounts/Base'), //code-splitting
      element: <Accounts />,
      children: [
        {
          path: "/accounts/",
          element: <Login />,
        },
        {
          path: "/accounts/login",
          element: <Login />,
        },
        {
          path: "/accounts/emailsignup/",
          lazy: () => import('../../pages/accounts/Register'), //code-splitting
        },
        {
          path: "/accounts/password/reset",
          lazy: () => import('../../pages/accounts/ResetPassword'), //code-splitting
        },
      ],
    },
  ];
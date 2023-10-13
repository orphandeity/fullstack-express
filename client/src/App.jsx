import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Layout, { action as logoutAction } from './routes/Layout'
import Home from './routes/Home'
import Signin, { action as loginAction } from './routes/Signin'
import Signup, { action as registerAction } from './routes/Signup'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    action: logoutAction(queryClient),
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/signin',
        Component: Signin,
        action: loginAction(queryClient),
      },
      {
        path: '/signup',
        Component: Signup,
        action: registerAction(queryClient),
      },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App

import { useLocation, useRoutes } from 'react-router-dom'
import ListArticle from './pages/ListArticle'
import Login from './pages/Login'
import Register from './pages/Register'
import path from './constants/path'
import RegisterLayout from './layouts/RegisterLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: path.home,
      element: (
        <RegisterLayout>
          <ListArticle />
        </RegisterLayout>
      ),
      children: [
        {
          path: path.articles,
          element: (
            <RegisterLayout>
              <ListArticle />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: path.login,
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: path.register,
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])

  const location = useLocation()
  return routeElements
}

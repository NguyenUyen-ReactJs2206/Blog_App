import { useRoutes } from 'react-router-dom'
import ListArticle from './pages/ListArticle'
import Login from './pages/Login'
import Register from './pages/Register'
import path from './constants/path'
import RegisterLayout from './layouts/RegisterLayout'
import NotFound from './pages/NotFound'
import ArticleDetail from './pages/ArticleDetail'

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
    },
    {
      path: '*',
      element: (
        <RegisterLayout>
          <NotFound />
        </RegisterLayout>
      )
    },
    {
      path: path.articleDetail,
      element: (
        <RegisterLayout>
          <ArticleDetail />
        </RegisterLayout>
      )
    }
  ])

  return routeElements
}

import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { useContext } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import path from './constants/path'
import RegisterLayout from './layouts/RegisterLayout'
import NotFound from './pages/NotFound'
import ArticleDetail from './pages/ArticleDetail'
import Profile from './pages/Profile'
import { AppContext } from './contexts/app.context'
import Settings from './pages/Settings'
import NewArticle from './pages/NewArticle'
import ListArticleLayout from './pages/ListArticle/layouts/ListArticleLayout'
import YourFeed from './pages/ListArticle/components/YourFeed'
import GlobalFeed from './pages/ListArticle/components/GlobalFeed'
import TagList from './pages/ListArticle/components/TagList'

//Neu da login thi cho tiep tuc vao, chua login thi navigate ve trang login
function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
//Khi login roi thi kho cho nguoi dung vao lai trang login nua
//Co tinh vao trang login lai thi navigate ve trang san pham
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
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
      ]
    },
    {
      path: '',
      index: true,
      element: (
        <RegisterLayout>
          <ListArticleLayout>
            <GlobalFeed />
          </ListArticleLayout>
        </RegisterLayout>
      )
    },
    {
      path: path.yourFeed,
      index: true,
      element: (
        <RegisterLayout>
          <ListArticleLayout>
            <YourFeed />
          </ListArticleLayout>
        </RegisterLayout>
      )
    },
    {
      path: '',
      index: true,
      element: (
        <RegisterLayout>
          <ListArticleLayout>
            <TagList />
          </ListArticleLayout>
        </RegisterLayout>
      )
    },
    {
      path: path.articles,
      element: (
        <RegisterLayout>
          <ListArticleLayout />
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
      path: `${path.articles}${path.articleDetail}`,
      index: true,
      element: (
        <RegisterLayout>
          <ArticleDetail />
        </RegisterLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: (
            <RegisterLayout>
              <Profile />
            </RegisterLayout>
          )
        },
        {
          path: path.editor,
          element: (
            <RegisterLayout>
              <NewArticle />
            </RegisterLayout>
          )
        },
        {
          path: path.settings,
          element: (
            <RegisterLayout>
              <Settings />
            </RegisterLayout>
          )
        }
      ]
    }
  ])

  return routeElements
}

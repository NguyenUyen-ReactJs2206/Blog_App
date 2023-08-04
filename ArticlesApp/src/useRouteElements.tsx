import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { useContext } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import path from './constants/path'

import NotFound from './pages/NotFound'
import ArticleDetail from './pages/ArticleDetail'
import Profile from './pages/Profile'
import { AppContext } from './contexts/app.context'
import Settings from './pages/Settings'
import NewArticle from './pages/NewArticle'
import ListArticleLayout from './pages/ListArticle/layouts/ListArticleLayout'
import YourFeed from './pages/ListArticle/components/YourFeed'
import GlobalFeed from './pages/ListArticle/components/GlobalFeed'
import MyArticle from './pages/Profile/page/MyArticle'
import FavoritedArticles from './pages/Profile/page/FavoritedArticles'
import MainLayout from './layouts/MainLayout'

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
            <MainLayout>
              <Login />
            </MainLayout>
          )
        },
        {
          path: path.register,
          element: (
            <MainLayout>
              <Register />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <ListArticleLayout>
            <GlobalFeed />
          </ListArticleLayout>
        </MainLayout>
      )
    },
    {
      path: path.yourFeed,
      index: true,
      element: (
        <MainLayout>
          <ListArticleLayout>
            <YourFeed />
          </ListArticleLayout>
        </MainLayout>
      )
    },
    {
      path: '*',
      element: (
        <MainLayout>
          <NotFound />
        </MainLayout>
      )
    },
    {
      path: `${path.articles}${path.articleDetail}`,
      index: true,
      element: (
        <MainLayout>
          <ArticleDetail />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: (
            <MainLayout>
              <Profile>
                <MyArticle />
              </Profile>
            </MainLayout>
          )
        },
        {
          path: path.favoritedArticle,
          element: (
            <MainLayout>
              <Profile>
                <FavoritedArticles />
              </Profile>
            </MainLayout>
          )
        },
        {
          path: path.editor,
          element: (
            <MainLayout>
              <NewArticle />
            </MainLayout>
          )
        },
        {
          path: path.settings,
          element: (
            <MainLayout>
              <Settings />
            </MainLayout>
          )
        }
      ]
    }
  ])

  return routeElements
}

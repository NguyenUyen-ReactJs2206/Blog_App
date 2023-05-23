import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { useContext } from 'react'
import ListArticle from './pages/ListArticle'
import Login from './pages/Login'
import Register from './pages/Register'
import path from './constants/path'
import RegisterLayout from './layouts/RegisterLayout'
import NotFound from './pages/NotFound'
import ArticleDetail from './pages/ArticleDetail'
import Profile from './pages/Profile'
import { AppContext } from './contexts/app.context'

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
          <ListArticle />
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
        }
      ]
    },

    // {
    //   path: path.login,
    //   element: (
    //     <RegisterLayout>
    //       <Login />
    //     </RegisterLayout>
    //   )
    // },
    // {
    //   path: path.register,
    //   element: (
    //     <RegisterLayout>
    //       <Register />
    //     </RegisterLayout>
    //   )
    // },
    {
      path: '*',
      element: (
        <RegisterLayout>
          <NotFound />
        </RegisterLayout>
      )
    },
    {
      path: path.articles,
      element: (
        <RegisterLayout>
          <ListArticle />
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

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";
import Error from "./components/layout/Error";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";
import Refund from "./pages/refund/Refund";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <div className="body-wrapper">
          <Outlet />
          <ScrollToTop />
          <ToastContainer />
        </div>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          ),
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/projects",
              element: <Projects />,
            },
            {
              path: "/projects/:slug",
              element: <Project />,
            },
            {
              path: "/terms",
              element: <Terms />,
            },
            {
              path: "/privacy",
              element: <Privacy />,
            },
            {
              path: "/refund",
              element: <Refund />,
            },
          ],
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

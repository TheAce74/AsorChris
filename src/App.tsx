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
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./services/mantine/theme";
import DashboardHome from "./pages/dashboard/home/DashboardHome";
import DashboardProjects from "./pages/dashboard/projects/DashboardProjects";
import DashboardMessages from "./pages/dashboard/messages/DashboardMessages";
import Guard from "./pages/dashboard/components/layout/Guard";
import DashboardWrapper from "./pages/dashboard/components/layout/DashboardWrapper";
import DashboardAddProjects from "./pages/dashboard/projects/DashboardAddProjects";
import DashboardViewMessages from "./pages/dashboard/messages/DashboardViewMessages";
import GetProjects from "./components/layout/GetProjects";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <MantineProvider theme={theme}>
          <div className="body-wrapper">
            <Outlet />
            <ScrollToTop />
            <ToastContainer />
          </div>
        </MantineProvider>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Header />
              <GetProjects />
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
              path: "/projects/:name",
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
        {
          path: "/admin",
          element: (
            <Guard>
              <DashboardWrapper />
            </Guard>
          ),
          children: [
            {
              path: "/admin",
              element: <DashboardHome />,
            },
            {
              path: "/admin/projects",
              element: <DashboardProjects />,
            },
            {
              path: "/admin/projects/add",
              element: <DashboardAddProjects />,
            },
            {
              path: "/admin/messages",
              element: <DashboardMessages />,
            },
            {
              path: "/admin/messages/:id",
              element: <DashboardViewMessages />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

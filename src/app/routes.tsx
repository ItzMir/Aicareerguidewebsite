import { createBrowserRouter, Outlet } from "react-router";
import { Layout } from "./components/Layout";
import { Landing } from "./components/pages/Landing";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Profile } from "./components/pages/Profile";
import { AiRecommendations } from "./components/pages/AiRecommendations";
import { CareerRoadmaps } from "./components/pages/CareerRoadmaps";
import { RoadmapDetail } from "./components/pages/RoadmapDetail";
import { Chat } from "./components/pages/Chat";
import { Resources } from "./components/pages/Resources";
import { AdminDashboard } from "./components/pages/AdminDashboard";
import { AdvisorDashboard } from "./components/pages/AdvisorDashboard";

// Public pages
import { About } from "./components/pages/About";
import { PublicArticles } from "./components/pages/Articles";
import { Counselors } from "./components/pages/Counselors";
import { Events } from "./components/pages/Events";

// Student pages
import { StudentDashboard } from "./components/pages/StudentDashboard";
import { PathDetail } from "./components/pages/PathDetail";
import { CareerExplorer } from "./components/pages/CareerExplorer";

// Admin pages
import { AdminUsers, AdminAdvisors, AdminCategories, AdminResources, AdminProfile } from "./components/pages/AdminPages";

// Advisor pages
import { AdvisorArticles, AdvisorWebinars, AdvisorProfile } from "./components/pages/AdvisorPages";
import { AdvisorChat } from "./components/pages/AdvisorChat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "about", element: <About /> },
      { path: "articles", element: <PublicArticles /> },
      { path: "counselors", element: <Counselors /> },
      { path: "events", element: <Events /> },
      
      { path: "portal", element: <Outlet />, children: [
        { path: "dashboard", element: <StudentDashboard /> },
        { path: "profile", element: <Profile /> },
        { path: "recommendations", element: <AiRecommendations /> },
        { path: "recommendations/:id", element: <PathDetail /> },
        { path: "careers", element: <CareerExplorer /> },
        { path: "roadmaps", element: <CareerRoadmaps /> },
        { path: "roadmaps/:id", element: <RoadmapDetail /> },
        { path: "chat", element: <Chat /> },
        { path: "resources", element: <Resources /> },
      ]},

      { path: "admin", element: <Outlet />, children: [
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "users", element: <AdminUsers /> },
        { path: "advisors", element: <AdminAdvisors /> },
        { path: "categories", element: <AdminCategories /> },
        { path: "resources", element: <AdminResources /> },
        { path: "profile", element: <AdminProfile /> },
      ]},

      { path: "advisor", element: <Outlet />, children: [
        { path: "dashboard", element: <AdvisorDashboard /> },
        { path: "articles", element: <AdvisorArticles /> },
        { path: "chat", element: <AdvisorChat /> },
        { path: "webinars", element: <AdvisorWebinars /> },
        { path: "profile", element: <AdvisorProfile /> },
      ]}
    ]
  }
]);

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ChangePassword from "./components/Authentication/ForgotPassword/ChangePassword";
import ForgotPassword from "./components/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/Authentication/ForgotPassword/ResetPassword";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import RootApp from "./helper/RootApp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Pages/Profile/Profile";
import PropertyManager from "./components/Pages/User/PropertyManager";
import CyberPartner from "./components/Pages/User/CyberPartner";
import Editors from "./components/Pages/User/Editors";
import AddEditors from "./components/Pages/User_crud/add";
import Agent from "./components/Pages/User/Agent";
import Guest from "./components/Pages/User/Guest";
import Caller from "./components/Pages/User/Caller";
import Status from "./components/Pages/Status/Status";
import PropertyList from "./components/Pages/Property/PropertyList";
import AddProperty from "./components/Pages/Property/AddProperty";
import PropertyType from "./components/Pages/Property/PropertyType";
import FormProperty from "./components/Pages/Property/FormProperty";
import PropertyDetails from "./components/Pages/Property/PropertyDetails";
import Gallery from "./components/Pages/Property/NavProperty/Gallery";
import Admission_process from "./components/Pages/Property/NavProperty/Admission_process";
import Placement from "./components/Pages/Property/NavProperty/Placement";
import Course from "./components/Pages/Property/NavProperty/Course";
import Loan from "./components/Pages/Property/NavProperty/Loan";
import Hostel from "./components/Pages/Property/NavProperty/Hostel";
import Scholarship from "./components/Pages/Property/NavProperty/Scholarship";
import Announcement from "./components/Pages/Property/NavProperty/Announcement";
import Faqs from "./components/Pages/Property/NavProperty/Faqs";
import TeamLead from "./components/Pages/Property/NavProperty/TeamLead";
import Review from "./components/Pages/Property/NavProperty/Review";
import Aminities from "./components/Pages/Property/NavProperty/Aminities";
import Category from "./components/Pages/College/Category";
import { PropertyAdd } from "./data/Component/Form/PropertyAdd";
import UpdateEditor from "./components/Pages/User_crud/update";
import PropertyUpdate from "./data/Component/Form/PropertyUpdate";

function App() {
  const authenticate = sessionStorage.getItem("accessToken");
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path={"/register"} element={<Register />} />

        <Route path={"/login"} element={<Login />} />
        <Route path={"/forgotPassword"} element={<ForgotPassword />} />
        <Route path={"/resetPassword"} element={<ResetPassword />} />
        <Route path={"/changePassword/:id"} element={<ChangePassword />} />

        {authenticate ? (
          <>
            {" "}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route path={`/`} element={<RootApp />}>
              <Route index element={<Dashboard />} />

              <Route path={"/dashboard"} element={<Dashboard />} />
              <Route path={"/profile"} element={<Profile />} />
              <Route path={"/property-manager"} element={<PropertyManager />} />
              <Route path={"/cyber-partner"} element={<CyberPartner />} />
              <Route path={"/editor"} element={<Editors />} />
              <Route path={"/editorAdd"} element={<AddEditors />} />
              <Route path={"/editor-update/:id"} element={<UpdateEditor />}/>
              <Route path={"/agent"} element={<Agent />} />
              <Route path={"/guest"} element={<Guest />} />
              <Route path={"/caller"} element={<Caller />} />
              <Route path={"/status"} element={<Status />} />
              <Route path={"/property-list"} element={<PropertyList />} />
              <Route path={"/category"} element={<Category />} />

              <Route
                path={"/property-list/:id"}
                element={<PropertyDetails />}
              />


              {/* PROPERTY NAVIGATION ROUTES */}
              <Route
                path={"/property-list/:id/gallery"}
                element={<Gallery />}
              />

              <Route
                path={"/property-list/:id/admission-process"}
                element={<Admission_process />}
              />
              <Route
                path={"/property-list/:id/placement"}
                element={<Placement />}
              />
              <Route path={"/property-list/:id/course"} element={<Course />} />
              <Route path={"/property-list/:id/loan"} element={<Loan />} />
              <Route path={"/property-list/:id/hostel"} element={<Hostel />} />
              <Route
                path={"/property-list/:id/scholarship"}
                element={<Scholarship />}
              />
              <Route
                path={"/property-list/:id/announcement"}
                element={<Announcement />}
              />
              <Route
                path={"/add-propertys"}
                element={< PropertyAdd />}
              />
              <Route
                path={"/update-propertys/:id"}
                element={< PropertyUpdate />}
              />
              <Route path={"/property-list/:id/faqs"} element={<Faqs />} />
              <Route
                path={"/property-list/:id/team-lead"}
                element={<TeamLead />}
              />
              <Route path={"/property-list/:id/review"} element={<Review />} />
              <Route
                path={"/property-list/:id/aminities"}
                element={<Aminities />}
              />
              {/* PROPERTY NAVIGATION ROUTES END */}
              <Route path={"/add-property"} element={<AddProperty />} />
              <Route path={"/property-type"} element={<PropertyType />} />
              <Route path={"/form-property/:form"} element={<FormProperty />} />
            </Route>
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </>
  );
}

export default App;

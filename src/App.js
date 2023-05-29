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
import AddCaller from "./components/Pages/Caller/add";
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
import UniversityCourse from "./components/Pages/Property/NavProperty/UniversityCourse";
import CollegeCourseList from "./components/Pages/Property/NavProperty/CollegeCourse";
import CollegeUniversityView from "./components/Pages/Property/NavProperty/CollegeUniversityView";
import CollegeShowModule from "./components/Pages/Property/NavProperty/CollegeShowModule";
import AddUniversityCourse from "./components/Pages/Property/NavProperty/pages/university_course_page";
import AddCollegeCourse from "./components/Pages/Property/NavProperty/pages/college_course_page";
import UpdateUniversityCourse from "./components/Pages/Property/NavProperty/pages/university_course_update_page";
import Loan from "./components/Pages/Property/NavProperty/Loan";
import Hostel from "./components/Pages/Property/NavProperty/Hostel";
import Scholarship from "./components/Pages/Property/NavProperty/Scholarship";
import Announcement from "./components/Pages/Property/NavProperty/Announcement";
import Faqs from "./components/Pages/Property/NavProperty/Faqs";
import QA from "./components/Pages/Property/NavProperty/QA";
import UniversityPropertyList from "./components/Pages/Property/UniversityProperty";
import TeamLead from "./components/Pages/Property/NavProperty/TeamLead";
import Review from "./components/Pages/Property/NavProperty/Review";
import Aminities from "./components/Pages/Property/NavProperty/Aminities";
import CategoryList from "./components/Pages/Cotegory/CategoryList";
import CreateCategory from "./components/Pages/Cotegory/Category_crud/CreateCategory";
import UpdateCategory from "./components/Pages/Cotegory/Category_crud/UpdateCategory";
import { PropertyAdd } from "./data/Component/Form/PropertyAdd";
import UpdateEditor from "./components/Pages/User_crud/update";
import UpdateCaller from "./components/Pages/Caller/update";
import PropertyUpdate from "./data/Component/Form/PropertyUpdate";
import EditProfile from "./components/Pages/profileEdit/EditProfile";
import Others from "./components/Pages/Property/NavProperty/Others";

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
              <Route path={"/pages/editProfile/:id"} element={<EditProfile />} />
              <Route path={"/property-manager"} element={<PropertyManager />} />
              <Route path={"/cyber-partner"} element={<CyberPartner />} />
              <Route path={"/editor"} element={<Editors />} />
              <Route path={"/editorAdd"} element={<AddEditors />} />
              <Route path={"/callerAdd"} element={<AddCaller />} />
              <Route path={"/caller-update/:id"} element={<UpdateCaller />} />
              <Route path={"/editor-update/:id"} element={<UpdateEditor />} />
              <Route path={"/agent"} element={<Agent />} />
              <Route path={"/guest"} element={<Guest />} />
              <Route path={"/caller"} element={<Caller />} />
              <Route path={"/status"} element={<Status />} />
              <Route path={"/property-list"} element={<PropertyList />} />
              <Route path={"/university-property-list"} element={<UniversityPropertyList />} />
              <Route path={"/category-list"} element={<CategoryList />} />
              <Route path={"/add-category"} element={<CreateCategory />} />
              <Route path={"/update-category/:id"} element={<UpdateCategory />} />

              <Route
                path={"/property-list/:clgid/:edu_type"}
                element={<PropertyDetails />}
              />


              {/* PROPERTY NAVIGATION ROUTES */}
              <Route
                path={"/property-list/:clgid/gallery"}
                element={<Gallery />}
              />
              <Route
                path={"/property-list/:edu_type/:clgid/gallery"}
                element={<Gallery />}
              />

              <Route
                path={"/property-list/:edu_type/:clgid/admission-process"}
                element={<Admission_process />}
              />
              <Route
                path={"/property-list/:clgid/admission-process"}
                element={<Admission_process />}
              />
              <Route
                path={"/property-list/:edu_type/:clgid/placement"}
                element={<Placement />}
              />
              <Route
                path={"/property-list/:clgid/placement"}
                element={<Placement />}
              />
              <Route path={"/property-list/:edu_type/:clgid/universitycourse"} element={<UniversityCourse />} />
              <Route path={"/property-list/:clgid/collegecourse"} element={<CollegeUniversityView />} />
              <Route path={"/property-list/:clgid/:unrid/collegeshowModule"} element={<CollegeShowModule />} />
              <Route path={"/property-list/:clgid/adduniversitycourse"} element={<AddUniversityCourse />} />
              <Route path={"/property-list/:clgid/collegecourselist"} element={<CollegeCourseList />} />
              <Route path={"/property-list/:clgid/:unicorsid/addcollegecourse"} element={<AddCollegeCourse />} />
              <Route path={"/property-list/:universityId/:id/updateUniversityCourse"} element={<UpdateUniversityCourse />} />
              <Route path={"/property-list/:id/others"} element={<Others />} />
              <Route path={"/property-list/:clgid/loan"} element={<Loan />} />
              <Route path={"/property-list/:edu_type/:clgid/loan"} element={<Loan />} />
              <Route path={"/property-list/:clgid/hostel"} element={<Hostel />} />
              <Route path={"/property-list/:edu_type/:clgid/hostel"} element={<Hostel />} />
              <Route path={"/property-list/:clgid/QA"} element={<QA />} />
              <Route path={"/property-list/:edu_type/:clgid/QA"} element={<QA />} />
              <Route
                path={"/property-list/:clgid/scholarship"}
                element={<Scholarship />}
              />
              <Route
                path={"/property-list/:edu_type/:clgid/scholarship"}
                element={<Scholarship />}
              />
              <Route path={"/property-list/:edu_type/:clgid/others"} element={<Others />} />
              <Route
                path={"/property-list/:edu_type/:clgid/announcement"}
                element={<Announcement />}
              />
              <Route
                path={"/property-list/:clgid/announcement"}
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
              <Route path={"/property-list/:edu_type/:clgid/faqs"} element={<Faqs />} />
              <Route path={"/property-list/:clgid/faqs"} element={<Faqs />} />
              <Route
                path={"/property-list/:clgid/team-lead"}
                element={<TeamLead />}
              />
              <Route
                path={"/property-list/:edu_type/:clgid/team-lead"}
                element={<TeamLead />}
              />
              <Route path={"/property-list/:clgid/review"} element={<Review />} />
              <Route path={"/property-list/:edu_type/:clgid/review"} element={<Review />} />
              <Route
                path={"/property-list/:edu_type/:clgid/aminities"}
                element={<Aminities />}
              />
              <Route
                path={"/property-list/:clgid/aminities"}
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

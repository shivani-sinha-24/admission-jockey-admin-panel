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
import CallerTeamLeaderList from "./components/Pages/TeamLeader/Caller/Caller_teamlead";
import EditorTeamLeaderList from './components/Pages/TeamLeader/Editor/Editor_temlead'
import AddCallerTeamLeader from "./components/Pages/TeamLeader/Caller/Add_Caller_Team_Lead";
import AddEditorTeamLeader from "./components/Pages/TeamLeader/Editor/Add_Editor_Team_Lead";
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
import UpdateCollegeCourse from "./components/Pages/Property/NavProperty/pages/college_course_update_page";
import Loan from "./components/Pages/Property/NavProperty/Loan";
import Hostel from "./components/Pages/Property/NavProperty/Hostel";
import Scholarship from "./components/Pages/Property/NavProperty/Scholarship";
import Announcement from "./components/Pages/Property/NavProperty/Announcement";
import Faqs from "./components/Pages/Property/NavProperty/Faqs";
import QA from "./components/Pages/Property/NavProperty/QA";
import UniversityPropertyList from "./components/Pages/Property/UniversityProperty";
import OnlineLearningPropertyList from "./components/Pages/Property/OnlineLearningList";
import EduversityPropertyList from "./components/Pages/Property/EduversityList";
import ClaimUniversityPropertyList from "./components/Pages/Property/ClaimUniversityPropertyList";
import ClaimCollegePropertyList from "./components/Pages/Property/ClaimCollegePropertyList";
import MyUniversityPropertyList from "./components/Pages/Property/MyUniversityPropertyList";
import MyCollegePropertyList from "./components/Pages/Property/MyCollegePropertyList";
import Permission from "./components/Pages/Permission/PermissionAccess";
import TeamLead from "./components/Pages/Property/NavProperty/TeamLead";
import Review from "./components/Pages/Property/NavProperty/Review";
import Aminities from "./components/Pages/Property/NavProperty/Aminities";
import CategoryList from "./components/Pages/Cotegory/CategoryList";
import DeleteCategoryList from "./components/Pages/Cotegory/DeleteCategoryList";
import CreateCategory from "./components/Pages/Cotegory/Category_crud/CreateCategory";
import UpdateCategory from "./components/Pages/Cotegory/Category_crud/UpdateCategory";
import { PropertyAdd } from "./data/Component/Form/PropertyAdd";
import UpdateEditor from "./components/Pages/User_crud/update";
import UpdateCaller from "./components/Pages/Caller/update";
import UpdateCallerTeamLeader from "./components/Pages/TeamLeader/Caller/Update_Caller_Team_Lead";
import UpdateEditorTeamLeader from "./components/Pages/TeamLeader/Editor/Update_Editor_Team_Lead";
import PropertyUpdate from "./data/Component/Form/PropertyUpdate";
import EditProfile from "./components/Pages/profileEdit/EditProfile";
import Others from "./components/Pages/Property/NavProperty/Others";
import AddStatus from "./components/Pages/Status_Crud/AddStatus";
import AddPropertyType from "./components/Pages/PropertyType_Crud/AddPropertyType";
import UpdatePropertyType from "./components/Pages/PropertyType_Crud/UpdatePropertyType";
import UpdateStatus from "./components/Pages/Status_Crud/UpdateStatus";
import UpdateGallery from "./components/Pages/Gallery/UpdateGallery";
import UpdateHostel from "./components/Pages/Property/NavProperty/pages/UpdateHostel";
import SeoList from "./components/Pages/SEO/seo";
import AddSeo from "./components/Pages/SEO/seo_crud/add";
import UpdateSeo from "./components/Pages/SEO/seo_crud/update";
import WebUniversityList from "./components/Pages/Website/UniversityList";
import WebCollegeList from "./components/Pages/Website/CollegeList";
import WebUniversityLogoList from "./components/Pages/Website/UniversityLogoList";
import WebCollegeLogoList from "./components/Pages/Website/CollegeLogoList";
import AddWebCollegeList from "./components/Pages/Website/pages/college_pages";
import AddWebUniversityList from "./components/Pages/Website/pages/university_pages";
import AddWebCollegeLogoList from "./components/Pages/Website/pages/college_logo_pages";
import AddWebUniversityLogoList from "./components/Pages/Website/pages/university_logo_pages";

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
              <Route path={"/editProfile/:id"} element={<EditProfile />} />
              <Route path={"/property-manager"} element={<PropertyManager />} />
              <Route path={"/cyber-partner"} element={<CyberPartner />} />
              <Route path={"/editor"} element={<Editors />} />
              <Route path={"/editorAdd"} element={<AddEditors />} />
              <Route path={"/callerAdd"} element={<AddCaller />} />
              <Route path={"/callerTeamList"} element={<CallerTeamLeaderList />} />
              <Route path={"/editorTeamList"} element={<EditorTeamLeaderList />} />
              <Route path={"/add_callerTeamList"} element={<AddCallerTeamLeader />} />
              <Route path={"/add_editorTeamList"} element={<AddEditorTeamLeader />} />
              <Route path={"/update_callerTeamList/:id"} element={<UpdateCallerTeamLeader />} />
              <Route path={"/update_editorTeamList/:id"} element={<UpdateEditorTeamLeader />} />
              <Route path={"/caller-update/:id"} element={<UpdateCaller />} />
              <Route path={"/editor-update/:id"} element={<UpdateEditor />} />
              <Route path={"/gallery-update/:clgid"} element={<UpdateGallery/>} />
              <Route path={"/agent"} element={<Agent />} />
              <Route path={"/guest"} element={<Guest />} />
              <Route path={"/caller"} element={<Caller />} />
              <Route path={"/status"} element={<Status />} />
              <Route path={"/property-list"} element={<PropertyList />} />
              {/* <Route path={"/property-list"} element={<PropertyList />} /> */}
              <Route path={"/university-property-list"} element={<UniversityPropertyList />} />
              <Route path={"/online-learning-property-list"} element={<OnlineLearningPropertyList />} />
              <Route path={"/eduversity-property-list"} element={<EduversityPropertyList />} />
              <Route path={"/claim-university-property-list"} element={<ClaimUniversityPropertyList />} />
              <Route path={"/claim-college-property-list"} element={<ClaimCollegePropertyList />} />
              <Route path={"/my-university-property-list"} element={<MyUniversityPropertyList />} />
              <Route path={"/my-college-property-list"} element={<MyCollegePropertyList />} />
              <Route path={"/category-list"} element={<CategoryList />} />
              <Route path={"/add-category"} element={<CreateCategory />} />
              <Route path={"/delete-category"} element={<DeleteCategoryList />} />
              <Route path={"/update-category/:id"} element={<UpdateCategory />} />
              <Route path={"/add-status"} element={<AddStatus />} />
              <Route path={"/update-status/:id"} element={<UpdateStatus />} />
              <Route path={"/permission/:id"} element={<Permission />} />
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
              <Route path={"/property-list/:clgid/:universityId/:id/updateCollegeCourse"} element={<UpdateCollegeCourse />} />
              <Route path={"/property-list/:clgid/others"} element={<Others />} />
              <Route path={"/property-list/:clgid/loan"} element={<Loan />} />
              <Route path={"/property-list/:edu_type/:clgid/loan"} element={<Loan />} />
              <Route path={"/property-list/:clgid/hostel"} element={<Hostel />} />
              <Route path={"/property-list/:edu_type/:clgid/hostel"} element={<Hostel />} />
              <Route path={"/update-hostel/:id"} element={<UpdateHostel />} />
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
              <Route path={"/add-property-type"} element={<AddPropertyType />} />
              <Route path={"/update-property-type/:id"} element={<UpdatePropertyType />} />
              <Route path={"/property-type"} element={<PropertyType />} />
              <Route path={"/form-property/:form"} element={<FormProperty />} />
              <Route path={"/seo-list"} element={<SeoList />} />
              <Route path={"/seo-add"} element={<AddSeo />} />
              <Route path={"/update-seo/:id"} element={<UpdateSeo />} />
              <Route path={"/website-university-list"} element={<WebUniversityList />} />
              <Route path={"/website-college-list"} element={<WebCollegeList />} />
              <Route path={"/website-college-logo-list"} element={<WebCollegeLogoList />} />
              <Route path={"/website-university-logo-list"} element={<WebUniversityLogoList />} />
              <Route path={"/add-website-college-list"} element={<AddWebCollegeList />} />
              <Route path={"/add-website-university-list"} element={<AddWebUniversityList />} />
              <Route path={"/add-website-college-logo-list"} element={<AddWebCollegeLogoList />} />
              <Route path={"/add-website-university-logo-list"} element={<AddWebUniversityLogoList />} />
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

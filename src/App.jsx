import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// Import frequently visited components
import FrontMain from "./frontend/pages/Main.jsx";
import Home from "./frontend/pages/home/Home.jsx";
import AdminMain from "./admin/Main.jsx";
import SubAdminMain from "./subadmin/Main.jsx";
import AdminLogin from "./admin/Login.jsx";
import AdminDashboard from "./admin/dashboard/Dashboard.jsx";
import SubAdminDashboard from "./subadmin/dashboard/Dashboard.jsx";
import SubAdminLogin from "./subadmin/Login.jsx";
import ComingSoon from "./frontend/pages/coming_soon/comingSoon.jsx";

// Import lazily loaded components
const AuthComponents = {
  MainAuth: lazy(() => import("./frontend/pages/MainAuth.jsx")),
  Signup: lazy(() => import("./frontend/pages/auth/Signup.jsx")),
  Login: lazy(() => import("./frontend/pages/auth/Login.jsx")),
  ForgetPassword: lazy(() => import("./frontend/pages/auth/ForgetPass.jsx")),
};

const LegalComponents = {
  About: lazy(() => import("./frontend/pages/about/About.jsx")),
  Faq: lazy(() => import("./frontend/pages/faq/Faq.jsx")),
  Privacy: lazy(() => import("./frontend/pages/legal/privacy.jsx")),
  Cookie: lazy(() => import("./frontend/pages/legal/cookie.jsx")),
  Terms: lazy(() => import("./frontend/pages/legal/terms.jsx")),
};

const ContactComponents = {
  Contact: lazy(() => import("./frontend/pages/contact/Contact.jsx")),
};

const StudentComponents = {
  Main: lazy(() => import("./student/Main.jsx")),
  Dashboard: lazy(() => import("./student/dashboard/Dashboard.jsx")),
  Profile: lazy(() => import("./student/Profile.jsx")),
  EditProfile: lazy(() => import("./student/EditProfile.jsx")),
  Referral: lazy(() => import("./student/referral.jsx")),
  Passbook: lazy(() => import("./student/Passbook.jsx")),
  Withdrawal: lazy(() => import("./student/Withdrawal.jsx")),
  Course: lazy(() => import("./student/Courses.jsx")),
};

const TeacherComponents = {
  Main: lazy(() => import("./trainer/Main.jsx")),
  Dashboard: lazy(() => import("./trainer/dashboard/Dashboard.jsx")),
  AllStudents: lazy(() => import("./trainer/students/AllStudents.jsx")),
  ReferralStudents: lazy(() =>
    import("./trainer/students/ReferralStudents.jsx")
  ),
  UpdateProfile: lazy(() => import("./trainer/account/updateProfile.jsx")),
  ChangePassword: lazy(() => import("./trainer/account/ChangePassword.jsx")),
  TeamLeader: lazy(() => import("./trainer/team_leader/TeamLeader.jsx")),
  Withdrawal: lazy(() => import("./trainer/common/Withdrawal.jsx")),
  Transactions: lazy(() => import("./trainer/common/Transactions.jsx")),
};

const AdminComponents = {
  Pass: lazy(() => import("./admin/profile/changePassword.jsx")),
  Privacy: lazy(() => import("./admin/legal/Privacy.jsx")),
  Terms: lazy(() => import("./admin/legal/terms.jsx")),
  Cookie: lazy(() => import("./admin/legal/Cookie.jsx")),
  ReviewPending: lazy(() => import("./admin/course/ReviewPending.jsx")),
  Hold: lazy(() => import("./admin/course/Hold.jsx")),
  Approve: lazy(() => import("./admin/course/Approve.jsx")),
  AllCourses: lazy(() => import("./admin/course/AllCourses.jsx")),
  SingleCourseDetails: lazy(() =>
    import("./admin/course/SingleCourseDetails.jsx")
  ),
  AddNewCourse: lazy(() => import("./admin/course/AddNewCourse.jsx")),
  UpdateCourse: lazy(() => import("./admin/course/UpdateCourse.jsx")),
  AllCategory: lazy(() => import("./admin/category/AllCategory.jsx")),
  SubCategory: lazy(() => import("./admin/category/SubCategory.jsx")),
  UpdateCategory: lazy(() => import("./admin/category/UpdateCategory.jsx")),
  CreateCategory: lazy(() => import("./admin/category/CreateCategory.jsx")),
  UpdateSubcategory: lazy(() =>
    import("./admin/category/UpdateSubcategory.jsx")
  ),
  AddSubCategory: lazy(() => import("./admin/category/AddSubCategory.jsx")),
  AllInstructors: lazy(() => import("./admin/instructors/AllInstructors.jsx")),
  PendingInstructors: lazy(() =>
    import("./admin/instructors/PendingInstructors.jsx")
  ),
  ApproveInstructors: lazy(() =>
    import("./admin/instructors/ApproveInstructors.jsx")
  ),
  BlockedInstructors: lazy(() =>
    import("./admin/instructors/BlockedInstructors.jsx")
  ),
  AddInstructors: lazy(() => import("./admin/instructors/AddInstructors.jsx")),
  UpdateInstructor: lazy(() =>
    import("./admin/instructors/UpdateInstructor.jsx")
  ),
  AllStudents: lazy(() => import("./admin/students/AllStudents.jsx")),
  PendingStudents: lazy(() => import("./admin/students/PendingStudents.jsx")),
  RequestedStudents: lazy(() => import("./admin/students/RequestStudents.jsx")),
  StudentMap: lazy(() => import("./admin/students/StudentMap.jsx")),
  AddStudent: lazy(() => import("./admin/students/AddStudent.jsx")),
  SingleStudent: lazy(() => import("./admin/students/SingleStudent.jsx")),
  GeneralSetting: lazy(() => import("./admin/appsetting/GeneralSetting.jsx")),
  MailSetting: lazy(() => import("./admin/appsetting/MailSetting.jsx")),
  OtherSetting: lazy(() => import("./admin/appsetting/OtherSetting.jsx")),
  WithdrawComplete: lazy(() => import("./admin/payments/WithdrawComplete.jsx")),
  WithdrawList: lazy(() => import("./admin/payments/WithdrawList.jsx")),
  WithdrawReject: lazy(() => import("./admin/payments/WithdrawReject.jsx")),
  AddUser: lazy(() => import("./admin/adminmanage/AddUser.jsx")),
  SingleUser: lazy(() => import("./admin/adminmanage/SingleUser.jsx")),
  AllUser: lazy(() => import("./admin/adminmanage/AllUsers.jsx")),
  AllRoles: lazy(() => import("./admin/adminmanage/roles/AllRoles.jsx")),
  AddNew: lazy(() => import("./admin/adminmanage/roles/AddNew.jsx")),
  SingleRole: lazy(() => import("./admin/adminmanage/roles/SingleRole.jsx")),
  GmeetList: lazy(() => import("./admin/gmeet/GmeetList.jsx")),
  UpdateProfile: lazy(() => import("./admin/accountsetting/UpdateProfile.jsx")),
  ChangePassword: lazy(() =>
    import("./admin/accountsetting/ChangePassword.jsx")
  ),
  Notifications: lazy(() => import("./admin/notifications/Notifications.jsx")),
  TeamLeaderList: lazy(() => import("./admin/common/TeamLeaderList.jsx")),
  SingleTeamLeader: lazy(() => import("./admin/common/EditTeamLeader.jsx")),
  CounsellorList: lazy(() => import("./admin/common/CounsellorList.jsx")),
  FirstCounsellorMap: lazy(() =>
    import("./admin/students/FirstCounsellorMap.jsx")
  ),
  StudentClickList: lazy(() => import("./admin/gmeet/StudentClickList.jsx")),
  HomeSetting: lazy(() => import("./admin/appsetting/HomeSetting.jsx")),
};

const SubAdminComponents = {
  Privacy: lazy(() => import("./subadmin/legal/Privacy.jsx")),
  Terms: lazy(() => import("./subadmin/legal/terms.jsx")),
  Cookie: lazy(() => import("./subadmin/legal/Cookie.jsx")),
  ReviewPending: lazy(() => import("./subadmin/course/ReviewPending.jsx")),
  Hold: lazy(() => import("./subadmin/course/Hold.jsx")),
  Approve: lazy(() => import("./subadmin/course/Approve.jsx")),
  AllCourses: lazy(() => import("./subadmin/course/AllCourses.jsx")),
  SingleCourseDetails: lazy(() =>
    import("./subadmin/course/SingleCourseDetails.jsx")
  ),
  AddNewCourse: lazy(() => import("./subadmin/course/AddNewCourse.jsx")),
  UpdateCourse: lazy(() => import("./subadmin/course/UpdateCourse.jsx")),
  AllCategory: lazy(() => import("./subadmin/category/AllCategory.jsx")),
  SubCategory: lazy(() => import("./subadmin/category/SubCategory.jsx")),
  UpdateCategory: lazy(() => import("./subadmin/category/UpdateCategory.jsx")),
  CreateCategory: lazy(() => import("./subadmin/category/CreateCategory.jsx")),
  UpdateSubcategory: lazy(() =>
    import("./subadmin/category/UpdateSubcategory.jsx")
  ),
  AddSubCategory: lazy(() => import("./subadmin/category/AddSubCategory.jsx")),
  AllInstructors: lazy(() =>
    import("./subadmin/instructors/AllInstructors.jsx")
  ),
  PendingInstructors: lazy(() =>
    import("./subadmin/instructors/PendingInstructors.jsx")
  ),
  ApproveInstructors: lazy(() =>
    import("./subadmin/instructors/ApproveInstructors.jsx")
  ),
  BlockedInstructors: lazy(() =>
    import("./subadmin/instructors/BlockedInstructors.jsx")
  ),
  AddInstructors: lazy(() =>
    import("./subadmin/instructors/AddInstructors.jsx")
  ),
  UpdateInstructor: lazy(() =>
    import("./subadmin/instructors/UpdateInstructor.jsx")
  ),
  AllStudents: lazy(() => import("./subadmin/students/AllStudents.jsx")),
  PendingStudents: lazy(() =>
    import("./subadmin/students/PendingStudents.jsx")
  ),
  RequestedStudents: lazy(() =>
    import("./subadmin/students/RequestStudents.jsx")
  ),
  AddStudent: lazy(() => import("./subadmin/students/AddStudent.jsx")),
  SingleStudent: lazy(() => import("./subadmin/students/SingleStudent.jsx")),
  StudentMap: lazy(() => import("./subadmin/students/StudentMap.jsx")),
  TeamLeaderList: lazy(() => import("./subadmin/common/TeamLeaderList.jsx")),
  CounsellorMap: lazy(() => import("./subadmin/common/CounsellorMap.jsx")),
  CounsellorList: lazy(() => import("./subadmin/common/CounsellorList.jsx")),
  GeneralSetting: lazy(() =>
    import("./subadmin/appsetting/GeneralSetting.jsx")
  ),
  MailSetting: lazy(() => import("./subadmin/appsetting/MailSetting.jsx")),
  OtherSetting: lazy(() => import("./subadmin/appsetting/OtherSetting.jsx")),
  WithdrawComplete: lazy(() =>
    import("./subadmin/payments/WithdrawComplete.jsx")
  ),
  WithdrawList: lazy(() => import("./subadmin/payments/WithdrawList.jsx")),
  WithdrawReject: lazy(() => import("./subadmin/payments/WithdrawReject.jsx")),
  AddUser: lazy(() => import("./subadmin/adminmanage/AddUser.jsx")),
  SingleUser: lazy(() => import("./subadmin/adminmanage/SingleUser.jsx")),
  AllUser: lazy(() => import("./subadmin/adminmanage/AllUsers.jsx")),
  AllRoles: lazy(() => import("./subadmin/adminmanage/roles/AllRoles.jsx")),
  AddNew: lazy(() => import("./subadmin/adminmanage/roles/AddNew.jsx")),
  SingleRole: lazy(() => import("./subadmin/adminmanage/roles/SingleRole.jsx")),
  GmeetList: lazy(() => import("./subadmin/gmeet/GmeetList.jsx")),
  UpdateProfile: lazy(() =>
    import("./subadmin/accountsetting/UpdateProfile.jsx")
  ),
  ChangePassword: lazy(() =>
    import("./subadmin/accountsetting/ChangePassword.jsx")
  ),
  Notifications: lazy(() =>
    import("./subadmin/notifications/Notifications.jsx")
  ),
  UserWithdrawals: lazy(() => import("./subadmin/common/Withdrawal.jsx")),
  UserTransactions: lazy(() => import("./subadmin/common/Transactions.jsx")),
  FirstCounsellorMap: lazy(() =>
    import("./subadmin/students/FirstCounsellorMap.jsx")
  ),
  StudentClickList: lazy(() => import("./subadmin/gmeet/StudentClickList.jsx")),
};

function App() {
  const routeConfig = useRoutes([
    {
      path: "/",
      element: <FrontMain />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <LegalComponents.About /> },
        { path: "contact", element: <ContactComponents.Contact /> },
        { path: "faq", element: <LegalComponents.Faq /> },
        { path: "privacy", element: <LegalComponents.Privacy /> },
        { path: "cookie", element: <LegalComponents.Cookie /> },
        { path: "terms", element: <LegalComponents.Terms /> },
      ],
    },
    { path: "coming_soon", element: <ComingSoon /> },
    {
      path: "/",
      element: <AuthComponents.MainAuth />,
      children: [
        { path: "signup", element: <AuthComponents.Signup /> },
        { path: "signup/:Id", element: <AuthComponents.Signup /> },
        { path: "login", element: <AuthComponents.Login /> },
        { path: "reset_password", element: <AuthComponents.ForgetPassword /> },
      ],
    },
    {
      path: "student",
      element: <StudentComponents.Main />,
      children: [
        { path: "dashboard", element: <StudentComponents.Dashboard /> },
        { path: "profile", element: <StudentComponents.Profile /> },
        { path: "edit_profile", element: <StudentComponents.EditProfile /> },
        { path: "referral", element: <StudentComponents.Referral /> },
        { path: "passbook", element: <StudentComponents.Passbook /> },
        { path: "withdrawal", element: <StudentComponents.Withdrawal /> },
        { path: "courses", element: <StudentComponents.Course /> },
      ],
    },
    {
      path: "trainer",
      element: <TeacherComponents.Main />,
      children: [
        { path: "dashboard", element: <TeacherComponents.Dashboard /> },
        { path: "allstudents", element: <TeacherComponents.AllStudents /> },
        {
          path: "referral_students",
          element: <TeacherComponents.ReferralStudents />,
        },
        // { path: "edit_teamleader", element: <TeacherComponents.TeamLeader /> },
        { path: "profile", element: <TeacherComponents.UpdateProfile /> },
        {
          path: "changepassword",
          element: <TeacherComponents.ChangePassword />,
        },
        {
          path: "withdrawals",
          element: <TeacherComponents.Withdrawal />,
        },
        {
          path: "passbook",
          element: <TeacherComponents.Transactions />,
        },
      ],
    },
    { path: "admin/login", element: <AdminLogin /> },
    {
      path: "admin",
      element: <AdminMain />,
      children: [
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "changepassword", element: <AdminComponents.Pass /> },
        { path: "privacy", element: <AdminComponents.Privacy /> },
        { path: "term-conditions", element: <AdminComponents.Terms /> },
        { path: "cookie", element: <AdminComponents.Cookie /> },
        { path: "reviewpending", element: <AdminComponents.ReviewPending /> },
        { path: "hold", element: <AdminComponents.Hold /> },
        { path: "approve", element: <AdminComponents.Approve /> },
        { path: "allcourse", element: <AdminComponents.AllCourses /> },
        {
          path: "coursedetails/:courseid",
          element: <AdminComponents.SingleCourseDetails />,
        },
        { path: "addcourse", element: <AdminComponents.AddNewCourse /> },
        {
          path: "updatecourse/:courseid",
          element: <AdminComponents.UpdateCourse />,
        },
        { path: "allcategory", element: <AdminComponents.AllCategory /> },
        { path: "subcategory", element: <AdminComponents.SubCategory /> },
        {
          path: "updatecategory/:upcatid",
          element: <AdminComponents.UpdateCategory />,
        },
        { path: "createcategory", element: <AdminComponents.CreateCategory /> },
        {
          path: "updatesubcategory/:upscatid",
          element: <AdminComponents.UpdateSubcategory />,
        },
        { path: "addSubcategory", element: <AdminComponents.AddSubCategory /> },
        { path: "trainers", element: <AdminComponents.AllInstructors /> },
        {
          path: "pending_trainers",
          element: <AdminComponents.PendingInstructors />,
        },
        {
          path: "approved_trainers",
          element: <AdminComponents.ApproveInstructors />,
        },
        {
          path: "blocked_trainers",
          element: <AdminComponents.BlockedInstructors />,
        },
        { path: "add_trainer", element: <AdminComponents.AddInstructors /> },
        {
          path: "trainer/:trainerId",
          element: <AdminComponents.UpdateInstructor />,
        },
        { path: "allstudents", element: <AdminComponents.AllStudents /> },
        {
          path: "pending_students",
          element: <AdminComponents.PendingStudents />,
        },
        {
          path: "student_map",
          element: <AdminComponents.StudentMap />,
        },
        { path: "addstudent", element: <AdminComponents.AddStudent /> },
        {
          path: "student/:studentId",
          element: <AdminComponents.SingleStudent />,
        },
        {
          path: "request_student",
          element: <AdminComponents.RequestedStudents />,
        },
        {
          path: "general_settings",
          element: <AdminComponents.GeneralSetting />,
        },
        {
          path: "mail_settings",
          element: <AdminComponents.MailSetting />,
        },
        {
          path: "other_settings",
          element: <AdminComponents.OtherSetting />,
        },

        {
          path: "withdrawals",
          element: <AdminComponents.WithdrawList />,
        },
        {
          path: "withdrawals_completed",
          element: <AdminComponents.WithdrawComplete />,
        },
        {
          path: "withdrawals_rejected",
          element: <AdminComponents.WithdrawReject />,
        },

        {
          path: "add_user",
          element: <AdminComponents.AddUser />,
        },
        {
          path: "user/:userId",
          element: <AdminComponents.SingleUser />,
        },
        {
          path: "users",
          element: <AdminComponents.AllUser />,
        },
        {
          path: "roles",
          element: <AdminComponents.AllRoles />,
        },
        {
          path: "add_role",
          element: <AdminComponents.AddNew />,
        },
        {
          path: "role/:roleId",
          element: <AdminComponents.SingleRole />,
        },
        {
          path: "gmeet",
          element: <AdminComponents.GmeetList />,
        },

        {
          path: "update_profile",
          element: <AdminComponents.UpdateProfile />,
        },

        {
          path: "change_password",
          element: <AdminComponents.ChangePassword />,
        },
        {
          path: "notifications",
          element: <AdminComponents.Notifications />,
        },
        {
          path: "team_leader_list",
          element: <AdminComponents.TeamLeaderList />,
        },
        {
          path: "team_leader/:userId",
          element: <AdminComponents.SingleTeamLeader />,
        },
        {
          path: "counsellors_list",
          element: <AdminComponents.CounsellorList />,
        },
        {
          path: "first_counsellor_map",
          element: <AdminComponents.FirstCounsellorMap />,
        },
        {
          path: "student_click_list",
          element: <AdminComponents.StudentClickList />,
        },
        {
          path: "home_settings",
          element: <AdminComponents.HomeSetting />,
        },
      ],
    },
    { path: "subadmin/login", element: <SubAdminLogin /> },
    {
      path: "subadmin",
      element: <SubAdminMain />,
      children: [
        { path: "dashboard", element: <SubAdminDashboard /> },
        { path: "privacy", element: <SubAdminComponents.Privacy /> },
        { path: "term-conditions", element: <SubAdminComponents.Terms /> },
        { path: "cookie", element: <SubAdminComponents.Cookie /> },
        {
          path: "reviewpending",
          element: <SubAdminComponents.ReviewPending />,
        },
        { path: "hold", element: <SubAdminComponents.Hold /> },
        { path: "approve", element: <SubAdminComponents.Approve /> },
        { path: "allcourse", element: <SubAdminComponents.AllCourses /> },
        {
          path: "coursedetails/:courseid",
          element: <SubAdminComponents.SingleCourseDetails />,
        },
        { path: "addcourse", element: <SubAdminComponents.AddNewCourse /> },
        {
          path: "updatecourse/:courseid",
          element: <SubAdminComponents.UpdateCourse />,
        },
        { path: "allcategory", element: <SubAdminComponents.AllCategory /> },
        { path: "subcategory", element: <SubAdminComponents.SubCategory /> },
        {
          path: "updatecategory/:upcatid",
          element: <SubAdminComponents.UpdateCategory />,
        },
        {
          path: "createcategory",
          element: <SubAdminComponents.CreateCategory />,
        },
        {
          path: "updatesubcategory/:upscatid",
          element: <SubAdminComponents.UpdateSubcategory />,
        },
        {
          path: "addSubcategory",
          element: <SubAdminComponents.AddSubCategory />,
        },
        {
          path: "trainers",
          element: <SubAdminComponents.AllInstructors />,
        },
        {
          path: "pending_trainers",
          element: <SubAdminComponents.PendingInstructors />,
        },
        {
          path: "approved_trainers",
          element: <SubAdminComponents.ApproveInstructors />,
        },
        {
          path: "blocked_trainers",
          element: <SubAdminComponents.BlockedInstructors />,
        },
        {
          path: "add_trainer",
          element: <SubAdminComponents.AddInstructors />,
        },
        {
          path: "trainer/:trainerId",
          element: <SubAdminComponents.UpdateInstructor />,
        },
        { path: "allstudents", element: <SubAdminComponents.AllStudents /> },
        {
          path: "pending_students",
          element: <SubAdminComponents.PendingStudents />,
        },
        { path: "addstudent", element: <SubAdminComponents.AddStudent /> },
        {
          path: "student/:studentId",
          element: <SubAdminComponents.SingleStudent />,
        },
        {
          path: "request_student",
          element: <SubAdminComponents.RequestedStudents />,
        },
        {
          path: "general_settings",
          element: <SubAdminComponents.GeneralSetting />,
        },
        {
          path: "mail_settings",
          element: <SubAdminComponents.MailSetting />,
        },
        {
          path: "other_settings",
          element: <SubAdminComponents.OtherSetting />,
        },

        {
          path: "withdrawals",
          element: <SubAdminComponents.WithdrawList />,
        },
        {
          path: "withdrawals_completed",
          element: <SubAdminComponents.WithdrawComplete />,
        },
        {
          path: "withdrawals_rejected",
          element: <SubAdminComponents.WithdrawReject />,
        },

        {
          path: "add_user",
          element: <SubAdminComponents.AddUser />,
        },
        {
          path: "user/:userId",
          element: <SubAdminComponents.SingleUser />,
        },
        {
          path: "users",
          element: <SubAdminComponents.AllUser />,
        },
        {
          path: "roles",
          element: <SubAdminComponents.AllRoles />,
        },
        {
          path: "add_role",
          element: <SubAdminComponents.AddNew />,
        },
        {
          path: "role/:roleId",
          element: <SubAdminComponents.SingleRole />,
        },
        {
          path: "gmeet",
          element: <SubAdminComponents.GmeetList />,
        },

        {
          path: "update_profile",
          element: <SubAdminComponents.UpdateProfile />,
        },

        {
          path: "change_password",
          element: <SubAdminComponents.ChangePassword />,
        },
        {
          path: "user_withdrawal",
          element: <SubAdminComponents.UserWithdrawals />,
        },
        {
          path: "user_pass_book",
          element: <SubAdminComponents.UserTransactions />,
        },
        {
          path: "student_map",
          element: <SubAdminComponents.StudentMap />,
        },
        {
          path: "team_leader_list",
          element: <SubAdminComponents.TeamLeaderList />,
        },
        {
          path: "counsellors_list",
          element: <SubAdminComponents.CounsellorList />,
        },
        {
          path: "counsellor_map",
          element: <SubAdminComponents.CounsellorMap />,
        },
        {
          path: "first_counsellor_map",
          element: <SubAdminComponents.FirstCounsellorMap />,
        },
        {
          path: "student_click_list",
          element: <SubAdminComponents.StudentClickList />,
        },
      ],
    },
  ]);

  return routeConfig;
}

export default App;

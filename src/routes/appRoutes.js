import Dashboard from '../pages/dashboard/Dashboard';
import AddCustomer from '../pages/customer/AddCustomer';
import GetCustomersList from '../pages/customer/GetCustomersList';
// import AddCategory from '../pages/category/AddCategory';
// import GetCategoryList from '../pages/category/GetCategoryList';
// import AddSubCategory from '../pages/subCategory/AddSubCategory';
// import GetSubCategoryList from '../pages/subCategory/GetSubCategoryList';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const appRoutes = [
  {
    index: true,
    element: <Dashboard/>,
    state: "dashboard"
  },
  {
    path: "/customer",
    element: <GetCustomersList />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Customer",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <GetCustomersList />,
        state: "customer.list"
      },
      {
        path: "/customer",
        element: <GetCustomersList />,
        state: "customer.list",
        sidebarProps: {
          displayText: "Customers List"
        },
      },
      {
        path: "/customer/add",
        element: <AddCustomer />,
        state: "customer.add",
        sidebarProps: {
          displayText: "New Customer"
        },
      },
      // {
      //   path: "/dashboard/analytics",
      //   element: <AnalyticsPage />,
      //   state: "dashboard.analytics",
      //   sidebarProps: {
      //     displayText: "Analytic"
      //   }
      // },
      // {
      //   path: "/dashboard/saas",
      //   element: <SaasPage />,
      //   state: "dashboard.saas",
      //   sidebarProps: {
      //     displayText: "Saas"
      //   }
      // }
    ]
  },
  // {
  //   path: "/component",
  //   element: <ComponentPageLayout />,
  //   state: "component",
  //   sidebarProps: {
  //     displayText: "Components",
  //     icon: <AppsOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       path: "/component/alert",
  //       element: <AlertPage />,
  //       state: "component.alert",
  //       sidebarProps: {
  //         displayText: "Alert"
  //       },
  //     },
  //     {
  //       path: "/component/button",
  //       element: <ButtonPage />,
  //       state: "component.button",
  //       sidebarProps: {
  //         displayText: "Button"
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/documentation",
  //   element: <DocumentationPage />,
  //   state: "documentation",
  //   sidebarProps: {
  //     displayText: "Documentation",
  //     icon: <ArticleOutlinedIcon />
  //   }
  // },
  // {
  //   path: "/changelog",
  //   element: <ChangelogPage />,
  //   state: "changelog",
  //   sidebarProps: {
  //     displayText: "Changelog",
  //     icon: <FormatListBulletedOutlinedIcon />
  //   }
  // }
];

export default appRoutes;
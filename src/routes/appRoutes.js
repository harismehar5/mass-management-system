import Dashboard from '../pages/dashboard/Dashboard';
import AddCustomer from '../pages/customer/AddCustomer';
import GetCustomersList from '../pages/customer/GetCustomersList';
import AddCategory from '../pages/category/AddCategory';
import GetCategoryList from '../pages/category/GetCategoryList';
import AddSubCategory from '../pages/subCategory/AddSubCategory';
import GetSubCategoryList from '../pages/subCategory/GetSubCategoryList';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GetProductsList from '../pages/product/GetProductsList';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const appRoutes = [
  {
    // index: true,
    path: "/",
    element: <Dashboard/>,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    path: "/customer",
    element: <GetCustomersList />,
    state: "customer.list",
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
  
    ]
  },
  {
    path: "/product",
    element: <GetProductsList />,
    state: "product.list",
    sidebarProps: {
      displayText: "Product",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <GetProductsList />,
        state: "product.list"
      },
      {
        path: "/product",
        element: <GetProductsList />,
        state: "product.list",
        sidebarProps: {
          displayText: "Product List"
        },
      },
  
    ]
  },
  {
    path: "/category",
    element: <GetCategoryList />,
    state: "category.list",
    sidebarProps: {
      displayText: "Category",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <GetCategoryList />,
        state: "category.list"
      },
      {
        path: "/category",
        element: <GetCategoryList />,
        state: "category.list",
        sidebarProps: {
          displayText: "Categories List"
        },
      },
      // {
      //   path: "/category/add",
      //   element: <AddCategory />,
      //   state: "category.add",
      //   sidebarProps: {
      //     displayText: "New Category"
      //   },
      // },
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
  {
    path: "/subcategory",
    element: <GetSubCategoryList />,
    state: "subcategory.list",
    sidebarProps: {
      displayText: "Sub Category",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      // {
      //   index: true,
      //   element: <GetSubCategoryList />,
      //   state: "subcategory.list"
      // },
      {
        path: "/subcategory",
        element: <GetSubCategoryList />,
        state: "subcategory.list",
        sidebarProps: {
          displayText: " Sub Categories List"
        },
      },
      // {
      //   path: "/subcategory/add",
      //   element: <AddSubCategory />,
      //   state: "subcategory.add",
      //   sidebarProps: {
      //     displayText: "New Sub Category"
      //   },
      // },
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
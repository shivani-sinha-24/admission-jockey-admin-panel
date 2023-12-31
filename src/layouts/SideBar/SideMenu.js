export const MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
  },
  {
    menutitle: "Pages",
    Items: [
      {
        title: "Users",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/property-manager`,
            type: "link",
            title: "Property Managers",
          },
          {
            path: `/guest`,
            type: "link",
            title: "Students",
          },
          {
            path: `editor`,
            type: "link",
            title: "Editors",
          },
          {
            path: `/agent`,
            type: "link",
            title: "Agent",
          },
          {
            path: `cyber-partner`,
            type: "link",
            title: "Cyber Partners",
          },
          {
            path: `caller`,
            type: "link",
            title: "Callers",
          }
        ],
      },

      {
        title: "Property",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/university-property-list`,
            type: "link",
            title: "University Properties",
          },
          {
            path: `/property-list`,
            type: "link",
            title: "College Properties",
          },
          {
            path: `/online-learning-property-list`,
            type: "link",
            title: "Online Learning",
          },
          {
            path: `/eduversity-property-list`,
            type: "link",
            title: "Eduversity",
          },
          {
            path: `/add-property`,
            type: "link",
            title: "Add Property",
          },

        ],
      },
      // {
      //   title: "Claim Property",
      //   icon: "user",
      //   type: "sub",
      //   active: false,
      //   children: [
      //     {
      //       path: `/claim-university-property-list`,
      //       type: "link",
      //       title: "University Properties",
      //     },
      //     {
      //       path: `/claim-property-list`,
      //       type: "link",
      //       title: "College Properties",
      //     },

      //   ],
      // }, 
      // {
      //   title: "My Property",
      //   icon: "user",
      //   type: "sub",
      //   active: false,
      //   children: [
      //     {
      //       path: `/my-university-property-list`,
      //       type: "link",
      //       title: "My University Properties",
      //     },
      //     {
      //       path: `/claim-property-list`,
      //       type: "link",
      //       title: "My College Properties",
      //     },
      //   ],
      // }
    ],
  },
  {
    menutitle: "Other Features",
    Items: [
      {
        title: "Status",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/status`,
            type: "link",
            title: "Status",
          }
        ],
      },
      {
        title: "Property Type",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/property-type`,
            type: "link",
            title: "Property Type",
          }
        ],
      },
      {
        title: "Categories",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/category-list`,
            type: "link",
            title: "Category",
          }
        ],
      },
      {
        title: "SEO",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/seo-list`,
            type: "link",
            title: "Seo",
          }
        ],
      },
      {
        title: "Website",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/website-university-list`,
            type: "link",
            title: "University List",
          },
          {
            path: `/website-college-list`,
            type: "link",
            title: "College List",
          },
          {
            path: `/website-university-logo-list`,
            type: "link",
            title: "University Logo List",
          },
          {
            path: `/website-college-logo-list`,
            type: "link",
            title: "College Logo List",
          },

        ],
      }

    ],
  },

];

export const MENUITEMS2 = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
  },
  {
    menutitle: "Pages",
    Items: [

      {
        title: "College",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/college-list`,
            type: "link",
            title: "All College",
          },
          {
            path: `/guest`,
            type: "link",
            title: "Add College",
          }
        ],
      }
    ],
  },
  {
    menutitle: "Other Features",
    Items: [
      {
        title: "Status",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/status`,
            type: "link",
            title: "Status",
          }
        ],
      }

    ],
  },
];
export const PROPERTYMANAGERMENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
    
  },
  {
    menutitle: "Pages",
    Items: [
      {
        title: "Claim Property",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/claim-university-property-list`,
            type: "link",
            title: "University Properties",
          },
          {
            path: `/claim-college-property-list`,
            type: "link",
            title: "College Properties",
          },

        ],
      }, 
      {
        title: "My Property",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/my-university-property-list`,
            type: "link",
            title: "My University Properties",
          },
          {
            path: `/my-college-property-list`,
            type: "link",
            title: "My College Properties",
          },
        ],
      }
    ],
  },

];

export const CALLERLEADERMENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
    
  },
  {
    menutitle: "Pages",
    Items: [
      {
        title: "My Team",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/my-team`,
            type: "link",
            title: "My Team",
          },

        ],
      }
    ],
  },

];
export const CALLERMENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
    
  },
  {
    menutitle: "Pages",
    Items: [
      {
        title: "My Tasks",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/my-tasks`,
            type: "link",
            title: "My Taks",
          },

        ],
      }
    ],
  },

];
export const EDITORMENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
  },
  {
    menutitle: "Pages",
    Items: [
      {
        title: "Property",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/university-property-list`,
            type: "link",
            title: "University Properties",
          },
          {
            path: `/property-list`,
            type: "link",
            title: "College properties",
          },
          {
            path: `/online-learning-property-list`,
            type: "link",
            title: "Online Learning",
          },
          {
            path: `/eduversity-property-list`,
            type: "link",
            title: "Eduversity",
          },
          {
            path: `/add-property`,
            type: "link",
            title: "Add Property",
          },

        ],
      }
    ],
  },
  {
    menutitle: "Other Features",
    Items: [
      {
        title: "Status",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/status`,
            type: "link",
            title: "Status",
          }
        ],
      },
      {
        title: "Property Type",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/property-type`,
            type: "link",
            title: "Property Type",
          }
        ],
      },
      {
        title: "Categories",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/category-list`,
            type: "link",
            title: "Category",
          }
        ],
      }

    ],
  },

];
export const SUPERADMINMENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
  },
  {
    menutitle: "Pages",
    Items: [

      {
        title: "Users",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/property-manager`,
            type: "link",
            title: "Property Managers",
          },
          {
            path: `/guest`,
            type: "link",
            title: "Students",
          },
          {
            path: `editor`,
            type: "link",
            title: "Editors",
          },
          {
            path: `/agent`,
            type: "link",
            title: "Agent",
          },
          {
            path: `cyber-partner`,
            type: "link",
            title: "Cyber Partners",
          },
          {
            path: `caller`,
            type: "link",
            title: "Callers",
          }
        ],
      },
      {
        title: "Property",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `/university-property-list`,
            type: "link",
            title: "University Properties",
          },
          {
            path: `/property-list`,
            type: "link",
            title: "College properties",
          },
          {
            path: `/property-list`,
            type: "link",
            title: "Online Learning",
          },
          {
            path: `/property-list`,
            type: "link",
            title: "Eduversity",
          },
          {
            path: `/add-property`,
            type: "link",
            title: "Add Property",
          },

        ],
      }
    ],
  }

];

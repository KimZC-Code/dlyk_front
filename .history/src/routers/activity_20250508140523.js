const activityRouter = [
  {
    path: "activity",
    name: "activity",
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("@/views/activity/ActivityList.vue"),
      },
      {
        path: "add",
        name: "add",
        component: () => import("@/views/activity/AddActivity.vue"),
      },
    ],
  },
];
export default activityRouter;

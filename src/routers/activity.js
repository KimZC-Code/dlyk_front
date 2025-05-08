const activityRouter = [
  {
    path: "activity",
    children: [
      {
        path: "",
        component: () => import("@/views/activity/ActivityList.vue"),
      },
      {
        path: "add",
        component: () => import("@/views/activity/AddActivity.vue"),
      },
    ],
  },
];
export default activityRouter;

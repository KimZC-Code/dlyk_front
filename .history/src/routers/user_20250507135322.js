const userRouter = [
    {
        path: 'user',
        children: [
            {
                path: '',
                component: () => import('@/views/user/QueryUser.vue')
            },
            {
                path: 'add',
                component: () =>import('@/views/user/AddUser.vue')
            },
            {
                path: 'detail/:id',
                component: () => import('@/views/user/UserDetail.vue')
            },
            {
                path: 'update',
                component: () => import('@/views/user/UpdateUser.vue')
            }
        ]
    }
]
export default userRouter
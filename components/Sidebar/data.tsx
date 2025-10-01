import type { MenuDataType } from './Sidebar';

import DashboardImg from '@/public/dashboard.svg';
import TasksImg from '@/public/list_check.svg';
import InfoCircleImg from '@/public/info_circle.svg';

export const MenuData: MenuDataType = [
  {
    icon: <DashboardImg />,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: <TasksImg />,
    label: 'Tasks',
    items: [
      {
        label: 'List Tasks',
        href: '/tasks/list',
      },
      {
        label: 'Add New Task',
        href: '/tasks/new',
      },
    ],
  },
  {
    icon: <InfoCircleImg />,
    label: 'About',
    href: '/about',
  },
];

export default MenuData;

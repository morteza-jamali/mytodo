import type { ProfileMenuDataType } from './ProfileMenu';

import SettingImg from '@/public/settings.svg';
import ThemeImg from '@/public/brush.svg';
import LogoutImg from '@/public/logout.svg';

export const ProfileMenuData: ProfileMenuDataType = [
  {
    icon: <ThemeImg />,
    label: 'Theme',
    href: '#',
  },
  {
    icon: <SettingImg />,
    label: 'Settings',
    href: '#',
  },
  {
    icon: <LogoutImg />,
    label: 'Logout',
    onClick: () => alert('logout'),
  },
];

export default ProfileMenuData;

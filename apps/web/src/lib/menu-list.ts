import { Bookmark, LayoutGrid, LucideIcon, Settings } from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/',
          label: 'Overview',
          active: pathname === '/',
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Devices',
      menus: [
        {
          href: '/routers',
          label: 'Routers',
          active: pathname.includes('/routers'),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: '/servers',
          label: 'Servers',
          active: pathname.includes('/servers'),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: '/cameras',
          label: 'Cameras',
          active: pathname.includes('/cameras'),
          icon: Bookmark,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/account',
          label: 'Account',
          active: pathname.includes('/account'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}

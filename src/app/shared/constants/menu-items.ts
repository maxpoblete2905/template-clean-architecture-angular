import { MenuItem } from '@shared/interface';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    icon: 'assets/icons/home.png',
    route: '/home',
  },
  {
    label: 'Profile',
    icon: 'assets/icons/profile.png',
    route: '/profile',
  },
  {
    label: 'My Pets',
    icon: 'assets/icons/pets.png',
    route: 'pets',
    subMenu: [
      {
        label: 'Pets',
        icon: 'assets/icons/cats.png',
        route: '/pets/pets',
      },
      {
        label: 'Dogs',
        icon: 'assets/icons/dogs.png',
        route: '/pets/dogs',
      },
    ],
  },
  {
    label: 'Devices',
    icon: 'assets/icons/wifi.png',
    route: '#',
    subMenu: [
      {
        label: 'Geo',
        icon: 'assets/icons/geo-pet.png',
        route: '/devices/geo',
      },
      {
        label: 'Automation',
        icon: 'assets/icons/automation.png',
        route: '/devices/automation',
      },
    ],
  },
  {
    label: 'Store',
    icon: 'assets/icons/store.png',
    route: 'store',
    subMenu: [
      {
        label: 'Productos',
        icon: 'assets/icons/food-pet.png',
        route: '/store/product',
      },
      {
        label: 'Guardados',
        icon: 'assets/icons/toy-pet.png',
        route: '/store/toys',
      },
      {
        label: 'Mis productos',
        icon: 'assets/icons/accessory-pet.png',
        route: '/store/accessories',
      },
    ],
  },
  {
    label: 'Settings',
    icon: 'assets/icons/config.png',
    route: '#',
    subMenu: [
      {
        label: 'Profile Settings',
        icon: 'assets/icons/profile-settings.png',
        route: '/settings/profile',
      },
      {
        label: 'Account Settings',
        icon: 'assets/icons/account-settings.png',
        route: '/settings/account',
      },
      {
        label: 'Privacy Settings',
        icon: 'assets/icons/privacy-settings.png',
        route: '/settings/privacy',
      },
    ],
  },
];

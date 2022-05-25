import {
  IconBusinessSuite,
  IconCoinTiktok,
  IconFeedbackAndHelp,
  IconKeyboard,
  IconLanguage,
  IconSetting,
  IconSignOut,
  IconUser,
} from '~/components/Icons';

export const MENU_LOGOUT = [
  {
    icon: <IconLanguage />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng việt',
        },
      ],
    },
  },
  { icon: <IconFeedbackAndHelp />, title: 'Feedback and help', to: '/feedback' },
  { icon: <IconKeyboard />, title: 'Keyboard shortcuts' },
];

export const MENU_USER_LOGIN = [
  { icon: <IconUser />, title: 'View profile' },
  { icon: <IconCoinTiktok />, title: 'Get coins' },
  { icon: <IconBusinessSuite />, title: 'Business Suite' },
  { icon: <IconSetting />, title: 'Settings' },
  ...MENU_LOGOUT,
  { icon: <IconSignOut />, title: 'Log out', separate: true },
];

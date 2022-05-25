import LayoutHeader from '~/components/Layouts/LayoutHeader';
import routesConfig from '~/configs/routes';
import { FollowingPage, HomePage, ProfilePage, UploadPage } from '~/pages';

// public Routes
const publicRoutes = [
  { path: routesConfig.HOME, component: HomePage },
  { path: routesConfig.FOLLOWING, component: FollowingPage },
  { path: routesConfig.PROFILE, component: ProfilePage },
  { path: routesConfig.UPLOAD, component: UploadPage, layout: LayoutHeader },
];

// private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

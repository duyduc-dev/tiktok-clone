import { LayoutHeader } from '../layouts';
import configs from '~/configs';
import { FollowingPage, HomePage, ProfilePage, UploadPage } from '~/pages';

// public Routes
const publicRoutes = [
  { path: configs.routes.HOME, component: HomePage },
  { path: configs.routes.FOLLOWING, component: FollowingPage },
  { path: configs.routes.PROFILE, component: ProfilePage },
  { path: configs.routes.UPLOAD, component: UploadPage, layout: LayoutHeader },
];

// private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

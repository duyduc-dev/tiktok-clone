import LayoutHeader from '~/components/Layouts/LayoutHeader';
import { FollowingPage, HomePage, ProfilePage, UploadPage } from '~/pages';

// public Routes
const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/following', component: FollowingPage },
  { path: '/profile', component: ProfilePage, layout: null },
  { path: '/upload', component: UploadPage, layout: LayoutHeader },
];

// private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

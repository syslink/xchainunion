
import Home from '@/pages/Home';
//import ChainSchool from '@/pages/School';
//import BraftEditorWrapper from '@/pages/School/components/BraftEditorWrapper';
import NotFound from '@/pages/NotFound';
import BlankLayout from '@/layouts/BlankLayout';

const routerConfig = [
  {
    path: '/',
    component: BlankLayout,
    children: [
      {
        path: '/home',
        component: Home,
      },
      // {
      //   path: '/chainSchool',
      //   component: ChainSchool,
      // },
      // {
      //   path: '/braftEditor',
      //   component: BraftEditorWrapper,
      // },
      {
        path: '/',
        redirect: '/home',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;

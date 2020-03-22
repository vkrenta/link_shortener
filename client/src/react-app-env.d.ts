/// <reference types="react-scripts" />
declare module 'react-router-dom';
declare module JSX {
  interface IntrinsicElements {
    useRoutes: MyCustomElementClass;
  }
}

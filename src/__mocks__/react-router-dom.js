import React from 'react';

const Link = ({ children, ...props }) => <a {...props}>{children}</a>;
const BrowserRouter = ({ children }) => <>{children}</>;
const Routes = ({ children }) => <>{children}</>;
const Route = () => null;
const useNavigate = () => jest.fn();
const useParams = () => ({});
const useLocation = () => ({ pathname: '/', search: '', hash: '', key: 'default' });

module.exports = {
  Link,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  useLocation
};

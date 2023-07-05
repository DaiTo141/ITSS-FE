import { DetailFood } from 'containers/DetailFood';
import { DetailRestaurant } from 'containers/DetailRestaurant';
import { DetailUser } from 'containers/DetailUser';
import Home from 'containers/Home';
import { Login } from 'containers/Login';
import { Register } from 'containers/Register';
import { Search } from 'containers/Search';
import { clientRoutesEnum } from 'enums/routes';
import DashBoardLayout from 'layouts/DashBoardLayout';
import AuthLayout from 'layouts/AuthLayout';
import { Switch } from 'react-router-dom';
import React from 'react';
import { ForgotPassword } from 'containers/ForgotPassword';
const AppRoutes = () => {
  return (
    <Switch>
      <DashBoardLayout
        exact
        path={clientRoutesEnum.HOME}
        RenderComponent={Home}
      />
      <DashBoardLayout
        exact
        path={clientRoutesEnum.SEARCH}
        RenderComponent={Search}
      />
      <DashBoardLayout
        exact
        path={clientRoutesEnum.DETAIL_FOOD}
        RenderComponent={DetailFood}
      />
      <DashBoardLayout
        exact
        path={clientRoutesEnum.DETAIL_RESTAURANT}
        RenderComponent={DetailRestaurant}
      />
      <DashBoardLayout
        exact
        path={clientRoutesEnum.DETAIL_USER}
        RenderComponent={DetailUser}
      />
      <AuthLayout exact path="/login" RenderComponent={Login} />
      <AuthLayout exact path="/register" RenderComponent={Register} />
      <AuthLayout exact path="/forgot_password" RenderComponent={ForgotPassword} />
    </Switch>
  );
};

export default AppRoutes;

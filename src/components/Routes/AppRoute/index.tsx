import { DetailFood } from 'containers/DetailFood';
import { DetailRestaurant } from 'containers/DetailRestaurant';
import Home from 'containers/Home';
import { Login } from 'containers/Login';
import { Register } from 'containers/Register';
import { Search } from 'containers/Search/Index';
import { clientRoutesEnum } from 'enums/routes';
import DashBoardLayout from 'layouts/DashBoardLayout';
import LoginLayout from 'layouts/LoginLayout';
import React from 'react';
import { Switch } from 'react-router-dom';

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
      <LoginLayout exact path="/login" RenderComponent={Login} />
      <LoginLayout exact path="/register" RenderComponent={Register} />
    </Switch>
  );
};

export default AppRoutes;
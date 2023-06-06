import Home from 'containers/Home';
import { Search } from 'containers/Search/Index';
import { clientRoutesEnum } from 'enums/routes';
import DashBoardLayout from 'layouts/DashBoardLayout';
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
    </Switch>
  );
};

export default AppRoutes;

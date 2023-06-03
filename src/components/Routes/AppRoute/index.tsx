import Home from 'containers/Home';
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
    </Switch>
  );
};

export default AppRoutes;

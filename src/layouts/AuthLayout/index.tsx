import { Box, makeStyles } from '@material-ui/core';
import { NavBar } from 'components/NavBar';
import React, { ElementType, useCallback } from 'react';
import { Route, RouteComponentProps, RouteProps, useHistory } from 'react-router-dom';
export interface LoginLayoutProps extends RouteProps {
  RenderComponent: ElementType;
}

interface LayoutProps {
  routeProps: RouteComponentProps;
  RenderComponent: ElementType;
  path?: string | string[];
}

const Layout = (props: LayoutProps) => {
  const classes = useStyles();
  const { routeProps, RenderComponent } = props;
  return (
    <div
      style={{
        background: '#C6FFC8',
        minHeight: '100vh',
      }}
      className={classes.container}
    >
      <Box>
        <RenderComponent {...routeProps} />
      </Box>
    </div>
  );
};

const LoginLayout = ({ RenderComponent, ...rest }: LoginLayoutProps) => {
  const render = useCallback(
    (routeProps: RouteComponentProps) => {
      return (
        <Layout
          routeProps={routeProps}
          RenderComponent={RenderComponent}
          path={rest.path as any}
        />
      );
    },
    [RenderComponent, rest.path],
  );

  return <Route {...rest} render={render} />;
};

export default LoginLayout;
const useStyles = makeStyles((theme) => ({
  container: {
    '& p': {
      color: 'black',
    },
  },
}));

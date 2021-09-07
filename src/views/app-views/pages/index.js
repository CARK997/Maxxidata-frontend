import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/home`} />
      <Route path={`${match.url}/professional-list`} component={lazy(() => import(`./professional/ProfessionalList`))} />
      <Route path={`${match.url}/professional-type-list`} component={lazy(() => import(`./professionalType/ProfessionalTypeList`))} />
      <Route path={`${match.url}/home`} component={lazy(() => import(`./home/Home`))} />
      <Route path={`${match.url}/professinal-create`} component={lazy(() => import(`./professional/ProfessionalCreate`))} />
      <Route path={`${match.url}/professinal-type-create`} component={lazy(() => import(`./professionalType/ProfessionalTypeCreate`))} />
    </Switch>
  </Suspense>
);

export default Pages;
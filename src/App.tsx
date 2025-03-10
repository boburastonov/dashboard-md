import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "@/modules/auth/hooks";

import routes from "@/routes";

import * as Layouts from "@/layouts";

import Spinner from "@/components/Spinner";
import CheckPermission from "@/requires/CheckPermission";

const Login = lazy(() => import("@/pages/Login"));

const App: React.FC = () => {
  const { isAuthenticated, isFetched, token } = useAuth();

  if (!isFetched) {
    return <Spinner full />;
  }

  if (!isAuthenticated && !token) {
    return (
      <Layouts.Auth>
        <Suspense fallback={<Spinner full />}>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layouts.Auth>
    );
  }

  return (
    <Layouts.Main>
      <Suspense fallback={""}>
        <Routes>
          {routes.map(({ path, permission, Page }) => (
            <Route
              key={path}
              path={path}
              element={
                <CheckPermission permission={permission} page={<Page />} />
              }
            />
          ))}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layouts.Main>
  );
};

export default App;

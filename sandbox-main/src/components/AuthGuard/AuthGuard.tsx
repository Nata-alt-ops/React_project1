import React from 'react';
import {useUnit} from "effector-react";

export type AuthGuardProps = {
  privateFallback?: React.ReactNode;
  children?: React.ReactNode;
};

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  privateFallback,
}) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <>{privateFallback}</>;
  }

  return <>{children}</>;
};
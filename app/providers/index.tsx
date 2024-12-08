'use client';

import { ReactNode } from "react";
import CartProvider from "./CartProvider";
import { AuthProvider } from "./AuthProvider";
import { UserProvider } from "./UserProvider";

export function Providers({ children }: {children: ReactNode}) {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
}
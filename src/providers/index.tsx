'use client';

import { ReactNode } from "react";
import { CartProvider } from "./CartProvider";
import { AuthProvider } from "./AuthProvider";

export function Providers({ children }: {children: ReactNode}) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  );
}
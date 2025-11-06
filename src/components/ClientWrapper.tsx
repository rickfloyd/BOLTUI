
"use client";
import React, { useEffect, useState } from "react";

/**
 * ClientWrapper
 * Prevents SSR/CSR hydration mismatch by waiting
 * until the component has mounted on the client.
 *
 * Usage:
 * <ClientWrapper>
 *   <YourComponent />
 * </ClientWrapper>
 */
export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Run once after client load
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // ✨ Stops server/client DOM mismatch
  return <>{children}</>;
}

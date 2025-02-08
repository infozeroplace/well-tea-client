"use client";

import { UIProvider } from "@/app/UIProvider";
import PersistLogin from "@/components/PersistLogin";
import { env } from "@/config/env";
import ReduxProvider from "@/services/ReduxProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

const ClientWrapper = ({ children }) => {
  return (
    <ReduxProvider>
      <PersistLogin>
        <GoogleOAuthProvider clientId={env.google_client_id}>
          <UIProvider>
            {children}
            <Toaster position="bottom-right" />
          </UIProvider>
        </GoogleOAuthProvider>
      </PersistLogin>
    </ReduxProvider>
  );
};

export default ClientWrapper;

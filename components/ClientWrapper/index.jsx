"use client";

import { UIProvider } from "@/app/UIProvider";
import PersistLogin from "@/components/PersistLogin";
import { env } from "@/config/env";
import ReduxProvider from "@/services/ReduxProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import LoadInitialData from "../LoadInitialData";

const ClientWrapper = ({ children }) => {
  return (
    <ReduxProvider>
      <LoadInitialData>
        <PersistLogin>
          <GoogleOAuthProvider clientId={env.google_client_id}>
            <UIProvider>
              {children}
              <Toaster position="bottom-center" />
            </UIProvider>
          </GoogleOAuthProvider>
        </PersistLogin>
      </LoadInitialData>
    </ReduxProvider>
  );
};

export default ClientWrapper;

import React, { useState } from "react";
import Amplify from "aws-amplify";
import awsExports from "../../aws-exports";
import { Ampl } from "@aws-amplify/ui-react";
import { Auth, Hub } from "aws-amplify";
import '../styles/SignUp.css'
import { AmplifyProvider, useTheme } from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { theme } from "./theme";

function SignUp() {
  const { tokens } = useTheme();
  
  return (
    <div className="container" >
          <AmplifyProvider style={{"height":"100vh"}} theme={theme}>
            {/* <Example /> */}
            <Authenticator socialProviders={['google']}>
              {({ signOut, user }) => (
                
                <main>
                  <h1>Hello {user.username}</h1>
                  <button onClick={signOut}>Sign out</button>
                </main>
              )}
            </Authenticator>
          </AmplifyProvider>
   
    </div>
  );
}

export default SignUp;

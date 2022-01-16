import React from 'react'
import Amplify from 'aws-amplify'
import config from '../../aws-exports'
import {withAuthenticator} from '@aws-amplify/ui-react'

Amplify.configure(config)
function SignUp() {
    return (
        <div>
            
        </div>
    )
}

export default withAuthenticator(SignUp)

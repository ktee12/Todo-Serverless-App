// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '8oq7eh142i';
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-xacoqnyi.us.auth0.com',    // Auth0 domain
  clientId: 'rmEkm4HE9GAzgRZF3JD12PtR2XotzlOi',  // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
};

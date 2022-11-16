# cat-search

## CLOUD DEPLOYMENT LINK (valid for 20 days): https://cat-search-production.up.railway.app/

Technologies used: 
Vue 3 (TypeScript) Frontend built with Vite
ExpressJS(NodeJS) for APIs
Axios for HTTP calls
No database involved, data called from https://thecatapi.com/
Deployed through https://railway.app/


### FOR LOCAL VIEWING (after fork and cloning of repo):
contact repo owner for env file
open terminal
ensure node (v16.13.0) environment
npm install in root folder (including devDependencies)
cd into client folder and install
return root folder

#### For Development Server: 
script => npm run go
client should be running on designated local port (3000)

#### To Test Production: 
*cd into client folder* 
*script => 'npm run build-only'*
*return to root folder*
--- above steps only first time to create build (dist) folder ---
script => 'npm run go-prod'
client should be running on designated local port (4173)

server always runs on local port 4000
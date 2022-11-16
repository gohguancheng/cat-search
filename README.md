# cat-search

## CLOUD DEPLOYMENT LINK (valid for 20 days): https://cat-search-production.up.railway.app/<br><br>

Technologies used: <br>
Vue 3 (TypeScript) Frontend built with Vite<br>
ExpressJS(NodeJS) for APIs<br>
Axios for HTTP calls<br>
No database involved, data called from https://thecatapi.com/<br>
Deployed through https://railway.app/<br><br>


### FOR LOCAL VIEWING (after fork and cloning of repo):<br>
contact repo owner for env file<br>
open terminal<br>
ensure node (v16.13.0) environment<br>
npm install in root folder (including devDependencies)<br>
cd into client folder and install<br>
return to root folder<br><br>

#### For Development Server: <br>
script => npm run go<br>
client should be running on designated local port (3000)<br><br>

#### To Test Production: <br>
*cd into client folder* <br>
*script => 'npm run build-only'*<br>
*return to root folder*<br>
--- above steps only required on first attempt to create build (dist) folder ---<br>
script => 'npm run go-prod'<br>
client should be running on designated local port (4173)<br><br>

server always runs on local port 4000<br>
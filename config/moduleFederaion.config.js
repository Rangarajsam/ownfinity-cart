const packageJsonCommon = require('../package.json');

const moduleFederationConfig = {
    name:'cart',
    filename:'remoteEntry.js',
    exposes:{
        './CartApp':'./src/bootstrap.tsx'
    },
    remotes:{
        container:'container@http://localhost:2000/remoteEntry.js'
    },
    shared:packageJsonCommon.dependencies
}

module.exports = moduleFederationConfig;
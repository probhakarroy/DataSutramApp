#!/usr/bin/env bash

touch lib/credentials.js;
cat > lib/credentials.js << EOL
module.exports = {
    token_secret: '${token_secret}',
    mongo : {
        development : {
            connection_string: '${mongo_dev}'
        },
        production : {
            connection_string: '${mongo_production}'
        },
    }
};
EOL
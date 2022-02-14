const baseUrl = {
    dev: {
        // # base api
        BASE_URL: '"https://api.github.com/repos/NervJS"'
    },
    uat: {
        // # base api
        BASE_URL: '"https://api.github.com/repos/NervJS"'
    },
    prod: {
        // # base api
        BASE_URL: '"https://api.github.com/repos/NervJS"'
    }
}
let env = {}
if (process.argv.includes('dev')) {
    console.log('dev')
    env = baseUrl.dev
} else if (process.argv.includes('uat')) {
    console.log('uat')
    env = baseUrl.uat
} else if (process.argv.includes('prod')) {
    console.log('prod')
    env = baseUrl.prod
}
if (process.argv.includes('dev')) {
    env.DEV_ENV = 'true'
} else {
    env.DEV_ENV = 'false'
}

exports.baseUrl = env

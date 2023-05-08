import { config as sharedConfig } from './wdio.shared.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'wdio:devtoolsOptions': {
                headless: true
            }
        }]
    },
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test/results/allure-results',
            },
        ],
    ],
}

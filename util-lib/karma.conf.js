module.exports = function(config) {
    config.set({

        frameworks: ["mocha", "karma-typescript"],

        files: [
            { pattern: "node_modules/expect.js/index.js" },
            { pattern: "test/**/*.spec.ts" },
            { pattern: "src/**/*.ts" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        reporters: ["dots", "karma-typescript", "mocha"],

        browsers: ["ChromeHeadless"],

        karmaTypescriptConfig: {
            compilerOptions: {
                module: "commonjs"
            },
            tsconfig: './tsconfig.json'
        },

        logLevel: config.INFO,

        singleRun: true,
        
		mochaReporter: {
			colors: {
				success: 'green',
				info: 'bgGreen',
				warning: 'cyan',
				error: 'red'
			},
			symbols: {
				success: '+',
				info: '#',
				warning: '!',
				error: 'x'
			}
		}
    });
};

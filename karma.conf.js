// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],

		pingTimeout: 9000,
		browserSocketTimeout: 60000,
		plugins: [
			require('karma-jasmine'),
			require('karma-coverage'),
			require('karma-chrome-launcher'),
			require('karma-spec-reporter'),
			require('karma-jasmine-html-reporter'),
			require('@angular-devkit/build-angular/plugins/karma'),
		],
		files: [{ pattern: 'src/app/test-module/images/test.jpg', watched: false, included: false, served: true }],
		proxies: {
			'/web/images/': '/base/src/app/test-module/images/',
		},
		client: {
			clearContext: false, // leave Jasmine Spec Runner output visible in browser

			jasmine: {
				random: false, // avoid running tests in random order
			},
		},
		coverageReporter: {
			dir: 'coverage',
			subdir: '.',
			reporters: ['text-summary', { type: 'lcovonly', subdir: 'lcov' }],
		},
		reporters: ['spec', 'kjhtml'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		browsers: ['Chrome'],
		autoWatch: true,
		singleRun: false,
		restartOnFileChange: true,

		specReporter: {
			showSpecTiming: true, // print the time elapsed for each spec
		},
	});
};

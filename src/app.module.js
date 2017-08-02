'use strict';

import angular from 'angular';

import componentsModule from './app/components/components.module';
import directivesModule from './app/directives/directives.module';
import servicesModule from './app/services/services.module';

import routerConfig from './app.config';

angular.module('app', [
		componentsModule,
		directivesModule,
		servicesModule
	])
	.config(routerConfig);

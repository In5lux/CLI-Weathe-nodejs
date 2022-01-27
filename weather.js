#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';


const initCLI = () => {
	const args = getArgs(process.argv)
	if (args.h) {
		printHelp();
	}
	if (args.s) {
		console.log('Сохранить город');
	}
	if (args.t) {
		console.log('Сохранить токен');
	}
	//Вывести погоду
};

initCLI();
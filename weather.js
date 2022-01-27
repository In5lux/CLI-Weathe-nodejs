#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = () => {
	const args = getArgs(process.argv)
	console.log(args);
	if (args.h) {
		console.log('Вывод help');
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
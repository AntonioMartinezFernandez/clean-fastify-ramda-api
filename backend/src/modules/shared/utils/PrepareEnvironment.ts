import { srcPath } from './Path';
import setupEnvironment from './SetupEnvironment';

const envFile = `${srcPath}/../.env`;

setupEnvironment(srcPath, envFile);

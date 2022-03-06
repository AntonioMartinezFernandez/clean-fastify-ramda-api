import { rootPath } from './Path';
import setupEnvironment from './SetupEnvironment';

const envFile = `${rootPath}/../.env`;

setupEnvironment(rootPath, envFile);

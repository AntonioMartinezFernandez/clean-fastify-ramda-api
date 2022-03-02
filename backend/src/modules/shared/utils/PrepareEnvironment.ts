import { rootPath } from '../../../modules/shared/utils/Path';
import setupEnvironment from '../../../modules/shared/utils/SetupEnvironment';

const envFile = `${rootPath}/../.env`;

setupEnvironment(rootPath, envFile);

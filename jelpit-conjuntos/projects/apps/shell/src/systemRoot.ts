import { readFileSync, writeFile, writeFileSync } from 'fs';

import { DEV, STAGE, PRE, PROD } from './assets/MicrofrontRoots';

//TODO Sobre escribir el archivo json de rutas
export const getRootEnvs = (): Object => {
  const getEnvironment: { [key: string]: Object } = {
    dev: DEV,
    stage: '',
    pre: '',
    prod: '',
  };

  const roots = getEnvironment[import.meta.env.MODE] || 'NA';
  return roots;
};

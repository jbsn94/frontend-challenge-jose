import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'frontend-challenge-jose',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.3.26:8100'
  }
};

export default config;

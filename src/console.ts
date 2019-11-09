import { BootstrapConsole } from 'nestjs-console';

import { AppModule } from './app.module';

BootstrapConsole.init({ module: AppModule })
  .then(({ app, boot }) => {
    // do something with your app container if you need (app)
    // boot the cli
    boot(/*process.argv*/);
  })
  .catch(e => console.log('Error', e));

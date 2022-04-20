// Initializes the `testando` service on path `/testando`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Testando } from './testando.class';
import createModel from '../../models/testando.model';
import hooks from './testando.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'testando': Testando & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/testando', new Testando(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('testando');

  service.hooks(hooks);
}

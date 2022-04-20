import assert from 'assert';
import app from '../../src/app';

describe('\'testando\' service', () => {
  it('registered the service', () => {
    const service = app.service('testando');

    assert.ok(service, 'Registered the service');
  });
});

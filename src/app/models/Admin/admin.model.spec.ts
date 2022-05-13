import { admin } from './admin.model';

describe('Admin.Model', () => {
  it('should create an instance', () => {
    expect(new admin()).toBeTruthy();
  });
});

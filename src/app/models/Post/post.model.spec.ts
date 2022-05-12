import { post } from './post.model';

describe('Post.Model', () => {
  it('should create an instance', () => {
    expect(new post()).toBeTruthy();
  });
});

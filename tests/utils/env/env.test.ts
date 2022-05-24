import * as envUtils from 'utils/env';

// 最万能的方法 —— Object.defineProperty
// 这样我们既不需要用 @ts-ignore 也不需要把 const 改成 let 了
// --要注意的是，无论用直接赋值还是 Object.defineProperty，都需要在最开始记录 env 的值，
// --然后加一个 afterEach 在执行每个用例后又赋值回去，否则会造成用例之间的污染！

const originEnv = envUtils.env;

describe("env", () => {
  afterEach(() => {
    Object.defineProperty(envUtils, 'env', {
      value: originEnv,
      writable: true,
    })
  })

  it('开发环境', () => {
    Object.defineProperty(envUtils, 'env', {
      value: 'dev',
      writable: true,
    })

    expect(envUtils.env).toEqual('dev');
  })

  it('正式环境', () => {
    Object.defineProperty(envUtils, 'env', {
      value: 'prod',
      writable: true,
    })

    expect(envUtils.env).toEqual('prod');
  })
});
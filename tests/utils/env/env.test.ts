import * as envUtils from 'utils/env';

const originEnv = envUtils.env;

describe("env", () => {
  afterEach(() => {
    // @ts-ignore
    envUtils.env = originEnv;
  })
  
  it('开发环境', () => {
    // @ts-ignore
    envUtils.env = 'dev'

    expect(envUtils.env).toEqual('dev');
  })

  it('正式环境', () => {
    // @ts-ignore
    envUtils.env = 'prod'

    expect(envUtils.env).toEqual('prod');
  })
});
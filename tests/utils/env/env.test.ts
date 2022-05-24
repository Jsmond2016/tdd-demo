import * as envUtils from 'utils/env';

describe("env", () => {
  it('开发环境', () => {
    // 测试不通过，因为无法监听  getter ，因为 envUtils 里面的 env 是变量不是对象
    // @ts-ignore
    jest.spyOn(envUtils, 'env', 'get').mockReturnValue('dev')

    expect(envUtils.env).toEqual('dev');
  })

  it('正式环境', () => {
    // 测试不通过，因为无法监听  getter ，因为 envUtils 里面的 env 是变量不是对象
    // @ts-ignore
    jest.spyOn(envUtils, 'env', 'get').mockReturnValue('prod')

    expect(envUtils.env).toEqual('prod');
  })
});
// 这里要求这么写，因为：
// 下面 spyOn 使用，第一个入参要求是对象，但是引入进来的 util 是一个函数
// 因此通过 * as XXX 的方式 转换成 envUtils 对象
import * as envUtils from 'utils/env';

describe("getEnv", () => {
  it('开发环境', () => {
    jest.spyOn(envUtils, 'getEnv').mockReturnValue('dev')

    expect(envUtils.getEnv()).toEqual('dev')
  })

  it('正式环境', () => {
    jest.spyOn(envUtils, 'getEnv').mockReturnValue('prod')

    expect(envUtils.getEnv()).toEqual('prod')
  })
});
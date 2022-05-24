export const config = {
  getEnv() {
    // 很复杂的逻辑...
    return 'test'
  }
}

// 导出对象
export const config1 = {
  env: 'test'
}

// 导出带有 get 取值方式的 对象
export const configObj = {
  get env() {
    return 'test';
  }
}

// 导出函数
export const getEnv = () => 'test'

// 直接导出变量
export const env = 'test';
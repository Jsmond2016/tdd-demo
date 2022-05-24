export const config = {
  getEnv() {
    // 很复杂的逻辑...
    return 'test'
  }
}

export const config1 = {
  env: 'test'
}

export const configObj = {
  get env() {
    return 'test';
  }
}
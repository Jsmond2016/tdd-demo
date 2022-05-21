import sleep from "utils/sleep";

/**
 * 
 知识补充：https://github.yanhaixiang.com/jest-tutorial/basic/mock-timer/#event-loop

  async / await 是 Promise 的语法糖，async 会返回一个 Promise
  
  而 await 则会把剩下的代码包裹在 then 的回调里，比如：

  await hello()
  console.log(1)

  // 等同于
  hello().then(() => {
    console.log(1)
  })
 
 */


describe("sleep", () => {
  it("可以在 1s 后再执行", async () => {
    jest.useFakeTimers();

    const act = async (callback: () => void) => {
      await sleep(1000);
      callback();
    };

    const mockCallback = jest.fn();

    const promise = act(mockCallback);

    // mockCallback 还未调用
    expect(mockCallback).not.toBeCalled();

    // 清算 Jest Message Queue 的回调，其中会执行 setTimeout 里的 resolve 函数
    jest.runAllTimers();

    // 执行 callback 内容
    await promise;

    // mockCallback 已调用
    expect(mockCallback).toBeCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
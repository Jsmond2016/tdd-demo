import sleep from "utils/sleep";

describe('sleep', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  })

  it('可以睡眠 1000ms', async () => {
    const callback = jest.fn();

    const act = async () => {
      await sleep(1000)
      callback();
    }

    act()

    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(1);
  })
})
async function asyncHandler<T extends any[], U>(
  callback: (...args: T) => Promise<U>,
  ...args: Parameters<(...args: T) => Promise<U>>
) {
  try {
    const data = await callback(...args);
    return [data, undefined] as const;
  } catch (error) {
    return [undefined, error] as const;
  }
}

export default asyncHandler;

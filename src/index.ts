async function asyncHandler<T>(
  callback: (...args: any[]) => Promise<T>,
  ...args: any[]
) {
  try {
    const data = await callback(...args);
    return [data, undefined];
  } catch (error) {
    return [undefined, error];
  }
}

export default asyncHandler;

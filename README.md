# async-error-handler

This package contains a function called "asyncHandler" which is designed to simplify the error-handling process when working with asynchronous functions that may throw errors. Instead of having to write a try-catch block around every async function call, you can use "asyncHandler" to catch any errors that occur in the callback function and handle them in a centralized location.

The "asyncHandler" takes a callback, so you don't have to call the async function when passing it to the parameters of "asyncHandler", because it will call it for you, just pass the function as callback in the first parameter and its arguments as the second parameter

Instead of catching errors in the this way, which you always have to write the try-catch block

```typescript
import fs, { EncodingOption } from "fs";
import path from "path";

async function readFile(path: string, encoding: EncodingOption) {
  try {
    const data = await fs.promises.readFile(path, encoding);

    return data;
  } catch (error) {
    throw console.log(error);
  }
}

(async () => {
  const data = await readFile(path.join(__dirname, "test.txt"), "utf-8");
  console.log(data);
})();

```

You can can have the "asyncHandler" catch them for you and you only have to handle the errors

```typescript
import fs, { EncodingOption } from "fs";
import path from "path"

import asyncHandler from "./src";
import { ReadFileError } from "what-ever-error-handling-package";

async function readFile(path: string, encoding: EncodingOption) {
  const [data, error] = await asyncHandler(
    fs.promises.readFile,
    path,
    encoding
  );

  if (error) throw new ReadFileError(error);

  return data;
}

(async () => {
  const data = await readFile(path.join(__dirname, "test.txt"), "utf-8");
  console.log(data);
})();
```

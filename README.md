# TypeScript Type System Bug: Implicit String Concatenation

This repository demonstrates a bug in TypeScript's type system where implicit string concatenation in function arguments bypasses type checking.  The `add` function is defined to accept two numbers, but it compiles without error when a string is passed as an argument. This leads to unexpected behavior, as the string is implicitly concatenated with the number rather than generating a type error.

**Steps to reproduce:**
1. Clone the repository.
2. Run `tsc bug.ts` (or your preferred TypeScript compiler invocation)
3. Execute the compiled JavaScript code.

The output will be `12`, not a type error which is unexpected and incorrect. The solution file shows how strict type checking can fix this issue.
import { test, expect } from 'vitest';
import { sum } from './../src/sum';
// import { defineConfig, loadEnv } from 'vite';
require('dotenv').config({ override: true });
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // ...
  }
});

test('Sum two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

# TypeScript Merge Project

## Problem

Implement:

```ts
merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[]
```

### Conditions

- collection_1 sorted ascending
- collection_2 sorted ascending
- collection_3 sorted descending
- return ascending result
- do NOT use sort()

---

# Install Dependencies

```bash
npm install
```

---

# Run Unit Tests

```bash
npm test
```

---

# Build Project

```bash
npm run build
```

---

# Algorithm

- Reverse collection_3 manually
- Merge arrays using merge-sort style merging
- No built-in sorting functions used

---

# Complexity

Time Complexity:

```text
O(n + m + k)
```

Space Complexity:

```text
O(n + m + k)
```
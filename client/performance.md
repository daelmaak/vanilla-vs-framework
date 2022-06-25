# Perf measurements

## Network transfer

| App               | Transfered |
| ----------------- | ---------- |
| Web Component App | 8 kB       |
| React App         | 362 kB     |
| React w/ MobX     | 422 kB     |

## Memory consumption after adding 5 products to cart

| App               | Total  | Compiled code |
| ----------------- | ------ | ------------- |
| Web Component App | 2.1 MB | 450 kB        |
| React App         | 3.4 MB | 1.3 MB        |
| React w/ MobX     | ~ 5 MB | 2 MB          |

## Removal of cart-item

| App               | Duration (ms) | Duration (ms) 6x slowdown |
| ----------------- | ------------- | ------------------------- |
| Web Component App | > 1           | > 12                      |
| React App         | > 2.5         | N/A                       |
| React w/ MobX     | > 3           | > 20                      |

## Addition of cart-item

| App               | Duration (ms) | Duration (ms) 6x slowdown |
| ----------------- | ------------- | ------------------------- |
| Web Component App | < 2           | ~ 8                       |
| React App         | ~ 2.5         | N/A                       |
| React w/ MobX     | ~ 3           | ~ 20                      |

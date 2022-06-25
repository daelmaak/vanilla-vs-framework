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
| React w/ MobX     | 7.4 MB | 5 MB          |

## Removal of cart-item

| App               | Duration (ms) |
| ----------------- | ------------- |
| Web Component App | > 1           |
| React App         | > 2.5         |
| React w/ MobX     | > 3           |

## Addition of cart-item

| App               | Duration (ms) |
| ----------------- | ------------- |
| Web Component App | < 2           |
| React App         | ~ 2.5         |
| React w/ MobX     | ~ 3           |

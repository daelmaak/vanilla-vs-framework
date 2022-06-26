# Perf measurements

## Network transfer

| App               | Transfered |
| ----------------- | ---------- |
| Web Component App | 8 kB       |
| React App         | 57 kB      |
| React w/ MobX     | 222 kB     |

## Memory consumption after adding 5 products to cart

| App               | Total  | Compiled code |
| ----------------- | ------ | ------------- |
| Web Component App | 1.7 MB | 450 kB        |
| React App         | 2.5 MB | 1 MB          |
| React w/ MobX     | ~ 3 MB | 1.2 MB        |

## Removal of cart-item

| App               | Duration (ms) | Duration (ms) 6x slowdown |
| ----------------- | ------------- | ------------------------- |
| Web Component App | > 1           | ~ 4                       |
| React App         | ~ 1           | ~ 8                       |
| React w/ MobX     | > 1           | ~ 8                       |

## Addition of cart-item

| App               | Duration (ms) | Duration (ms) 6x slowdown |
| ----------------- | ------------- | ------------------------- |
| Web Component App | < 0.4         | ~ 5                       |
| React App         | ~ 1           | ~ 6                       |
| React w/ MobX     | < 0.6         | ~ 7                       |

## Paging next page of 40 elements

| App               | Duration (ms) | Duration (ms) 6x slowdown |
| ----------------- | ------------- | ------------------------- |
| Web Component App | 6-7           | 50 - 60                   |
| React w/ MobX     | ~ 8           | > 60                      |

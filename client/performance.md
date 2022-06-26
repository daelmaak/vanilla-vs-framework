# Perf measurements

## Network transfer

| App               | Transfered |
| ----------------- | ---------- |
| Web Component App | 8 kB       |
| React 18 App      | 57 kB      |
| React 18 w/ MobX  | 222 kB     |
| Angular 14        | 179 kB     |

## Memory consumption after adding 5 products to cart

| App               | Total  | Compiled code |
| ----------------- | ------ | ------------- |
| Web Component App | 1.7 MB | 450 kB        |
| React 18 App      | 2.5 MB | 1 MB          |
| React 18 w/ MobX  | ~ 3 MB | 1.2 MB        |

## Addition of cart-item

| App               | Duration (ms) | Duration (ms) 6x slowdown |
| ----------------- | ------------- | ------------------------- |
| Web Component App | < 0.4         | ~ 5                       |
| React 18 App      | ~ 1           | ~ 6                       |
| React 18 w/ MobX  | < 0.6         | ~ 7                       |
| Angular 14        | ~ 1           | ~ 7                       |

## Removal of cart-item

| App               | Duration (ms) | Duration (ms) 6x slowdown |
| ----------------- | ------------- | ------------------------- |
| Web Component App | > 1           | ~ 4                       |
| React 18 App      | ~ 1           | ~ 8                       |
| React 18 w/ MobX  | > 1           | ~ 8                       |
| Angular 14        | ~ 1.2         | ~ 8                       |

## Paging next page of 40 elements

| App               | Duration (ms) | Duration (ms) 6x slowdown |
| ----------------- | ------------- | ------------------------- |
| Web Component App | 6-7           | 50 - 60                   |
| React 18 w/ MobX  | ~ 8           | 60 - 70                   |
| Angular 14        | ~ 7           | ~ 60                      |

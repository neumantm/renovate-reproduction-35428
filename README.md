# 35428

Minimal reproduction for https://github.com/renovatebot/renovate/discussions/35428

## Current behavior

- Digest pinning PR is created
- Package rules from presets seem to be appended at the end. See [log output](./log_output.txt)


## Expected behavior

- No digest pinning PR created
  - Due to the custom package rule

## Link to the Renovate issue or Discussion

https://github.com/renovatebot/renovate/discussions/35428

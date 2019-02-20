---
website: https://github.com/egoist/loglive
---

# LogLive

## 0.2.3 (2019-02-20T05:33:00.150Z)

### New

- Add `ago` suffix to changelog dates

## 0.2.2 (2017-07-27T11:18:37.012Z)

### New

- Optimize text rendering
- Tweak text color, use lighter color
- Update [marked3](https://github.com/egoist/marked3) to make links open in new tab

## 0.2.0 (2017-07-27T08:13:59.814Z)

### New

Now you can use it as a Vue component too!

```vue
<template>
  <div id="app">
    <log-live 
      :changelog="changelog">
    </log-live>
  </div>
</template>

<script>
import { LogLive } from 'loglive'

export default {
  components: {
    LogLive
  },

  data() {
    return {
      changelog: '/changelog.md'
    }
  }
}
</script>
```

## 0.1.3 (2017-07-27T06:51:01.943Z)

### Fix

Fix regular expression for matching date in changelog title.

## 0.1.2 (2017-07-27T06:42:01.943Z)

### Fix

Remove debug log, thanks to [@FuryBean](https://github.com/furybean)

## 0.1.1 (2017-07-27T05:48:01.943Z)

### Fix

Tweak style of loading text, **smaller**!.

## 0.1.0 (2017-07-27T04:48:01.943Z)

### New

- Add transition effect to changelog body
- Add loading indicator

## 0.0.3 (2017-07-27T04:40:01.943Z)

### Fix

Tweak style for `<code>` span, simply wrap it with backticks!

## 0.0.2 (2017-07-27T04:28:01.943Z)

### Fix

Fix CSS align issue of `date` string, add a default style for code blocks. 💅

## 0.0.1 (2017-07-27T04:08:01.943Z)

### Initial

I'm just publising it to see if it works as expected, it still has a lot of spaces to improve but I feel this version would work just fine.

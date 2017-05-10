### Little code

Some code I wrote



#### deepClone

Most of implementations for deep cloning would cause infinite recursion if the object references to it self.

Because they simply scan the object's attributes and call deepClone recursively.

```javascript
// normal deepClone implementaion can't hold this situation
const a = { ad: "ad" }
a.self = a
const b = deepClone(a)
```


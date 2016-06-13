对象深复制函数

解决了**自引用对象**深复制时会无限递归的问题

对于包含了自引用的对象也能很好地进行深复制

该函数用到的部分方法是underscore库的，所以需要在underscore下才能正常运行。



```javascript
var a = {ad: "ad"}

a.self = a

var b = deepClone(a)

a.ad = "sssd"

console.log(a)	// a.ad和a.self.ad 已经变为 "sssd"

console.log(b)	// b.ad和b.self.ad 仍为 "ad"， 没有相应改变
```

上面的例子中，a是自引用对象，b是a深复制后得到的对象

可以看出a的属性改变后，a的自引用对象相应的属性也变了

而b和b的自引用对象的属性都没有改变，所以深复制成功。


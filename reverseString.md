```javascript
Reverse a given string
```

```javascript
const reverser = (str) =>{
  var s = "";
    var i = str.length;
    while (i>0) {
        s += str.substring(i-1,i);
        i--;
    }
    return s;
}

console.log(reverser("almond")); // dnomla
```

```javascript
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

console.log(reverse("almond")); // dnomla
```
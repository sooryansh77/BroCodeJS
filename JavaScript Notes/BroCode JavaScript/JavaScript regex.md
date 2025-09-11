to find matches

starts with / and also ends with /
g = for all matches
/d = digits
/d+ = more than one digits
? = optional

eg. 
```javascript
expression = expression.
replace(/(\d+(\.\d+)?)%/g, "($1 * 0.01)");
```



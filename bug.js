```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}
```

This code snippet seems simple enough, but in Next.js 15, if you have a typo or a syntax error in this file, the whole application might fail to build or render. The error messages can sometimes be vague or misleading, making debugging difficult.  For example, a missing closing bracket `)` in the JSX could cause unexpected behavior without immediately clear error reporting.
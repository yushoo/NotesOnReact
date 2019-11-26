# Notes on React Router

## <Link>
Provides declarative, accessible navigation around your application
```
    <Link onClick={event => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
```

#### to
- Passing in a string
- Passing in an object
- passing in a function

#### Using event.preventDefault()
Many events automatically lead to certain actions performed by the browser, which is why it is good practice to use the event.preventDefault() function. This function prevents the browsers default action and allows you to add in your desired action instead.


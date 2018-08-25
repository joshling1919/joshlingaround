https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf

http://www.reactjunkie.com/universal-hot-reload/

https://medium.com/@justinjung04/react-server-side-rendering-and-hot-reloading-ffb87ca81a89

http://madole.github.io/blog/2015/08/26/setting-up-webpack-dev-middleware-in-your-express-application/

To do:

- [ ] add styled components
- [ ] add react-router
- [ ] consider react-router
- [ ] consider a server or maybe just S3

Where I left off:

1.  currently just trying to get webpack to build while following this tutorial:

https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf

1. Next, I want to figure out reset vs. normalize and how to best accomplish that with styled-components

1. Then, move on to setting up hot reloading and a better development workflow.

1. next step is to attempt to set up frontend hot reloading

1. I was about to set up a client webpack to see if I can get all client stuff
   running on the dev server independently of SSR related stuff. But then, I came across this article: https://blog.campvanilla.com/react-express-hot-module-reloading-with-webpack-dev-server-5c9c67dcbb5e

1. I'm going to test out this proxy feature.

1. I just got hot reloading going for frontend, but now nodemon is experiencing some issues with restarting the process. I think now is a good time to look at dev middleware or perhaps proxy.

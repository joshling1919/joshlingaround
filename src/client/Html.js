/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */

const Html = ({ body, styles, title }) => `
  <!DOCTYPE html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body>
    <div id="root">${body}</div>
    <div>heh</div>
    <script src="http://localhost:8080/client-bundle.js/"></script>
    </body>
  </html>
`;

export default Html;

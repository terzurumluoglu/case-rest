const app = require('./src/app/server');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  const message = process.env.MESSAGE.split('{{PORT}}').join(PORT)
  console.log(message);
}).on('error', (error) => {
  console.log(error.code === 'EADDRINUSE' ? ERROR_MESSAGES[error.code] : error.code);
});

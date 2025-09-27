import http from 'node:http';

const email = 'alexander_klemyato_gmail_com';
const PORT = process.env.PORT || 4000 ;

const gcd = (a, b) => { 
  return b === 0 ? a : gcd(b, a % b); 
}

const lcm = (a, b) => { 
  return a * b / gcd(a, b);
}

  http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const x = +(url.searchParams.get('x'));
  const y = +(url.searchParams.get('y'));

  if (url.pathname !== `/app/${email}`) {
      return res.end("NaN"); 
  }
    
  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0 || x > 1e9 || y > 1e9) { 
    return res.end('NaN')
  }


  res.end((lcm(x,y).toString()));
}).listen(PORT, () => { 
  console.log(`http://localhost:${PORT}/app/${email}?x={}&y={}`);
});





//Пример - 1
// http.createServer(function (req, res) {
//   console.log('server working');
//   console.log(req.url);
//   res.setHeader('Content-type', 'text/html', 'charset=utf-8');
//   res.write('<h2>Hello</h2>')
//   res.end()
// }).listen(3500);

//Пример - 2
// const PORT = 3500;
// http.createServer(function (req, res) {
//   const url = req.url;
//   console.log(url);
  
//   switch (url) {
//     case '/':
//       console.log('main page');
//       res.write('<h1>Main</h1>');
//       break;
//     case '/contact':
//       console.log('contact page');
//       res.write('<h1>Contact</h1>');
//       break;
//     default:
//       console.log('404');
//       res.write('<h1>404</h1>');
//   }

//   res.end();
// }).listen(PORT);
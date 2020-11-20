work with cheerio npm

##### How to start
1. git clone 
2. run server `node index.js`
3. send POST request to http://localhost:3000/api/getData <br>

    with BODY: <br>
    {  <br>
        "url": "https://test.com/dddddd"  <br>
    }
    <br>
    It will parse url and find `window.initData = ` in <script></script>

4. Response will contain JSON object from window.initData

more information about cheeriojs see <br>
https://github.com/cheeriojs/cheerio#readme
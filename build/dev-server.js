// Node.jsのrequireスタイルでインポート
const bodyParser = require('body-parser')

// `Express`アプリケーションインスタンスを受取る関数をエクスポート
module.exports = app => {
  // HTTPリクエストのbodyの内容をJSONとして解析するようミドルウェアをインストール
  app.use(bodyParser.json())


  // ログインAPIのエンドポイント'/auth/login'
  app.post('/auth/login', (req, res) => {

    res.json({ userId: "1", token: "12345" })

  })

  
  app.get('/arrays', (req, res) => {

    res.json(
      
      {
        "data": [
            {
                "name": "Tiger Nixon",
                "position": "System Architect",
                "office": "Edinburgh",
                "extn": "5421",
                "start": "2011\/04\/25",
                "salary": "$320,800",
                "children": [
                    {
                        "name": "Hermione Butler",
                        "position": "Regional Director",
                        "office": "London",
                        "extn": "1016",
                        "start": "2011\/03\/21",
                        "salary": "$356,250"
                    },
                    {
                        "name": "Lael Greer",
                        "position": "Systems Administrator",
                        "office": "London",
                        "extn": "6733",
                        "start": "2009\/02\/27",
                        "salary": "$103,500",
                        "children": [
                            {
                                "name": "Jonas Alexander",
                                "position": "Developer",
                                "office": "San Francisco",
                                "extn": "8196",
                                "start": "2010\/07\/14",
                                "salary": "$86,500"
                            },
                            {
                                "name": "Shad Decker",
                                "position": "Regional Director",
                                "office": "Edinburgh",
                                "extn": "6373",
                                "start": "2008\/11\/13",
                                "salary": "$183,000"
                            },
                            {
                                "name": "Michael Bruce",
                                "position": "Javascript Developer",
                                "office": "Singapore",
                                "extn": "5384",
                                "start": "2011\/06\/27",
                                "salary": "$183,000"
                            },
                            {
                                "name": "Donna Snider",
                                "position": "Customer Support",
                                "office": "New York",
                                "extn": "4226",
                                "start": "2011\/01\/25",
                                "salary": "$112,000"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Garrett Winters",
                "position": "Accountant",
                "office": "Tokyo",
                "extn": "8422",
                "start": "2011\/07\/25",
                "salary": "$170,750"
            },
            {
                "name": "Ashton Cox",
                "position": "Junior Technical Author",
                "office": "San Francisco",
                "extn": "1562",
                "start": "2009\/01\/12",
                "salary": "$86,000"
            },
            {
                "name": "Cedric Kelly",
                "position": "Senior Javascript Developer",
                "office": "Edinburgh",
                "extn": "6224",
                "start": "2012\/03\/29",
                "salary": "$433,060"
            },
            {
                "name": "Zedric Kelly",
                "position": "Senior Javascript Developer",
                "office": "Edinburgh",
                "extn": "6224",
                "start": "2012\/03\/29",
                "salary": "$433,060"
            }
        ]
    }
    
      
      
      )

  })




}
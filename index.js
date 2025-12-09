// // require('dotenv').config();
// // const express = require('express')
// // const app = express()
// // const port = 3000

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// // app.get('/pranjal',(req,res)=>{
// //     res.send("Hey pranjal how are you");
// // })

// // app.get('/login',(req,res)=>{
// //     res.send("<h1>Login here</h1>")
// // })

// // app.get('/youtube',(req,res)=>{
// //     res.send("<h2>YouTube Channel</h2>")
// // })

// // app.listen(process.env.PORT, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })


// require('dotenv').config();
// const express=require('express')
// const app=express()
// const port=3000;

// app.get('/',(req,res)=>{
//     res.send("This is demo");
// })

// app.listen(process.env.PORT,()=>{
//     console.log(`Server is running port ${port}`);
// })



const express=require('express')
const app=express()
const port=4000

const githubData={
  "login": "pranjal9075",
  "id": 150826091,
  "node_id": "U_kgDOCP1saw",
  "avatar_url": "https://avatars.githubusercontent.com/u/150826091?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pranjal9075",
  "html_url": "https://github.com/pranjal9075",
  "followers_url": "https://api.github.com/users/pranjal9075/followers",
  "following_url": "https://api.github.com/users/pranjal9075/following{/other_user}",
  "gists_url": "https://api.github.com/users/pranjal9075/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pranjal9075/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pranjal9075/subscriptions",
  "organizations_url": "https://api.github.com/users/pranjal9075/orgs",
  "repos_url": "https://api.github.com/users/pranjal9075/repos",
  "events_url": "https://api.github.com/users/pranjal9075/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pranjal9075/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Pranjal Supekar",
  "company": null,
  "blog": "https://www.linkedin.com/in/pranjal-supekar-a9b182283/",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-11-14T15:07:27Z",
  "updated_at": "2024-10-23T17:46:08Z"
}

app.get('/',(req,res)=>{
    res.send("<h1>Please follow this structure</h1>")
})

app.get('/github',(req,res)=>{
    res.json(githubData);
})
app.listen(port,()=>{
    console.log(`running this port ${port}`)
})
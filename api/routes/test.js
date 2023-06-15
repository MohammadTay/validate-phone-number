// import wbm from "wbm"

// const fetchData = async () => {

//     wbm.start().then(async () => {
//         const phones = ['+96170657776'];
//         const message = 'Good Morning.';
//         await wbm.send(phones, message);
//         await wbm.end();
//     }).catch(err => console.log(err));
// }
// fetchData()



// POST https://www.googleapis.com/content/v2.1/merchantId/accounts/accountId/requestphoneverification

// const fetchData = async () => {

//     const res = await fetch("https://api.apilayer.com/number_verification/validate?number=0096170657776", { headers: { apikey: "1BwiM2L9y2Qiurzk0CBik4SaHjq9UKqU" } })
//     const data = await res.json()
//     console.log(data)
//     console.log(data.valid)
// }

// fetchData()
const fetchData = async () => {

    const res = await fetch("http://apilayer.net/api/validate?access_key=3d2feedd14ea5b4ffa0fa65f7df61eb5&number=96170657776")
    const data = await res.json()


    console.log(data)
}

fetchData()


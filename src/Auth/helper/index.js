
export const signUp=user=>{
    return fetch(`https://dashboard.heroku.com/apps/authappdeploy/api/signup`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
    },
        body:JSON.stringify(user)
    })
    .then(response=>{return response.json()
    })
    .catch(err=>{console.log(err)})
}
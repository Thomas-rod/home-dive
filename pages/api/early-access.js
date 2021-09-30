
export default async(req, res) => {
  
  const body = JSON.parse(req.body)
  const email = body.email
  
  try { 
    console.log(body)
    await fetch("https://hooks.zapier.com/hooks/catch/7940043/b23dt9d/", {
      headers: {},
      method: "post",
      body: {
        email: email
      }
    })
    res.statusCode = 200
    res.json({ 
      status: "Ok",
      message: "This email have been added to early access list",
      email: email
    })
  }
  catch(e) {
    res.statusCode = 500
    res.json({ 
      status: "Something went wrong",
      message: "Please check the email typed",
      email: email
    })
    console.log("Issue")
  }
}

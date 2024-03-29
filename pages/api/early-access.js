export default async(req, res) => {
  const body = JSON.parse(req.body);

  console.log(body);
  const email = body.email;

  try {
    const response = await fetch("https://hooks.zapier.com/hooks/catch/10996974/btgo2ep/", {
      body: JSON.stringify({"email": email}),
      method: "post"
    })
    
    const jsonReponse = await response.json()

    console.log("Reponse -> ", response)
    console.log("Reponse.json() -> ", jsonReponse)

    res.status(200).json({ 
      status: "Ok",
      message: "This email have been added to early access list",
      email: body.email,
      response: jsonReponse
    })

    return res
  }
  catch(e) {
    res.status(500).json({ 
      status: "Something went wrong",
      message: "Please check the email",
      email: body.email,
      error: e,
    })
    return res
  }
}

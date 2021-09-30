export default async(req, res) => {
  const body = JSON.parse(req.body);

  console.log(body);
  const email = body.email;

  try {
    const response = await fetch("https://hooks.zapier.com/hooks/catch/7940043/b23dt9d", {
      body: JSON.stringify({"email": email}),
      method: "post"
    })
    console.log("Reponse -> ", response)
    console.log("Reponse.json() -> ", await response.json())

    res.status(200).json({ 
      status: "Ok",
      message: "This email have been added to early access list",
      email: body.email,
      response: await response.json()
    })

    return res
  }
  catch(e) {
    res.status(500).json({ 
      status: "Something went wrong",
      message: "Please check the email",
      email: body.email
    })
    return res
  }
}

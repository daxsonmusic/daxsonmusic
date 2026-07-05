export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();

    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const city = String(formData.get("city") || "").trim();
    const country = String(formData.get("country") || "").trim();

    if (!firstName || !lastName || !email || !city || !country) {
      return redirect("/signup?error=missing");
    }

    if (!env.BREVO_API_KEY || !env.BREVO_LIST_ID) {
      return redirect("/signup?error=config");
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
          CITY: city,
          COUNTRY: country,
        },
        listIds: [Number(env.BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo signup error:", response.status, errorText);
      return redirect("/signup?error=brevo");
    }

   return redirect("/signup/success");
  } catch (error) {
    console.error("Signup function error:", error);
    return redirect("/signup?error=server");
  }
}

function redirect(path) {
  return new Response(null, {
    status: 303,
    headers: {
      Location: path,
    },
  });
}

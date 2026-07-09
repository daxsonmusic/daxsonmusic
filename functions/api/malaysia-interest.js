export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();

    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const city = String(formData.get("city") || "").trim();
    const country = String(formData.get("country") || "").trim();
    const ticketInterest = String(formData.get("ticketInterest") || "").trim();

    if (!firstName || !lastName || !email || !city || !country || !ticketInterest) {
      return redirect("/malaysia?error=missing");
    }

    if (!env.BREVO_API_KEY || !env.BREVO_LIST_ID) {
      return redirect("/malaysia?error=config");
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
          TICKET_INTEREST: ticketInterest,
          EVENT_INTEREST: "Daxson Kuala Lumpur",
          SIGNUP_SOURCE: "Malaysia interest page"
        },
        listIds: [Number(env.BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo Malaysia interest error:", response.status, errorText);
      return redirect("/malaysia?error=brevo");
    }

    return redirect("/malaysia/success");
  } catch (error) {
    console.error("Malaysia interest function error:", error);
    return redirect("/malaysia?error=server");
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

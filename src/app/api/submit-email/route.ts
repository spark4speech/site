import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Email: email,
              SubscriptionStatus: "Pending",
            },
          },
        ],
      }),
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to push to Airtable" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

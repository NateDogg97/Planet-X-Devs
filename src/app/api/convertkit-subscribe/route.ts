import { NextRequest, NextResponse } from 'next/server';

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY!;
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID!;

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, auditScore, websiteUrl } = await request.json();

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_KEY,
          email,
          first_name: firstName,
          fields: {
            audit_score: auditScore,
            website_url: websiteUrl || '',
          },
          tags: ['website-audit', `score-${Math.floor(auditScore / 10) * 10}`],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, subscriber: data.subscription });
  } catch (error) {
    console.error('ConvertKit subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
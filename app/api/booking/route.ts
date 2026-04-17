import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, address, condition, message } = body;

    // Validate required fields
    if (!name || !phone || !condition) {
      return NextResponse.json(
        { error: 'Name, phone, and condition are required.' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '6704972e-1c19-4f74-99c5-fccf06f44daa',
        subject: `New Booking Request from ${name}`,
        from_name: 'Urmila PhysioCare Website',
        Name: name,
        Phone: phone,
        Condition: condition,
        Address: address || 'Not provided',
        Message: message || 'None',
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Web3Forms Error:', result);
      throw new Error('Web3Forms submission failed');
    }
  } catch (error) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request.' },
      { status: 500 }
    );
  }
}

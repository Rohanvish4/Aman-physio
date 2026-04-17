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

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxmKKOqzGhRRdb9t4cg-wTDL7vxwMzSDOrrrhtfMPyWtHgMroSERZHCGLLRhNNGWFyDgw/exec';
    
    // Post to Google Apps Script Webhook
    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify({
        name,
        phone,
        address,
        condition,
        message
      })
    });

    const resultText = await response.text();
    
    if (resultText === 'Success' || response.ok) {
        return NextResponse.json({ success: true });
    } else {
        console.error('Google Sheets Script Error:', resultText);
        throw new Error('Google Sheets submission failed');
    }
  } catch (error) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request.' },
      { status: 500 }
    );
  }
}

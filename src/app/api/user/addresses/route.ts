import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database/connection';
import { withAuth } from '@/lib/auth/middleware';

// Mock addresses data
let mockAddresses: any[] = [
  {
    id: 'addr-1',
    user_id: '1', // Admin user
    full_name: 'Admin User',
    phone: '9876543210',
    address_line1: '123 Main Street',
    address_line2: 'Apartment 4B',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    country: 'India',
    address_type: 'home',
    is_default: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 'addr-2',
    user_id: '2', // Demo user
    full_name: 'Demo User',
    phone: '9876543211',
    address_line1: '456 Park Avenue',
    address_line2: 'Suite 101',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    country: 'India',
    address_type: 'office',
    is_default: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const GET = withAuth(async (request: NextRequest, authContext: any) => {
  try {
    const userId = authContext.user.id;
    
    // Filter addresses by user ID
    const addresses = mockAddresses.filter(address => address.user_id === userId);

    return NextResponse.json({
      success: true,
      addresses: addresses.map(address => ({
        id: address.id,
        user_id: address.user_id,
        full_name: address.full_name,
        phone: address.phone,
        address_line1: address.address_line1,
        address_line2: address.address_line2,
        city: address.city,
        state: address.state,
        pincode: address.pincode,
        country: address.country,
        address_type: address.address_type,
        is_default: address.is_default,
        created_at: address.created_at,
        updated_at: address.updated_at
      }))
    });

  } catch (error) {
    console.error('Error fetching user addresses:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch user addresses'
    }, { status: 500 });
  }
});

export const POST = withAuth(async (request: NextRequest, authContext: any) => {
  try {
    const userId = authContext.user.id;
    const body = await request.json();
    
    const {
      full_name,
      phone,
      address_line1,
      address_line2,
      city,
      state,
      pincode,
      country,
      address_type,
      is_default
    } = body;

    // Validate required fields
    if (!full_name || !phone || !address_line1 || !city || !state || !pincode) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }

    // If this is set as default, unset other default addresses for this user
    if (is_default) {
      mockAddresses = mockAddresses.map(address => 
        address.user_id === userId && address.is_default 
          ? { ...address, is_default: false } 
          : address
      );
    }

    // Create the address
    const newAddress = {
      id: `addr-${Date.now()}`,
      user_id: userId,
      full_name,
      phone,
      address_line1,
      address_line2: address_line2 || null,
      city,
      state,
      pincode,
      country: country || 'India',
      address_type: address_type || 'home',
      is_default: is_default || false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    mockAddresses.push(newAddress);

    return NextResponse.json({
      success: true,
      address: {
        id: newAddress.id,
        user_id: newAddress.user_id,
        full_name: newAddress.full_name,
        phone: newAddress.phone,
        address_line1: newAddress.address_line1,
        address_line2: newAddress.address_line2,
        city: newAddress.city,
        state: newAddress.state,
        pincode: newAddress.pincode,
        country: newAddress.country,
        address_type: newAddress.address_type,
        is_default: newAddress.is_default,
        created_at: newAddress.created_at,
        updated_at: newAddress.updated_at
      },
      message: 'Address created successfully'
    });

  } catch (error) {
    console.error('Error creating user address:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to create user address'
    }, { status: 500 });
  }
});
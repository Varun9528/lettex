import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database/connection';
import { withAuth } from '@/lib/auth/middleware';

export const GET = withAuth(async (request: NextRequest, authContext: any) => {
  try {
    const userId = authContext.user.id;
    
    // Get query parameters for pagination
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;
    
    // For mock database, we'll simulate orders
    // In a real implementation, you would fetch from the database
    const mockOrders = [
      {
        id: 'order-1',
        order_number: 'ORD-001',
        user_id: userId,
        status: 'delivered',
        payment_status: 'completed',
        payment_method: 'credit_card',
        subtotal: 450,
        shipping_cost: 50,
        tax_amount: 45,
        discount_amount: 0,
        total_amount: 545,
        currency: 'INR',
        shipping_address: '123 Main St, City, State 12345',
        billing_address: '123 Main St, City, State 12345',
        shipping_method: 'standard',
        tracking_number: 'TRK123456789',
        estimated_delivery: '2024-02-15T10:00:00Z',
        delivered_at: '2024-02-15T10:00:00Z',
        notes: '',
        admin_notes: '',
        created_at: '2024-02-10T10:00:00Z',
        updated_at: '2024-02-15T10:00:00Z',
        items: [
          {
            id: 'item-1',
            product_name: 'Geevi Atta Bag',
            product_image: '/uploads/products/Geevi_Atta_Bag_Studio_Shot.png',
            price: 180,
            quantity: 2,
            total: 360
          },
          {
            id: 'item-2',
            product_name: 'Geevi Ghee',
            product_image: '/uploads/products/Geevi_Ghee_Product_Shot.png',
            price: 400,
            quantity: 1,
            total: 400
          }
        ]
      }
    ];

    // Paginate results
    const paginatedOrders = mockOrders.slice(offset, offset + limit);
    const total = mockOrders.length;

    return NextResponse.json({
      success: true,
      orders: paginatedOrders,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching user orders:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch user orders'
    }, { status: 500 });
  }
});
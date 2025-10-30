import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database/connection';
import { withAdminAuth } from '@/lib/auth/middleware';

// GET a single product by ID
export const GET = withAdminAuth(async (request: NextRequest, authContext: any) => {
  try {
    // Extract ID from URL
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    
    // Get all products and find the one with matching ID
    const products = await db.getAllProducts();
    const product = products.find((p: any) => p.id === id);
    
    if (!product) {
      return NextResponse.json({
        success: false,
        error: 'Product not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      product
    });

  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch product'
    }, { status: 500 });
  }
});

// UPDATE a product by ID
export const PUT = withAdminAuth(async (request: NextRequest, authContext: any) => {
  try {
    // Extract ID from URL
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    
    const body = await request.json();
    
    // For mock database, we'll just return a success response
    // In a real implementation, we would update the product in the database
    return NextResponse.json({
      success: true,
      product: {
        id,
        ...body,
        updatedAt: new Date().toISOString()
      },
      message: 'Product updated successfully'
    });

  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to update product'
    }, { status: 500 });
  }
});

// DELETE a product by ID
export const DELETE = withAdminAuth(async (request: NextRequest, authContext: any) => {
  try {
    // Extract ID from URL
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    
    // For mock database, we'll just return a success response
    // In a real implementation, we would delete the product from the database
    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to delete product'
    }, { status: 500 });
  }
});
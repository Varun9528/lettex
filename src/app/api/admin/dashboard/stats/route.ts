import { NextRequest, NextResponse } from 'next/server';
import { withAdminAuth } from '@/lib/auth/middleware';
import { db } from '@/lib/database/connection';

export const GET = withAdminAuth(async (request: NextRequest, authContext: any) => {
  try {
    // Get real data from the mock database
    const products = await db.getAllProducts();
    const categories = await db.getAllCategories();
    const artisans = await db.getAllArtisans();
    const banners = await db.getAllBanners();

    // Calculate real stats
    const stats = {
      totalProducts: products.length,
      totalOrders: 15, // Mock value for now
      totalUsers: 42,  // Mock value for now
      totalArtisans: artisans.length,
      totalRevenue: 12500, // Mock value in INR
      totalCategories: categories.length,
      totalBanners: banners.length
    };

    return NextResponse.json({
      success: true,
      stats
    });

  } catch (error) {
    console.error('Error fetching admin dashboard stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    );
  }
});
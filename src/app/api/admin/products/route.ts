import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database/connection';
import { withAdminAuth } from '@/lib/auth/middleware';

export const GET = withAdminAuth(async (request: NextRequest, authContext: any) => {
  try {
    // Use mock database instead of Prisma
    const products = await db.getAllProducts();

    return NextResponse.json({
      success: true,
      products: products
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch products'
    }, { status: 500 });
  }
});

export const POST = withAdminAuth(async (request: NextRequest, authContext: any) => {
  try {
    const body = await request.json();
    
    const {
      title,
      slug,
      description,
      price,
      originalPrice,
      images,
      sku,
      stock,
      materials,
      colors,
      tags,
      featured,
      bestSeller,
      newArrival,
      trending,
      categoryId,
      artisanId
    } = body;

    // Validate required fields
    if (!title?.en || !slug || !description?.en || !price || !categoryId || !artisanId) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }

    // Check if slug already exists
    const existingProducts = await db.getAllProducts();
    const existingProduct = existingProducts.find((p: any) => p.slug === slug);

    if (existingProduct) {
      return NextResponse.json({
        success: false,
        error: 'Product with this slug already exists'
      }, { status: 400 });
    }

    // Create the product in the database
    const productData: any = {
      title,
      slug,
      description,
      price: parseFloat(price),
      originalPrice: originalPrice ? parseFloat(originalPrice) : null,
      stock: parseInt(stock) || 0,
      sku: sku || slug.toUpperCase(),
      featured: Boolean(featured),
      bestSeller: Boolean(bestSeller),
      newArrival: Boolean(newArrival),
      trending: Boolean(trending),
      categoryId,
      artisanId,
      images: images || [],
      materials: materials || [],
      colors: colors || [],
      tags: tags || []
    };

    const product = await db.createProduct(productData);

    return NextResponse.json({
      success: true,
      product: product,
      message: 'Product created successfully'
    });

  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to create product'
    }, { status: 500 });
  }
});
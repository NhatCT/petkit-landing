import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const DB_PATH = join(process.cwd(), 'data', 'wishlist.json');

function ensureDataDir() {
  const dataDir = join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    const { mkdirSync } = require('fs');
    mkdirSync(dataDir, { recursive: true });
  }
}

function readWishlist() {
  try {
    ensureDataDir();
    if (existsSync(DB_PATH)) {
      const data = readFileSync(DB_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading wishlist:', error);
  }
  return {};
}

function writeWishlist(wishlist: any) {
  try {
    ensureDataDir();
    writeFileSync(DB_PATH, JSON.stringify(wishlist, null, 2));
  } catch (error) {
    console.error('Error writing wishlist:', error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || 'guest';
    
    const wishlist = readWishlist();
    const userWishlist = wishlist[userId] || [];
    
    return NextResponse.json({ wishlist: userWishlist }, { status: 200 });
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi lấy danh sách yêu thích' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, product } = body;
    
    if (!userId || !product) {
      return NextResponse.json(
        { error: 'Thiếu thông tin người dùng hoặc sản phẩm' },
        { status: 400 }
      );
    }
    
    const wishlist = readWishlist();
    const userWishlist = wishlist[userId] || [];
    
    // Check if product already in wishlist
    const exists = userWishlist.some((item: any) => item.id === product.id);
    
    if (exists) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Sản phẩm đã có trong danh sách yêu thích',
          wishlist: userWishlist 
        },
        { status: 200 }
      );
    }
    
    // Add new product
    userWishlist.push({
      ...product,
      addedAt: new Date().toISOString()
    });
    
    wishlist[userId] = userWishlist;
    writeWishlist(wishlist);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Đã thêm vào danh sách yêu thích',
        wishlist: userWishlist 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi thêm vào danh sách yêu thích' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { userId, productId } = body;
    
    if (!userId || !productId) {
      return NextResponse.json(
        { error: 'Thiếu thông tin người dùng hoặc sản phẩm' },
        { status: 400 }
      );
    }
    
    const wishlist = readWishlist();
    const userWishlist = wishlist[userId] || [];
    
    // Remove product
    const newWishlist = userWishlist.filter((item: any) => item.id !== productId);
    wishlist[userId] = newWishlist;
    writeWishlist(wishlist);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Đã xóa khỏi danh sách yêu thích',
        wishlist: newWishlist 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi xóa khỏi danh sách yêu thích' },
      { status: 500 }
    );
  }
}
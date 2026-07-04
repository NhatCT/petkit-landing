import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const DB_PATH = join(process.cwd(), 'data', 'cart.json');

function ensureDataDir() {
  const dataDir = join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    const { mkdirSync } = require('fs');
    mkdirSync(dataDir, { recursive: true });
  }
}

function readCart() {
  try {
    ensureDataDir();
    if (existsSync(DB_PATH)) {
      const data = readFileSync(DB_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading cart:', error);
  }
  return {};
}

function writeCart(cart: any) {
  try {
    ensureDataDir();
    writeFileSync(DB_PATH, JSON.stringify(cart, null, 2));
  } catch (error) {
    console.error('Error writing cart:', error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || 'guest';
    
    const cart = readCart();
    const userCart = cart[userId] || [];
    
    return NextResponse.json({ cart: userCart }, { status: 200 });
  } catch (error) {
    console.error('Error fetching cart:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi lấy giỏ hàng' },
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
    
    const cart = readCart();
    const userCart = cart[userId] || [];
    
    // Check if product already in cart
    const existingIndex = userCart.findIndex((item: any) => item.id === product.id);
    
    if (existingIndex >= 0) {
      // Increment quantity
      userCart[existingIndex].quantity += 1;
    } else {
      // Add new product
      userCart.push({
        ...product,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
    }
    
    cart[userId] = userCart;
    writeCart(cart);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Đã thêm vào giỏ hàng',
        cart: userCart 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi thêm vào giỏ hàng' },
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
    
    const cart = readCart();
    const userCart = cart[userId] || [];
    
    // Remove product
    const newCart = userCart.filter((item: any) => item.id !== productId);
    cart[userId] = newCart;
    writeCart(cart);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Đã xóa khỏi giỏ hàng',
        cart: newCart 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error removing from cart:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi xóa khỏi giỏ hàng' },
      { status: 500 }
    );
  }
}
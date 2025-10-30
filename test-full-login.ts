import { db } from './src/lib/database/connection';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function testFullLogin() {
  try {
    const email = 'user@lettex.com';
    const password = 'user123';
    
    console.log('Login attempt for email:', email);

    // Basic validation
    if (!email || !password) {
      console.log('Email and password are required');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format');
      return;
    }

    // Find user in database
    const user = await db.findUserByEmail(email);
    
    console.log('User found in database:', user);
    
    if (!user) {
      console.log('User not found in database');
      return;
    }

    // Verify password
    console.log('Verifying password for user:', user.email);
    console.log('Password from request:', password);
    console.log('Hashed password from database:', user.password_hash);
    
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    
    console.log('Password valid:', isValidPassword);
    
    if (!isValidPassword) {
      console.log('Invalid password');
      return;
    }

    // Use default secrets if environment variables are not set
    const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
    const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-super-secret-refresh-key-change-in-production';

    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
      iss: 'lettex-marketplace',
      aud: 'lettex-users'
    };

    // Generate access token (15 minutes)
    const accessToken = jwt.sign(tokenPayload, JWT_SECRET, {
      expiresIn: '15m',
      issuer: 'lettex-marketplace',
      audience: 'lettex-users'
    });

    // Generate refresh token (7 days)
    const refreshToken = jwt.sign(tokenPayload, JWT_REFRESH_SECRET, {
      expiresIn: '7d',
      issuer: 'lettex-marketplace',
      audience: 'lettex-users'
    });

    // Return user info (without password) and token
    const { password_hash: _, ...userWithoutPassword } = user;
    
    console.log('Login successful!');
    console.log('Token:', accessToken);
    console.log('User:', userWithoutPassword);
    
  } catch (error) {
    console.error('Login error:', error);
  }
}

testFullLogin();
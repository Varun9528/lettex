import { db } from './src/lib/database/connection';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function testLogin() {
  try {
    // Test finding user
    const user = await db.findUserByEmail('user@lettex.com');
    console.log('User found:', user);
    
    if (user) {
      // Test password verification
      const isValid = await bcrypt.compare('user123', user.password_hash);
      console.log('Password valid:', isValid);
      
      if (isValid) {
        // Test JWT generation
        const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
        
        const tokenPayload = {
          userId: user.id,
          email: user.email,
          role: user.role,
          name: user.name,
          iss: 'lettex-marketplace',
          aud: 'lettex-users'
        };
        
        const token = jwt.sign(tokenPayload, JWT_SECRET, {
          expiresIn: '15m',
          issuer: 'lettex-marketplace',
          audience: 'lettex-users'
        });
        
        console.log('Token generated:', token);
        console.log('Login successful!');
      }
    }
  } catch (error) {
    console.error('Test error:', error);
  }
}

testLogin();
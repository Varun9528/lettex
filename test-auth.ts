import { db } from './src/lib/database/connection';
import bcrypt from 'bcryptjs';

async function testAuth() {
  try {
    // Test finding admin user
    const adminUser = await db.findUserByEmail('admin@lettex.com');
    console.log('Admin user found:', adminUser);
    
    if (adminUser) {
      // Test password verification
      const isValid = await bcrypt.compare('admin123', adminUser.password_hash);
      console.log('Admin password valid:', isValid);
    }
    
    // Test finding regular user
    const regularUser = await db.findUserByEmail('user@lettex.com');
    console.log('Regular user found:', regularUser);
    
    if (regularUser) {
      // Test password verification
      const isValid = await bcrypt.compare('user123', regularUser.password_hash);
      console.log('User password valid:', isValid);
    }
    
  } catch (error) {
    console.error('Test error:', error);
  }
}

testAuth();
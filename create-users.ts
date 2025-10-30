import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

async function createUsers() {
  const prisma = new PrismaClient();
  
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Database connected successfully');
    
    // Hash passwords
    const adminPassword = await bcrypt.hash('admin123', 12);
    const userPassword = await bcrypt.hash('user123', 12);
    
    // Create admin user
    const adminUser = await prisma.user.upsert({
      where: { email: 'admin@lettex.com' },
      update: {},
      create: {
        email: 'admin@lettex.com',
        password_hash: adminPassword,
        name: 'Admin User',
        role: 'super_admin',
        email_verified: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    console.log('Admin user created/updated:', adminUser.email);
    
    // Create regular user
    const regularUser = await prisma.user.upsert({
      where: { email: 'user@lettex.com' },
      update: {},
      create: {
        email: 'user@lettex.com',
        password_hash: userPassword,
        name: 'Demo User',
        role: 'customer',
        email_verified: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    console.log('Regular user created/updated:', regularUser.email);
    
    console.log('Users setup completed successfully!');
    
  } catch (error) {
    console.error('Error setting up users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createUsers();
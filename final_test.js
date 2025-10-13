const axios = require('axios');

async function runTests() {
  console.log('🧪 Starting Pachmarhi Marketplace Tests...\n');
  
  const baseURL = 'http://localhost:3000';
  let authToken = '';
  let userId = '';
  
  try {
    // Test 1: Health check
    console.log('1. Testing API health...');
    const healthResponse = await axios.get(`${baseURL}/api/health/database`);
    console.log('   ✅ API is healthy\n');
    
    // Test 2: Fetch products (no auth required)
    console.log('2. Testing product fetching...');
    const productsResponse = await axios.get(`${baseURL}/api/products?featured=true&limit=2`);
    console.log(`   ✅ Found ${productsResponse.data.products.length} featured products\n`);
    
    // Test 3: Admin login
    console.log('3. Testing admin login...');
    const loginResponse = await axios.post(`${baseURL}/api/auth/login`, {
      email: 'admin@pachmarhi.com',
      password: 'admin123'
    });
    
    authToken = loginResponse.data.token;
    userId = loginResponse.data.user.id;
    console.log('   ✅ Admin login successful\n');
    
    // Test 4: Authenticated request (get user profile)
    console.log('4. Testing authenticated request...');
    const profileResponse = await axios.get(`${baseURL}/api/auth/me`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    console.log('   ✅ Authenticated request successful\n');
    
    // Test 5: Add to cart (requires auth)
    console.log('5. Testing add to cart...');
    const productId = productsResponse.data.products[0].id;
    const cartResponse = await axios.post(`${baseURL}/api/cart`, {
      productId: productId,
      quantity: 1
    }, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    console.log('   ✅ Item added to cart successfully\n');
    
    // Test 6: Get cart items
    console.log('6. Testing get cart items...');
    const getCartResponse = await axios.get(`${baseURL}/api/cart`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    console.log(`   ✅ Retrieved ${getCartResponse.data.items.length} items from cart\n`);
    
    console.log('🎉 All tests passed! The Pachmarhi Tribal Art Marketplace is fully functional.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    process.exit(1);
  }
}

runTests();
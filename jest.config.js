module.exports = {
    testEnvironment: 'node',
    collectCoverageFrom: [
        '**/*.js',
        '!node_modules/**',
        '!coverage/**'
    ],
    testMatch: [
        '**/*.test.js'
    ],
    // ปิดการแสดงผลที่ไม่จำเป็น
    verbose: false,
    // ตั้งค่าให้รอเซิร์ฟเวอร์ปิดก่อนจบการทดสอบ
    testTimeout: 10000,
    // ไม่ให้ Jest แสดง warning เกี่ยวกับ open handles
    forceExit: false,
    detectOpenHandles: false
};

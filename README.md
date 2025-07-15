# 🚀 CI/CD Demo with GitHub Actions

โปรเจกต์ตัวอย่างสำหรับการใช้งาน CI/CD pipeline ด้วย GitHub Actions

## 📋 คุณสมบัติ

- ✅ Express.js web server
- ✅ Automated testing with Jest
- ✅ Code linting with ESLint
- ✅ CI/CD pipeline with GitHub Actions
- ✅ Multi-environment support
- ✅ Responsive web interface

## 🛠️ การติดตั้ง

1. Clone repository:
```bash
git clone https://github.com/yourusername/cdci-demo.git
cd cdci-demo
```

2. ติดตั้ง dependencies:
```bash
npm install
```

3. เริ่มเซิร์ฟเวอร์:
```bash
npm start
```

หรือเริ่มในโหมด development:
```bash
npm run dev
```

## 🧪 การทดสอบ

รัน tests:
```bash
npm test
```

รัน linting:
```bash
npm run lint
```

รัน build:
```bash
npm run build
```

## 🔄 CI/CD Pipeline

GitHub Actions workflow จะทำงานเมื่อ:

- **Push** ไปยัง `main` หรือ `develop` branch
- **Pull Request** ไปยัง `main` branch

### Pipeline Steps:

1. **Test Job:**
   - ตรวจสอบโค้ดใน Node.js versions 18.x และ 20.x
   - ติดตั้ง dependencies
   - รัน ESLint
   - รัน Jest tests
   - รัน build

2. **Deploy Job:**
   - รันเมื่อ tests ผ่านหมดและ push ไปยัง main branch
   - Deploy ไปยัง staging environment
   - แจ้งผลการ deploy

## 📁 โครงสร้างโปรเจกต์

```
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions workflow
├── server.js                  # Express server
├── server.test.js             # Server tests
├── index.html                 # Frontend interface
├── package.json               # Dependencies และ scripts
├── jest.config.js             # Jest configuration
├── .eslintrc.js              # ESLint configuration
├── .gitignore                # Git ignore rules
└── README.md                 # Documentation
```

## 🚀 การ Deploy

### การเตรียมสำหรับการ Deploy จริง:

1. **Heroku:**
   - สร้าง Heroku app
   - เพิ่ม `HEROKU_API_KEY` ใน GitHub Secrets
   - Uncomment Heroku deployment step ใน workflow

2. **Vercel:**
   - เชื่อมต่อ repository กับ Vercel
   - Configuration จะทำงานอัตโนมัติ

3. **Netlify:**
   - เชื่อมต่อ repository กับ Netlify
   - ตั้งค่า build command: `npm run build`

## 🔧 Environment Variables

สร้างไฟล์ `.env` สำหรับ local development:

```env
PORT=3000
NODE_ENV=development
```

## 📊 Monitoring

- Health check endpoint: `/api/health`
- Server status monitoring ใน web interface
- GitHub Actions build status

## 🤝 การพัฒนา

1. Fork repository
2. สร้าง feature branch
3. Commit changes
4. Push และสร้าง Pull Request
5. รอให้ CI tests ผ่าน
6. Merge หลังจาก review

## 📝 License

MIT License - สามารถใช้งานได้อย่างเสรี

## 💡 Tips

- ใช้ `npm run dev` สำหรับ development
- ตรวจสอบ GitHub Actions tab สำหรับ build status
- ใช้ branch protection rules สำหรับ production
- กำหนด environment secrets สำหรับ production deployment

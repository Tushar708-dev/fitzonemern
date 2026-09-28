# FitZone (MERN)

**MongoDB + Express + React + Node** fitness website.

- 72 exercise video tutorials across 12 body parts (filter + search)
- BMI + daily calorie calculator
- Signup / login (bcrypt + sessions stored in MongoDB)
- Workout log + member dashboard
- Contact form saved to the database
- Scroll animations, parallax hero, swipe carousel — works on mobile and PC

👉 **Start here: [STEP_BY_STEP_GUIDE.md](STEP_BY_STEP_GUIDE.md)**

Quick start:
```bash
npm install
npm install --prefix client
cp .env.example .env      # fill MONGODB_URI and SESSION_SECRET
npm run seed              # loads the exercises into MongoDB
npm run dev               # opens API (port 3000) + React (http://localhost:5173)
```

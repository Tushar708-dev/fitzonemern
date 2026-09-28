# FitZone (MERN) — Step-by-Step Guide (Hinglish)

Upar se neeche ek-ek step karo. Total time: ~30–40 minute.

---

## 0. Pehle ye chahiye
- **Node.js 18+** → terminal mein `node -v` se check karo. Nahi hai toh https://nodejs.org se LTS download karo.
- **VS Code**
- Free **MongoDB Atlas** account (Step 2)
- Deploy ke liye: free **GitHub** + **Render.com** account (Step 8)

---

## 1. Packages install karo
Project folder VS Code mein kholo, terminal mein (`Ctrl + ~`):
```bash
npm install
npm install --prefix client
```
- Pehli command **server** (Express, MongoDB) ke packages laati hai.
- Doosri command **React** (client folder) ke packages laati hai.

---

## 2. MongoDB Atlas (database) setup
1. https://www.mongodb.com/cloud/atlas → **Sign up** (Google se bhi chalega).
2. **Create** → **M0 Free** cluster → region **Mumbai (ap-south-1)** → Create.
3. **Database Access** → **Add New Database User**
   - Username: `fitzoneuser`
   - Password: simple rakho (sirf letters + numbers; `@ # /` jaise special characters se problem hoti hai)
   - Role: *Read and write to any database* → Add User.
4. **Network Access** → **Add IP Address** → **Allow Access From Anywhere** (`0.0.0.0/0`) → Confirm.
   (Deploy ke liye zaroori hai, kyunki Render ka IP badalta rehta hai.)
5. **Database** → cluster pe **Connect** → **Drivers** → **Node.js** → connection string copy karo:
```
mongodb+srv://fitzoneuser:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority
```
6. `<password>` ki jagah apna password likho aur `.net/` ke baad `fitzone` (database ka naam) jodo:
```
mongodb+srv://fitzoneuser:MyPass123@cluster0.abcde.mongodb.net/fitzone?retryWrites=true&w=majority
```

---

## 3. `.env` file banao
1. `.env.example` ki copy banao, naam rakho **`.env`** (project ke sabse upar wale folder mein).
2. Do cheezein bharo:
   - `MONGODB_URI=` → Step 2 wali string
   - `SESSION_SECRET=` → terminal mein ye chalao, output paste karo:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
> ⚠️ `.env` ko kabhi GitHub pe upload mat karna (`.gitignore` already rokta hai).

---

## 4. Exercises database mein daalo (seed)
```bash
npm run seed
```
Aisa dikhna chahiye: `✅ MongoDB connected` aur `🌱 Seeded 72 exercises (1 with video, ...)`.

---

## 5. Website chalao (development mode)
```bash
npm run dev
```
Ye **do cheezein ek saath** chalata hai:
- **API** (Express) → port 3000
- **React website** (Vite) → **http://localhost:5173** ← browser mein *ye* kholo

React mein code save karte hi page apne aap refresh hota hai.

**Test checklist:**
- [ ] Home page: hero animation, scroll karne pe cards reveal hon, top pe orange progress bar bhare.
- [ ] Mobile view: browser mein `F12` → phone icon (device toolbar) → body-part cards left-right swipe hon.
- [ ] **Exercises**: filter buttons (Chest, Back…), search box, kisi exercise pe click → detail page.
- [ ] **BMI**: height/weight daalo (age + gender daaloge toh calories bhi).
- [ ] **Sign Up** → dashboard khule → **My Workouts** mein workout log/delete karo.
- [ ] Logout ke baad `/dashboard` kholo → login page pe redirect ho.
- [ ] **Contact** form bhejo → Atlas → Browse Collections → `fitzone` → `contactmessages` mein dikhega.

---

## 6. 🎥 Exercise mein VIDEO kaise add karein (IMPORTANT)

**Sach yeh hai:** abhi sirf **Barbell Bench Press** ka video embedded hai (uska link maine ek trusted article se liya). Baaki 71 exercises pe **"Search Tutorials"** button aata hai jo seedha YouTube search kholta hai. Maine baaki ke video links guess nahi kiye, kyunki galat link = "Video unavailable". Video lagana sirf 30 second ka kaam hai:

1. YouTube pe us exercise ka tutorial dhundo (jo tumhe pasand aaye) aur uska **poora link copy** karo, jaise:
   `https://www.youtube.com/watch?v=AbC123xyz`
2. `server/data/exercises.js` kholo, us exercise ke andar ek line jodo:
```js
{ name: "Push-Up", group: "Chest", equipment: "Bodyweight", level: "Beginner",
  description: "...",
  steps: [...],
  tips: [...],
  video: "https://www.youtube.com/watch?v=AbC123xyz" },   // ← ye line add karo
```
3. File save karo, phir terminal mein:
```bash
npm run seed
```
4. Browser refresh karo → us exercise ke page pe video embed dikhega, aur card pe **▶ Video** badge lagega.

**Kaunse links chalte hain?** Normal link, `youtu.be/...` share link, aur start-time wale bhi (`?t=45` ya `&t=1m30s`). Video kisi khaas second se shuru karwana ho toh link mein wahi time daal do.

**Naya exercise jodna hai?** Kisi bhi ek exercise block ko copy-paste karo, naam/group/steps badlo, `npm run seed` chalao. (`group` in mein se hi ho: Chest, Back, Shoulders, Biceps, Triceps, Forearms, Quads, Hamstrings, Glutes, Calves, Abs, Cardio.)

---

## 7. Animations kaise kaam karti hain (React mein simple)
Sab `framer-motion` library se hain. Chhote reusable components hain, kahin bhi lagao:

| Kya chahiye | Kahan hai | Kaise use karein |
|---|---|---|
| Scroll karne pe fade + slide-up | `components/Reveal.jsx` | `<Reveal delay={0.1}> ...kuch bhi... </Reveal>` |
| Number ginti karke badhe | `components/CountUp.jsx` | `<CountUp to={5000} suffix="+" />` |
| Top pe scroll progress bar | `components/ScrollProgress.jsx` | App.jsx mein already laga hai |
| Page badalte waqt fade | `components/Page.jsx` | Har page ko `<Page>...</Page>` mein wrap karo |
| Parallax hero | `pages/Home.jsx` (`useScroll` + `useTransform`) | Blobs text se alag speed pe hilte hain |
| Body-part swipe carousel | `styles.css` (`scroll-snap`) | Phone pe swipe, PC pe grid |
| Filter karte waqt cards glide karein | `components/ExerciseCard.jsx` (`layout`) | Automatic |
| Ticker (marquee) | `pages/Home.jsx` + CSS `@keyframes marquee` | — |

Jinke phone/PC mein **"Reduce motion"** on hota hai unke liye animations apne aap band ho jaati hain.
Animation slow/fast karni ho toh `duration` ya `delay` ki value badlo.

---

## 8. Deploy karo (Render.com — free)
Production mein **ek hi server** dono kaam karta hai: React ki built files serve karta hai + API chalata hai.

**A. GitHub pe code daalo**
```bash
git init
git add .
git commit -m "FitZone MERN"
```
GitHub pe naya empty repo banao, phir jo commands wo dikhaye (`git remote add origin ...`, `git push -u origin main`) chalao.

**B. Render pe Web Service**
1. https://render.com → sign up → **New +** → **Web Service** → GitHub repo connect.
2. Settings:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
3. **Environment Variables:**
   - `MONGODB_URI` = wahi string
   - `SESSION_SECRET` = random string
   - `NODE_ENV` = `production`
4. **Create Web Service** → 3–5 minute mein `https://fitzone-xxxx.onrender.com` live.

Exercises database mein already hain (Step 4 mein wahi Atlas DB use hua), dobara seed nahi karna. Baad mein video add karo toh apne computer se `npm run seed` chala do — wahi database update hoga, Render ko redeploy bhi nahi chahiye.

**Free tier note:** kuch der inactive rehne pe Render service so jati hai; pehli baar kholne pe 30–50 second lag sakte hain. Normal hai.

---

## 9. Code kaise padhein (file map)
```
fitzone-mern/
├── server/                    ← BACKEND (Node + Express + MongoDB)
│   ├── index.js               ← server start: DB connect + listen
│   ├── app.js                 ← Express setup + saare routes jodta hai
│   ├── seed.js                ← exercises ko DB mein daalta hai
│   ├── data/exercises.js      ← 72 exercises + video links (yahan edit karo)
│   ├── models/                ← DB ke "tables": User, Exercise, WorkoutLog, BmiRecord, ContactMessage
│   ├── routes/                ← API: auth, exercises, bmi, workouts, dashboard, contact
│   ├── middleware/auth.js     ← login check
│   └── lib/                   ← health.js (BMI maths), video.js (YouTube link parser)
└── client/                    ← FRONTEND (React)
    └── src/
        ├── main.jsx           ← React yahan se start hota hai
        ├── App.jsx            ← "map": kaunsa URL → kaunsa page
        ├── AuthContext.jsx    ← "kaun logged in hai?" (poori app ko pata)
        ├── api.js, useApi.js  ← server se baat karne ke helpers
        ├── pages/             ← Home, Exercises, ExerciseDetail, Bmi, Workouts, Dashboard, Contact, Login, Signup
        ├── components/        ← Navbar, Footer, Reveal, CountUp, VideoBox, ExerciseCard...
        └── styles.css         ← saari styling (colors sabse upar :root mein)
```

**React ke 4 basic idea (ye samajh liye toh poora code samajh aa jayega):**
1. **Component** = ek function jo HTML jaisa (JSX) return karta hai. Jaise `function Footer() { return <footer>...</footer>; }`.
2. **`useState`** = component ki yaadash. `const [search, setSearch] = useState("")` → `search` value hai, `setSearch("abc")` se badalti hai aur page apne aap update ho jata hai.
3. **`useEffect` / `useApi`** = page khulte hi server se data laana.
4. **Props** = component ko diya gaya data, jaise `<ExerciseCard exercise={ex} />`.

**Ek request kaise chalti hai (BMI):**
`Bmi.jsx` form → `api.post("/bmi")` → `server/routes/bmi.js` (calculate via `lib/health.js`, login ho toh `BmiRecord` mein save) → JSON wapas → `Bmi.jsx` result + gauge animate karta hai.

**Colors badalne hain?** `client/src/styles.css` ke sabse upar `:root { ... }` mein `--primary`, `--accent`, `--bg` badlo.

---

## 10. Problems? (Troubleshooting)
| Problem | Kya karein |
|---|---|
| `MONGODB_URI is missing` | `.env` file banayi? Naam bilkul `.env` ho (`.env.txt` nahi), aur project ke top folder mein ho. |
| `bad auth` / `Authentication failed` | Connection string mein password galat hai ya `<password>` replace nahi kiya. |
| `MongoServerSelectionError` / timeout | Atlas → Network Access mein `0.0.0.0/0` add karo, 2–3 min ruko. |
| Password mein `@`, `#` hai | Atlas mein simple password (letters+numbers) rakh lo. |
| `Cannot find module` | `npm install` aur `npm install --prefix client` dono chalao. |
| Exercises page khaali | `npm run seed` chalao. |
| `localhost:5173` pe login/data nahi aa raha | `npm run dev` se chalao (API bhi chalni chahiye). Sirf `npm run client` se API nahi chalti. |
| Render pe build fail (`vite: not found`) | Build Command bilkul `npm install && npm run build` ho. |
| Render pe login tik nahi raha | `NODE_ENV=production` set hai? Env vars save karke redeploy karo. |
| Port 3000 busy | `.env` mein `PORT=3001` karo aur `client/vite.config.js` ke proxy mein bhi 3001 likho. |

---

## 11. Aage kya improve kar sakte ho
- Har exercise mein apne pasand ke YouTube videos lagao (Step 6).
- Workout progress ka chart (Chart.js / Recharts).
- Admin page jahan contact messages dikhein.
- Forgot-password + email verification.
- Apna khud ka gym logo / photos (`client/public/`).

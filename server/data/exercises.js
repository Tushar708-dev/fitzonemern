// ============================================================
//  THE EXERCISE LIBRARY  (72 exercises, 12 body parts)
//  3. Save, then run:   npm run seed
//
//  Exercises with no `video` show a "Search tutorials on YouTube" button instead.
// ============================================================

module.exports = [
  // ───────────── CHEST ─────────────
  { name: "Barbell Bench Press", group: "Chest", equipment: "Barbell + Bench", level: "Intermediate",
    description: "The classic strength builder for chest, shoulders and triceps.",
    steps: ["Lie with eyes under the bar, feet flat, shoulder blades squeezed together.", "Grip just outside shoulder width and unrack the bar over your shoulders.", "Lower to mid-chest with elbows tucked about 45-75 degrees.", "Press back up until your arms are straight."],
    tips: ["Wrap your thumbs around the bar.", "Keep your butt on the bench and use safety pins for heavy sets."],
    video: "https://youtu.be/Zw6qCAFsV0w" }, // bench press form video (Atwood / BarBend), link taken from BarBend's bench press guide
  { name: "Push-Up", group: "Chest", equipment: "Bodyweight", level: "Beginner",
    description: "Bodyweight classic for chest, shoulders, triceps and core.",
    steps: ["Start in a high plank, hands just wider than shoulders.", "Keep a straight line from head to heels.", "Lower your chest to the floor, elbows about 45 degrees out.", "Push the floor away until arms are straight."],
    tips: ["Squeeze glutes and abs the whole time.", "Use your knees or an incline to make it easier."],
    video: "https://youtu.be/IODxDxX7oi4?si=n2pViV9I1jQ3--Y3" }, // push-up form video
  { name: "Dumbbell Bench Press", group: "Chest", equipment: "Dumbbells + Bench", level: "Beginner",
    description: "Bench press with a bigger range of motion and better balance work.",
    steps: ["Sit with dumbbells on your thighs, then lie back and kick them up.", "Hold them over your chest with palms forward.", "Lower until your elbows are just below the bench.", "Press up and slightly in."],
    tips: ["Control the weight down - do not drop it.", "Pick a weight you can lift with clean form."] ,
    video: "https://youtu.be/QsYre__-aro?si=jTf29sIR9ZabVZHQ" }, // dumbbell bench press form video
  { name: "Incline Dumbbell Press", group: "Chest", equipment: "Dumbbells + Incline Bench", level: "Intermediate",
    description: "Targets the upper chest and front shoulders.",
    steps: ["Set the bench to about 30 degrees.", "Kick the dumbbells up to shoulder height.", "Press up until arms are straight.", "Lower slowly to a deep stretch."],
    tips: ["Steeper than 30-45 degrees shifts work to shoulders.", "Keep your back flat on the pad."],
    video: "https://youtu.be/IP4oeKh1Sd4?si=PwMtcQ-zW8N2Xhy6" }, // incline dumbbell press form video 
  { name: "Decline Bench Press", group: "Chest", equipment: "Barbell + Decline Bench", level: "Intermediate",
    description: "Emphasises the lower chest.",
    steps: ["Secure your legs on the decline bench.", "Unrack the bar with a medium grip.", "Lower it to your lower chest.", "Press back to straight arms."],
    tips: ["Use a spotter or safety pins.", "Do not bounce the bar off your ribs."],
    video: "https://youtu.be/NM5lbuq92Aw?si=DEzlwN_6AScMQSmO" }, // decline bench press form video 
  { name: "Cable Chest Fly", group: "Chest", equipment: "Cable Machine", level: "Beginner",
    description: "Isolation move that keeps tension on the chest throughout.",
    steps: ["Set pulleys at chest height and hold a handle in each hand.", "Step forward with a slight elbow bend.", "Bring your hands together in a wide arc.", "Return slowly, feeling the stretch."],
    tips: ["Keep the elbow bend the same.", "Go light - this is not an ego lift."] ,
    video: "https://youtu.be/8Um35Es-ROE?si=qkq-K3D2axkbkPxd" }, // cable chest fly form video
  { name: "Chest Dips", group: "Chest", equipment: "Dip Bars", level: "Intermediate",
    description: "Heavy bodyweight press for lower chest and triceps.",
    steps: ["Support yourself on the bars with straight arms.", "Lean your torso forward slightly.", "Lower until upper arms are parallel to the floor.", "Press back up."],
    tips: ["Leaning forward hits chest more.", "Use an assisted machine if you need help."],
    video: "https://youtu.be/yN6Q1UI_xkE?si=sVVr402P-IXhCmiX" }, // chest dips form video
  { name: "Pec Deck Machine", group: "Chest", equipment: "Machine", level: "Beginner",
    description: "Safe, easy chest isolation for beginners.",
    steps: ["Adjust the seat so handles are at chest height.", "Keep your back on the pad.", "Bring the handles together in front of you.", "Return slowly."],
    tips: ["Do not let the weight stack slam.", "Squeeze for a second at the front."] ,
    video: "https://youtu.be/u56jywgbvE4?si=Vmwr-_cAwVBSy3vu" }, // pec deck machine form video 

  // ───────────── BACK ─────────────
  { name: "Conventional Deadlift", group: "Back", equipment: "Barbell", level: "Advanced",
    description: "Full-body pull that builds the back, glutes and hamstrings.",
    steps: ["Stand with the bar over mid-foot, feet hip-width.", "Hinge down and grip just outside your legs.", "Brace, keep your back flat, and push the floor away.", "Stand tall, then lower with control."],
    tips: ["Never round your lower back.", "Learn the hip hinge with light weight first."] ,
    video: "https://youtu.be/XxWcirHIwVo?si=Tpi3TjhNqGlvQTtR" }, // conventional deadlift form video 
  { name: "Pull-Up", group: "Back", equipment: "Pull-Up Bar", level: "Intermediate",
    description: "The best bodyweight move for lats and upper back.",
    steps: ["Hang with hands just outside shoulder width.", "Pull shoulder blades down, then pull chest to the bar.", "Get your chin over the bar without swinging.", "Lower to a full hang."],
    tips: ["Use a band or assisted machine to start.", "Avoid kipping while learning."] ,
    video: "https://youtu.be/p40iUjf02j0?si=sfBOn--Z4Oj6i-M4" }, // pull-up form video
  { name: "Bent-Over Barbell Row", group: "Back", equipment: "Barbell", level: "Intermediate",
    description: "Builds a thick upper back and strong lats.",
    steps: ["Hinge forward until your torso is about 45 degrees.", "Keep your back flat, knees slightly bent.", "Pull the bar to your lower ribs.", "Lower with control."],
    tips: ["Do not jerk with your lower back.", "Squeeze shoulder blades at the top."] ,
    video: "https://youtu.be/FWJR5Ve8bnQ?si=h8Zye3ItqEVlX9Jt" }, // bent-over barbell row form video
  { name: "Lat Pulldown", group: "Back", equipment: "Cable Machine", level: "Beginner",
    description: "Machine alternative to pull-ups, great for beginners.",
    steps: ["Lock your thighs under the pads.", "Grab the bar slightly wider than shoulders.", "Lean back a little and pull the bar to upper chest.", "Let it rise slowly."],
    tips: ["Lead with your elbows.", "Never pull behind your neck."] ,
    video: "https://youtu.be/SALxEARiMkw?si=7YzgnpV0NSr1ZBTX" }, // lat pulldown form video 
  { name: "Seated Cable Row", group: "Back", equipment: "Cable Machine", level: "Beginner",
    description: "Easy-to-learn row for mid-back thickness.",
    steps: ["Sit with feet on the platform, knees slightly bent.", "Pull the handle to your belly button.", "Squeeze your shoulder blades together.", "Extend arms slowly."],
    tips: ["Do not rock your body back and forth.", "Keep your chest up."] ,
    video: "https://youtu.be/sP_4vybjVJs?si=G1VJcbhMt6uDAhLK" }, // seated cable row form video
  { name: "One-Arm Dumbbell Row", group: "Back", equipment: "Dumbbell + Bench", level: "Beginner",
    description: "Trains each side of the back separately.",
    steps: ["Place one hand and knee on a bench.", "Hold a dumbbell with the other hand.", "Pull it toward your hip.", "Lower to a full stretch."],
    tips: ["Keep your back flat.", "Pull with your elbow, not your hand."],
    video: "https://youtu.be/gfUg6qWohTk?si=GErPQPFb6qsORn3Y" }, // one-arm dumbbell row form video
  { name: "T-Bar Row", group: "Back", equipment: "T-Bar / Landmine", level: "Intermediate",
    description: "Heavy rowing move for back thickness.",
    steps: ["Straddle the bar and hinge forward.", "Grip the handle with a flat back.", "Pull the weight to your chest.", "Lower under control."],
    tips: ["Keep your neck neutral.", "Use a controlled tempo."],
    video: "https://youtu.be/5foJiIVhs8Q?si=LzsCtM7_U-on_ADW" }, // t-bar row form video 
  { name: "Hyperextension", group: "Back", equipment: "Hyperextension Bench", level: "Beginner",
    description: "Strengthens the lower back and glutes.",
    steps: ["Set the pad at hip level and cross your arms.", "Lower your torso with a flat back.", "Raise until your body is in a straight line.", "Pause, then repeat."],
    tips: ["Do not over-arch at the top.", "Add a plate only after bodyweight feels easy."] ,
    video: "https://youtu.be/ph3pddpKzzw?si=2Ldfz4pDjRu385GS" }, // hyperextension form video

  // ───────────── SHOULDERS ─────────────
  { name: "Overhead Press", group: "Shoulders", equipment: "Barbell", level: "Intermediate",
    description: "Builds strong, wide shoulders and triceps.",
    steps: ["Hold the bar at shoulder height, hands just outside shoulders.", "Brace abs and squeeze glutes.", "Press straight up, moving your head through.", "Lock out overhead, then lower."],
    tips: ["Do not lean back excessively.", "Keep wrists straight."],
    video: "https://youtu.be/KP1sYz2VICk?si=137ly44pJfc_W_uJ" }, // overhead press form video 
  { name: "Dumbbell Shoulder Press", group: "Shoulders", equipment: "Dumbbells", level: "Beginner",
    description: "Beginner-friendly shoulder builder.",
    steps: ["Sit with dumbbells at shoulder height.", "Press them overhead until arms are straight.", "Lower slowly to shoulder level."],
    tips: ["Keep your core tight.", "Do not flare ribs upward."],
    video: "https://youtu.be/0JfYxMRsUCQ?si=o8-MTjQ13grCYGIM" }, // dumbbell shoulder press form video 
  { name: "Dumbbell Lateral Raise", group: "Shoulders", equipment: "Dumbbells", level: "Beginner",
    description: "Isolates the side delts for wider shoulders.",
    steps: ["Hold light dumbbells at your sides.", "Raise arms out to shoulder height.", "Pause briefly.", "Lower slowly."],
    tips: ["Use light weight and strict form.", "Lead with your elbows."] ,
    video: "https://youtu.be/geenhiHju-o?si=fvlFTNJDoNG9VoL6" }, // dumbbell lateral raise form video
  { name: "Front Raise", group: "Shoulders", equipment: "Dumbbells / Plate", level: "Beginner",
    description: "Targets the front delts.",
    steps: ["Hold weights in front of your thighs.", "Raise them to shoulder height.", "Lower slowly."],
    tips: ["Do not swing your body.", "Keep a slight bend in your elbows."] ,
    video: "https://youtu.be/gzDawZwDC6Y?si=-I1z2Bv1P3Zgr6fh" }, // front raise form video 
  { name: "Rear Delt Fly", group: "Shoulders", equipment: "Dumbbells", level: "Beginner",
    description: "Builds rear delts for posture and shoulder balance.",
    steps: ["Hinge forward with a flat back.", "Raise dumbbells out to the sides.", "Squeeze your shoulder blades.", "Lower slowly."],
    tips: ["Go light.", "Think 'reach wide', not 'lift high'."],
    video: "https://youtu.be/EA7u4Q_8HQ0?si=IhOz_RDnkro0vboR" }, // rear delt fly form video 
  { name: "Face Pull", group: "Shoulders", equipment: "Cable + Rope", level: "Beginner",
    description: "Great for rear delts, upper back and shoulder health.",
    steps: ["Set the cable at upper-chest height with a rope.", "Pull toward your face, splitting the ends apart.", "Squeeze shoulder blades together.", "Return slowly."],
    tips: ["Keep the weight light.", "Elbows stay high."] ,
    video: "https://youtu.be/3pToT5_DUiY?si=OJSEiDAzxfMay440" }, // face pull form video 
  { name: "Arnold Press", group: "Shoulders", equipment: "Dumbbells", level: "Intermediate",
    description: "Rotating press that works all three delt heads.",
    steps: ["Start with dumbbells in front of your chest, palms facing you.", "Press up while rotating palms forward.", "Reverse the rotation as you lower."],
    tips: ["Move smoothly - no jerking.", "Use lighter weights than a normal press."] ,
    video: "https://youtu.be/ris9tKqMwgU?si=DfyYi7-YgDbSpfmi" }, // arnold press form video 

  // ───────────── BICEPS ─────────────
  { name: "Barbell Curl", group: "Biceps", equipment: "Barbell / EZ-Bar", level: "Beginner",
    description: "Classic mass builder for the biceps.",
    steps: ["Stand holding the bar with an underhand grip.", "Curl up keeping elbows at your sides.", "Squeeze at the top.", "Lower slowly."],
    tips: ["No swinging.", "Full range beats heavy weight."],
    video: "https://youtu.be/kwG2ipFRgfo?si=KA9PlHikdjMDbiu9" }, // barbell curl form video 
  { name: "Dumbbell Bicep Curl", group: "Biceps", equipment: "Dumbbells", level: "Beginner",
    description: "The go-to move for bigger biceps.",
    steps: ["Hold dumbbells, palms forward.", "Curl up, elbows pinned.", "Squeeze, then lower slowly."],
    tips: ["Alternate arms if it helps your form.", "Control the way down."],
    video: "https://youtu.be/ykJmrZ5v0Oo?si=d6ZZdya-7lD27Luc" }, // dumbbell bicep curl form video 
  { name: "Hammer Curl", group: "Biceps", equipment: "Dumbbells", level: "Beginner",
    description: "Builds the brachialis and forearms along with biceps.",
    steps: ["Hold dumbbells with palms facing each other.", "Curl up without twisting your wrists.", "Lower slowly."],
    tips: ["Keep elbows still.", "Great for thicker-looking arms."] ,
    video: "https://youtu.be/TwD-YGVP4Bk?si=yeC4fL7zP_6GaOxn" }, // hammer curl form video
  { name: "Preacher Curl", group: "Biceps", equipment: "EZ-Bar + Preacher Bench", level: "Intermediate",
    description: "Isolates the biceps by removing momentum.",
    steps: ["Rest your upper arms on the pad.", "Curl the bar up.", "Lower until arms are nearly straight."],
    tips: ["Do not fully lock out at the bottom.", "Use moderate weight."] ,
    video: "https://youtu.be/fIWP-FRFNU0?si=8n3vgaa7bFEkgfqn" }, // preacher curl form video 
  { name: "Incline Dumbbell Curl", group: "Biceps", equipment: "Dumbbells + Incline Bench", level: "Intermediate",
    description: "Stretches the biceps for a deep contraction.",
    steps: ["Sit back on a 45-degree bench with arms hanging.", "Curl both dumbbells up.", "Lower slowly to a full stretch."],
    tips: ["Keep shoulders back on the pad.", "Go lighter than standing curls."] ,
    video: "https://youtu.be/b4jOP-spQW8?si=mB-7VRbUTBdU51b4" }, // incline dumbbell curl form video 
  { name: "Cable Curl", group: "Biceps", equipment: "Cable Machine", level: "Beginner",
    description: "Constant tension all the way through the curl.",
    steps: ["Stand facing a low cable with a straight bar.", "Curl up with elbows at your sides.", "Lower slowly."],
    tips: ["Stand tall.", "Squeeze at the top."] ,
    video: "https://youtu.be/NFzTWp2qpiE?si=E7_SYC3kJo5brkRV" }, // cable curl form video

  // ───────────── TRICEPS ─────────────
  { name: "Triceps Rope Pushdown", group: "Triceps", equipment: "Cable Machine", level: "Beginner",
    description: "Isolates the triceps for size and lockout strength.",
    steps: ["Face a high cable holding a rope.", "Keep elbows tucked at your sides.", "Push down and spread the rope ends.", "Return until forearms pass parallel."],
    tips: ["Elbows do not move.", "Do not lean over the cable."] ,
    video: "https://youtu.be/-xa-6cQaZKY?si=egPUBd56bIo-6SjI" }, // triceps rope pushdown form video
  { name: "Skull Crusher", group: "Triceps", equipment: "EZ-Bar + Bench", level: "Intermediate",
    description: "Heavy triceps extension for mass.",
    steps: ["Lie back holding the bar over your chest.", "Bend elbows to lower it toward your forehead.", "Extend back to straight arms."],
    tips: ["Keep upper arms still.", "Use a spotter if going heavy."],
    video: "https://youtu.be/d_KZxkY_0cM?si=asmqyjjrKZ2exd3j" }, // skull crusher form video 
  { name: "Overhead Triceps Extension", group: "Triceps", equipment: "Dumbbell / Cable", level: "Beginner",
    description: "Stretches the long head of the triceps.",
    steps: ["Hold one dumbbell overhead with both hands.", "Lower it behind your head.", "Extend back up."],
    tips: ["Keep elbows pointing forward.", "Do not arch your back."] ,
    video: "https://youtu.be/_gsUck-7M74?si=EpcLK87sT7EJGbyz" }, // overhead triceps extension form video 
  { name: "Close-Grip Bench Press", group: "Triceps", equipment: "Barbell + Bench", level: "Intermediate",
    description: "Heavy compound press with a triceps focus.",
    steps: ["Grip the bar about shoulder width.", "Lower to your lower chest, elbows in.", "Press back up."],
    tips: ["Do not go too narrow - it hurts wrists.", "Keep elbows tucked."],
    video: "https://youtu.be/UYJsFzqdgK4?si=MQNz_FrSl8f8Uw_p" }, // close-grip bench press form video 
  { name: "Bench Dips", group: "Triceps", equipment: "Bench", level: "Beginner",
    description: "Easy bodyweight triceps exercise.",
    steps: ["Place hands on a bench behind you.", "Lower your body by bending elbows.", "Press back up."],
    tips: ["Keep your back close to the bench.", "Stop if shoulders feel pinched."] ,
    video: "https://youtu.be/c3ZGl4pAwZ4?si=wGm11wtEsaOPQbIR" }, // bench dips form video 
  { name: "Triceps Kickback", group: "Triceps", equipment: "Dumbbells", level: "Beginner",
    description: "Light isolation move for triceps definition.",
    steps: ["Hinge forward with your upper arm pinned to your side.", "Extend the elbow to straighten your arm.", "Return slowly."],
    tips: ["Use light weight.", "Keep your upper arm still."] ,
    video: "https://youtu.be/6SS6K3lAwZ8?si=kyYuCeySSQzk4LAe" }, // triceps kickback form video 

  // ───────────── FOREARMS ─────────────
  { name: "Wrist Curl", group: "Forearms", equipment: "Dumbbells / Barbell", level: "Beginner",
    description: "Builds forearm flexors and grip.",
    steps: ["Rest forearms on your thighs, palms up.", "Curl the weight up with your wrists.", "Lower slowly."],
    tips: ["Use light weight, high reps.", "Do not lift your forearms off your thighs."],
    video: "https://youtu.be/u61QWKYgbxI?si=jDkUl20TAL-0dmgf" }, // wrist curl form video 
  { name: "Reverse Wrist Curl", group: "Forearms", equipment: "Dumbbells / Barbell", level: "Beginner",
    description: "Builds the top of the forearm.",
    steps: ["Rest forearms on your thighs, palms down.", "Raise the back of your hands up.", "Lower slowly."],
    tips: ["Stay light.", "Keep the movement smooth."],
    video: "https://youtu.be/FW7URAaC-vE?si=ARlG0BSb9fxdDa5l" }, // reverse wrist curl form video 
  { name: "Farmer's Walk", group: "Forearms", equipment: "Heavy Dumbbells", level: "Beginner",
    description: "Builds grip, traps and total-body strength.",
    steps: ["Pick up heavy dumbbells at your sides.", "Stand tall, shoulders back.", "Walk with short, steady steps."],
    tips: ["Do not let your shoulders shrug forward.", "Walk 20-40 metres per set."] ,
    video: "https://youtu.be/nqGfgIVteoM?si=z54-j4h33oR4Mw3T" }, // farmer's walk form video 

  // ───────────── QUADS ─────────────
  { name: "Barbell Back Squat", group: "Quads", equipment: "Barbell + Rack", level: "Intermediate",
    description: "The king of leg exercises - quads, glutes and core.",
    steps: ["Set the bar on your upper back and step out.", "Feet shoulder-width, toes slightly out.", "Sit down and back to at least parallel.", "Drive through your whole foot to stand."],
    tips: ["Brace your core before every rep.", "Use safety pins in the rack."] ,
    video: "https://youtu.be/gcNh17Ckjgg?si=TnkUnvl2bsz5KsD5" }, // barbell back squat form video
  { name: "Front Squat", group: "Quads", equipment: "Barbell + Rack", level: "Advanced",
    description: "More upright squat that emphasises the quads.",
    steps: ["Rest the bar on your front shoulders, elbows high.", "Squat down keeping your chest up.", "Drive up."],
    tips: ["Needs good wrist and shoulder mobility.", "Start lighter than back squat."],
    video: "https://youtu.be/tlfahNdNPPI?si=l4E-RDJxmViMwqlE" }, // front squat form video
  { name: "Goblet Squat", group: "Quads", equipment: "Dumbbell / Kettlebell", level: "Beginner",
    description: "The best squat to learn good form.",
    steps: ["Hold a weight at your chest.", "Squat down between your knees.", "Stand back up."],
    tips: ["Keep chest tall.", "Push knees out over toes."],
    video: "https://youtu.be/meJSJEG_sT0?si=owKsqpfad_l1BKoW" }, // goblet squat form video
  { name: "Leg Press", group: "Quads", equipment: "Leg Press Machine", level: "Beginner",
    description: "A safe way to load the quads and glutes.",
    steps: ["Sit with back flat and feet shoulder-width on the platform.", "Lower until knees reach about 90 degrees.", "Press back up without locking hard."],
    tips: ["Hips must not lift off the seat.", "No bouncing at the bottom."] ,
    video: "https://youtu.be/oujca3_Shgw?si=FvTPhLNZLz2uqg5A" }, // leg press form video 
  { name: "Leg Extension", group: "Quads", equipment: "Machine", level: "Beginner",
    description: "Isolates the quadriceps.",
    steps: ["Adjust the pad above your ankles.", "Extend your knees until legs are straight.", "Lower slowly."],
    tips: ["Squeeze at the top.", "Avoid heavy, jerky reps."],
    video: "https://youtu.be/KtgdO4QEdHk?si=yKXQvVKbMpSpudj5" }, // leg extension form video 
  { name: "Walking Lunge", group: "Quads", equipment: "Bodyweight / Dumbbells", level: "Beginner",
    description: "Builds single-leg strength, balance and glutes.",
    steps: ["Take a big step forward.", "Lower until both knees are about 90 degrees.", "Push through the front heel and step forward."],
    tips: ["Keep your torso upright.", "Front knee tracks over toes."] ,
    video: "https://youtu.be/Pbmj6xPo-Hw?si=kCXznx4wjV95iuGH" }, // walking lunge form video 
  { name: "Bulgarian Split Squat", group: "Quads", equipment: "Bench + Dumbbells", level: "Intermediate",
    description: "Tough single-leg squat for quads and glutes.",
    steps: ["Put your back foot on a bench behind you.", "Lower straight down on the front leg.", "Drive up through the front heel."],
    tips: ["Step far enough forward.", "Go slowly - balance is the challenge."],
    video: "https://youtu.be/2C-uNgKwPLE?si=4VHb9NXakFzFQrdG" }, // bulgarian split squat form video

  // ───────────── HAMSTRINGS ─────────────
  { name: "Romanian Deadlift", group: "Hamstrings", equipment: "Barbell / Dumbbells", level: "Intermediate",
    description: "Targets hamstrings and glutes with a controlled hinge.",
    steps: ["Stand holding the weight at your thighs.", "Push hips back, sliding the weight down your legs.", "Lower until you feel a strong hamstring stretch.", "Squeeze glutes to stand."],
    tips: ["Keep the bar close to your legs.", "It is a hinge, not a squat."],
    video: "https://youtu.be/JCXUYuzwNrM?si=85n6SY65GZU3D0pN" }, // romanian deadlift form video
  { name: "Lying Leg Curl", group: "Hamstrings", equipment: "Machine", level: "Beginner",
    description: "Isolates the hamstrings.",
    steps: ["Lie face down with the pad above your heels.", "Curl your heels toward your glutes.", "Lower slowly."],
    tips: ["Keep hips on the bench.", "Control the negative."],
    video: "https://youtu.be/1Tq3QdYUuHs?si=x_vqNLJoQY9cuD7B" }, // lying leg curl form video
  { name: "Seated Leg Curl", group: "Hamstrings", equipment: "Machine", level: "Beginner",
    description: "Machine hamstring curl with a seated stretch.",
    steps: ["Sit with the pad above your heels.", "Curl your legs down and back.", "Return slowly."],
    tips: ["Sit tall.", "Do not use momentum."] ,
    video: "https://youtu.be/ELOCsoDSmrg?si=W4DZgTI4zmjUFCR4" }, // seated leg curl form video
  { name: "Good Morning", group: "Hamstrings", equipment: "Barbell", level: "Advanced",
    description: "Hip-hinge move for hamstrings and lower back.",
    steps: ["Bar on your upper back, feet shoulder-width.", "Hinge at the hips with a flat back.", "Stand back up."],
    tips: ["Use light weight.", "Keep a soft knee bend."],
    video: "https://youtu.be/5Xj6XUa77qc?si=zo7FY7AVCoU1Mlxa" }, // good morning form video 
  { name: "Single-Leg Romanian Deadlift", group: "Hamstrings", equipment: "Dumbbells", level: "Intermediate",
    description: "Builds hamstring strength and balance.",
    steps: ["Stand on one leg holding a dumbbell.", "Hinge forward as the other leg lifts behind you.", "Return to standing."],
    tips: ["Keep hips square.", "Hold a wall for balance at first."],
    video: "https://youtube.com/shorts/iRKxRm0zLgA?si=YW_3l9AU95MyzOtw" }, // single-leg romanian deadlift form video 

  // ───────────── GLUTES ─────────────
  { name: "Barbell Hip Thrust", group: "Glutes", equipment: "Barbell + Bench", level: "Intermediate",
    description: "The best exercise for glute size and strength.",
    steps: ["Sit with your upper back on a bench, bar over your hips.", "Drive your hips up until your body is straight.", "Squeeze glutes hard, then lower."],
    tips: ["Chin tucked, ribs down.", "Use a pad on the bar."],
    video: "https://youtu.be/pUdIL5x0fWg?si=t0mPbvcb64IA8VZo" }, // barbell hip thrust form video 
  { name: "Glute Bridge", group: "Glutes", equipment: "Bodyweight", level: "Beginner",
    description: "Easy glute activation move.",
    steps: ["Lie on your back, knees bent, feet flat.", "Push through your heels to lift your hips.", "Squeeze at the top, then lower."],
    tips: ["Do not over-arch your back.", "Pause for 1-2 seconds at the top."],
    video: "https://youtu.be/OUgsJ8-Vi0E?si=23y7TMR0kK4t3Wtk" }, // glute bridge form video 
  { name: "Cable Glute Kickback", group: "Glutes", equipment: "Cable + Ankle Strap", level: "Beginner",
    description: "Isolates the glutes.",
    steps: ["Attach the strap to your ankle.", "Kick your leg straight back.", "Return slowly."],
    tips: ["Do not swing your torso.", "Squeeze at the back."],
    video: "https://youtu.be/l4zReIOfPCQ?si=yhJy2YML72itsxKb" }, // cable glute kickback form video
  { name: "Step-Up", group: "Glutes", equipment: "Box / Bench + Dumbbells", level: "Beginner",
    description: "Functional single-leg strength.",
    steps: ["Place one foot on a box.", "Drive through that heel to stand on top.", "Step down slowly."],
    tips: ["Do not push off the back foot.", "Choose a box that keeps your knee at about 90 degrees."] ,
    video: "https://youtu.be/wfhXnLILqdk?si=xa6hqMdea_qZnVV1" }, // step-up form video 
  { name: "Sumo Deadlift", group: "Glutes", equipment: "Barbell", level: "Intermediate",
    description: "Wide-stance pull for glutes, inner thighs and back.",
    steps: ["Stand wide with toes out and grip the bar inside your knees.", "Chest up, back flat.", "Push the floor apart and stand tall."],
    tips: ["Knees track over toes.", "Keep the bar close."],
    video: "https://youtu.be/XsrD5y8EIKU?si=7w9jlh2uPqTke82O" }, // sumo deadlift form video 

  // ───────────── CALVES ─────────────
  { name: "Standing Calf Raise", group: "Calves", equipment: "Machine / Step", level: "Beginner",
    description: "The main calf builder.",
    steps: ["Stand with the balls of your feet on an edge.", "Rise as high as you can.", "Lower to a deep stretch."],
    tips: ["Pause at the top.", "Use a full range of motion."],
    video: "https://youtu.be/k67UjgvJdEk?si=tT_Aj5zKLDNOka9q" }, // standing calf raise form video
  { name: "Seated Calf Raise", group: "Calves", equipment: "Machine", level: "Beginner",
    description: "Targets the soleus, the deeper calf muscle.",
    steps: ["Sit with the pad on your thighs.", "Raise your heels.", "Lower slowly."],
    tips: ["Go slow.", "Higher reps work well here."] ,
    video: "https://youtu.be/xz7sqxaJ-Ck?si=WbuV-F2aXu61WTpo" }, // seated calf raise form video 
  { name: "Leg Press Calf Raise", group: "Calves", equipment: "Leg Press Machine", level: "Beginner",
    description: "Heavy calf work with back support.",
    steps: ["Place the balls of your feet on the bottom of the platform.", "Press through your toes.", "Lower for a stretch."],
    tips: ["Do not lock your knees hard.", "Control the weight."] ,
    video: "https://youtu.be/M4FojyRAcuE?si=gx8lKEBHKC9aAKUM" }, // leg press calf raise form video 

  // ───────────── ABS ─────────────
  { name: "Plank", group: "Abs", equipment: "Bodyweight", level: "Beginner",
    description: "Builds deep core strength and posture.",
    steps: ["Rest on forearms and toes, elbows under shoulders.", "Keep a straight line from head to heels.", "Squeeze abs and glutes and breathe."],
    tips: ["Do not let your hips sag.", "Quality over duration."],
    video: "https://youtu.be/6LqqeBtFn9M?si=KrgMQdsG5Rq6CfSh" }, // plank form video 
  { name: "Crunch", group: "Abs", equipment: "Bodyweight", level: "Beginner",
    description: "Simple upper-abs exercise.",
    steps: ["Lie on your back, knees bent.", "Curl your shoulders off the floor.", "Lower slowly."],
    tips: ["Do not pull on your neck.", "Exhale as you curl up."],
    video: "https://youtu.be/MKmrqcoCZ-M?si=FapnHa57qgD-wGMZ" }, // crunch form video 
  { name: "Hanging Leg Raise", group: "Abs", equipment: "Pull-Up Bar", level: "Advanced",
    description: "Strong lower-abs and hip-flexor exercise.",
    steps: ["Hang from a bar with straight arms.", "Raise your legs to hip height or above.", "Lower without swinging."],
    tips: ["Bend your knees to make it easier.", "Tilt your pelvis up at the top."],
    video: "https://youtu.be/_jLskVdzS4o?si=VWJ-eK-XfLDy8e1q" }, // hanging leg raise form video 
  { name: "Cable Crunch", group: "Abs", equipment: "Cable + Rope", level: "Intermediate",
    description: "Weighted crunch for stronger abs.",
    steps: ["Kneel below a high cable holding the rope by your head.", "Curl your ribs toward your hips.", "Return slowly."],
    tips: ["Move from your abs, not your hips.", "Keep your arms still."],
    video: "https://youtube.com/shorts/9ff9RHItABI?si=8SK5dhTORZHAAgaw" }, // cable crunch form video 
  { name: "Russian Twist", group: "Abs", equipment: "Bodyweight / Plate", level: "Beginner",
    description: "Works the obliques and rotational strength.",
    steps: ["Sit with knees bent and lean back with a flat back.", "Rotate your torso to one side.", "Rotate to the other side."],
    tips: ["Lift your feet to make it harder.", "Rotate from your ribcage."],
    video: "https://youtu.be/fCHFQTBqm-U?si=Yq1JXdBk113mlHSF" }, // russian twist form video 
  { name: "Bicycle Crunch", group: "Abs", equipment: "Bodyweight", level: "Beginner",
    description: "Hits upper abs and obliques together.",
    steps: ["Lie on your back with hands by your head.", "Bring one knee in as you twist the opposite elbow to it.", "Switch sides in a pedalling motion."],
    tips: ["Go slow and controlled.", "Do not pull on your neck."],
    video: "https://youtu.be/eqg47ZuGZXQ?si=9nfzybbS0dxnonqx" }, // bicycle crunch form video 
  { name: "Ab Wheel Rollout", group: "Abs", equipment: "Ab Wheel", level: "Advanced",
    description: "Brutal full-core exercise.",
    steps: ["Kneel holding the wheel under your shoulders.", "Roll forward as far as you can keep your back flat.", "Pull back using your abs."],
    tips: ["Start with a short range.", "Do not let your lower back sag."],
    video: "https://youtu.be/_BHKT60P6bc?si=M7AZd5y93Mp7qj15" }, // ab wheel rollout form video 
  { name: "Side Plank", group: "Abs", equipment: "Bodyweight", level: "Beginner",
    description: "Strengthens obliques and stabilises the spine.",
    steps: ["Lie on your side, elbow under your shoulder.", "Lift your hips to form a straight line.", "Hold, then switch sides."],
    tips: ["Stack your feet or stagger them for balance.", "Keep your hips high."] ,
    video: "https://youtu.be/NXr4Fw8q60o?si=Td-2WfbSEtwa2hp0" }, // side plank form video 

  // ───────────── CARDIO ─────────────
  { name: "Burpee", group: "Cardio", equipment: "Bodyweight", level: "Intermediate",
    description: "Full-body conditioning move that spikes your heart rate.",
    steps: ["Squat down and place your hands on the floor.", "Jump your feet back to a plank.", "Jump your feet in and explode upward."],
    tips: ["Step back instead of jumping to make it easier.", "Pace yourself."] ,
    video: "https://youtu.be/G2hv_NYhM-A?si=9PF7CBxEwRDubLDI" }, // burpee form video 
  { name: "Jump Rope", group: "Cardio", equipment: "Jump Rope", level: "Beginner",
    description: "Cheap, effective cardio that improves coordination.",
    steps: ["Hold handles at hip height, elbows close.", "Turn the rope with your wrists.", "Hop just high enough, landing softly."],
    tips: ["Start with 30-second rounds.", "Stay on the balls of your feet."],
    video: "https://youtu.be/wqN5bRkZPK0?si=d5KS97DDWjHYg6wn" }, // jump rope form video 
  { name: "Mountain Climbers", group: "Cardio", equipment: "Bodyweight", level: "Beginner",
    description: "Cardio and core in one.",
    steps: ["Start in a high plank.", "Drive one knee toward your chest.", "Switch legs quickly."],
    tips: ["Keep hips level.", "Only go faster if form stays clean."],
    video: "https://youtu.be/ZhiCSdOVJp0?si=Z8Gxz7am7nEQ4nlz" }, // mountain climbers form video
  { name: "Treadmill Intervals", group: "Cardio", equipment: "Treadmill", level: "Beginner",
    description: "Alternate hard and easy running to burn more in less time.",
    steps: ["Warm up 5 minutes.", "Run hard for 30-60 seconds.", "Walk or jog 60-90 seconds to recover.", "Repeat 6-10 times."],
    tips: ["Do not hold the handrails.", "Cool down for 5 minutes."],
    video: "https://youtu.be/P56kDH-vM3Q?si=tRnRWXSEMwQPtHvh" }, // treadmill intervals form video
  { name: "Rowing Machine", group: "Cardio", equipment: "Rowing Machine", level: "Beginner",
    description: "Low-impact full-body cardio.",
    steps: ["Push with your legs first.", "Then lean back and pull the handle to your chest.", "Reverse the order to return."],
    tips: ["Sequence: legs, body, arms.", "Keep your back straight."],
    video: "https://youtu.be/6_eLpWiNijE?si=2V_O9ZbnkMeegfnx" }, // rowing machine form video 
  { name: "Jumping Jacks", group: "Cardio", equipment: "Bodyweight", level: "Beginner",
    description: "Easy warm-up and light cardio.",
    steps: ["Stand with feet together.", "Jump your feet out as your arms rise overhead.", "Jump back to the start."],
    tips: ["Land softly.", "Great for warm-ups."],
    video: "https://youtube.com/shorts/7Pxr4xOrhNk?si=t4_xyVtj9qu6s4do" } // jumping jacks form video 
];

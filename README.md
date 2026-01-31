# 🏡 Lawn Care Tracker - Deployment Guide

A professional lawn care tracking application with weather integration, comprehensive product database, and PWA capabilities.

## 📱 Features

- **Real-time Weather Integration** - Automatic weather data for your location
- **60+ Products** - Real lawn mowers, fertilizers, spreaders, seeds, and treatments
- **Activity Tracking** - Log mowing, fertilizing, seeding, treatments, and more
- **Spreader Settings** - Track equipment and settings for consistent applications
- **Calendar View** - Visual timeline of all lawn care activities
- **Offline Support** - Works without internet connection (PWA)
- **Installable** - Add to home screen on iOS/Android like a native app

-----

## 🚀 Quick Deploy to GitHub Pages (5 minutes)

### Step 1: Create GitHub Account

1. Go to [github.com](https://github.com)
1. Click “Sign up” (if you don’t have an account)
1. Follow the registration process

### Step 2: Create New Repository

1. Click the “+” icon in top right → “New repository”
1. Repository name: `lawn-care-tracker` (or any name you want)
1. Description: “Track lawn maintenance activities”
1. Select “Public”
1. ✅ Check “Add a README file”
1. Click “Create repository”

### Step 3: Upload Files

1. In your repository, click “Add file” → “Upload files”
1. Upload these 4 files:
- `index.html` (rename lawn-care-tracker.html to index.html)
- `manifest.json`
- `service-worker.js`
- `README.md` (this file)
1. Click “Commit changes”

### Step 4: Enable GitHub Pages

1. Go to repository “Settings” tab
1. Click “Pages” in the left sidebar
1. Under “Source”, select “main” branch
1. Click “Save”
1. Wait 1-2 minutes for deployment

### Step 5: Visit Your Site! 🎉

Your site will be live at:

```
https://YOUR-USERNAME.github.io/lawn-care-tracker/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

-----

## 📱 Install as Mobile App

### iOS (iPhone/iPad):

1. Open the website in Safari
1. Tap the Share button (box with arrow)
1. Scroll down and tap “Add to Home Screen”
1. Name it “Lawn Care” and tap “Add”
1. The app icon will appear on your home screen!

### Android:

1. Open the website in Chrome
1. Tap the three dots menu
1. Tap “Add to Home screen” or “Install app”
1. Tap “Install”
1. The app will appear in your app drawer!

-----

## 🎨 Optional: Add Custom Icons

The app references icon files. You can create simple icons or use the default browser icons:

**Create icons (192x192 and 512x512 PNG):**

1. Use [Canva](https://canva.com) or any image editor
1. Create a simple green square with 🏡 emoji
1. Export as PNG: 192x192px and 512x512px
1. Name them `icon-192.png` and `icon-512.png`
1. Upload to your repository

**Or skip icons:**

- The app works fine without custom icons
- Browsers will use default icons

-----

## 🌐 Custom Domain (Optional)

Want `lawncare.com` instead of `username.github.io`?

1. Buy a domain from [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google)
1. In your repository settings → Pages
1. Enter your custom domain
1. Update your domain’s DNS settings (GitHub provides instructions)

-----

## 📊 How Data Works

**Important:** This app stores data locally on each device using browser localStorage.

**What this means:**

- ✅ Your data is private and secure
- ✅ No accounts or logins needed
- ✅ Works offline
- ⚠️ Data is device-specific (won’t sync between devices)
- ⚠️ Clearing browser data will delete your history

**To backup your data:**

- Your activities are stored in browser localStorage
- To backup: Use browser developer tools → Application → Local Storage → Copy data
- Or take screenshots of your history

**Future enhancement:** Add user accounts and cloud storage for multi-device sync.

-----

## 🔧 Customization

### Change Default Location:

Edit line ~257 in `index.html`:

```javascript
const defaultLat = 39.9852; // Your latitude
const defaultLon = -82.9848; // Your longitude
```

### Add More Products:

Edit the `PRODUCT_DATABASE` object (starts around line 20) to add your own mowers, fertilizers, etc.

### Change Theme Color:

Edit `manifest.json`:

```json
"theme_color": "#16a34a"  // Change to any hex color
```

-----

## 🐛 Troubleshooting

**Site not loading after deployment?**

- Wait 2-3 minutes for GitHub to build
- Check Settings → Pages shows “Your site is live at…”
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Weather not working?**

- App tries to use Open-Meteo API
- Falls back to demo data if API is blocked
- Works best with location permissions enabled

**Can’t install as app?**

- Make sure you’re using HTTPS (GitHub Pages is always HTTPS)
- Try clearing browser cache
- iOS requires Safari browser
- Android works best with Chrome

**Data disappeared?**

- Check if you’re in private/incognito mode (doesn’t persist)
- Clearing browser data deletes localStorage
- Try a different browser to verify

-----

## 📈 Future Enhancements

Want to add these features? Here are ideas:

1. **User Accounts & Cloud Sync**
- Use Firebase or Supabase for backend
- Sync data across devices
- Family sharing
1. **Photo Upload**
- Before/after photos
- Problem area documentation
- Progress tracking
1. **Reminders & Notifications**
- Fertilizer schedule alerts
- Seasonal task reminders
- Based on weather conditions
1. **Analytics Dashboard**
- Cost tracking
- Application frequency
- Product usage stats
1. **AI Recommendations**
- Based on weather and lawn history
- Product suggestions
- Optimal timing

-----

## 🤝 Contributing

Want to improve the app? Fork the repository and submit pull requests!

-----

## 📄 License

Free to use and modify for personal use.

-----

## 🆘 Support

Questions? Issues?

- Open an issue on GitHub
- Check existing issues for solutions

-----

## 🎉 You’re Done!

Your lawn care tracker is now live and accessible to anyone!

Share your site URL with friends and family who want to track their lawn care too.

**Your live site:** `https://YOUR-USERNAME.github.io/lawn-care-tracker/`

Enjoy tracking your lawn! 🌱

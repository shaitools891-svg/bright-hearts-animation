# Bright Hearts Brighter Society Website

A beautiful, animated, and multilingual (Bengali/English) website for the youth organization "আলোকিত হৃদয় আলোকিত সমাজ" / "Bright Hearts Brighter Society."

## 🌟 Features

- **Multilingual Support**: Toggle between Bengali and English
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Works perfectly on all devices
- **Admin Panel**: Password-protected content management
- **Free Hosting**: Deployable on GitHub Pages with zero cost
- **File-based CMS**: No database required, content stored in JSON files

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bright-hearts-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **View the website**
   Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔧 Admin Panel Setup

### First Time Setup

1. **Set Your Admin Password**
   - Open `src/pages/Admin.tsx`
   - Find line 6: `const ADMIN_PASSWORD_HASH = 'admin123';`
   - Change `'admin123'` to your desired password
   - Save the file

2. **Access Admin Panel**
   - Go to `yourwebsite.com/admin` (or `localhost:5173/admin` in development)
   - Enter your password to access the dashboard

### Admin Panel Features
- **Overview Dashboard**: See statistics and quick instructions
- **Content Management**: Step-by-step guides for each content type
- **File Structure**: Clear documentation of JSON file organization

## 📁 Content Management

All website content is stored in JSON files in the `public/data/` directory. You can edit these files directly to update your website content.

### File Structure

```
public/
├── data/
│   ├── team.json          # Team member profiles
│   ├── programs.json      # Programs and their updates
│   ├── events.json        # Upcoming events
│   ├── gallery.json       # Photo gallery items
│   └── postponed.json     # Postponed activities
└── images/
    ├── team/              # Team member photos
    ├── programs/          # Program cover images
    ├── gallery/           # Gallery photos
    ├── events/            # Event cover images
    └── updates/           # Program update images
```

### Adding New Content

#### 1. Adding a New Team Member

Edit `public/data/team.json`:

```json
{
  "id": 3,
  "name": "New Member Name",
  "nameBn": "নতুন সদস্যের নাম",
  "role": "Secretary",
  "roleBn": "সেক্রেটারি",
  "bio": "Brief description of the member.",
  "bioBn": "সদস্যের সংক্ষিপ্ত বিবরণ।",
  "image": "/images/team/new-member.jpg",
  "email": "newmember@brighthearts.org",
  "linkedin": "https://linkedin.com/in/newmember",
  "facebook": "https://facebook.com/newmember"
}
```

**Steps:**
1. Add the member's photo to `public/images/team/`
2. Add the JSON object to the team array
3. Commit and push changes

#### 2. Adding a New Program

Edit `public/data/programs.json`:

```json
{
  "id": 3,
  "title": "New Program Title",
  "titleBn": "নতুন প্রোগ্রামের শিরোনাম",
  "description": "Program description here.",
  "descriptionBn": "এখানে প্রোগ্রামের বিবরণ।",
  "image": "/images/programs/new-program.jpg",
  "status": "active",
  "startDate": "2024-03-01",
  "updates": []
}
```

#### 3. Adding a Program Update

Find your program in `public/data/programs.json` and add to the `updates` array:

```json
{
  "id": 1,
  "date": "2024-03-15",
  "title": "Update Title",
  "titleBn": "আপডেটের শিরোনাম",
  "content": "Update description here.",
  "contentBn": "এখানে আপডেটের বিবরণ।",
  "images": ["/images/updates/update-photo.jpg"]
}
```

#### 4. Adding a New Event

Edit `public/data/events.json`:

```json
{
  "id": 2,
  "title": "Event Title",
  "titleBn": "ইভেন্টের শিরোনাম",
  "description": "Event description.",
  "descriptionBn": "ইভেন্টের বিবরণ।",
  "date": "2024-07-20",
  "time": "15:00",
  "location": "Event Location",
  "locationBn": "ইভেন্টের স্থান",
  "image": "/images/events/new-event.jpg",
  "status": "upcoming"
}
```

#### 5. Adding Gallery Items

Edit `public/data/gallery.json`:

```json
{
  "id": 3,
  "title": "Photo Title",
  "titleBn": "ছবির শিরোনাম",
  "description": "Photo description.",
  "descriptionBn": "ছবির বিবরণ।",
  "image": "/images/gallery/new-photo.jpg",
  "category": "programs",
  "date": "2024-03-01"
}
```

### Image Management

#### Adding Images

1. **Upload your images** to the appropriate folder in `public/images/`
2. **Use descriptive names** (e.g., `john-doe.jpg`, `education-program.jpg`)
3. **Reference the image** in your JSON file using the path `/images/folder/filename.jpg`

#### Image Guidelines

- **Team photos**: 400x400px minimum, square aspect ratio preferred
- **Program/Event covers**: 800x600px minimum, landscape orientation
- **Gallery photos**: Any size, maintain good quality
- **Supported formats**: .jpg, .jpeg, .png, .webp

## 🚀 Deployment

### GitHub Pages (Recommended - Free)

1. **Prepare for deployment**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain (Optional)

1. **Add CNAME file**
   - Create `public/CNAME` file
   - Add your domain name (e.g., `brighthearts.org`)

2. **Configure DNS**
   - Point your domain to GitHub Pages
   - Follow [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 🔒 Security Notes

- The admin panel uses simple client-side password protection
- This is suitable for basic content management by trusted users
- For sensitive data, consider implementing proper authentication
- Change the default admin password before deploying

## 🛠️ Development

### Project Structure

```
src/
├── components/
│   ├── admin/             # Admin panel components
│   ├── sections/          # Website sections
│   └── ui/                # Reusable UI components
├── pages/                 # Page components
├── i18n/                  # Internationalization
└── lib/                   # Utility functions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

### Adding New Features

1. **Create components** in appropriate directories
2. **Follow the existing pattern** for multilingual support
3. **Use the design system** from `src/index.css`
4. **Test on different screen sizes**

## 🎨 Customization

### Colors and Themes

Edit `src/index.css` to customize the color scheme:

```css
:root {
  --primary: 210 100% 50%;
  --secondary: 25 95% 53%;
  /* Add your custom colors */
}
```

### Animations

The website uses Framer Motion for animations. Common patterns:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 🆘 Troubleshooting

### Common Issues

1. **Images not showing**: Check file paths and ensure images are in `public/images/`
2. **Admin panel not working**: Verify password in `src/pages/Admin.tsx`
3. **Build errors**: Check JSON syntax in data files
4. **Deployment issues**: Ensure GitHub Pages is enabled in repository settings

### Getting Help

1. Check the [GitHub Issues](../../issues) for your repository
2. Refer to [React documentation](https://react.dev/)
3. Check [Framer Motion docs](https://www.framer.com/motion/) for animation issues

## 📝 Content Guidelines

### Writing Content

- **Keep descriptions concise** but informative
- **Use consistent formatting** across all entries
- **Include both Bengali and English** versions
- **Update dates regularly** for events and programs

### Image Guidelines

- **Use high-quality images** that represent your organization well
- **Maintain consistent style** across similar content types
- **Optimize file sizes** for web (use tools like TinyPNG)
- **Use descriptive filenames** for better organization

## 🔄 Workflow for Content Updates

### For Regular Updates

1. **Edit JSON files** directly in your repository
2. **Add new images** to appropriate folders
3. **Commit changes** with descriptive messages
4. **Push to main branch** - site updates automatically

### For Major Changes

1. **Create a new branch** for testing
2. **Make and test changes** thoroughly
3. **Create a pull request** for review
4. **Merge to main** after approval

## 📞 Support

This website is designed to be maintained by non-technical users. The admin panel provides guidance for common tasks, and this README covers most scenarios you'll encounter.

For technical support or custom modifications, consider hiring a React developer familiar with the technologies used in this project.

---

**Built with ❤️ for Bright Hearts Brighter Society**

Technologies used: React, TypeScript, Tailwind CSS, Framer Motion, i18next
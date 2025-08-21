# Deployment Guide

This guide will help you deploy your Bright Hearts website to GitHub Pages for **FREE** with no limits.

## 🚀 One-Time Setup

### Step 1: Prepare Your Repository

1. **Fork or clone this repository** to your GitHub account
2. **Make sure the repository is public** (required for free GitHub Pages)

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **"GitHub Actions"**
5. The workflow will automatically deploy your site when you push to main branch

### Step 3: Update Your Admin Password

1. Open `src/pages/Admin.tsx` in your repository
2. Find line 6: `const ADMIN_PASSWORD_HASH = 'admin123';`
3. Change `'admin123'` to your desired password
4. Commit and push the change

### Step 4: First Deployment

Your site will automatically deploy when you push changes to the main branch. The deployment process takes about 2-3 minutes.

Your website will be available at:
```
https://yourusername.github.io/repository-name
```

## 🔄 Making Updates

### Method 1: Direct File Editing (Recommended for Non-Technical Users)

1. **Navigate to your repository** on GitHub
2. **Click on any file** you want to edit (e.g., `public/data/team.json`)
3. **Click the pencil icon** (Edit this file)
4. **Make your changes** directly in the browser
5. **Scroll down and commit changes** with a descriptive message
6. **Your site updates automatically** within 2-3 minutes

### Method 2: Local Development

If you're comfortable with Git:

```bash
# Clone your repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Start development server
npm run dev

# Make your changes, then:
git add .
git commit -m "Update content"
git push origin main
```

## 📁 Content Update Workflow

### Adding a New Team Member

1. **Add the photo**: 
   - Go to `public/images/team/` in your repository
   - Click "Add file" → "Upload files"
   - Upload your team member's photo (e.g., `john-doe.jpg`)
   - Commit the upload

2. **Update the data**:
   - Go to `public/data/team.json`
   - Click the pencil icon to edit
   - Add your new team member following the existing format
   - Commit the changes

### Adding a Program Update

1. **Add images (if any)**:
   - Upload to `public/images/updates/`
   - Commit the upload

2. **Update the program**:
   - Go to `public/data/programs.json`
   - Find your program and add to the "updates" array
   - Commit the changes

### Adding a New Event

1. **Add event image**:
   - Upload to `public/images/events/`
   - Commit the upload

2. **Update events data**:
   - Go to `public/data/events.json`
   - Add your new event
   - Commit the changes

## 🖼️ Image Management

### Uploading Images via GitHub Web Interface

1. **Navigate to the appropriate folder**:
   - Team photos: `public/images/team/`
   - Program images: `public/images/programs/`
   - Gallery photos: `public/images/gallery/`
   - Event images: `public/images/events/`

2. **Upload process**:
   - Click "Add file" → "Upload files"
   - Drag and drop or select your images
   - Use descriptive filenames (e.g., `john-doe.jpg`, `education-program.jpg`)
   - Add a commit message like "Add team member photo"
   - Click "Commit changes"

3. **Reference in JSON**:
   - Use the path `/images/folder/filename.jpg` in your JSON files
   - Example: `"image": "/images/team/john-doe.jpg"`

### Image Guidelines

- **File sizes**: Keep under 2MB for faster loading
- **Formats**: Use .jpg, .jpeg, .png, or .webp
- **Names**: Use lowercase with hyphens (e.g., `team-meeting-2024.jpg`)
- **Dimensions**: 
  - Team photos: 400x400px minimum
  - Program/Event covers: 800x600px minimum
  - Gallery photos: Any size, but maintain good quality

## 🔧 Custom Domain (Optional)

If you have your own domain:

1. **Add CNAME file**:
   - Create a new file in your repository root called `CNAME`
   - Add your domain name (e.g., `brighthearts.org`)
   - Commit the file

2. **Configure DNS**:
   - Point your domain's DNS to GitHub Pages
   - Add a `CNAME` record pointing to `yourusername.github.io`
   - Wait for DNS propagation (can take up to 24 hours)

## 🛡️ Security & Access

### Admin Panel Access

- Access at: `yoursite.com/admin`
- Password is set in `src/pages/Admin.tsx`
- Change the password before first deployment
- Share the password only with trusted team members

### GitHub Repository Access

- **For content updates**: Repository collaborators can edit files directly
- **For admin access**: Share the admin password separately
- **For technical changes**: Developers need repository write access

## 📊 Monitoring & Analytics

### GitHub Pages Stats

- View deployment status in the "Actions" tab of your repository
- Check site traffic in repository "Insights" → "Traffic"

### Adding Google Analytics (Optional)

1. Get your Google Analytics tracking ID
2. Add it to `index.html` in the `<head>` section
3. Commit and push the changes

## 🆘 Troubleshooting

### Common Issues

1. **Site not updating**:
   - Check the "Actions" tab for deployment status
   - Wait 2-3 minutes after pushing changes
   - Clear your browser cache

2. **Images not showing**:
   - Verify file paths in JSON files
   - Check that images are uploaded to the correct folders
   - Ensure filenames match exactly (case-sensitive)

3. **JSON errors**:
   - Use a JSON validator if you get syntax errors
   - Check for missing commas, brackets, or quotes
   - Compare with existing entries for proper format

4. **Admin panel not working**:
   - Verify the password in `src/pages/Admin.tsx`
   - Clear browser cache and localStorage
   - Check browser console for errors

### Getting Help

1. **Check deployment status**: Repository → Actions tab
2. **View error logs**: Click on failed deployment for details
3. **Validate JSON**: Use online JSON validators for data files
4. **Contact support**: Create an issue in your repository

## 🎯 Best Practices

### Content Management

- **Regular backups**: GitHub automatically versions your files
- **Descriptive commits**: Use clear commit messages
- **Test locally**: Use `npm run dev` to preview changes
- **Consistent formatting**: Follow existing patterns in JSON files

### Team Collaboration

- **Assign roles**: Give team members appropriate repository access
- **Document changes**: Use pull requests for major updates
- **Review process**: Have someone review content before publishing

### Performance

- **Optimize images**: Compress images before uploading
- **Monitor size**: Keep repository size reasonable
- **Regular cleanup**: Remove unused images and files

---

**Your website is now ready for free, unlimited hosting on GitHub Pages! 🎉**

Every time you push changes to your main branch, your site will automatically update within minutes.
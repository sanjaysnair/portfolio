# How to Add New Portfolio Projects

This guide will help you add new projects to your portfolio website.

## Quick Start

All portfolio content is stored in: **`src/data/portfolioData.json`**

## Adding a New Project

1. Open `src/data/portfolioData.json`
2. Find the `"portfolio"` array
3. Add a new project object at the end of the array:

```json
{
  "id": 5,
  "title": "Your Project Title",
  "description": "A brief description of what this project does and the problems it solves.",
  "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
  "link": "https://your-project-link.com",
  "category": "Web Development"
}
```

## Field Explanations

- **id**: A unique number (increment from the last project)
- **title**: The name of your project
- **description**: A 2-3 sentence description (max 150 characters recommended)
- **technologies**: Array of technologies used (shown as tags)
- **link**: URL to the live project or GitHub repository
- **category**: Project category (used for filtering)
  - Examples: "Web Development", "SaaS", "E-commerce", "Mobile App", "Data Visualization"

## Example: Adding an E-commerce Project

```json
{
  "id": 5,
  "title": "Fashion Store",
  "description": "Full-featured online fashion store with shopping cart, payment gateway, and order tracking.",
  "technologies": ["React", "Redux", "Node.js", "Stripe", "MongoDB"],
  "link": "https://fashion-store.com",
  "category": "E-commerce"
}
```

## Updating Existing Projects

1. Find the project by its `id` in the `portfolio` array
2. Update any field you want to change
3. Save the file - changes will appear automatically in development mode

## Removing Projects

1. Find the project in the `portfolio` array
2. Delete the entire object (including the curly braces)
3. Make sure to remove any trailing comma if it's the last item

## Tips

- **Description Length**: Keep descriptions concise - aim for 100-150 characters
- **Categories**: Use consistent category names for better filtering
- **IDs**: Always use unique, sequential IDs
- **Links**: Use `"#"` if the project is not yet deployed

## Updating Your Profile Information

In the same `portfolioData.json` file, you can also update:

### Profile Section
```json
"profile": {
  "name": "Your Name",
  "title": "Your Professional Title",
  "email": "your.email@example.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourprofile"
}
```

### About Section
```json
"about": {
  "description": "Your professional summary...",
  "highlights": [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ]
}
```

### Experience
Add or update job entries in the `experience` array.

### Skills
Update skills in four categories: `frontend`, `backend`, `database`, `tools`.

## After Making Changes

The website will automatically reload in development mode. If not:
1. Save all files
2. Refresh your browser
3. Check the browser console for any errors

## Need Help?

If you encounter any issues:
1. Check that all JSON syntax is correct (matching quotes, commas, brackets)
2. Use a JSON validator: https://jsonlint.com/

---

Happy showcasing! 🚀

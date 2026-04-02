# Clean Board

A clean and modern admin dashboard template built with Bootstrap 5. This template provides a responsive layout with a sidebar navigation, topbar with notifications, and various pre-built UI components.

## Features

- **Responsive Layout**: Mobile-friendly design with collapsible sidebar
- **Modern UI Components**: Cards, tables, forms, tabs, and modals
- **Notification System**: Interactive notification dropdown with unread indicators
- **User Profile Menu**: Dropdown menu with user information and actions
- **Authentication Pages**: Pre-built login and signup pages
- **Multiple Page Templates**:
  - Dashboard with stat widgets
  - Data tables
  - Form components (inputs, checks, radios, floating labels)
  - Card layouts (stat cards, profile cards, pricing cards)
  - Tabs and navigation
  - Modal dialogs

## Tech Stack

- **Bootstrap 5.3.3**: CSS framework for responsive design
- **Bootstrap Icons 1.11.3**: Icon library
- **Vanilla JavaScript**: No framework dependencies

## Getting Started

### Prerequisites

No build tools or package managers required. This is a static HTML template that runs directly in the browser.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clean-board
```

2. Open any HTML file in your browser:
```bash
# Using a simple HTTP server (recommended)
python3 -m http.server 8000
# Then navigate to http://localhost:8000/src/

# Or open directly in browser
open src/index.html
```

## Project Structure

```
clean-board/
├── src/
│   ├── index.html      # Main dashboard page
│   ├── login.html      # Login page
│   ├── signup.html     # Sign up page
│   ├── tables.html     # Data tables examples
│   ├── forms.html      # Form components
│   ├── cards.html      # Card layouts
│   ├── tabs.html       # Tab navigation
│   └── modals.html     # Modal dialogs
└── README.md
```

## Pages Overview

### Dashboard (`index.html`)
- Main landing page with welcome message
- Stat widgets showing metrics (users, revenue, sessions)
- Notification bell with dropdown
- User profile menu

### Authentication
- **Login** (`login.html`): Email/password login with social auth options
- **Sign Up** (`signup.html`): User registration form

### Components
- **Tables** (`tables.html`): Data table examples
- **Forms** (`forms.html`): Input fields, checkboxes, radios, floating labels
- **Cards** (`cards.html`): Stat cards, profile cards, pricing cards, colored cards
- **Tabs** (`tabs.html`): Tab navigation components
- **Modals** (`modals.html`): Modal dialog examples

## Customization

### Colors
The template uses Bootstrap's default color scheme. To customize:
- Modify the CSS variables in the `<style>` section of each page
- Primary color: `#1f2937` (sidebar background)
- Background: `#f5f6fa`

### Branding
Update the brand name "MyAdmin" in the sidebar:
```html
<h4 class="mb-4">MyAdmin</h4>
```

### Navigation
Edit the sidebar navigation in each page to add/remove menu items:
```html
<nav class="nav flex-column">
    <a class="nav-link" href="#"><i class="bi bi-icon me-2"></i> Menu Item</a>
</nav>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is available for personal and commercial use.

## Credits

- Built with [Bootstrap 5](https://getbootstrap.com/)
- Icons by [Bootstrap Icons](https://icons.getbootstrap.com/)
- Avatar images from [Pravatar](https://pravatar.cc/)

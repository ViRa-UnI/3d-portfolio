# 3D Web Developer Portfolio

This project is an interactive 3D office environment that functions as a web developer's portfolio, complete with a backend administration system.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary libraries and frameworks:

```bash
npm install three socket.io express mongodb react antd
```

4. Initialize the database:

```bash
node backend/database.js
```

5. Start the server:

```bash
node backend/server.js
```

6. Open `frontend/3d_office.html` in your browser to view the 3D portfolio.

## Usage

- Navigate through the 3D virtual office to view portfolio items.
- Interact with hotspots such as the computer for CV and wall screens for portfolio.
- Use the chat system for real-time communication.
- Log in to the admin backend for portfolio management, office customization, CV editing, visitor stats, and chat logs.

## Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## License

MIT

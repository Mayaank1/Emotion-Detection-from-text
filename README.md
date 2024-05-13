# Emotion Detector Web Application

This project aims to create a web application that takes input text from a Next.js website, processes it using Flask, and then provides it to a backend model for emotion detection. The detected emotion is then categorized into joy, shame, guilt, sadness, fear, anger, or disgust, and the relevant emoji is displayed on the website.

## Tech Stack
-Bi-Directional LSTM(model)
-Nextjs
-Tailwind css
-Flask

## Requirements

- Node.js
- Python 3
- Flask
- TensorFlow or other backend model for emotion detection
- Next.js

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/emotion-detector.git
   ```

2. Navigate to the project directory:

   ```bash
   cd emotion-detector
   ```

3. Install dependencies for the Flask server:

   ```bash
   pip install -r requirements.txt
   ```

4. Install dependencies for the Next.js website:

   ```bash
   cd client
   npm install
   ```

## Usage

1. Start the Flask server:

   ```bash
   python app.py
   ```

2. In a separate terminal, start the Next.js website:

   ```bash
   cd client
   npm run dev
   ```

3. Open your web browser and go to `http://localhost:3000` to access the website.

4. Enter text into the input field on the website and submit it.

5. The text will be sent to the Flask server, which will process it and send it to the backend model for emotion detection.

6. The detected emotion will be categorized, and the relevant emoji will be displayed on the website.

## Configuration

- You can configure the backend model for emotion detection by replacing the placeholder in `app.py` with your preferred model or API endpoint.

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, feel free to open an issue or create a pull request.

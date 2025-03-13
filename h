<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modify Elements with JavaScript</title>
    <style>
        .hidden {
            display: none;
        }
    </style>
</head>
<body>

    <h1 id="title">Hello, World!</h1>
    <a id="myLink" href="https://www.google.com" target="_blank">Go to Google</a>
    <button id="toggleBtn" onclick="modifyElements()">Click Me</button>

    <script>
        function modifyElements() {
            // 1️⃣ Change the font size of <h1> to 10rem
            document.querySelector('#title').style.fontSize = "10rem";

            // 2️⃣ Toggle the visibility of the button
            document.querySelector('#toggleBtn').classList.toggle('hidden');

            // 3️⃣ Change the link from Google to Bing
            let link = document.querySelector('#myLink');
            link.setAttribute('href', 'https://www.bing.com');
            link.innerHTML = "Go to Bing"; // Change the link text as well
        }
    </script>

</body>
</html>

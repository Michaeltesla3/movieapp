<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies</title>
    <link rel="stylesheet" href="CSS/movies.css">
</head>
<body>
    <div class="navbar">
        <div class="logo">
            <img src="favicon.png" alt="Logo" class="logo-img">
            <a href="index.php">TeslianTech</a>
        </div>
        <div class="menu">
            <div class="menu-item"><a href="index.php">Home</a></div>
            <div class="menu-item"><a href="movies.php">Movies</a></div>
            <div class="menu-item"><a href="#">WaveChat</a></div>
            <div class="menu-item"><a href="#">Games</a></div>
            <div class="menu-item"><a href="#">Apps</a></div>
            <div class="menu-item"><a href="#">About Us</a></div>
            <div class="menu-item"><a href="#">Contact</a></div>
        </div>
    </div>
    
    <a href="hollywood.php" class="card-link">
        <div class="card-container card-container-1">
            <div class="card">
                <img src="Images/Prey.jpeg" alt="Movie Image">
                <div class="card-text">Hollywood</div>
            </div>
        </div>
    </a>
    <a href="bollywood.php" class="card-link">
        <div class="card-container card-container-2">
            <div class="card">
                <img src="Images/Avatar2.jpg" alt="Movie Image">
                <div class="card-text">Bollywood</div>
            </div>
        </div>
    </a>
    <a href="webseries.php" class="card-link">
        <div class="card-container card-container-3">
            <div class="card">
                <img src="Images/KungFuPanda4.jpg" alt="Movie Image">
                <div class="card-text">Web Series</div>
            </div>
        </div>
    </a>
    <a href="anime.php" class="card-link">
        <div class="card-container card-container-4">
            <div class="card">
                <img src="Images/NinjaAssassin.jpg" alt="Movie Image">
                <div class="card-text">Anime</div>
            </div>
        </div>
    </a>
    <a href="hollywood.php" class="card-link">
        <div class="card-container card-container-5">
            <div class="card">
                <img src="Images/War.webp" alt="Movie Image">
                <div class="card-text">K-Dramas</div>
            </div>
        </div>
    </a>
    <div class="canvas-container">
        <canvas id="backgroundCanvas"></canvas>
    </div>
    <script src="JS/scripts.js"></script>
    <script src="JS/movies.js"></script>
</body>
</html>

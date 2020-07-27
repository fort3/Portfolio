<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
    integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

  <!-- Disable tap highlight on IE -->
  <meta name="msapplication-tap-highlight" content="no">

  <!-- Add to homescreen for Chrome on Android -->
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="application-name" content="Firebase Database Quickstart">
  <meta name="theme-color" content="#303F9F">

  <!-- Add to homescreen for Safari on iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Firebase Database Quickstart">
  <meta name="apple-mobile-web-app-status-bar-style" content="#303F9F">

  <!-- Tile icon for Win8 -->
  <meta name="msapplication-TileColor" content="#3372DF">
  <meta name="msapplication-navbutton-color" content="#303F9F">

  <!-- Material Design Lite -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.blue_grey-orange.min.css">
  <script src="https://code.getmdl.io/1.1.3/material.min.js"></script>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/css2?family=Lexend+Zetta&display=swap" rel="stylesheet">

</head>
<body>
    <!-- Nav bar-->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark ">
        <a href="#index" class="navbar-brand" id="index_nav"><h2>Fortune Okon</h2></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="nav navbar-nav">
                <li class="nav-item alive">
                    <a href="#portfolio" class="nav-link" id="portfolio_nav">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact" id="contact_nav">Contact</a>
                </li>
                <li class="nav-item">
                    <a href="#social" class="nav-link" id="social_nav">Social</a>
                </li>
            </ul>
        </div>
    </nav>
    <!--/ Nav bar-->

    <!-- Index homepage -->
    <div class="container-fluid" id="index">
        <div class="row justify-content-md-center">
            <div class="col align-self-center">
                <div class="card img_card">
                    <div class="class-body">
                        <img class="img-frame" src="images/profile.png" alt="Profile picture">
                    </div>
                </div>
            </div>
            <div class="col align-self-center">
                <div class="card text_card">
                    <div class="class-body text-center">
                        <h3 class="card-title">Hi! <br>I'm Fortune</h3>
                        <p> And yes that's my real name :)</p>
                        <p>I am a web developer and this is my Portfolio</p>
                        <a href="#book" id="book_btn"><button class="btn btn-default">Book!</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--/ Index Homepage -->

    <!-- Portfolio -->
    <div class="container-fluid" id="portfolio">
        <div class="row justify-content-md-center">
            <div class="col-8">
                <div class="card portfolio_card">
                    <div class="card-body">
                        <h3 class="card-title"> Portfolio & Projects</h3>
                        <p>This is a summary of my portfolio for projects done and clients I have been priviledged to work with.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex flex-row">
                <div class="col-4">
                    <iframe src="https://calibom.org" frameborder="0" name="calFrame" id="calibom" ></iframe><br>
                    <p class="portf_text"><a href="https://calibom.org" target="_blank">Calibom Web App for A Green Economy Initiative</a></p><br>
                   
                </div>
                <div class="col-4">
                    <iframe src="https://fort3.github.io/quoteApp/" frameborder="0" name="calFrame" id="calibom" ></iframe><br>
                    <p class="portf_text"><a href="https://fort3.github.io/quoteApp/" target="_blank">A simple random quote generator using reactJs</a></p><br>
                </div>
                <div class="col-4">
                    <iframe src="https://fort3.github.io/unyime-abasi/" frameborder="0" name="unyimeFrame" id="unyime" ></iframe><br>
                    <p class="portf_text"><a href="https://fort3.github.io/unyime-abasi/" target="_blank">Website for unyime-abasi farms limited</a></p><br>
                </div>
            </div>
        </div>
    </div>
    <!--/ Portfolio-->

    <!-- Contact -->
    <div class="container-fluid" id="contact">
        <div class="row justify-content-md-center">
            <div class="col-8">
                <div class="card contact_card">
                    <div class="card-body">
                        <h3 class="card-title"> Contact Details</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ Contact -->

    <!-- Social -->
    <div class="container-fluid" id="social">
        <div class="row justify-content-md-center">
            <div class="col-8">
                <div class="card social_card">
                    <div class="card-body">
                        <h3 class="card-title"> Social Media links</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ Social -->

    <!-- Book -->
    <div class="container-fluid" id="book">
        <div class="row justify-content-md-center">
            <div class="col-8">
                <form action="POST">
                    
                </form>
            </div>
        </div>
    </div>
    <!--/ Book -->


    <!-- Scripts-->
    <script src="http://momentjs.com/downloads/moment.min.js"></script>

    <script src="https://code.jquery.com/jquery-3.5.1.js"
      integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
    <script src="components/App.js"></script>
</body>
</html>
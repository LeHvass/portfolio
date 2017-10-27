<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400,500,700" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet" media="screen">

    <title>Christian Hvass</title>
    <meta name="description" content="Multimedia design student looking for internship | Passionate about Front-end Development">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <noscript>
        <style>
            section#top .jumbotron { visibility: visible; }
        </style>
    </noscript>
</head>

<body>
    <nav id="nav" class="navbar navbar-dark fixed-top navbar-expand-md big">
        <a class="navbar-brand" href="#">Christian Hvass</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="links collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="ml-auto navbar-nav nav">
                <li><a class="active" href="#about">About Me</a></li>
                <li><a href="#projects">My Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <section class="container-fluid" id="top">
            <div class="jumbotron wow fadeInUp">
                <h1 class="display-3">Hi, my name is Christian!</h1>
                <p class="lead">I am currently looking for a front-end development internship in Antwerp</p>
                <hr class="my-4">
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#contact" role="button">Contact me!</a>
                </p>
            </div>
        </section>

        <section class="container-fluid" id="about">
            <article>
                <header>
                    <h2>About Me</h2>
                </header>
                <div class="row justify-content-md-center">
                    <div class="col-lg-5">
                        <div class="col-4 mb-4 mx-auto">
                            <img id="profile-photo" class="wow zoomIn rounded" src="images/photo.jpg" alt="Picture of me">
                            <a href="CV - Christian Hvass.pdf" class="btn btn-primary btn-block wow fadeInLeft" data-wow-delay="0.2s" download>Download CV</a>
                        </div>
                        <div class="col-12 col-lg-8 mx-auto wow fadeInLeft" data-wow-delay="0.4s">
                            <div class="description">
                                <ul class="fa-ul">
                                    <li><i class="fa-li fa fa-map-marker-alt" data-fa-transform="down-3"></i>Born in Esbjerg, Denmark</li>
                                    <li><i class="fa-li fa fa-building" data-fa-transform="down-3"></i>Living in Antwerp, Belgium</li>
                                    <li><i class="fa-li fa fa-suitcase" data-fa-transform="down-3"></i>Currently looking for a 3-month internship in Antwerp, Belgium (feb 2018-may 2018)</li>
                                    <li><i class="fa-li fa fa-graduation-cap" data-fa-transform="down-3"></i>Studying AP in Multimedia Design &amp; Communication</li>
                                    <li><i class="fa-li fa fa-code" data-fa-transform="down-3"></i>Passionate about Front-end Web Development</li>
                                    <li><i class="fa-li fa fa-music" data-fa-transform="down-3"></i>Love listening to music &amp; playing drums</li>
                                    <li><i class="fa-li fa fa-trophy" data-fa-transform="down-3"></i>Enjoy running and lifting weights</li>
                                </ul>
                                <strong>I look forward to hearing from you!</strong>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Language</th>
                                    <th>Proficiency</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="wow fadeInRight">
                                    <td>HTML</td>
                                    <td>Writing semantic W3C-compliant HTML5 markup</td>
                                </tr>
                                <tr class="wow fadeInRight">
                                    <td>CSS</td>
                                    <td>Using SASS to create responsive web pages with @media-queries, flexbox positioning and transitions</td>
                                </tr>
                                <tr class="wow fadeInRight">
                                    <td>Javascript</td>
                                    <td>Functions, For-loops, Switch-statements, modifying the DOM</td>
                                </tr>
                                <tr class="wow fadeInRight">
                                    <td>jQuery</td>
                                    <td>Using built-in jQuery functions and methods to modify the DOM and integrate various plugins</td>
                                </tr>
                                <tr class="wow fadeInRight">
                                    <td>PHP</td>
                                    <td>Building master pages, user-systems and enabling the users to change languages of the page</td>
                                </tr>
                                <tr class="wow fadeInRight">
                                    <td>JSON</td>
                                    <td>Storing/reading data, sending AJAX requests, making language files</td>
                                </tr>
                                <tr class="wow fadeInRight">
                                    <td>MySQL</td>
                                    <td>Creating databases and using PHP to create, read and delete entries</td>
                                </tr>
                                <tr class="wow fadeInRight">
                                    <td>Bootstrap</td>
                                    <td>Building modern, responsive web pages using Bootstrap 4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </article>
        </section>

        <section class="container-fluid" id="projects">
            <article>
                <header>
                    <h2 class="wow fadeInUp">My Work</h2>
                </header>

                <div class="row justify-content-center">
                    <div class="col-11 col-lg-5 project wow fadeInUp">
                        <h3>Project Portal</h3>
                        <div class="row">
                            <div class="col-12 project-gallery">
                                <a href="http://ealprojektportal.chvass.dk/projects.php" target="_blank">
                                    <img class="img-fluid img-thumbnail" src="images/projekt-portal-1.png">
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 project-description">
                                <div class="row justify-content-center">
                                    <a href="http://ealprojektportal.chvass.dk" target="_blank" type="button" class="btn btn-primary m-4"><i class="fa fa-desktop"></i> Link to Demo</a>
                                    <a href="https://github.com/LeHvass/eal-project-portal" target="_blank" type="button" class="btn btn-primary m-4"><i class="fab fa-github"></i> Link to GitHub</a>
                                </div>
                                <h4>Description</h4>
                                <p>
                                    Lillebaelt Academy were interested in concepts for a project portal where students can showcase their projects to fellow students, teachers, internships &amp; potential employers.
                                </p>
                                <h4>Key points</h4>
                                <ul>
                                    <li>PHP backend with projects stored in a JSON database</li>
                                    <li>Filtering of projects with GET statements &amp; <code>array_filter()</code></li>
                                    <li>Dynamically generated selection criteria from JSON</li>
                                    <li>Sorting of returned results with <code>usort()</code></li>
                                </ul>
                                <h4>Languages</h4>
                                <p>HTML5, CSS3, Javascript, JSON, PHP</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-lg-5 project wow fadeInUp" data-wow-delay="0.2s">
                        <h3>Band Website</h3>
                        <div class="row">
                            <div class="col-12 project-gallery">
                                <a href="http://tarantinotwistshow.chvass.dk" target="_blank">
                                    <img class="img-fluid img-thumbnail" src="images/tarantino-twist-show-1.png">
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 project-description">
                                <div class="row justify-content-center">
                                    <a href="http://tarantinotwistshow.chvass.dk" target="_blank" type="button" class="btn btn-primary m-4"><i class="fa fa-desktop"></i> Link to Demo</a>
                                    <a href="https://github.com/LeHvass/tarantino-twist-show" target="_blank" type="button" class="btn btn-primary m-4"><i class="fab fa-github"></i> Link to GitHub</a>
                                </div>
                                <h4>Description</h4>
                                <p>
                                    Band website for performance group The Tarantino Twist Show.<br> The band wanted a modern website utilizing current techniques such as video elements and parallax.
                                </p>
                                <h4>Key points</h4>
                                <ul>
                                    <li>Parallax hero <code>&lt;video&gt;</code> element</li>
                                    <li>Custom Javascript gallery with keyboard controls</li>
                                    <li>Masonry layout achieved with CSS <code>:pseudo</code> selectors</li>
                                    <li>Custom modal windows</li>
                                    <li>No jQuery!</li>
                                </ul>
                                <h4>Languages</h4>
                                <p>HTML5, CSS3, Javascript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-11 col-lg-5 project wow fadeInUp">
                        <h3>Personal Manager</h3>
                        <div class="row">
                            <div class="col-12 project-gallery">
                                <a href="http://cal.chvass.dk" target="_blank">
                                    <img class="img-fluid img-thumbnail" src="images/personal-manager.png">
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 project-description">
                                <div class="row justify-content-center">
                                    <a href="http://cal.chvass.dk/calendar?month=11&year=2014" target="_blank" type="button" class="btn btn-primary m-4"><i class="fa fa-desktop"></i> Link to Demo</a>
                                    <a href="https://github.com/LeHvass/cal" target="_blank" type="button" class="btn btn-primary m-4"><i class="fab fa-github"></i> Link to GitHub</a>
                                </div>
                                <h4>Description</h4>
                                <p>
                                    Personal project in 2014 to develop a website to keep track of upcoming events, homework, birthdays etc.
                                </p>
                                <h4>Key points</h4>
                                <ul>
                                    <li>PHP back-end with multiple MySQL database</li>
                                    <li>Calendar generated with PHP populated with entries from MySQL tables</li>
                                    <li>Comprehensive usage of Bootstrap 3 (currently using Bootstrap 4)</li>
                                    <li>Implementation of various jQuery plugins</li>
                                </ul>
                                <h4>Languages</h4>
                                <p>HTML5, CSS3, Javascript, jQuery, PHP, MySQL, Bootstrap</p>
                            </div>
                        </div>

                    </div>
                    <div class="col-11 col-lg-5 project wow fadeInUp" data-wow-delay="0.2s">
                        <h3>Installation showcase</h3>
                        <div class="row">
                            <div class="col-12 project-gallery">
                                <a href="http://fjordbaelt.chvass.dk" target="_blank">
                                    <img class="img-fluid img-thumbnail" src="images/fjordbaelt.png">
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 project-description">
                                <div class="row justify-content-center">
                                    <a href="http://fjordbaelt.chvass.dk" target="_blank" type="button" class="btn btn-primary m-4"><i class="fa fa-desktop"></i> Link to Demo</a>
                                    <a href="https://github.com/LeHvass/fjordbaelt" target="_blank" type="button" class="btn btn-primary m-4"><i class="fab fa-github"></i> Link to GitHub</a>
                                </div>
                                <h4>Description</h4>
                                <p>
                                    Fjord&amp;Bælt in Kerteminde, Denmark were looking for new, exciting installations for their exhibition. This is the concept website accompanying the developed prototype.
                                </p>
                                <h4>Key points</h4>
                                <ul>
                                    <li>Parallax hero <code>&lt;video&gt;</code> element</li>
                                    <li>Change site language with JSON and PHP</li>
                                    <li>Extensive use of vector SVG graphics</li>
                                    <li>Responsive flexbox positioning</li>
                                    <li>Custom Javascript gallery with keyboard controls</li>
                                    <li>Masonry layout achieved with CSS pseudo selectors</li>
                                </ul>
                                <h4>Languages</h4>
                                <p>HTML5, CSS3, Javascript, JSON, PHP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <section class="container-fluid" id="contact">
            <article>
                <header>
                    <h2 class="wow fadeInUp">Contact</h2>
                </header>
                <div class="social row">
                    <div class="col-sm-5 col-md-3 wow fadeInUp" data-wow-delay="0.2s">
                        <a href="mailto:hvass.christian@gmail.com"><i class="fa fa-envelope fa-3x"></i> hvass.christian@gmail.com</a>
                    </div>
                    <div class="col-sm-5 col-md-3 wow fadeInUp" data-wow-delay="0.4s">
                        <a href="tel:+45-2782-2531"><i class="fa fa-phone fa-3x"></i> <br>+45 2782 2531</a>
                    </div>
                    <div class="col-sm-5 col-md-3 wow fadeInUp" data-wow-delay="0.6s">
                        <a href="https://github.com/LeHvass"><i class="fab fa-github fa-3x"></i> /LeHvass</a>
                    </div>
                    <div class="col-sm-5 col-md-3 wow fadeInUp" data-wow-delay="0.8s">
                        <a href="https://linkedin.com/in/christian-hvass"><i class="fab fa-linkedin fa-3x"></i> /in/christian-hvass</a></div>
                </div>
            </article>
        </section>
    </main>
    <footer class="container-fluid">
        <span class="text-muted">
            &copy; 2017 Christian Hvass
        </span>
    </footer>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    <script src="plugins/brands.min.js"></script>
    <script src="plugins/solid.min.js"></script>
    <script src="plugins/fontawesome.min.js"></script>
    <script src="plugins/wow.min.js"></script>
    <script src="js/scripts.js"></script>

</body>

</html>

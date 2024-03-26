const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Traveller App</title>
      <style>
        /* Add your CSS styles here */
        body {
            font-family: 'Poppins',
                sans-serif;
             background-image: linear-gradient(396deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 30%,rgba(130, 130, 130,0.04) 30%, rgba(130, 130, 130,0.04) 49%,rgba(31, 31, 31,0.04) 49%, rgba(31, 31, 31,0.04) 100%),linear-gradient(410deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 20%,rgba(130, 130, 130,0.04) 20%, rgba(130, 130, 130,0.04) 60%,rgba(31, 31, 31,0.04) 60%, rgba(31, 31, 31,0.04) 100%),linear-gradient(355deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 29%,rgba(130, 130, 130,0.04) 29%, rgba(130, 130, 130,0.04) 48%,rgba(31, 31, 31,0.04) 48%, rgba(31, 31, 31,0.04) 100%),linear-gradient(203deg, rgb(0,0,0),rgb(0,0,0));
        }
        nav{
            background-color: #04AA6D;
        }
        p,h6{
            color: #3cffce;
        }

    .image {
        height: 16px;
        length: 20px;
        width: 30px;
    }
        .card-text,.once{
         color: #666b71;
        }
        #intro {
            height: 100%;
            width: 100%;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            z-index: -11;
            overflow: hidden;
        }
        
        /* --- Navbar ---- */
        .bg-dark {
            color: transparent;
            /* #55E6C1 */
        }
        
        .navbar-fixed-top.scrolled {
            background-color: rgb(34, 29, 29) !important;
            transition: background-color 200ms linear;
            top: 0;
            right: 0;
        }
        
        .navbar {
            padding: 0 10%;
        }
        
        .navbar-brand {
            font-size: 1.4rem;
        }
        
        .navbar-brand span {
            color: rgb(160, 23, 23);
            font-size: 2.8rem;
            padding-left: .5rem;
        }
        
        /* landing page start here */
        
        div h1 {
            font-weight: 400;
            color: white;
            padding: 35vh 0 20vh 18vw;
            letter-spacing: 1px;
            text-align: left;
            font-size: 3rem;
            z-index: 1;
        }
        
        /* -- form start here -- */
        .form {
            background-color: white;
            width: 55%;
        
        
        }
        
        #form {
            padding: 8% 0 2% 15%;
        }
        
        .top-line {
            width: 100%;
            height: .7rem;
            background-color: #55E6C1;
            margin-bottom: 1rem;
        }
        
        .inside-form {
            padding: 0 2rem;
        }
        
        input,
        select {
            width: 100%;
            margin-bottom: 1rem;
            height: 5vh;
        }
        
        label {
            line-height: .5rem;
            font-size: .9rem;
        }
        
        .btn-md {
        
            margin: .5rem auto 1rem;
            border: none;
            background-color: #5ee9c6;
            color: black;
        
        }
        
        .inside-form h2 {
            font-size: 1.5rem;
        }
        
        select,
        input::placeholder {
            font-size: .8rem;
        }
        
        /* destination */
        
        #destination {
            padding: 0 5%;
        }
        
        .jumbotron {
            background-color: white;
        }
        
        .jumbotron .col-12 p {
            margin: 1rem auto 4rem;
        }
        
        .card-deck-one {
            margin-bottom: 2rem;
        }
        
        /* travels */
        #travel {
            padding: 0 10%;
            background-color: #04AA6D; 
            color: white;
        }
        
        .narrow-one .col-12 h2 {
            font-weight: 500;
            padding: 5rem 0 .8rem;
        
        }
        
        .narrow-one .col-12 p {
            font-size: 1rem;
            padding-bottom: 4rem;
        }
        
        .narrow-one .feature h5 {
            margin: 1.5rem 0;
        }
        
        .narrow-one .feature p {
            font-size: .9rem;
            margin-bottom: 6rem;
            line-height: 1.5rem;
        }
        
        .img-one {
            background: url(image/img-one.jpg) no-repeat center center fixed;
            width: 100%;
            height: 100%;
        }
        
        .img-one h3 {
            padding: 5rem 0;
            color: white;
            background-color: rgba(0, 0, 0, 0.6);
        }
        
        
        
        .narrow-two {
            padding: 0 10%;
        }
        
        .narrow-two .col-12 h2 {
            padding: 5rem 0 1rem;
        }
        
        .narrow-two .col-12 p {
            padding: 0 0 5rem;
        }
        
        .narrow-two .col-md-3 h3 {
            color: #55E6C1;
            padding-bottom: .7rem;
        }
        
        .narrow-two .col-md-3 {
            padding-bottom: 5rem;
        }
        
        
        
        .narrow-three {
            background-color: #2a96dd;
            color: white;
            padding-bottom: 5rem;
        }
        
        .narrow-three .col-12 h2 {
            padding: 5rem 0 1rem;
            font-weight: 400;
        }
        
        .narrow-three a,
        .narrow-three input {
            width: 20%;
            height: 6vh;
        margin: 1rem;
        
        
        }
        .narrow-three a {
            background-color: #5ee9c6;
        }
        
        
        
        .narrow-three .col-md-6 {
            padding-bottom: 7rem;
        }
        
        
        
        #contact {
            padding: 0 10%;
        }
        
        footer .row {
            padding: 3rem 0 3rem
        }
        
        footer .col-md-3 p,
        footer .col-md-2 p {
            color: #3cffce;
        
        }
        
        footer .col-md-3,
        footer .col-md-2,
        footer .col-md-4 {
            padding-bottom: 2rem;
        }
        hr.socket {
            width: 100%;
            border-top: .2rem solid #666b71;
            margin-top: 1rem;
        }
        
        .hr {
            color: black;
            font-size: 1rem;
            padding-bottom: .5rem;
            font-family: monospace;
        }
        
        
        
        /*=========== BOOTSTRAP BREAK POINTS:
        
        Extra small (xs) device (portrait phones, less than 576)
        no media query since this is the default in Bootstrap
        
        small (sm) devices (landscape phone, 576px and up)
        @media (min-width: 768px) { ... }
        
        Medium (md) devices (tablets, 768px and up)
        @media (min-width: 768px) { ... }
        
        Large (lg) divices (desktops, 992px and up)
        @media (min-width: 992px) { ... }
        
        Etra (xl) large device (large desktops, 1200px and up)
        @media (min-width: 1200px) { ... }
      </style>
    </head>
    <body>
      
    <!-- Home Section Start here -->
    <header>
        <div class="home">
            <nav class="navbar navbar-custom navbar-expand-lg  navbar-dark fixed-top">
                <a href="#intro" class="navbar-brand ">Traveller<span class="dot"></span></a>
                
                <button class="navbar-toggler" type="button" data-target="#navBarNav" data-toggle="collapse"
                    aria-expanded="false" aria-controls="navBarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navBarNav">
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item"><a class="nav-link" href="#destination">Destination</a></li>

                        <li class="nav-item"><a class="nav-link" href="#travel">Travel</a></li>

                        <li class="nav-item"><a class="nav-link" href="#pricing">Pricing</a></li>

                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>

                    </ul>

                </div>

            </nav>



            <div class="landing-page">
                <div id="intro" class="view">

                    <div class="mask">

                        <div class="row">
                            <div class="col-lg-6 text-center">
                                <h1>
                                    Planing Trip To<br>
                                    Anywhere in The<br>
                                    World?
                                    <img src="/home/geo_bugg/100/web/2023-02-22.png" alt="">
                                </h1>
                            </div>
                            <div class="col-lg-6" id="form">

                                <div class="form">

                                    <div class="top-line"></div>

                                    <div class="inside-form">
                                        <h2>Book Your Trip</h2>

                                        <form action="Post" class="form-block">

                                            <label for="name">Your Name</label><br>
                                            <input type="text" name="name"><br>

                                            <label for="email">Your Email</label><br>
                                            <input type="email" name="email" id=""><br>

                                            <label for="activities">Activities</label><br>

                                            <select name="activities" id="">
                                                <option value="-1">Hiking</option>

                                                <option value="1">Running</option>

                                                <option value="2">Cycling</option>

                                                <option value="3">Swimming</option>

                                            </select><br>

                                            <label for="Destination">Destination</label><br>

                                            <select name="Destination" id="">

                                                <option value="-1">Philippines</option>

                                                <option value="1">India</option>

                                                <option value="2">France</option>

                                                <option value="3">UAE</option>

                                            </select><br>

                                            <label for="date">Date Travel</label><br>

                                            <input type="text" name="date" value="" placeholder=""><br>
                                            <div class="btn-1 text-center">
                                                <a class="btn btn-md text-center">Submit</a>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <!--/.Mask-->
        </div>
    </header>

    <main>
        <section id="destination">

            <div class="jumbotron">
                <div class="col-12 text-center">
                    <h2>Most Popular Destination</h2>
                    <p class="once">We  recommend that you  check out these destinations first</p>
                </div>
                <div class="card-deck-one">
                    <div class="card-deck text-center">
                        <div class="card col-md-4 col-sm-12">
                            <img class="card-img-top" src="image/paris.jpg" alt="paris">
                            <div class="card-body">
                                <h5 class="card-title">Paris</h5>
                                <p class="card-text">Paris, the City of Light, is renowned for its iconic landmarks like
                                    the Eiffel Tower, Louvre Museum, and charming boulevards, offering a blend of art,
                                    culture, and culinary delights.</p>
                                <a href="#" class="btn btn-dark">Schedule a Trip</a>
                            </div>
                        </div>
                        <div class="card col-md-4 col-sm-12">
                            <img class="card-img-top" src="image/mali.jpg" alt="Mali">
                            <div class="card-body">
                                <h5 class="card-title">Mali</h5>
                                <p class="card-text"> Mali, in West Africa, boasts a rich cultural heritage with vibrant
                                    markets, ancient mosques of Timbuktu, and the majestic cliffs of Bandiagara, making
                                    it a destination for history enthusiasts and adventurers alike.</p>
                                <a href="#" class="btn btn-dark">Schedule a Trip</a>
                            </div>
                        </div>
                        <div class="card col-md-4 col-sm-12">
                            <img class="card-img-top" src="image/indonasia.jpg" alt="Indonasia">
                            <div class="card-body">
                                <h5 class="card-title">Indonasia</h5>
                                <p class="card-text">Indonesia, an archipelago of stunning islands, beckons with its
                                    diverse landscapes, from the lush jungles of Bali to the pristine beaches of Komodo,
                                    offering a paradise for nature lovers and adventure seekers.</p>
                                <a href="#" class="btn btn-dark">Schedule a Trip</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="card-deck-two">
                    <div class="card-deck text-center">
                        <div class="card col-md-4 col-sm-12">
                            <img class="card-img-top" src="image/india.jpg" alt="India">
                            <div class="card-body">
                                <h5 class="card-title">Kenya</h5>
                                <p class="card-text">Kenya, in East Africa, is famed for its breathtaking savannas
                                    teeming with wildlife, including the Great Migration in Maasai Mara, and its vibrant
                                    culture showcased through traditional Maasai villages and Swahili coastal towns.</p>
                                <a href="#" class="btn btn-dark">Schedule a Trip</a>
                            </div>
                        </div>
                        <div class="card col-md-4 col-sm-12">
                            <img class="card-img-top" src="image/malasia.jpg" alt="Malasia
                            ">
                            <div class="card-body">
                                <h5 class="card-title">Malasia

                                </h5>
                                <p class="card-text">Malaysia entices with its diverse cultural tapestry, from the
                                    futuristic skyline of Kuala Lumpur to the lush rainforests of Borneo, presenting a
                                    melting pot of flavors, traditions, and landscapes for visitors to explore.</p>
                                <a href="#" class="btn btn-dark">Schedule a Trip</a>
                            </div>
                        </div>
                        <div class="card col-md-4 col-sm-12">
                            <img class="card-img-top" src="image/japan.jpg" alt="Japan">
                            <div class="card-body">
                                <h5 class="card-title">Japan</h5>
                                <p class="card-text">Japan captivates with its juxtaposition of ancient traditions and
                                    cutting-edge technology, from the serene temples of Kyoto to the bustling streets of
                                    Tokyo, offering a fascinating blend of history, innovation, and natural beauty.</p>
                                <a href="#" class="btn btn-dark">Schedule a Trip</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <section id="travel">

            <div class="narrow narrow-one text-center">
                <div class="col-12">
                    <h2>How it Works</h2>
                    <p>A tour web page serves as an online platform where users can explore and
                        book various travel experiences such as sightseeing tours, adventure activities, and
                        cultural excursions. It typically showcases a variety of destinations, tour packages, and
                        itineraries to cater to different preferences and interests of travelers.</p>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="feature">
                            <h3 class="r1">1</h3>
                            <h5>Customer Support and Feedback </h5>
                            <p>Tour web pages often offer customer support services
                                to address inquiries, provide assistance with bookings, and handle
                                any issues that may arise before, during, or after the tour.
                                Additionally, users may have the opportunity to leave feedback or reviews about their
                                experience,
                                which can help future travelers make decisions.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature">
                            <h3>2</h3>
                            <h5>Browse and Select</h5>
                            <p>
                                Users can browse through the available tours, often categorized by
                                destination, activity type, or duration. They can view detailed descriptions, images,
                                and reviews of each tour to make informed decisions.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="feature">
                            <h3>3</h3>
                            <h5>Booking Process</h5>
                            <p>Once users find a tour they're interested in,
                                they can select their preferred dates, group size, and any optional add-ons.
                                The web page usually facilitates the booking process by allowing users to enter their
                                payment
                                details securely and receive confirmation of their reservation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <div class="service-bottom text-center">
            <div class="img-one">
                <h3>We have high quality services that you will <br>
                    surely love!</h3>
            </div>
        </div>


        <section class="pricing">

            <div class="narrow narrow-two text-center">
                <div class="col-12">
                    <h2>Our Success</h2>
                    <p>Give our users a platform to make all their booking ; From plains,hotels to tour guides all in
                        one
                        place . </p>
                </div>

                <div class="row">
                    <div class="col-md-3">
                        <h3>196</h3>
                        <h6>DESTINATION</h6>
                    </div>
                    <div class="col-md-3">
                        <h3>97</h3>
                        <h6>HOTEL</h6>
                    </div>
                    <div class="col-md-3">
                        <h3>12402</h3>
                        <h6>TRAVELERS</h6>
                    </div>
                    <div class="col-md-3">
                        <h3>12202</h3>
                        <h6>HAPPY CUSTOMERS</h6>
                    </div>
                </div>
            </div>
        </section>

        <section id="sub">
            <div class="narrow narrow-three text-center">
                <div class="col-12">
                    <h2>Subscribe</h2>
                    <p>Be the first to know about the new templates.</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <input type="email" name="email" id="" placeholder="Your Email">


                        <a href="#" class="btn btn-primary">SUBSCRIBE</a>
                    </div>
                </div>
            </div>

        </section>

    </main>
    <footer id="contact">

        <div class="row ">

            <div class="col-md-4 ">
                <h6>ABOUT US</h6>
                <p>
                    Travellers!<br>

                    At Travellers, we're passionate about connecting our users through technology to provide them with
                    the best traveling plan experience all in one place. Founded in 2024 by a group of tech enthusiasts,
                    our mission is to provide users with a user friendly environment to plan,book and have an easy time
                    deciding on there dream tour location(s).
                    Our platform is developed to provide user with as many tour locations that describe the sense of
                    adventure, the awe of natural beauty, or the thrill of learning something new. Highlighting unique
                    features – Whether it's a rare sightseeing location, an interaction with local culture, or a unique
                    approach to a common activity, emphasize what makes your experience different.
                    Beyond our commitment to providing the best travel plan experience , we are deeply rooted in our
                    values of integrity, collaboration, and continuous learning. We believe in fostering strong
                    relationships with our clients, built on trust, transparency, and mutual respect.
                    Join us as we pave the way for a brighter, more connected future.

                </p>
            </div>
            <div class="col-md-2">
                <h6>DESTINATION</h6>
                <P>Europe<br>
                    Australia<br>
                    India<br>
                    Canand<br>
                    Dubai</P>
            </div>
            <div class="col-md-3">
                <h6>HOTEL</h6>
                <P>LUXE Hotel<br>
                    Italy 5 star hotel<br>
                    Dubai hotel<br>
                    Canand hotel<br>
                    BoraBora Hotel</P>
            </div>
            <div class="col-md-3">
                <h6>GET IN TOUCH</h6>
                <p>
                    <i class="fas fa-phone"></i>
                    &nbsp; +1234567890
                </p>
                <p>
                    <i class="fas fa-envelope"></i>
                    &nbsp; info@gmail.com
                </p>
                <p>
                    <i class="fas fa-comment-alt"></i>
                    &nbsp; Live Chat
                </p>
            </div>
        </div>

        <div class="hr text-center">
            <hr class="socket">
            &copy;all right reserved.
        </div>
    </footer>





    <!-- JavaScript Bundle with Popper -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <!-- nav bar scroll function -->
    <script>
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".navbar-fixed-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            });
        });
    </script>



    <script src="https://use.fontawesome.com/releases/v5.5.0/js/all.js"></script>
    </body>
    </html>
  `);
  res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

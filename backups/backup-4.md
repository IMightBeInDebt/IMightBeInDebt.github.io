<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sen&display=swap" rel="stylesheet">
  <link rel="icon" type="image/png" href="../rescources/favicon/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="../rescources/favicon/favicon.svg" />
  <link rel="shortcut icon" href="../rescources/favicon/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="../rescources/favicon/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="IMightBeInDebt" />
  <link rel="manifest" href="../rescources/favicon/site.webmanifest" />
  <meta name="format-detection" content="all=no" />
  <style>
    body {
      background-image: url('../../backrounds/5.jpg');
      height: 100vh;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      animation: floatBG 15s cubic-bezier(0.2, 0, 0.4, 1) infinite;
      background-color: #333;
      overflow: hidden;
      font-family: 'Inter', 'Sen', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
@media (max-width: 1200px) {
    .liquid-glass, .liquid-glass-games, .liquid-glass-projects {
      width: 90vw !important;
      right: 5vw !important;
      top: auto !important;
      position: static !important;
      margin: 1rem auto !important;
      display: block !important;
      text-emphasis-color: rgba(172, 172, 172, 0.534) !important;
    }
    .font {
      font-size: 18vw !important;
    }
    header {
      font-size: 15vw !important;
      width: 140vw !important;
      right: 0 !important;
    }
  }
@media (max-width: 1024px) {
    .liquid-glass, .liquid-glass-games, .liquid-glass-projects {
      width: 95vw !important;
      height: 80px !important;
      font-size: 2vw !important;
      margin: 0.5rem auto !important;

    }
    .font {
      text-align: center;
      font-size: 6vw !important;
      color: rgba(172, 172, 172, 0.534);
      text-decoration: none !important;
    }
    header {
      font-size: 8vw !important;
      width: 120vw !important;
      right: 10 !important;
      height: auto !important;
    }
    footer {
      font-size: 2.05vw !important;
    }
    span {
      text-decoration: none !important;
      text-align: center !important;
    }
  }
@media (max-width: 700px) {
    .liquid-glass, .liquid-glass-games, .liquid-glass-projects {
      width: 98vw !important;
      height: 70px !important;
      font-size: 6vw !important;
      margin: 0.5rem auto !important;

    }
    .font {
      text-align: center;
      font-size: 14vw !important;
      color: rgba(172, 172, 172, 0.534);
      text-decoration: none !important;
    }
    header {
      font-size: 15vw !important;
      width: 100vw !important;
      right: 20 !important;
      height: auto !important;
    }
    footer {
      font-size: 4.5vw !important;
    }
  }
@media (max-width: 1366px) {
    .liquid-glass, .liquid-glass-games, .liquid-glass-projects {
      width: 80vw !important;
      right: 10vw !important;
      top: auto !important;
      position: static !important;
      margin: 1rem auto !important;
      display: block !important;
      text-emphasis-color: rgba(172, 172, 172, 0.534) !important;
    }
    .font {
      font-size: 12vw !important;
    }
    header {
      font-size: 8vw !important;
      width: 170vw !important;
      right: 0 !important;
    }
    footer {
      font-size: 1.3vw !important;
    }
}
@media (max-width: 1920px) {
    .liquid-glass, .liquid-glass-games, .liquid-glass-projects {
      width: 60vw !important;
      right: 20vw !important;
      top: auto !important;
      position: static !important;
      margin: 1rem auto !important;
      display: block !important;
      text-emphasis-color: rgba(172, 172, 172, 0.534) !important;
      text-decoration: none !important;
    }
    header {
      font-size: 6vw !important;
      width: 200vw !important;
      right: 0 !important;
    }
    footer {
      font-size: 2vw !important;
    }

}
  body {
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    overflow-x: hidden !important;
  }

    @keyframes floatBG {
      0% {
        background-position: 0% 0%;
        background-size: 120% 120%;
      }
      50% {
        background-position: 16% 6%;
        background-size: 120% 120%;
      }
      100% {
        background-position: 0% 0%;
        background-size: 120% 120%;
      }
    }
  </style>
</head>
<body>
  <style>
    body {
      font-family: "Sen", sans-serif;
      font-optical-sizing: auto;
      font-weight: 640;
      font-style: bold;
      font-size: 90px;
      text-align: center;
      object-position: top;
      color: rgba(255, 255, 255, 0.342);    
    }
  </style>
<header>
    <style>
      header {
        font-family: "Sen", sans-serif;
        font-optical-sizing: auto;
        font-weight: 800;
        font-size: 90px;
        text-align: center;
        object-position: top;
        color: rgba(255, 255, 255, 0.342);
        backdrop-filter: blur(30px);
        box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
        box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
        box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);  
        width: 3000px;
        height: 120px;
        position: relative;
        top: 0px;
        right: 0px;
      }
    </style>
    about me
  </b>
</header>
  <footer>
    <style>
      footer {
        font-family: "Sen", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-size: 22px;
        text-align: center;
        object-position: top;
        color: transparent;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.342), rgba(255, 255, 255, 0.788));
        background-clip: text;
      }
    </style>
    <b>
      hi my name is IMightBeInDebt, i am a 13 year old developer from the United States, i make games and other projects in my free time, code websites just to mess around with html, css, and javascript and make dumb little games in python, unity or godot! i have been coding for about 5 years now and i love it. i also like to play video games in my free time and listen to music (just a little bit). i do have a youtube channel, if you want to go and subscribe, i will be very happy :P. sometimes for fun, i do little renders/simulations in blender! (there also inside of projects!) im sure your not wondering, but a hobby i do outside of computer science... kinda, is tinkering with raspberry pi's and building robots with arduino's. i play a lot of vr, mostly pcvr and i sometimes try to make games, but i think the tech is still kinda niche so its not really on my skill level. if somehow your still reading this, i hope you enjoy my website!
    </b>
  </footer>
</body>
<body>
  <a href="https://imightbeindebt.github.io">
    <audio id="click" preload="auto">
      <source src="../../sounds/hover.wav" type="audio/wav">
    </audio>
      <div class="liquid-glass">
        <span class="sen-uniquifier">Home</span>
        <style>
         .liquid-glass {
            color: rgba(255, 255, 255, 0.568);
            backdrop-filter: blur(30px);
            box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
            box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
            box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);
            width: 500px;
            height: 100px;
            position: fixed;
            top: 1160px;
            right: 1030px;
            border-radius: 50px;
            opacity: 98%;
            size: 100%;
            transition: all 0.3s ease-in-out ;
            cursor: pointer;
            text-decoration: none !important;
            border-bottom-style: none;
          }
          .liquid-glass:hover {
            color: rgba(255, 255, 255, 0.788);
            backdrop-filter: blur(30px);
            box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
            box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
            box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);  
            width: 500px;
            height: 100px;
            position: fixed;
            top: 1157px;
            right: 1030px;
            border-radius: 50px;
            opacity: 100%;
            transform: scale(1.01);
            text-decoration: none !important;
        }
        </style>
             <div class="liquid-glass"></div>
        <div class="font">
         <style>
        .font {
          font-family: "Sen", sans-serif;
          font-optical-sizing: auto;
          font-weight: 640;
          font-style: bold;
          font-size: 90px;
          text-align: center;
          object-position: top;
          color: rgba(255, 255, 255, 0.342);
          text-decoration: none !important;
        }
        .span {
          text-decoration: none !important;
          border-bottom-style: none;
          color: rgba(172, 172, 172, 0.534);
        }
         </style>
        </div>
      </div>
    <script>
      document.querySelectorAll('.liquid-glass, .liquid-glass-games, .liquid-glass-projects').forEach(function(el) {
        el.addEventListener('mouseenter', function() {
          var hoverSound = document.getElementById('click');
          if (hoverSound) {
            hoverSound.currentTime = 0;
            hoverSound.volume = 0.3;
            hoverSound.play();
          }
        });
      });
    </script>
  </a>  
  <a href="https://imightbeindebt.github.io/games">
    <div class="liquid-glass-games">
      <span class="sen-uniquifier">Games</span>
      <style>
         .liquid-glass-games {
            color: rgba(255, 255, 255, 0.568);
            backdrop-filter: blur(30px);
            box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
            box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
            box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);
            width: 1000px;
            height: 100px;
            position: fixed;
            top: 1160px;
            right: 1545px;
            border-radius: 50px;
            opacity: 98%;
            size: 100%;
            transition: all 0.3s ease-in-out ;
            cursor: pointer;
          }
          .liquid-glass-games:hover {
            color: rgba(255, 255, 255, 0.788);
            backdrop-filter: blur(30px);
            box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
            box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
            box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);
            width: 1000px;
            height: 100px;
            position: fixed;
            top: 1157px;
            right: 1545px;
            border-radius: 50px;
            opacity: 100%;
            transform: scale(1.01);
        }
       </style>
           <div class="liquid-glass-games"></div>
       <div class="font">
         <style>
        .font {
          font-family: "Sen", sans-serif;
          font-optical-sizing: auto;
          font-weight: 640;
          font-style: bold;
          font-size: 90px;
          text-align: center;
          object-position: top;
          color: rgba(255, 255, 255, 0.342)
        }
      </style>
      </div>
    <script>
      document.querySelectorAll('.liquid-glass, .liquid-glass-games, .liquid-glass-projects').forEach(function(el) {
        el.addEventListener('mouseenter', function() {
          var hoverSound = document.getElementById('click');
          if (hoverSound) {
            hoverSound.currentTime = 0;
            hoverSound.volume = 0.3;
            hoverSound.play();
          }
        });
      });
    </script>
    </div>
  </a>
  <a href="https://imightbeindebt.github.io/projects">
    <div class="liquid-glass-projects">
    <span class="sen-uniquifier">Projects</span>
      <style>
         .liquid-glass-projects {
            color: rgba(255, 255, 255, 0.568);
            backdrop-filter: blur(30px);
            box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
            box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
            box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);
            width: 1000px;
            height: 100px;
            position: fixed;
            top: 1160px;
            right: 15px;
            border-radius: 50px;
            opacity: 98%;
            size: 100%;
            transition: all 0.3s ease-in-out ;
            cursor: pointer;
            
          }
          .liquid-glass-projects:hover {
            color: rgba(255, 255, 255, 0.788);
            backdrop-filter: blur(30px);
            box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
            box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
            box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);
            width: 1000px;
            height: 100px;
            position: fixed;
            top: 1157px;
            right: 15px;
            border-radius: 50px;
            opacity: 100%;
            transform: scale(1.01);
        }
       </style>
       <div class="liquid-glass-projects"></div>
       <div class="font">
         <style>
        .font {
          font-family: "Sen", sans-serif;
          font-optical-sizing: auto;
          font-weight: 640;
          font-style: bold;
          font-size: 90px;
          text-align: center;
          object-position: top;
          color: rgba(255, 255, 255, 0.342)
        }
         </style>
    <script>
      document.querySelectorAll('.liquid-glass, .liquid-glass-games, .liquid-glass-projects').forEach(function(el) {
        el.addEventListener('mouseenter', function() {
          var hoverSound = document.getElementById('click');
          if (hoverSound) {
            hoverSound.currentTime = 0;
            hoverSound.volume = 0.3;
            hoverSound.play();
          }
        });
      });
    </script>
      </div>
    </div>
  </a>
</body>
<script>
var overscroll = function(el) {
  el.addEventListener('touchstart', function() {
    var top = el.scrollTop
      , totalScroll = el.scrollHeight
      , currentScroll = top + el.offsetHeight
    if(top === 0) {
      el.scrollTop = 1
    } else if(currentScroll === totalScroll) {
      el.scrollTop = top - 1
    }
  })

  el.addEventListener('touchmove', function(evt) {
    if(el.offsetHeight < el.scrollHeight)
      evt._isScroller = true
  })
}

overscroll(document.querySelector('.scroll'));

document.body.addEventListener('touchmove', function(evt) {
  if(!evt._isScroller) {
    evt.preventDefault()
  }
})
</script>
</html>
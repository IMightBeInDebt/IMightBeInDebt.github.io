<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IMightBeInDebt's Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sen&display=swap" rel="stylesheet">
  <style>
    body {
      height: 100vh;
      background-image: url('../../carplaybackrounds/purplecarplay.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      animation: floatBG 15s cubic-bezier(0.2, 0, 0.4, 1) infinite;
      background-color: #333;
      overflow: hidden;
      font-family: 'Inter', 'Sen', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #fff;
    }

    @keyframes floatBG {
      0% {
        background-position: 0% 0%;
        background-size: 100% 100%;
      }
      50% {
        background-position: 100% 100%;
        background-size: 110% 110%;
      }
      100% {
        background-position: 0% 0%;
        background-size: 100% 100%;
      }
    }
  </style>
</head>
<body>
  <a href="https://imightbeindebt.github.io">
    <audio id="click" preload="auto">
      <source src="../../sounds/hover.wav" type="audio/wav">
    </audio>
      <div class="liquid-glass">
        <style>
         .liquid-glass {
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
            opacity: 50%;
            size: 100%;
            transition: all 0.3s ease-in-out ;
            cursor: pointer;
          }
          .liquid-glass:hover {
            backdrop-filter: blur(70px);
            box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
            box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
            box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);  
            width: 500px;
            height: 100px;
            position: fixed;
            top: 1157px;
            right: 1030px;
            border-radius: 50px;
            opacity: 80%;
            transform: scale(1.01);
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
          color: rgba(255, 255, 255, 0.342)
        }
         </style>
         <span class="sen-uniquifier">Home</span>
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
      <style>
         .liquid-glass-games {
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
            opacity: 50%;
            size: 100%;
            transition: all 0.3s ease-in-out ;
            cursor: pointer;
          }
          .liquid-glass-games:hover {
            backdrop-filter: blur(70px);
            box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
            box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
            box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);  
            width: 1000px;
            height: 100px;
            position: fixed;
            top: 1157px;
            right: 1545px;
            border-radius: 50px;
            opacity: 80%;
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
         <span class="sen-uniquifier">Games</span>
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
      <style>
         .liquid-glass-projects {
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
            opacity: 50%;
            size: 100%;
            transition: all 0.3s ease-in-out ;
            cursor: pointer;
          }
          .liquid-glass-projects:hover {
            backdrop-filter: blur(70px);
            box-shadow: (0px 8px 13px rgba(0, 0, 0, 0.25));
            box-shadow: inset 4px 5px 6px 0px rgba(255, 255, 255, 0.40);
            box-shadow: inset -1px -3px 4px 0px rgba(255, 255, 255, 0.40);  
            width: 1000px;
            height: 100px;
            position: fixed;
            top: 1157px;
            right: 15px;
            border-radius: 50px;
            opacity: 80%;
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
         <span class="sen-uniquifier">Projects</span>
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
      color: rgba(255, 255, 255, 0.342)
    }
  </style>
  <header>
    <style>
      header {
        font-family: "Sen", sans-serif;
        font-optical-sizing: auto;
        font-weight: 640;
        font-style: bold;
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
        right: 250px;
      }
    </style>
    about me
  </header>
  <footer>
    <style>
      footer {
        font-family: "Sen", sans-serif;
        font-optical-sizing: auto;
        font-weight: 640;
        font-style: bold;
        font-size: 20px;
        text-align: center;
        object-position: top;
        color: rgba(255, 255, 255, 0.342)
      }
    </style>
    <footer>
      hi my name is IMightBeInDebt, i am a 13 year old developer from the United States, i make games and other projects in my free time, code websites just to mess around with html, css, and javascript and make dumb little games in python, unity or godot! i have been coding for about 5 years now and i love it. i also like to play video games in my free time and listen to music (just a little bit). i do have a youtube channel, if you want to go and subscribe, i will be very happy :P. sometimes for fun, i do little renders/simulations in blender! (there also inside of projects!) im sure your not wondering, but a hobby i do outside of computer science... kinda, is tinkering with raspberry pi's and building robots with arduino's. i play a lot of vr, mostly pcvr and i sometimes try to make games, but i think the tech is still kinda niche so its not really on my skill level. if somehow your still reading this, yes i do play beat saber, yes i have a beatleader, here: beatleader.com/u/24675473898718965. anyway, i hope you enjoy my website!
    </footer>
  </footer>
</body>
</html>

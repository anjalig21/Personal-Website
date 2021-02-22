import '../CSS/particles.css';
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        "background": {
          "color": {
            "value": "#0d47a1"
          },
          "size": "cover"
        },
        "interactivity": {
          detectsOn: "window",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onHover": {
              "enable": true,
              "mode": "repulse",
              "parallax": {
                "force": 60
              }
            }
          },
          "modes": {
            "bubble": {
              "distance": 400,
              "duration": 2,
              "opacity": 0.8,
              "size": 40
            },
            "grab": {
              "distance": 400
            }
          }
        },
        "particles": {
          "color": {
            "value": "#ffffff"
          },
          "links": {
            "color": {
              "value": "#ffffff"
            },
            "distance": 150,
            "enable": true,
            "opacity": 0.4
          },
          "move": {
            "attract": {
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "enable": true,
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            }
          },
          "number": {
            "density": {
              "enable": true
            },
            "value": 70
          },
          "opacity": {
            "value": 0.5,
            "animation": {
              "enable": true,
              "minimumValue": 0.1,
              "speed": 1
            }
          },
          "shape": {
            "options": {
              "character": {
                "value": [
                  "</>",
                  "==",
                  "{}",
                  "!=",
                  "&&",
                  ";",
                  "*",
                  "()",
                  "def",
                  "for",
                  "if"
                ],
                "font": "Verdana",
                "style": "",
                "weight": "400",
                "fill": true
              },
              "char": {
                "value": [
                  "</>",
                  "==",
                  "{}",
                  "!=",
                  "&&",
                  ";",
                  "*",
                  "()",
                  "def",
                  "for",
                  "if"
                ],
                "font": "Verdana",
                "style": "10",
                "weight": "400",
                "fill": true
              }
            },
            "type": "char"
          },
          "size": {
            "value": 10,
            "animation": {
              "minimumValue": 10,
              "speed": 5
            }
          },
          "stroke": {
            "width": 1,
            "color": {
              "value": "#ffffff",
              "animation": {
                "enable": false,
                "speed": 1,
                "sync": true
              }
            }
          }
        }
      }
      }
    />
  );
}

export default Particle
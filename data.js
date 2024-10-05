var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1776208854253749,
        "pitch": -0.002476890440711088,
        "fov": 1.4291657842905576
      },
      "linkHotspots": [
        {
          "yaw": 0.19138352308661055,
          "pitch": -0.2193845453344423,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8083060682264698,
          "pitch": 0.14380660758175523,
          "title": "Welcome to the Faculty of Engineering",
          "text": "This is where engineers gather to learn."
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.18669432203669878,
        "pitch": -0.012593252998307491,
        "fov": 1.4291657842905576
      },
      "linkHotspots": [
        {
          "yaw": 0.09378479663993033,
          "pitch": 0.026364223376313944,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -2.414856828127551,
          "pitch": 0.09082290577676844,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6911095810838752,
          "pitch": -0.22378678282016828,
          "title": "Engineering Auditorium",
          "text": "Here is where people gather to listen to class and study."
        },
        {
          "yaw": -1.1986161706711655,
          "pitch": -0.7165983789475003,
          "title": "Sculpture",
          "text": "Idk what it means, a screw maybe?"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.139559452819105,
        "pitch": 0.03290301876974411,
        "fov": 1.4291657842905576
      },
      "linkHotspots": [
        {
          "yaw": -3.0788101216305144,
          "pitch": 0.07559419402852896,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4258856013177237,
          "pitch": -0.29625937496422416,
          "title": "Cafe in EA",
          "text": "Non-existent now as it got replaced by another cafe :(("
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

// Slides del hero de la home. GENERADO a partir de los SVG de Figma ("hero v1" … "hero v8").
// Lienzo de 1440 × 1024. Cada slide dice dónde va cada palabra, cada línea de la grilla,
// la fecha, "Based in Paris" y el indicador; al cambiar de slide todo se mueve hasta su nuevo lugar.
// Se puede editar a mano (por ejemplo un peso de letra o un color).
export type Word = { x: number; y: number; size: number; weight: number; ls: number; blur?: boolean }; // blur: se desenfoca al llegar
export type Slide = {
  color: string; // color de fondo
  image: string | null; // imagen de fondo (ilustraciones, fotos), sin textos ni líneas
  ink: string; // color de los textos chicos
  line: string; // color de las líneas: gris en todos, oscuro sobre las fotos (contraste) y verde sobre el fondo negro
  dash: boolean; // líneas verticales punteadas
  h: number[]; // posición (y) de las líneas horizontales
  v: number[]; // posición (x) de las líneas verticales
  words: Partial<Record<'valeria' | 'ferreira' | 'product' | 'designer', Word>>;
  based: { x: number; y: number } | null;
  date: { x: number; y: number } | null;
  ind: number; // posición (y) del indicador del borde derecho
  objects?: { src: string; x: number; y: number; w: number; h: number; from: 'left' | 'right' | 'up' | 'down' }[]; // piezas sueltas que entran una por una
  drift?: boolean; // fondo con textura: se mueve despacio todo el tiempo
  clip?: [number, number]; // las palabras desenfocadas solo se ven entre estas dos x (el panel gris)
};

export const slides: Slide[] = [
  {
    "color": "#FCFCFC",
    "image": null,
    "ink": "#111111",
    "line": "#BFBFBF",
    "dash": false,
    "h": [
      63.5,
      440.5,
      464.5,
      488.5,
      544.5,
      959.5
    ],
    "v": [
      77.5,
      332.5,
      1114.5,
      1365.5
    ],
    "words": {
      "valeria": {
        "x": 559.5,
        "y": 465.0,
        "size": 42.83,
        "weight": 700,
        "ls": 1.15
      },
      "ferreira": {
        "x": 720.1,
        "y": 465.0,
        "size": 42.83,
        "weight": 300,
        "ls": 1.08
      },
      "product": {
        "x": 325.5,
        "y": 545.0,
        "size": 97.93,
        "weight": 300,
        "ls": 2.01
      },
      "designer": {
        "x": 701.8,
        "y": 544.0,
        "size": 96.53,
        "weight": 300,
        "ls": 2.78
      }
    },
    "based": {
      "x": 90.31,
      "y": 961.3
    },
    "date": {
      "x": 1364.3,
      "y": 75.0
    },
    "ind": 6
  },
  {
    "color": "#E0FF56",
    "image": null,
    "ink": "#111111",
    "line": "#BFBFBF",
    "dash": false,
    "h": [
      63.5,
      199.5,
      234.5,
      257.5,
      794.5,
      959.5
    ],
    "v": [
      77.5,
      393.5,
      1085.5,
      1365.5
    ],
    "words": {
      "valeria": {
        "x": 393.5,
        "y": 757.0,
        "size": 42.83,
        "weight": 700,
        "ls": 1.15
      },
      "product": {
        "x": -60.3,
        "y": 203.0,
        "size": 306.97,
        "weight": 700,
        "ls": 1.98
      },
      "designer": {
        "x": 202.9,
        "y": 961.0,
        "size": 300.01,
        "weight": 300,
        "ls": 5.56
      },
      "ferreira": {
        "x": 927.9,
        "y": 258.0,
        "size": 42.83,
        "weight": 300,
        "ls": 1.08
      }
    },
    "based": {
      "x": 90.31,
      "y": 961.3
    },
    "date": null,
    "ind": 106
  },
  {
    "color": "#FFC1E1",
    "image": null,
    "ink": "#111111",
    "line": "#BFBFBF",
    "dash": false,
    "h": [
      67.5,
      74.5,
      427.5,
      452.5,
      584.5,
      608.5,
      959.5
    ],
    "v": [
      77.5,
      90.5,
      1068.5,
      1365.5
    ],
    "words": {
      "product": {
        "x": -38.9,
        "y": 587.5,
        "size": 236.82,
        "weight": 700,
        "ls": 1.67
      },
      "designer": {
        "x": 888.8,
        "y": 583.0,
        "size": 231.7,
        "weight": 300,
        "ls": 4.29
      },
      "valeria": {
        "x": 512.9,
        "y": 428.0,
        "size": 42.83,
        "weight": 300,
        "ls": 1.48
      },
      "ferreira": {
        "x": 899.1,
        "y": 640.0,
        "size": 42.83,
        "weight": 700,
        "ls": 1.15
      }
    },
    "based": {
      "x": 90.31,
      "y": 961.3
    },
    "date": {
      "x": 1365.3,
      "y": 75.0
    },
    "ind": 206,
    "objects": [
      {
        "src": "/images/hero/covers/obj-3-shelf.png",
        "x": 37.0,
        "y": 72.0,
        "w": 463.0,
        "h": 174.0,
        "from": "left"
      },
      {
        "src": "/images/hero/covers/obj-3-portrait.png",
        "x": 944.0,
        "y": 42.0,
        "w": 381.5,
        "h": 349.5,
        "from": "right"
      },
      {
        "src": "/images/hero/covers/obj-3-hello.png",
        "x": 133.0,
        "y": 757.0,
        "w": 456.0,
        "h": 267.0,
        "from": "down"
      },
      {
        "src": "/images/hero/covers/obj-3-desk.png",
        "x": 999.0,
        "y": 815.0,
        "w": 337.0,
        "h": 209.0,
        "from": "down"
      }
    ]
  },
  {
    "color": "#FFF8E8",
    "image": null,
    "ink": "#1E1E1E",
    "line": "#BFBFBF",
    "dash": false,
    "h": [
      59.5,
      157.5,
      452.5,
      501.5,
      902.5,
      959.5
    ],
    "v": [
      77.5,
      92.5,
      1068.5,
      1365.5
    ],
    "words": {
      "product": {
        "x": 85.2,
        "y": 453.5,
        "size": 129.19,
        "weight": 700,
        "ls": 1.06
      },
      "valeria": {
        "x": 916.3,
        "y": 453.5,
        "size": 110.44,
        "weight": 300,
        "ls": 2.7
      },
      "ferreira": {
        "x": 1061.2,
        "y": 563.0,
        "size": 109.86,
        "weight": 300,
        "ls": 2.82
      },
      "designer": {
        "x": 299.3,
        "y": 573.5,
        "size": 126.95,
        "weight": 700,
        "ls": 2.47
      }
    },
    "based": {
      "x": 90.31,
      "y": 376.3
    },
    "date": {
      "x": 1365.3,
      "y": 960.0
    },
    "ind": 394,
    "objects": [
      {
        "src": "/images/hero/covers/obj-5-notebook.png",
        "x": 0.0,
        "y": 485.0,
        "w": 263.0,
        "h": 275.0,
        "from": "left"
      },
      {
        "src": "/images/hero/covers/obj-5-glasses.png",
        "x": 627.0,
        "y": 374.0,
        "w": 251.0,
        "h": 88.5,
        "from": "up"
      },
      {
        "src": "/images/hero/covers/obj-5-stamp.png",
        "x": 916.0,
        "y": 470.5,
        "w": 98.0,
        "h": 147.5,
        "from": "down"
      }
    ]
  },
  {
    "color": "#E0FF56",
    "image": "/images/hero/covers/bg-4.jpg",
    "ink": "#111111",
    "line": "#2A2A2A",
    "dash": false,
    "h": [
      59.5,
      157.5,
      452.5,
      902.5,
      959.5
    ],
    "v": [
      77.5,
      827.5,
      1068.5,
      1365.5
    ],
    "words": {
      "product": {
        "x": 758.8,
        "y": 159.5,
        "size": 175.45,
        "weight": 200,
        "ls": 3.84
      },
      "valeria": {
        "x": -10.1,
        "y": 831.0,
        "size": 42.83,
        "weight": 300,
        "ls": 1.48
      },
      "ferreira": {
        "x": 578.1,
        "y": 59.0,
        "size": 42.83,
        "weight": 700,
        "ls": 1.15
      },
      "designer": {
        "x": -19.1,
        "y": 1004.0,
        "size": 173.36,
        "weight": 800,
        "ls": 2.27
      }
    },
    "based": {
      "x": 90.31,
      "y": 671.3
    },
    "date": {
      "x": 1365.3,
      "y": 959.0
    },
    "ind": 551,
    "drift": true
  },
  {
    "color": "#191919",
    "image": null,
    "ink": "#E8E8E8",
    "line": "#B1DD55",
    "dash": false,
    "h": [
      59.5,
      141.5,
      166.5,
      517.5,
      668.5,
      706.5,
      861.5,
      959.5
    ],
    "v": [
      77.5,
      472.5,
      1078.5,
      1365.5
    ],
    "words": {
      "valeria": {
        "x": 233.9,
        "y": 669.0,
        "size": 268.01,
        "weight": 200,
        "ls": 6.7
      },
      "product": {
        "x": 74.9,
        "y": 166.5,
        "size": 43.52,
        "weight": 300,
        "ls": 1.25
      },
      "designer": {
        "x": 281.1,
        "y": 166.0,
        "size": 42.83,
        "weight": 700,
        "ls": 1.29
      },
      "ferreira": {
        "x": 456.7,
        "y": 861.0,
        "size": 268.01,
        "weight": 700,
        "ls": 4.14
      }
    },
    "based": {
      "x": 90.31,
      "y": 671.3
    },
    "date": {
      "x": 1365.3,
      "y": 960.0
    },
    "ind": 906
  }
];

// Slides quitados del hero (torre Eiffel y textura verde y azul). No se usan;
// para recuperar uno, copiarlo dentro de la lista de arriba.
export const removedSlides: Slide[] = [
  {
    "color": "#FFFFFF",
    "image": "/images/hero/covers/bg-6.jpg",
    "ink": "#1E1E1E",
    "line": "#BFBFBF",
    "dash": false,
    "h": [
      59.5,
      390.5,
      452.5,
      501.5,
      563.5,
      959.5
    ],
    "v": [
      77.5,
      92.5,
      1068.5,
      1365.5
    ],
    "words": {
      "product": {
        "x": 467.1,
        "y": 458.5,
        "size": 129.19,
        "weight": 700,
        "ls": 1.06
      },
      "ferreira": {
        "x": 490.6,
        "y": 563,
        "size": 109.86,
        "weight": 300,
        "ls": 2.82
      },
      "valeria": {
        "x": 531.3,
        "y": 453.5,
        "size": 110.44,
        "weight": 300,
        "ls": 2.7,
        "blur": true
      },
      "designer": {
        "x": 467.1,
        "y": 564.4,
        "size": 113.9,
        "weight": 700,
        "ls": 2.22,
        "blur": true
      }
    },
    "based": {
      "x": 90.31,
      "y": 376.3
    },
    "date": {
      "x": 1365.3,
      "y": 960.0
    },
    "ind": 693,
    "clip": [
      270,
      818
    ]
  },
  {
    "color": "#E0FF56",
    "image": "/images/hero/covers/bg-7.jpg",
    "ink": "#111111",
    "line": "#2A2A2A",
    "dash": false,
    "h": [
      59.5,
      166.5,
      317.5,
      398.5,
      547.5,
      902.5,
      959.5
    ],
    "v": [
      77.5,
      1068.5,
      1315.5,
      1365.5
    ],
    "words": {
      "product": {
        "x": -24.8,
        "y": 319.5,
        "size": 271.49,
        "weight": 200,
        "ls": 5.8
      },
      "valeria": {
        "x": 907.9,
        "y": 641.0,
        "size": 42.83,
        "weight": 300,
        "ls": 1.48
      },
      "ferreira": {
        "x": 1068.2,
        "y": 641.0,
        "size": 42.83,
        "weight": 700,
        "ls": 1.15
      },
      "designer": {
        "x": 128.3,
        "y": 548.0,
        "size": 268.01,
        "weight": 800,
        "ls": 3.5
      }
    },
    "based": {
      "x": 90.31,
      "y": 671.3
    },
    "date": {
      "x": 1365.3,
      "y": 960.0
    },
    "ind": 806,
    "drift": true
  }
];

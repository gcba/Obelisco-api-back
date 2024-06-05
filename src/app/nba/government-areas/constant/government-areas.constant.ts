import { Area } from '../interfaces/government-areas.interfaces';

export const CHIEF_OF_GOVERNMENT: Area = {
  id: 1,
  name: 'Jefatura de Gobierno',
  information: {
    leader: {
      name: 'Jorge Macri',
      position: 'Jefe de Gobierno',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2023-09/Jorge_Macri_perfil_home.jpg',
    },
    contact: {
      emails: ['jmacri@buenosaires.gob.ar'],
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/jorgemacri',
        icon: 'bx bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/jorgemacri/',
        icon: 'bx bxl-instagram-alt',
      },
      {
        title: 'YouTube',
        url: 'https://www.youtube.com/channel/UCLvdJHV9fXULSL-lkkiV-_g',
        icon: 'bx bxl-youtube',
      },
      {
        title: 'Twitter',
        url: 'https://x.com/jorgemacri',
        icon: 'bx bxl-twitter',
      },
    ],
    map: {
      address: 'Uspallata 3160',
      src: 'https://mapa.buenosaires.gob.ar/comollego/?lat=-34.473296&lng=-58.738035&zl=15&modo=transporte&hasta=Uspallata+3160%2C+Tierras+Altas',
    },
  },
};

export const VICE_CHIEF_OF_GOVERNMENT: Area = {
  id: 2,
  name: 'Vicejefatura de Gobierno',
  information: {
    leader: {
      name: 'Clara Muzzio',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2023-09/Clara_Muzzio_104%20ok_0.jpg',
      position: 'Vicejefa de Gobierno',
    },
    contact: {
      emails: ['claram@buenosaires.gob.ar'],
      address: 'Uspallata 3160, 3° piso',
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/claramuzzio',
        icon: 'bx bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/clara.muzzio',
        icon: 'bx bxl-instagram-alt',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/claramuzzio',
        icon: 'bx bxl-twitter',
      },
    ],
    map: {
      address: 'Uspallata 3160',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Uspallata%203160',
    },
  },
};

export const CHIEF_OF_CABINET_OF_MINISTERS: Area = {
  id: 3,
  name: 'Jefatura de Gabinete de Ministros',
  information: {
    leader: {
      name: 'Nestor Grindetti',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2024-01/Grindetti.jpg',
      position: 'Ministro de Jefatura de Gabinete',
    },
    contact: {
      emails: ['ngrindetti@buenosaires.gob.ar'],
      address: 'Uspallata 3160',
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61555458143515&sfnsn=scwspwa&mibextid=RUbZ1flocale%3Des_LA',
        icon: 'bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/jefaturaba/?hl=es%3Fhl%3Des',
        icon: 'bxl-instagram-alt',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/jefaturaBA',
        icon: 'bxl-twitter',
      },
    ],
    map: {
      address: 'Uspallata 3160',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Uspallata%203160',
    },
  },
};

export const MINISTRY_OF_CULTURE: Area = {
  id: 4,
  name: 'Ministerio de Cultura',
  information: {
    leader: {
      name: 'Gabriela Ricardes',
      position: 'Ministra de Cultura',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2024-01/Foto%20GR.jpg',
    },
    contact: {
      phone: '11 4323 9400',
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/BACultura/',
        icon: 'bx bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/bacultura/?hl=es-la',
        icon: 'bx bxl-instagram-alt',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/datacultura',
        icon: 'bx bxl-twitter',
      },
    ],
    map: {
      address: 'Av. de Mayo 575',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Av.%20de%20Mayo%20575',
    },
  },
};

export const MINISTRY_OF_ECONOMIC_DEVELOPMENT: Area = {
  id: 5,
  name: 'Ministerio de Desarrollo Económico',
  information: {
    leader: {
      name: 'Roberto García Moritán',
      position: 'Ministro de Desarrollo Económico',
    },
    contact: {
      phone: '5030-9200',
      emails: ['desarrolloeconomico@buenosaires.gob.ar'],
    },
    networks: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/desarrolloeconomicoba/',
        icon: 'bx bxl-instagram-alt',
      },
    ],
    map: {
      address: 'Av. Martín García 346',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Av.%20Mart%C3%ADn%20Garc%C3%ADa%20346',
    },
  },
};

export const MINISTRY_OF_HUMAN_DEVELOPMENT_AND_HOUSING: Area = {
  id: 6,
  name: 'Ministerio de Desarrollo Humano y Hábitat',
  information: {
    leader: {
      name: 'Gabriel Sebastián Mraida',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2023-12/Ministro_de_Desarrollo_Humano_y_Habitat.jpeg',
      position: 'Ministro de Desarrollo Humano y Hábitat',
    },
    contact: {
      phone: '5030-9700',
      emails: ['gmraida@buenosaires.gob.ar'],
      address: 'Piedra Buena Av. 3280',
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/desarrollohumanoba/',
        icon: 'bxl-facebook-circle',
      },
    ],
    map: {
      address: 'Piedra Buena Av. 3280',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Piedra%20Buena%20Av.%203280',
    },
  },
};

export const MINISTRY_OF_EDUCATION: Area = {
  id: 7,
  name: 'Ministerio de Educación',
  information: {
    leader: {
      name: 'Mercedes Miguel',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2023-12/Ministra%20de%20educaci%C3%B3n.jpeg',
      position: 'Ministra de Educación',
    },
    contact: {
      phone: '6076-6000',
      emails: ['mercedes@bue.edu.ar'],
      address: 'Carlos H. Perette 750',
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/EducacionBA/',
        icon: 'bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/educacionba/?hl=es',
        icon: 'bxl-instagram-alt',
      },
      {
        title: 'Youtube',
        url: 'https://www.youtube.com/channel/UC2HtgpM8A9Nv-8y0j5v5ZOQ',
        icon: 'bxl-youtube',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/EducacionBA',
        icon: 'bxl-twitter',
      },
    ],
    map: {
      address: 'Carlos H. Perette 750',
      src: 'https://www.google.com/maps/place/Ministerio+de+Educaci%C3%B3n+de+la+Ciudad+de+Buenos+Aires/@-34.581681,-58.379695,16z/data=!4m6!3m5!1s0x95bccb1fa6732c4b:0xe0081a9aaee2c67b!8m2!3d-34.5816813!4d-58.3796953!16s%2Fg%2F11j1xgwh3j?hl=es&entry=ttu',
    },
  },
};

export const MINISTRY_OF_JUSTICE: Area = {
  id: 8,
  name: 'Ministerio de Justicia',
  information: {
    leader: {
      name: 'Gabino Tapia',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2024-02/foto%20%20Gabino.jpg',
      position: 'Ministro de Justicia',
    },
    contact: {
      phone: '11 5091 9100',
      emails: ['gabinotapia@buenosaires.gob.ar'],
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/tapiagabino',
        icon: 'bx bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/gabinotapiaba/',
        icon: 'bx bxl-instagram-alt',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/GabinoTapiaBA',
        icon: 'bx bxl-twitter',
      },
    ],
    map: {
      address: 'Uspallata 3160',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Uspallata%203160',
    },
  },
};

export const MINISTRY_OF_SECURITY: Area = {
  id: 9,
  name: 'Ministerio de Seguridad',
  information: {
    leader: {
      name: 'Waldo Wolff',
      image: 'https://buenosaires.gob.ar/sites/default/files/2024-01/wolf.jpeg',
      position: 'Ministro de Seguridad',
    },
    contact: {
      phone: '4323-8900 Int. 116517',
      emails: ['wwolff@buenosaires.gob.ar'],
      address: 'Av. Regimiento de Patricios 1142',
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/SeguridadBA/',
        icon: 'bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/Baseguridad',
        icon: 'bxl-instagram-alt',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/seguridadba',
        icon: 'bxl-twitter',
      },
    ],
    map: {
      address: 'Av. Regimiento de Patricios 1142',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Av.%20Regimiento%20de%20Patricios%201142',
    },
  },
};

export const MINISTRY_OF_HEALTH: Area = {
  id: 10,
  name: 'Ministerio de Salud',
  information: {
    leader: {
      name: 'Fernán González Bernaldo de Quirós',
      position: 'Ministro de Salud',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2023-12/Ministro%20de%20salud.jpeg',
    },
    contact: {
      emails: [
        'fquiros@buenosaires.gob.ar',
        'privadafqsalud@buenosaires.gob.ar',
        'ceremonialfqsalud@buenosaires.gob.ar',
      ],
      address: 'Av. Rivadavia 524',
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/BASalud/',
        icon: 'bx bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/saludba',
        icon: 'bx bxl-instagram-alt',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/BASalud',
        icon: 'bx bxl-twitter',
      },
    ],
    map: {
      address: 'Rivadavia 524',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Rivadavia%20524',
    },
  },
};

export const MINISTRY_OF_PUBLIC_SPACE_AND_URBAN_HYGIENE: Area = {
  id: 11,
  name: 'Ministerio de Espacio Público e Higiene Urbana',
  information: {
    leader: {
      name: 'Ignacio Miguel Baistrocchi',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2023-12/Min.%20espacio%20p%C3%BAblico.jpeg',
      position: 'Ministro de Espacio Público e Higiene Urbana',
    },
    contact: {
      phone: '5030 9300',
      emails: ['ibaistrocchi@buenosaires.gob.ar'],
      address: 'Av. Martín García 346, 3° piso',
    },
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/BAciudadverde/',
        icon: 'bx bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/baciudadverde/',
        icon: 'bx bxl-instagram-alt',
      },
      {
        title: 'Youtube',
        url: 'https://www.youtube.com/channel/UC4n60PIGC6xk9TU2H3eVipw',
        icon: 'bx bxl-youtube',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/BACiudadVerde',
        icon: 'bx bxl-twitter',
      },
    ],
    map: {
      address: 'Garcia, Martin Av. 346',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Garcia,%20Martin%20Av.%20346',
    },
  },
};

export const MINISTRY_OF_FINANCE: Area = {
  id: 12,
  name: 'Ministerio de Hacienda y Finanzas',
  information: {
    leader: {
      name: 'Gustavo Arengo Piragine',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2023-12/Ministro_de_Hacienda_y_Finanzas.jpeg',
      position: 'Ministro de Hacienda y Finanzas',
    },
    contact: {
      phone: '5030-9156 / 5030-9158',
      emails: ['garengopiragine@buenosaires.gob.ar'],
      address: 'Av. Martín García 344',
    },
    networks: [
      {
        title: 'Twitter',
        url: 'https://twitter.com/gustavo_arengo',
        icon: 'bxl-twitter',
      },
    ],
    map: {
      address: 'Av. Martín García 344',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Av.%20Mart%C3%ADn%20Garc%C3%ADa%20344',
    },
  },
};

export const MINISTRY_OF_INFRASTRUCTURE: Area = {
  id: 13,
  name: 'Ministerio de Infraestructura',
  information: {
    leader: {
      name: 'Pablo Bereciartua',
      position: 'Ministro de Infraestructura',
      image:
        'https://buenosaires.gob.ar/sites/default/files/2024-01/pablo%20bereciartua.jpg',
    },
    contact: {
      emails: ['pbereciartua@buenosaires.gob.ar'],
    },
    networks: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/bainfraestructura',
        icon: 'bx bxl-instagram-alt',
      },
      {
        title: 'YouTube',
        url: 'https://www.youtube.com/channel/UCsulcK8Zh0wFbtdWu0DqHCQ',
        icon: 'bx bxl-youtube',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/BAInfraest',
        icon: 'bx bxl-twitter',
      },
    ],
    map: {
      address: 'Av. Martín García 346',
      src: 'http://mapa.buenosaires.gob.ar/comollego?hasta=Av.%20Mart%C3%ADn%20Garc%C3%ADa%20346',
    },
  },
};

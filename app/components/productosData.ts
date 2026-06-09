export const FLAVOR_SWATCHES: Record<string, string> = {
  "Mantecado":       "#F5D78E",
  "Chocolate":       "#3D1A00",
  "Fresa":           "#FF6B8A",
  "Coco":            "#F0EDE0",
  "Vainilla":        "#FFF3A0",
  "Yogurt Griego":   "#F0EBE0",
  "Caramelo":        "#E8920A",
  "Chocolate Savoy": "#3D1A00",
};

export type Spec = { label: string; val: string };
export type SpecSection = { title: string; items: Spec[] };
export type FlavorSections = Record<string, SpecSection[]>;

export type Producto = {
  num: string; nombre: string; categoria: string;
  desc: string; chips: string[]; presentaciones: string;
  foto: string | null; photoContain?: boolean; photoBg?: string; photoScale?: number;
  contentBg: string; textColor: string; accent: string;
  specs: Spec[];
  sections?: SpecSection[];
  flavorSections?: FlavorSections;
};

export const productos: Producto[] = [
  {
    num: "01", nombre: "Helados Duros", categoria: "Cuatro sabores · Tres presentaciones",
    desc: "Sólidos lácteos, sabores naturales y recetas propias desde 1951. Cuatro variedades. Línea Chocolate certificada Hecho con Savoy de Nestlé.",
    chips: ["Mantecado", "Chocolate", "Fresa", "Coco"],
    presentaciones: "480 ml · 2 L · 4 L",
    foto: "/images/02_2l_chocolate_arriba_HD.png",
    photoContain: true, photoBg: "#3D0000",
    contentBg: "#e61f3e", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [],
    flavorSections: {
      chocolate: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "195 Cal" }, { label: "Cal. de grasa", val: "61 Cal" },
          { label: "Grasa total", val: "6.7 g" }, { label: "Carbohidratos", val: "31 g" }, { label: "Proteínas", val: "3.0 g" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Agua, leche completa en polvo, azúcar, margarina, manteca vegetal, cacao SAVOY/NESTLÉ, estabilizantes, emulsificantes y vainilla" },
        ]},
        { title: "Empaques y Rendimiento", items: [
          { label: "480 ml — Individual", val: "209 × 110 mm · 250 g · ~3 bolas de 80 g" },
          { label: "2 L — Familiar", val: "22 × 19 × 9.5 cm · 1.27 kg · ~30 bolas · Cesta 12 uds" },
          { label: "4 L — Profesional", val: "22 × 19 × 13 cm · 2.01 kg · ~60 bolas · Cesta 8 uds" },
        ]},
        { title: "Registro SENCAMER", items: [
          { label: "Permiso", val: "A-117.393" },
          { label: "4 L", val: "CPS: CP06363655606 · EAN: TV031600440" },
          { label: "2 L", val: "CPS: CP06160418618 · EAN: TV031600412" },
          { label: "480 ml", val: "CPS: CP06161656522 · EAN: TV031600405" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Temperatura", val: "≤ −10°C" }, { label: "Almacenar en", val: "Congeladores o cavas limpias y secas" }, { label: "Vida útil", val: "12 meses congelado" },
        ]},
      ],
      mantecado: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "180 Cal" }, { label: "Cal. de grasa", val: "90 Cal" },
          { label: "Grasa total", val: "9.0 g" }, { label: "Carbohidratos", val: "23 g" }, { label: "Proteínas", val: "4.0 g" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Agua, azúcar, leche en polvo, grasa vegetal, espumantes, vainilla y conservantes" },
        ]},
        { title: "Empaques y Rendimiento", items: [
          { label: "480 ml — Individual", val: "209 × 110 mm · 250 g · ~3 bolas de 80 g" },
          { label: "2 L — Familiar", val: "22 × 19 × 9.5 cm · 1.27 kg · ~30 bolas · Cesta 12 uds" },
          { label: "4 L — Profesional", val: "22 × 19 × 13 cm · 2.01 kg · ~60 bolas · Cesta 8 uds" },
        ]},
        { title: "Registro SENCAMER", items: [
          { label: "Permiso", val: "A-113.970" },
          { label: "4 L", val: "CPS: CP02503510616" },
          { label: "2 L", val: "CPS: CP02313619618" },
          { label: "480 ml", val: "CPS: CP02161844413" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Temperatura", val: "≤ −10°C" }, { label: "Almacenar en", val: "Congeladores o cavas limpias y secas" }, { label: "Vida útil", val: "12 meses congelado" },
        ]},
      ],
      fresa: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "227 Cal" }, { label: "Cal. de grasa", val: "90 Cal" },
          { label: "Grasa total", val: "18 g" }, { label: "Carbohidratos", val: "34 g" }, { label: "Proteínas", val: "3.0 g" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Agua, azúcar, leche entera, leche en polvo, grasa vegetal, espumantes, ácido cítrico, colorantes y conservantes" },
        ]},
        { title: "Empaques y Rendimiento", items: [
          { label: "480 ml — Individual", val: "209 × 110 mm · 250 g · ~3 bolas de 80 g" },
          { label: "2 L — Familiar", val: "22 × 19 × 9.5 cm · 1.27 kg · ~30 bolas · Cesta 12 uds" },
          { label: "4 L — Profesional", val: "22 × 19 × 13 cm · 2.01 kg · ~60 bolas · Cesta 8 uds" },
        ]},
        { title: "Registro SENCAMER", items: [
          { label: "Permiso", val: "A-113.971" },
          { label: "4 L", val: "CPS: CP04562610601" },
          { label: "2 L", val: "CPS: CP04542511619" },
          { label: "480 ml", val: "CPS: CP04241600627" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Temperatura", val: "≤ −10°C" }, { label: "Almacenar en", val: "Congeladores o cavas limpias y secas" }, { label: "Vida útil", val: "12 meses congelado" },
        ]},
      ],
      coco: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "91 Cal" }, { label: "Cal. de grasa", val: "31.6 Cal" },
          { label: "Grasa total", val: "9.1 g" }, { label: "Carbohidratos", val: "9.0 g" }, { label: "Proteínas", val: "2.3 g" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Agua, azúcar, leche de coco, coco rayado, grasa vegetal, espesantes y estabilizantes" },
        ]},
        { title: "Empaques y Rendimiento", items: [
          { label: "480 ml — Individual", val: "209 × 110 mm · ~3 bolas de 80 g" },
          { label: "2 L — Familiar", val: "22 × 19 × 9.5 cm · 1.27 kg · ~30 bolas · Cesta 12 uds" },
          { label: "4 L — Profesional", val: "22.5 × 19 × 13 cm · ~60 bolas · Cesta 12 uds" },
        ]},
        { title: "Registro SENCAMER", items: [
          { label: "Permiso", val: "A-113.967" },
          { label: "4 L", val: "CPS: CP06563519617" },
          { label: "2 L", val: "CPS: CP06561519617" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Temperatura", val: "≤ −10°C" }, { label: "Almacenar en", val: "Congeladores o cavas limpias y secas" }, { label: "Vida útil", val: "12 meses congelado" },
        ]},
      ],
    },
  },
  {
    num: "02", nombre: "Mezcla Suave", categoria: "Base para máquinas Soft Serve",
    desc: "Base artesanal lista para usar en máquinas Soft Serve. Almacenamiento dual: congelado o refrigerado. Galón de 3.78 litros.",
    chips: ["Vainilla", "Chocolate", "Fresa", "Yogurt Griego"],
    presentaciones: "Galón 3.78 L",
    foto: "/images/soft-galon.png",
    photoContain: true, photoBg: "#3D0000",
    contentBg: "#e61f3e", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [],
    flavorSections: {
      vainilla: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "158 Cal" }, { label: "Grasa total", val: "4.0 g" },
          { label: "Carbohidratos", val: "29 g" }, { label: "Proteínas", val: "2.8 g" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Agua, azúcar, leche completa en polvo, grasa vegetal, emulsificantes, estabilizantes y vainilla" },
        ]},
        { title: "Usos y Rendimiento", items: [
          { label: "Aplicaciones", val: "Máquina Soft · Batipudin · Sundae · Merengadas" },
          { label: "Rendimiento",  val: "~45 raciones de 80 g por galón" },
        ]},
        { title: "Empaque", items: [
          { label: "Presentación", val: "Galón US 3.78 L (PEAD)" },
          { label: "Dimensiones",  val: "Base 15 × 27.5 × 29.8 cm" },
          { label: "Despacho",     val: "Cesta 10 garrafas" },
        ]},
        { title: "Registro Sanitario", items: [
          { label: "EAN",     val: "7591381004334" },
          { label: "Permiso", val: "A-107.602" },
          { label: "CPE",     val: "1123549691" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Congelado",   val: "≤ −15°C" },
          { label: "Refrigerado", val: "< −4°C" },
          { label: "Vida útil",   val: "12 meses congelado · 1 mes refrigerado" },
        ]},
      ],
      chocolate: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "~150 Cal" }, { label: "Grasa total", val: "4.4 g" },
          { label: "Proteínas", val: "2.7 g" }, { label: "Certificación", val: "Hecho con SAVOY/NESTLÉ" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Agua, azúcar, leche completa en polvo, grasa vegetal, cacao SAVOY/NESTLÉ, estabilizantes, emulsificantes y sal" },
        ]},
        { title: "Usos y Rendimiento", items: [
          { label: "Aplicaciones", val: "Máquina Soft · Batipudin · Sundae · Merengadas" },
          { label: "Rendimiento",  val: "~45 raciones de 80 g por galón" },
        ]},
        { title: "Empaque", items: [
          { label: "Presentación", val: "Galón US 3.78 L (PEAD)" },
          { label: "Dimensiones",  val: "Base 15 × 27.5 × 29.8 cm" },
          { label: "Despacho",     val: "Cesta 10 garrafas" },
        ]},
        { title: "Registro Sanitario", items: [
          { label: "EAN",     val: "7591381000834" },
          { label: "Permiso", val: "A-107.601" },
          { label: "CPE",     val: "1123549690" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Congelado",   val: "≤ −15°C" },
          { label: "Refrigerado", val: "< −4°C" },
          { label: "Vida útil",   val: "12 meses congelado · 1 mes refrigerado" },
        ]},
      ],
      fresa: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "212 Cal" }, { label: "Grasa total", val: "13 g" },
          { label: "Carbohidratos", val: "22 g" }, { label: "Proteínas", val: "4.8 g" }, { label: "Sodio", val: "46 mg" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Agua, azúcar, leche completa en polvo, grasa vegetal, emulsificantes, estabilizantes y esencia de Fresa" },
        ]},
        { title: "Usos y Rendimiento", items: [
          { label: "Aplicaciones", val: "Máquina Soft · Batipudin · Sundae · Merengadas" },
          { label: "Rendimiento",  val: "~45 raciones de 80 g por galón" },
        ]},
        { title: "Empaque", items: [
          { label: "Presentación", val: "Galón US 3.78 L (PEAD)" },
          { label: "Dimensiones",  val: "Base 15 × 27.5 × 29.8 cm" },
          { label: "Despacho",     val: "Cesta 10 garrafas" },
        ]},
        { title: "Registro Sanitario", items: [
          { label: "EAN",     val: "7591381008524" },
          { label: "Permiso", val: "A-168.215" },
          { label: "CPE",     val: "1124572425" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Congelado",   val: "≤ −15°C" },
          { label: "Refrigerado", val: "< −4°C" },
          { label: "Vida útil",   val: "12 meses congelado · 1 mes refrigerado" },
        ]},
      ],
      yogurt: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "158 Cal" }, { label: "Grasa total", val: "4.0 g" },
          { label: "Carbohidratos", val: "29 g" }, { label: "Proteínas", val: "2.8 g" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Yogurt Griego, Agua, azúcar, leche completa en polvo, grasa vegetal, emulsificantes y estabilizantes" },
        ]},
        { title: "Usos y Rendimiento", items: [
          { label: "Aplicaciones", val: "Máquina Soft · Batipudin · Sundae · Merengadas" },
          { label: "Rendimiento",  val: "~45 raciones de 80 g por galón" },
        ]},
        { title: "Empaque", items: [
          { label: "Presentación", val: "Galón US 3.78 L (PEAD) · Mismo envase de Vainilla" },
          { label: "Dimensiones",  val: "Base 15 × 27.5 × 29.8 cm" },
          { label: "Despacho",     val: "Cesta 10 garrafas" },
        ]},
        { title: "Registro Sanitario", items: [
          { label: "Nota", val: "Mismo envase de Vainilla" },
          { label: "Referencia", val: "EAN: 7591381004334 · Permiso A-107.602" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Congelado",   val: "≤ −15°C" },
          { label: "Refrigerado", val: "< −4°C" },
          { label: "Vida útil",   val: "12 meses congelado · 1 mes refrigerado" },
        ]},
      ],
    },
  },
  {
    num: "03", nombre: "Siropes", categoria: "Para helados, café y postres",
    desc: "Alta concentración, consistencia suave. Certificación Hecho con Savoy de Nestlé en la variedad Chocolate. Para heladerías, cafeterías y repostería.",
    chips: ["Fresa", "Chocolate Savoy", "Caramelo"],
    presentaciones: "Galón 4.84 kg",
    foto: "/images/sirope-caramelo-galon.png",
    photoContain: true, photoBg: "#3D0000",
    contentBg: "#e61f3e", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [],
    flavorSections: {
      caramelo: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "307 Kcal" }, { label: "Grasa total", val: "4.0 g" },
          { label: "Grasa saturada", val: "2.8 g" }, { label: "Carbohidratos", val: "45 g" }, { label: "Proteínas", val: "2.8 g" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Crema de Leche, Azúcar, Agua, Benzoato de Sodio, Sal" },
          { label: "Contenido neto", val: "4.84 kg" },
        ]},
        { title: "Empaque", items: [
          { label: "Presentación", val: "Galón US 3.78 L (PEAD)" },
          { label: "Dimensiones",  val: "Base 15 × 27.5 × 29.8 cm" },
          { label: "Despacho",     val: "Cesta 10 garrafas" },
        ]},
        { title: "Registro Sanitario", items: [
          { label: "CPS",     val: "SICAR37B0" },
          { label: "EAN",     val: "7591381000879" },
          { label: "Permiso", val: "A-170.400" },
          { label: "CPE",     val: "0425582712" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Temperatura", val: "Refrigerado a 7°C · No congelar" },
          { label: "Vida útil",   val: "6 meses refrigerado" },
          { label: "Indicación",  val: "Agitar bien antes de usar" },
        ]},
      ],
      chocolate: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "~290 Kcal" }, { label: "Grasa total", val: "3.0 g" },
          { label: "Grasa saturada", val: "1.5 g" }, { label: "Carbohidratos", val: "~50 g" },
          { label: "Certificación", val: "Hecho con SAVOY/NESTLÉ" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Azúcar, Agua, Cacao en polvo Savoy de Nestlé, Benzoato de Sodio, Sal" },
          { label: "Contenido neto", val: "4.84 kg" },
        ]},
        { title: "Empaque", items: [
          { label: "Presentación", val: "Galón US 3.78 L (PEAD)" },
          { label: "Dimensiones",  val: "Base 15 × 27.5 × 29.8 cm" },
          { label: "Despacho",     val: "Cesta 10 garrafas" },
        ]},
        { title: "Registro Sanitario", items: [
          { label: "CPS",     val: "SICH37B0" },
          { label: "EAN",     val: "7591381000862" },
          { label: "Permiso", val: "A-168.214" },
          { label: "CPE",     val: "1124572423" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Temperatura", val: "Refrigerado a 7°C · No congelar" },
          { label: "Vida útil",   val: "6 meses refrigerado" },
          { label: "Indicación",  val: "Agitar bien antes de usar" },
        ]},
      ],
      fresa: [
        { title: "Tabla Nutricional · por 100 g", items: [
          { label: "Calorías totales", val: "~200 Kcal" }, { label: "Grasa total", val: "0.5 g" },
          { label: "Grasa saturada", val: "0.8 g" }, { label: "Carbohidratos", val: "48 g" }, { label: "Proteínas", val: "0.5 g" },
        ]},
        { title: "Ingredientes", items: [
          { label: "Fórmula", val: "Azúcar, Agua, Pulpa de Fresa, Benzoato de Sodio, Colorante, Sal" },
          { label: "Contenido neto", val: "4.84 kg" },
        ]},
        { title: "Empaque", items: [
          { label: "Presentación", val: "Galón US 3.78 L (PEAD)" },
          { label: "Dimensiones",  val: "Base 15 × 27.5 × 29.8 cm" },
          { label: "Despacho",     val: "Cesta 10 garrafas" },
        ]},
        { title: "Registro Sanitario", items: [
          { label: "CPS",     val: "SIFRE37B0" },
          { label: "EAN",     val: "7591381008524" },
          { label: "Permiso", val: "A-168.213" },
          { label: "CPE",     val: "1124572424" },
        ]},
        { title: "Conservación y Vida Útil", items: [
          { label: "Temperatura", val: "Refrigerado a 7°C · No congelar" },
          { label: "Vida útil",   val: "6 meses refrigerado" },
          { label: "Indicación",  val: "Agitar bien antes de usar" },
        ]},
      ],
    },
  },
  {
    num: "04", nombre: "Kindy Tradicional", categoria: "Base cítrica para limonada",
    desc: "100% jugo de limón. Preserva aceites esenciales, vitamina C y ácidos orgánicos. Un galón rinde entre 25 y 35 litros de limonada.",
    chips: ["245 Cal/100g", "Brix 55–60°", "120 días vida útil"],
    presentaciones: "350 ml · 800 ml · Galón 3.78 L",
    foto: "/images/kindy-galon-original.png",
    photoContain: true, photoBg: "#3D0000",
    contentBg: "#e61f3e", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [],
    sections: [
      { title: "Tabla Nutricional · por 100 g", items: [
        { label: "Calorías totales",      val: "245.2 Cal" },
        { label: "Grasa total",           val: "1.0 g" },
        { label: "Carbohidratos totales", val: "61.0 g" },
        { label: "Proteínas",             val: "1.5 g" },
        { label: "Rango Brix",            val: "55° – 60°" },
      ]},
      { title: "Descripción y Beneficios", items: [
        { label: "Ingredientes",          val: "100% jugo de limón natural, azúcar, ácidos orgánicos y vitamina C" },
        { label: "Ideal para",            val: "Limonada Frappé · Cocteles · Bebidas cítricas" },
        { label: "Beneficios",            val: "Sin colorantes artificiales · Preserva aceites esenciales y vitamina C" },
      ]},
      { title: "Presentaciones y Empaques", items: [
        { label: "Galón 3.78 L (FS)",    val: "32 × 17.5 × 28.8 cm · Rinde 25–35 L/limonada · Cesta 12 garrafas" },
        { label: "Botella 800 ml",        val: "10.1 × 24.5 cm · Rinde 7–8 L/limonada · Cesta 20 botellas" },
        { label: "Botella 350 ml",        val: "8.5 × 18.5 cm · Rinde 3.2–3.5 L/limonada · Cesta 20 botellas" },
      ]},
      { title: "Registro Sanitario", items: [
        { label: "Permiso (Food Service)", val: "A-39.140 · Sencamer CF0392456B406" },
        { label: "Permiso (Retail)",       val: "Contraloría Sanitaria A-39.140" },
        { label: "800 ml CPS",            val: "CP01123549340" },
        { label: "350 ml CPS",            val: "CP01123549341" },
      ]},
      { title: "Conservación y Vida Útil", items: [
        { label: "Congelado",  val: "≤ −15°C" },
        { label: "Refrigerado", val: "< 4°C" },
        { label: "Vida útil",  val: "120 días desde fabricación" },
      ]},
    ],
  },
  {
    num: "05", nombre: "Kindy Light", categoria: "Base cítrica con Sucralosa",
    desc: "El mismo 100% de jugo de limón, endulzado con Sucralosa. Solo 16 calorías por vaso. Sin azúcar añadida.",
    chips: ["16 Cal/100g", "Sin azúcar", "Sucralosa"],
    presentaciones: "350 ml · 800 ml · Galón 3.78 L",
    foto: "/images/kindy-galon-light.png",
    photoContain: true, photoBg: "#3D0000",
    contentBg: "#e61f3e", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [],
    sections: [
      { title: "Tabla Nutricional · por 100 g", items: [
        { label: "Calorías totales",      val: "16 Cal" },
        { label: "Cal. de grasa",         val: "0.45 Cal" },
        { label: "Grasa total",           val: "0.4 g" },
        { label: "Carbohidratos totales", val: "3.2 g" },
        { label: "Proteínas",             val: "1.5 g" },
        { label: "Endulzante",            val: "Sucralosa · Sin azúcar añadida" },
      ]},
      { title: "Descripción y Beneficios", items: [
        { label: "Ingredientes",  val: "100% jugo de limón natural, Sucralosa, agua y conservante" },
        { label: "Ideal para",    val: "Limonada Frappé · Dietas bajas en calorías · Diabéticos" },
        { label: "Beneficios",    val: "Solo 16 Cal por vaso · Sin azúcar añadida · 100% limón natural" },
      ]},
      { title: "Presentaciones y Empaques", items: [
        { label: "Galón 3.78 L (FS)", val: "Rinde 25–30 L/limonada · Cesta disponible" },
        { label: "Botella 800 ml",    val: "10.1 × 24.5 cm · Rinde 7–8 L/limonada · Cesta 20 botellas" },
        { label: "Botella 350 ml",    val: "8.5 × 18.5 cm · Rinde 2.1–3.5 L/limonada · Cesta 20 botellas" },
      ]},
      { title: "Registro Sanitario", items: [
        { label: "Permiso (Food Service)", val: "A-106.604 · Sencamer CF01232649346" },
        { label: "350 ml FS CPS",         val: "CF1122549341" },
        { label: "Permiso (Retail)",      val: "Contraloría Social A-106.024" },
        { label: "800 ml CPS",            val: "CP01232649346" },
        { label: "350 ml CPS",            val: "CP1122549337" },
      ]},
      { title: "Conservación y Vida Útil", items: [
        { label: "Congelado",  val: "≤ −15°C" },
        { label: "Refrigerado", val: "< 4°C" },
        { label: "Vida útil",  val: "120 días desde fabricación" },
      ]},
    ],
  },
  {
    num: "06", nombre: "Crema Topping", categoria: "Crema chantilly para batir",
    desc: "Lista para usar. Para postres, helados, bebidas, waffles y pancakes. Distribuida en hoteles, cadenas de restaurantes y pastelerías de todo el país.",
    chips: ["Postres", "Helados", "Bebidas calientes", "Waffles"],
    presentaciones: "900 cc (cartón)",
    foto: "/images/topping-crema.png",
    photoContain: true, photoBg: "#3D0000",
    contentBg: "#e61f3e", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [],
    sections: [
      { title: "Descripción y Uso", items: [
        { label: "Tipo",          val: "Crema chantilly lista para usar" },
        { label: "Aplicaciones",  val: "Postres · Helados · Bebidas calientes y frías · Waffles · Pancakes" },
        { label: "Canal",         val: "Hoteles · Restaurantes · Pastelerías profesionales" },
      ]},
      { title: "Empaque y Distribución", items: [
        { label: "Presentación",  val: "900 cc (cartón)" },
        { label: "Vida útil",     val: "30 días" },
        { label: "Distribución",  val: "Nacional" },
      ]},
    ],
  },
  {
    num: "07", nombre: "CociCreme", categoria: "Crema para cocinar",
    desc: "Versátil, estable al calor. Para salsas, sopas, cremas, gratinados y todo tipo de recetas saladas. La preferida de las cocinas profesionales venezolanas.",
    chips: ["Salsas", "Sopas", "Gratinados", "Recetas saladas"],
    presentaciones: "Food Service",
    foto: "/images/cocicreme.png",
    photoContain: true, photoBg: "#3D0000",
    contentBg: "#e61f3e", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [],
    sections: [
      { title: "Descripción y Uso", items: [
        { label: "Tipo",              val: "Crema para cocinar" },
        { label: "Propiedad clave",   val: "Estable al calor" },
        { label: "Aplicaciones",      val: "Salsas · Sopas · Cremas · Gratinados · Recetas saladas" },
      ]},
      { title: "Canal y Distribución", items: [
        { label: "Canal principal",   val: "Restaurantes · Hoteles · Cocinas profesionales" },
        { label: "Presentación",      val: "Food Service" },
        { label: "Distribución",      val: "Nacional" },
      ]},
    ],
  },
];

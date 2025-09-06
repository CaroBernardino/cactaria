// ====== DATOS DE PRODUCTOS (ajusta nombres / descripciones a tu gusto) ======
const products = [
  {
    name: "Sedum de cobre.",
    price: "$1.50",
    image: "img/producto/1.jpeg",
    description:
      "Suculenta apreciada por sus hojas gruesas y alargadas que crecen en rosetas densas. Con mucha luz, sus puntas toman tonos anaranjados o cobrizos. En primavera produce pequeñas flores blancas y fragantes.",
    care: [
      "Luz: Mucha luz, preferiblemente sol directo (ventana al sur o terraza).",
      "Riego: Moderado; deja secar completamente el sustrato entre riegos.",
      "Propagación: Muy fácil por esquejes de tallo o de hoja."
    ]
  },
  {
    name: "Maihueniopsis darwinii",
    price: "$1.50",
    image: "img/producto/2.jpeg",
    description:
      "Cactus de forma globosa o ligeramente columnar, con espinas largas, rígidas y punzantes que pueden medir varios centímetros, y costillas bien marcadas en el tallo.",
    care: [
      "Luz: Necesitan abundante luz directa, pero se debe evitar el sol intenso de mediodía en verano para no quemar la planta.",
      "Riego: Agua escasa. Permitir que el sustrato se seque completamente entre riegos..",
    ]
  },
  {
    name: "Cactus dragón rojo",
    price: "$1.50",
    image: "img/producto/4.jpeg",
    description:
      "Esta planta se distingue por sus tallos de color verde oscuro, que crecen en forma de estrella y tienen cuatro lados con protuberancias suaves y cónicas a lo largo de los bordes. Su principal atractivo son sus flores inusuales, que son de un color burdeos oscuro o rojizo y tienen una textura aterciopelada. ",
    care: [
      "Luz: Prefiere la luz brillante e indirecta. Si la expones a sol directo y muy fuerte, los tallos pueden quemarse o tornarse rojizos por estrés.",
      "Riego: Riega de manera moderada. Deja que el sustrato se seque por completo entre cada riego. Es muy propensa a la pudrición de la raíz si se riega en exceso.",
      "TTemperatura: Resiste bien el calor, pero no tolera el frío ni las heladas. Mantenla en unlugar cálido.",
      "Propagación: Es muy fácil de propagar a partir de esquejes de tallo. Simplemente corta una porción del tallo y plántala en sustrato seco"
    ]
  },
  {
    name: "Cactus de pelo de anciano",
    price: "$1.50",
    image: "img/producto/5.jpeg",
    description:
      "Este cactus es reconocible por su forma globosa y el denso crecimiento de espinas blancas y suaves, parecidas a lana o cabello, que cubren la mayor parte de su cuerpo verde",
    care: [
      "Luz: Necesita mucha luz, preferiblemente sol directo. Un lugar con exposición al sol durante varias horas al día es ideal. La falta de luz hará que crezca de forma alargada y débil.",
      "Riego: Riega solo cuando el sustrato esté completamente seco. Es muy sensible al exceso de agua, lo que puede causar pudrición de la raíz. En invierno, reduce el riego al mínimo o no riegues en absoluto",
      "Sustrato: Usa una mezcla para cactus con excelente drenaje.",
      "Temperatura: Es tolerante al calor, pero es importante protegerlo de las heladas. Es un cactus de bajo mantenimiento y una excelente opción tanto para principiantes como para coleccionistas"
    ]
  },
  {
    name: "Árbol de jade Gollum o orejas de Shrek",
    price: "$1.50",
    image: "img/producto/6.jpeg",
    description:
      "Esta suculenta se distingue por sus hojas tubulares y cóncavas, que se asemejan a pequeños tubos con ventosas en los extremos, lo que le da su apodo de orejas de Shrek. Los tallos son gruesos y leñosos con el tiempo, y la planta puede crecer hasta convertirse en un arbusto. Las hojas son de un color verde brillante, y las puntas pueden adquirir un tono rojizo con suficiente luz solar.",
    care: [
      "Luz: Necesita luz solar brillante, preferiblemente directa, para mantener su forma compacta y el color vibrante de sus hojas. Si la luz es insuficiente, los tallos se estirarán y las hojas perderán su coloración.",
      "Riego: Riega solo cuando la tierra esté completamente seca. Es fundamental evitar el exceso de agua para prevenir la pudrición de la raíz. Reduce los riegos en invierno, cuando la planta entra en un período de descanso.",
      "Temperatura: Se adapta bien a climas cálidos, pero no soporta las heladas.",
      "Propagación: Se propaga fácilmente a partir de esquejes de hoja o de tallo. Puedes cortar una hoja o un pequeño tallo y plantarlo directamente en el sustrato."
    ]
  },
  {
    name: "Artificial Plant",
    price: "$43.00",
    image: "img/producto/7.jpeg",
    description:
      "Decoración versátil y duradera.",
    care: [
      "Limpieza: Ocasional.",
      "Sol directo: Evitar.",
      "Riego: No necesita."
    ]
  },
  {
    name: "Artificial Plant",
    price: "$43.00",
    image: "img/producto/8.jpeg",
    description:
      "Elemento decorativo con estética natural.",
    care: [
      "Limpieza: Seco.",
      "Color: Mantener fuera de sol fuerte.",
      "Mantenimiento: Nulo."
    ]
  }
];

// ====== REFERENCIAS DEL MODAL ======
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalCareList = document.getElementById("modalCareList");
const modalBuy = document.getElementById("modalBuy");
const modalClose = document.getElementById("modalClose");

// ====== ABRIR MODAL (DINÁMICO) ======
function openModal(index) {
  const p = products[index];
  if (!p) return;

  modalImg.src = p.image;
  modalTitle.textContent = p.name;
  modalPrice.textContent = p.price;
  modalDescription.textContent = p.description;

  // Cuidados
  modalCareList.innerHTML = "";
  p.care.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modalCareList.appendChild(li);
  });

  // Botón comprar (WhatsApp)
  modalBuy.onclick = () => {
    const text = `Hola, quiero comprar ${p.name}`;
    window.open(`https://wa.me/numero?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Mostrar
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // bloquea scroll fondo
}

// ====== CERRAR MODAL ======
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// ====== EFECTO HEADER AL SCROLL ======
window.addEventListener("scroll", () => {
  const header = document.getElementById("mainHeader");
  const heroText = document.querySelector(".hero-text");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    header.classList.add("scrolled");
    heroText?.classList.add("hidden");
  } else {
    header.classList.remove("scrolled");
    heroText?.classList.remove("hidden");
  }
});

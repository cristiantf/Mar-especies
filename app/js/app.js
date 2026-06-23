// =================================================================
// Mar Especies Studio – aplicación principal
// =================================================================

import { ESPECIES, RUTAS, rutasEspecie } from "./data.js";

// ---------- Estado ----------
const state = {
  selectedId: ESPECIES[0].id,
  compareA: ESPECIES[0].id,
  compareB: ESPECIES[1].id,
  isHabitatBg: true,
  isRotating: false,
  isIsolated: false,
};

// ---------- Atajos al DOM ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const els = {
  app: $("#app"),
  speciesList: $("#species-list"),
  viewerName: $("#viewer-name"),
  viewerGroup: $("#viewer-group"),
  viewerHabitat: $("#viewer-habitat"),
  viewerStage: $("#viewer-stage"),
  modelViewer: $("#model-viewer"),
  detailAvatar: $("#detail-avatar"),
  detailName: $("#detail-name"),
  detailSci: $("#detail-sci"),
  detailGrid: $("#detail-grid"),
  ecoText: $("#eco-text"),
  ecoDato: $("#eco-dato"),
  galleryAnat: $("#gallery-anatomia"),
  galleryFicha: $("#gallery-ficha"),
  compareAThumb: $("#compare-a-thumb"),
  compareAName: $("#compare-a-name"),
  compareAGroup: $("#compare-a-group"),
  compareASelect: $("#compare-a-select"),
  compareBThumb: $("#compare-b-thumb"),
  compareBName: $("#compare-b-name"),
  compareBGroup: $("#compare-b-group"),
  compareBSelect: $("#compare-b-select"),
  modeTabs: $("#mode-tabs"),
  habitatSwitch: $("#habitat-switch"),
  topbarNav: $("#topbar-nav"),
  toast: $("#toast"),
  modalImage: $("#modal-image"),
  modalImageTitle: $("#modal-image-title"),
  modalImageImg: $("#modal-image-img"),
  modalImageCap: $("#modal-image-cap"),
  modalCompare: $("#modal-compare"),
  compareGrid: $("#compare-grid"),
  modalView: $("#modal-view"),
  modalViewTitle: $("#modal-view-title"),
  modalViewBody: $("#modal-view-body"),
};

// ---------- Utilidades ----------
const getEspecie = (id) => ESPECIES.find((e) => e.id === id);

function toast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add("is-show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => els.toast.classList.remove("is-show"), 1800);
}

// =================================================================
// Sidebar de especies
// =================================================================
function renderSidebar() {
  els.speciesList.innerHTML = ESPECIES.map((esp) => {
    const r = rutasEspecie(esp);
    const active = esp.id === state.selectedId ? "is-active" : "";
    return `
      <button class="species-item ${active}" data-id="${esp.id}">
        <img class="species-item__thumb" src="${r.miniatura}" alt="${esp.nombre}" />
        <span class="species-item__text">
          <span class="species-item__name">${esp.nombre}</span>
          <span class="species-item__sci">${esp.grupo}</span>
        </span>
      </button>`;
  }).join("");

  els.speciesList.querySelectorAll(".species-item").forEach((btn) => {
    btn.addEventListener("click", () => seleccionar(btn.dataset.id));
  });
}

// =================================================================
// Visor 3D
// =================================================================
function actualizarVisor(esp) {
  const r = rutasEspecie(esp);

  els.viewerName.textContent = esp.nombre;
  els.viewerGroup.textContent = esp.grupo;
  els.viewerHabitat.textContent = `🌊 ${esp.habitatNombre}`;

  // Carga del modelo .glb
  els.viewerStage.classList.add("is-loading");
  els.modelViewer.setAttribute("src", r.modelo);
  els.modelViewer.setAttribute("alt", `Modelo 3D de ${esp.nombre}`);

  // Fondo hábitat
  aplicarFondoHabitat();
}

function aplicarFondoHabitat() {
  const esp = getEspecie(state.selectedId);
  const r = rutasEspecie(esp);
  if (state.isHabitatBg) {
    els.viewerStage.style.backgroundImage = `linear-gradient(180deg, rgba(255,255,255,0.05), rgba(16,62,104,0.18)), url('${r.habitat}')`;
    els.viewerStage.classList.add("with-habitat");
  } else {
    els.viewerStage.style.backgroundImage =
      "linear-gradient(180deg, #cbe6f3, #6ba9c8)";
    els.viewerStage.classList.remove("with-habitat");
  }
}

// =================================================================
// Panel de detalles
// =================================================================
function renderDetalles(esp) {
  const r = rutasEspecie(esp);
  els.detailAvatar.src = r.pngTransparente;
  els.detailName.textContent = esp.nombre;
  els.detailSci.textContent = esp.cientifico;

  const filas = [
    { icono: "icon_grupo.png", label: "Grupo", val: esp.grupo },
    { icono: "icon_respiracion.png", label: "Respira", val: esp.respiracion },
    { icono: "icon_movimiento.png", label: "Movimiento", val: esp.movimiento },
    { icono: "icon_alimentacion.png", label: "Alimentación", val: esp.alimentacion },
    { icono: "icon_reproduccion.png", label: "Reproducción", val: esp.reproduccion },
    { icono: "icon_tamano.png", label: "Tamaño", val: esp.tamano },
    { icono: "icon_habitat.png", label: "Hábitat", val: esp.habitatNombre },
    { icono: "icon_conservacion.png", label: "Conservación", val: esp.conservacion },
  ];

  els.detailGrid.innerHTML = filas
    .map(
      (f) => `
      <div class="detail-row">
        <img class="detail-row__icon" src="${RUTAS.iconos}/${f.icono}" alt="" />
        <div class="detail-row__text">
          <small>${f.label}</small>
          <span>${f.val}</span>
        </div>
      </div>`
    )
    .join("");

  els.ecoText.textContent = esp.notaEcologica;
  els.ecoDato.textContent = `💡 Dato curioso: ${esp.datoCurioso}`;
}

// =================================================================
// Galería educativa
// =================================================================
function renderGaleria(esp) {
  const r = rutasEspecie(esp);
  els.galleryAnat.src = r.anatomia;
  els.galleryFicha.src = r.ficha;
}

// =================================================================
// Comparador
// =================================================================
function renderCompareSelects() {
  const opts = ESPECIES.map(
    (e) => `<option value="${e.id}">${e.nombre}</option>`
  ).join("");
  els.compareASelect.innerHTML = opts;
  els.compareBSelect.innerHTML = opts;
  els.compareASelect.value = state.compareA;
  els.compareBSelect.value = state.compareB;
}

function renderCompareChips() {
  const a = getEspecie(state.compareA);
  const b = getEspecie(state.compareB);
  const ra = rutasEspecie(a);
  const rb = rutasEspecie(b);
  els.compareAThumb.src = ra.miniatura;
  els.compareAName.textContent = a.nombre;
  els.compareAGroup.textContent = a.grupo;
  els.compareBThumb.src = rb.miniatura;
  els.compareBName.textContent = b.nombre;
  els.compareBGroup.textContent = b.grupo;
}

function abrirComparacion() {
  const a = getEspecie(state.compareA);
  const b = getEspecie(state.compareB);
  const ra = rutasEspecie(a);
  const rb = rutasEspecie(b);
  const filas = [
    ["Grupo", "grupo"],
    ["Hábitat", "habitatNombre"],
    ["Respiración", "respiracion"],
    ["Movimiento", "movimiento"],
    ["Alimentación", "alimentacion"],
    ["Reproducción", "reproduccion"],
    ["Tamaño", "tamano"],
    ["Peso", "peso"],
    ["Conservación", "conservacion"],
    ["Anatomía", "anatomia"],
    ["Dato curioso", "datoCurioso"],
    ["Importancia ecológica", "importancia"],
  ];

  const col = (esp, r) => `
    <div class="compare-col">
      <div class="compare-col__hero">
        <img src="${r.pngTransparente}" alt="${esp.nombre}" />
        <div>
          <strong>${esp.nombre}</strong>
          <em>${esp.cientifico}</em>
        </div>
      </div>
      <dl>
        ${filas
          .map(([label, key]) => `<dt>${label}</dt><dd>${esp[key]}</dd>`)
          .join("")}
      </dl>
    </div>`;

  els.compareGrid.innerHTML = col(a, ra) + col(b, rb);
  els.modalCompare.classList.add("is-open");
}

// =================================================================
// Selección general
// =================================================================
function seleccionar(id) {
  if (!getEspecie(id)) return;
  state.selectedId = id;
  state.compareA = id;
  if (state.compareB === id) {
    const otra = ESPECIES.find((e) => e.id !== id);
    if (otra) state.compareB = otra.id;
  }
  renderTodo();
}

function renderTodo() {
  const esp = getEspecie(state.selectedId);
  renderSidebar();
  actualizarVisor(esp);
  renderDetalles(esp);
  renderGaleria(esp);
  renderCompareSelects();
  renderCompareChips();
}

// =================================================================
// Eventos
// =================================================================
function setupEventos() {
  // Modo de vista (3D / AR / 360°)
  els.modeTabs.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      els.modeTabs.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const mode = btn.dataset.mode;
      if (mode === "ar") {
        if (els.modelViewer.canActivateAR) {
          els.modelViewer.activateAR();
        } else {
          toast("AR no disponible en este dispositivo");
        }
      } else if (mode === "360") {
        els.modelViewer.setAttribute("auto-rotate", "");
        state.isRotating = true;
        $("#btn-rotate").classList.add("is-on");
        toast("Vista 360° activada");
      } else {
        toast("Modo 3D");
      }
    });
  });

  // Toggle fondo hábitat
  els.habitatSwitch.addEventListener("click", () => {
    state.isHabitatBg = !state.isHabitatBg;
    els.habitatSwitch.classList.toggle("is-on", state.isHabitatBg);
    els.habitatSwitch.setAttribute("aria-checked", state.isHabitatBg);
    aplicarFondoHabitat();
  });

  // Botones del visor
  $("#btn-rotate").addEventListener("click", (e) => {
    state.isRotating = !state.isRotating;
    e.currentTarget.classList.toggle("is-on", state.isRotating);
    if (state.isRotating) els.modelViewer.setAttribute("auto-rotate", "");
    else els.modelViewer.removeAttribute("auto-rotate");
  });

  const setIsolated = (value) => {
    state.isIsolated = value;
    $("#btn-isolate").classList.toggle("is-on", value);
    els.app.classList.toggle("is-isolated", value);
    // Forzar el redimensionado interno del model-viewer
    requestAnimationFrame(() => {
      els.modelViewer.style.display = "none";
      void els.modelViewer.offsetHeight;
      els.modelViewer.style.display = "";
      window.dispatchEvent(new Event("resize"));
      if (els.modelViewer.resetTurntableRotation)
        els.modelViewer.resetTurntableRotation();
    });
  };

  $("#btn-isolate").addEventListener("click", () => setIsolated(!state.isIsolated));
  $("#btn-exit-isolate").addEventListener("click", () => setIsolated(false));

  $("#btn-reset").addEventListener("click", () => {
    if (els.modelViewer.resetTurntableRotation)
      els.modelViewer.resetTurntableRotation();
    els.modelViewer.cameraOrbit = "0deg 75deg 105%";
    els.modelViewer.fieldOfView = "30deg";
    toast("Vista reiniciada");
  });

  $("#btn-capture").addEventListener("click", async () => {
    try {
      const blob = await els.modelViewer.toBlob({ idealAspect: true });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const esp = getEspecie(state.selectedId);
      a.download = `mar_especies_${esp.id}.png`;
      a.click();
      URL.revokeObjectURL(url);
      toast("Captura descargada");
    } catch (err) {
      toast("No se pudo capturar la imagen");
    }
  });

  $("#btn-export").addEventListener("click", () => {
    const esp = getEspecie(state.selectedId);
    const a = document.createElement("a");
    a.href = rutasEspecie(esp).modelo;
    a.download = `${esp.id}.glb`;
    a.click();
    toast("Descargando modelo 3D…");
  });

  // Carga del modelo
  els.modelViewer.addEventListener("load", () => {
    els.viewerStage.classList.remove("is-loading");
  });
  els.modelViewer.addEventListener("error", () => {
    els.viewerStage.classList.remove("is-loading");
    toast("No se pudo cargar el modelo 3D");
  });

  // Galería educativa: abre modal
  document.querySelectorAll(".gallery__item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tipo = btn.dataset.gallery;
      const esp = getEspecie(state.selectedId);
      const r = rutasEspecie(esp);
      const map = {
        anatomia: { src: r.anatomia, title: `Anatomía · ${esp.nombre}`, cap: esp.anatomia },
        ficha: {
          src: r.ficha,
          title: `Ficha visual · ${esp.nombre}`,
          cap: esp.importancia,
        },
      };
      const info = map[tipo];
      els.modalImageTitle.textContent = info.title;
      els.modalImageImg.src = info.src;
      els.modalImageCap.textContent = info.cap;
      els.modalImage.classList.add("is-open");
    });
  });

  // Selectores del comparador
  els.compareASelect.addEventListener("change", (e) => {
    state.compareA = e.target.value;
    renderCompareChips();
  });
  els.compareBSelect.addEventListener("change", (e) => {
    state.compareB = e.target.value;
    renderCompareChips();
  });
  $("#btn-compare").addEventListener("click", abrirComparacion);

  // Cerrar modales
  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () =>
      btn.closest(".modal").classList.remove("is-open")
    );
  });
  document.querySelectorAll(".modal").forEach((m) => {
    m.addEventListener("click", (e) => {
      if (e.target === m) m.classList.remove("is-open");
    });
  });

  // Navegación de la barra superior
  els.topbarNav.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      els.topbarNav
        .querySelectorAll("button")
        .forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      abrirVistaAuxiliar(btn.dataset.view);
    });
  });

  // ESC cierra modales y aislado
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.is-open").forEach((m) =>
        m.classList.remove("is-open")
      );
      if (state.isIsolated) setIsolated(false);
    }
  });

  // Toggle de tarjetas colapsables (Galería, Comparar, Notas ecológicas)
  document.querySelectorAll(".collapsible .card__toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".collapsible");
      const collapsed = card.classList.toggle("is-collapsed");
      btn.setAttribute("aria-expanded", String(!collapsed));
      const key = card.dataset.key;
      const label = card.querySelector(".card__title").textContent;
      toast(collapsed ? `${label} oculto` : `${label} visible`);
      // Persistimos el estado por sesión.
      try {
        const saved = JSON.parse(localStorage.getItem("ms_collapse") || "{}");
        saved[key] = collapsed;
        localStorage.setItem("ms_collapse", JSON.stringify(saved));
      } catch (e) {}
    });
  });

  // Restaurar estado de tarjetas
  try {
    const saved = JSON.parse(localStorage.getItem("ms_collapse") || "{}");
    document.querySelectorAll(".collapsible").forEach((card) => {
      if (saved[card.dataset.key]) {
        card.classList.add("is-collapsed");
        const btn = card.querySelector(".card__toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  } catch (e) {}
}

// =================================================================
// Vistas auxiliares de la barra superior
// =================================================================
function abrirVistaAuxiliar(view) {
  if (view === "galeria") {
    els.modalView.classList.remove("is-open");
    return;
  }

  const esp = getEspecie(state.selectedId);
  let title = "";
  let html = "";

  if (view === "biblioteca") {
    title = "Biblioteca de especies";
    html = `
      <p style="color:var(--text-muted);font-size:14px;margin-bottom:16px">
        Las 14 especies del catálogo. Haz clic para seleccionar una.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px">
        ${ESPECIES.map((e) => {
          const r = rutasEspecie(e);
          return `
            <button class="card" style="padding:10px;text-align:left;cursor:pointer" data-jump="${e.id}">
              <img src="${r.pngTransparente}" alt="" style="height:80px;width:100%;object-fit:contain;margin-bottom:8px"/>
              <strong style="color:var(--navy);font-size:14px;display:block">${e.nombre}</strong>
              <em style="color:var(--text-muted);font-size:11px;font-style:italic">${e.cientifico}</em>
            </button>`;
        }).join("")}
      </div>`;
  } else if (view === "cuaderno") {
    title = `Cuaderno · ${esp.nombre}`;
    html = `
      <div style="font-size:14px;line-height:1.6">
        <h3 style="color:var(--navy);margin:0 0 8px">Notas sobre ${esp.nombre}</h3>
        <p><strong>Clasificación:</strong> ${esp.grupo} — <em>${esp.cientifico}</em></p>
        <p><strong>Tamaño y peso:</strong> ${esp.tamano} · ${esp.peso}</p>
        <p><strong>Anatomía:</strong> ${esp.anatomia}</p>
        <p><strong>Ecología:</strong> ${esp.notaEcologica}</p>
        <p><strong>Importancia:</strong> ${esp.importancia}</p>
        <p style="background:var(--primary-soft);padding:10px;border-radius:8px;color:var(--primary-dark)">
          💡 ${esp.datoCurioso}
        </p>
        <textarea placeholder="Escribe aquí tus observaciones…" style="width:100%;min-height:120px;border:1px solid var(--border);border-radius:8px;padding:10px;font-family:inherit;margin-top:8px"></textarea>
      </div>`;
  } else if (view === "ajustes") {
    title = "Ajustes";
    html = `
      <div style="font-size:14px;line-height:1.6">
        <label style="display:flex;justify-content:space-between;align-items:center;padding:10px;border:1px solid var(--border);border-radius:8px;margin-bottom:8px">
          Fondo hábitat por defecto
          <input type="checkbox" ${state.isHabitatBg ? "checked" : ""} id="cfg-hab"/>
        </label>
        <label style="display:flex;justify-content:space-between;align-items:center;padding:10px;border:1px solid var(--border);border-radius:8px;margin-bottom:8px">
          Auto-rotación al cambiar de especie
          <input type="checkbox" id="cfg-rot"/>
        </label>
        <p style="color:var(--text-muted);font-size:12px;margin-top:14px">
          Versión 1.0 · Mar Especies Studio
        </p>
      </div>`;
  }

  els.modalViewTitle.textContent = title;
  els.modalViewBody.innerHTML = html;
  els.modalView.classList.add("is-open");

  // Listeners de la biblioteca
  els.modalViewBody.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      seleccionar(btn.dataset.jump);
      els.modalView.classList.remove("is-open");
      els.topbarNav.querySelector('[data-view="galeria"]').click();
    });
  });

  // Ajustes
  const cfgHab = els.modalViewBody.querySelector("#cfg-hab");
  if (cfgHab) {
    cfgHab.addEventListener("change", () => {
      state.isHabitatBg = cfgHab.checked;
      els.habitatSwitch.classList.toggle("is-on", state.isHabitatBg);
      aplicarFondoHabitat();
    });
  }
}

// =================================================================
// Init
// =================================================================
function init() {
  renderTodo();
  setupEventos();
}

document.addEventListener("DOMContentLoaded", init);

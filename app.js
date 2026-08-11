const SUPABASE_URL = "https://cxgmeqhfwfyaenmhkmrm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_4LpHeEUndz1pi2dy4l8o0Q__Aw9tr_4";
const EMAILJS_SERVICE_ID = "serviceliliv";
const EMAILJS_TEMPLATE_ID = "template_ucp4i7r";
const EMAILJS_PUBLIC_KEY = "kkX5qxELuGEamwXR2";
let supabaseClient = null;

function setDepoStatus(message, isError = false) {
  const statusEl = document.getElementById("depoStatus");
  if (!statusEl) return;

  statusEl.textContent = message;
  statusEl.style.display = "block";
  statusEl.style.color = isError ? "#ff8d8d" : "#8effc6";
  statusEl.style.borderColor = isError
    ? "rgba(255, 141, 141, 0.22)"
    : "rgba(128, 255, 198, 0.22)";
}

function clearDepoStatus() {
  const statusEl = document.getElementById("depoStatus");
  if (statusEl) {
    statusEl.textContent = "";
    statusEl.style.display = "none";
  }
}

function setContactStatus(message, isError = false) {
  const statusEl = document.getElementById("contactStatus");
  if (!statusEl) return;

  statusEl.textContent = message;
  statusEl.style.display = "block";
  statusEl.style.color = isError ? "#ff8d8d" : "#8effc6";
  statusEl.style.borderColor = isError
    ? "rgba(255, 141, 141, 0.22)"
    : "rgba(128, 255, 198, 0.22)";
}

function clearContactForm() {
  [
    "diagnosticName",
    "diagnosticCompany",
    "diagnosticWhatsapp",
    "diagnosticEmail",
    "diagnosticService",
    "diagnosticMessage",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}

function clearDepoForm() {
  ["depoText", "depoName", "depoRole", "depoCompany"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}

function getInitials(name = "Cliente") {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderTestimonialCard(item) {
  const card = document.createElement("div");
  card.className = "depo-card";
  card.dataset.supabase = "true";

  const initials = getInitials(item.name || "Cliente");
  const role = item.role ? item.role : "";
  const company = item.company ? item.company : "";
  const meta = [role, company].filter(Boolean).join(" • ");

  card.innerHTML = `
    <p class="depo-text">"${item.message}"</p>
    <div class="depo-author">
      <div class="depo-avatar">${initials}</div>
      <div>
        <div class="depo-name">${item.name || "Cliente"}</div>
        <div class="depo-role">${meta || "Cliente"}</div>
      </div>
    </div>
  `;

  return card;
}

function initializeSupabase() {
  if (!window.supabase || SUPABASE_URL.includes("YOUR_PROJECT_REF")) {
    setDepoStatus(
      "Falta configurar a URL e a anon key do Supabase no arquivo app.js.",
      true,
    );
    return;
  }

  supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
  );
  loadTestimonials();
}

async function loadTestimonials() {
  if (!supabaseClient) return;

  const { data, error } = await supabaseClient
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    setDepoStatus(
      "Não foi possível carregar os depoimentos. Verifique a tabela no Supabase.",
      true,
    );
    return;
  }

  const grid = document.getElementById("deposGrid");
  if (!grid) return;

  const dynamicCards = Array.from(
    grid.querySelectorAll('.depo-card[data-supabase="true"]'),
  );
  dynamicCards.forEach((card) => card.remove());

  (data || []).forEach((item) => {
    grid.appendChild(renderTestimonialCard(item));
  });
}

async function submitTestimonial() {
  const textEl = document.getElementById("depoText");
  const nameEl = document.getElementById("depoName");

  if (!textEl || !nameEl) return;

  const message = textEl.value.trim();
  const name = nameEl.value.trim();
  const role = document.getElementById("depoRole")?.value.trim() || "";
  const company = document.getElementById("depoCompany")?.value.trim() || "";

  if (!message || !name) {
    setDepoStatus("Preencha o depoimento e o nome antes de enviar.", true);
    return;
  }

  if (!supabaseClient) {
    setDepoStatus("Configure o Supabase antes de enviar o depoimento.", true);
    return;
  }

  clearDepoStatus();

  const { data, error } = await supabaseClient
    .from("testimonials")
    .insert([{ name, role, company, message }])
    .select()
    .single();

  if (error) {
    setDepoStatus(
      "Erro ao salvar o depoimento. Confira a tabela e as políticas do Supabase.",
      true,
    );
    return;
  }

  const grid = document.getElementById("deposGrid");
  if (grid && data) {
    grid.prepend(renderTestimonialCard(data));
  }

  clearDepoForm();
  setDepoStatus("Depoimento enviado com sucesso!");
  closeModal("depoModal");
}

async function handleSubmit(event) {
  if (event) event.preventDefault();

  const name = document.getElementById("diagnosticName")?.value.trim() || "";
  const company =
    document.getElementById("diagnosticCompany")?.value.trim() || "";
  const whatsapp =
    document.getElementById("diagnosticWhatsapp")?.value.trim() || "";
  const email = document.getElementById("diagnosticEmail")?.value.trim() || "";
  const service =
    document.getElementById("diagnosticService")?.value.trim() || "";
  const message =
    document.getElementById("diagnosticMessage")?.value.trim() || "";

  if (!name || !whatsapp || !email || !message) {
    setContactStatus(
      "Preencha nome, WhatsApp, e-mail e o projeto antes de enviar.",
      true,
    );
    return;
  }

  if (
    EMAILJS_SERVICE_ID.includes("service_x") ||
    EMAILJS_TEMPLATE_ID.includes("template_x") ||
    EMAILJS_PUBLIC_KEY.includes("YOUR_PUBLIC_KEY")
  ) {
    setContactStatus(
      "Configure o EmailJS no arquivo app.js antes de enviar.",
      true,
    );
    return;
  }

  if (!window.emailjs) {
    setContactStatus("O EmailJS não carregou corretamente.", true);
    return;
  }

  setContactStatus("Enviando sua mensagem...");

  try {
    const templateParams = {
      from_name: name,
      company: company || "Não informado",
      whatsapp,
      email,
      service: service || "Não informado",
      message,
      to_email: email,
    };

    const response = await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY,
    );

    if (response.status === 200) {
      clearContactForm();
      setContactStatus(
        "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      );
    } else {
      setContactStatus(
        "Não foi possível enviar no momento. Tente novamente.",
        true,
      );
    }
  } catch (error) {
    console.error("Erro ao enviar diagnóstico pelo EmailJS:", error);
    setContactStatus(
      "Erro ao enviar. Verifique o serviço e o template do EmailJS.",
      true,
    );
  }
}

function openDepoModalHandler() {
  clearDepoStatus();
  const modal = document.getElementById("depoModal");
  if (modal) modal.classList.add("open");
}

window.submitTestimonial = submitTestimonial;
window.openDepoModalHandler = openDepoModalHandler;
window.loadTestimonials = loadTestimonials;
window.handleSubmit = handleSubmit;

document.addEventListener("DOMContentLoaded", () => {
  initializeSupabase();

  if (
    window.emailjs &&
    EMAILJS_PUBLIC_KEY &&
    !EMAILJS_PUBLIC_KEY.includes("YOUR_PUBLIC_KEY")
  ) {
    window.emailjs.init(EMAILJS_PUBLIC_KEY);
  }
});

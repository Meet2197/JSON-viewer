
let jsonData = null;

// Sample JSON
const sample = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  courses: ["Math", "Science"],
  address: {
    city: "New York",
    zip: "10001"
  }
};

window.onload = () => {
  loadJSON(sample);
};

// Handle file input
document.getElementById('jsonFile').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const parsed = JSON.parse(e.target.result);
      loadJSON(parsed);
    } catch (err) {
      alert('Invalid JSON');
    }
  };
  reader.readAsText(file);
});

// Drag & drop
const dropArea = document.getElementById("dropArea");
dropArea.addEventListener("dragover", e => {
  e.preventDefault();
  dropArea.style.borderColor = "#3f51b5";
});
dropArea.addEventListener("dragleave", e => {
  dropArea.style.borderColor = "#555";
});
dropArea.addEventListener("drop", e => {
  e.preventDefault();
  dropArea.style.borderColor = "#555";
  const file = e.dataTransfer.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const parsed = JSON.parse(e.target.result);
      loadJSON(parsed);
    } catch (err) {
      alert("Invalid JSON file");
    }
  };
  reader.readAsText(file);
});

// Load and render JSON
function loadJSON(data) {
  jsonData = data;
  const container = document.getElementById("jsonViewer");
  container.innerHTML = '';
  container.appendChild(renderJSON(data));
}

function renderJSON(obj, level = 0) {
  const container = document.createElement("div");
  for (const key in obj) {
    const val = obj[key];
    const line = document.createElement("div");
    const indent = '&nbsp;'.repeat(level * 4);
    if (typeof val === 'object' && val !== null) {
      const toggle = document.createElement("span");
      toggle.className = "toggle";
      toggle.innerHTML = '[+] ';
      toggle.onclick = function () {
        if (child.style.display === 'none') {
          child.style.display = 'block';
          toggle.innerHTML = '[-] ';
        } else {
          child.style.display = 'none';
          toggle.innerHTML = '[+] ';
        }
      };
      line.innerHTML = indent;
      line.appendChild(toggle);
      line.innerHTML += `<span class="json-key">"${key}"</span>: {`;
      container.appendChild(line);
      const child = renderJSON(val, level + 1);
      child.style.display = 'none';
      container.appendChild(child);
      const closing = document.createElement("div");
      closing.innerHTML = indent + '}';
      container.appendChild(closing);
    } else {
      const type = typeof val === "number" ? "json-number" :
                   typeof val === "boolean" ? "json-boolean" :
                   val === null ? "json-null" : "json-value";
      line.innerHTML = `${indent}<span class="json-key">"${key}"</span>: <span class="${type}">${JSON.stringify(val)}</span>`;
      container.appendChild(line);
    }
  }
  return container;
}

// Export functions
function exportToPDF() {
  const element = document.getElementById('jsonViewer');
  html2pdf().from(element).save('data.pdf');
}

function exportToExcel() {
  if (!jsonData) return alert("Load a JSON file first.");
  const ws = XLSX.utils.json_to_sheet([jsonData].flat());
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Data");
  XLSX.writeFile(wb, "data.xlsx");
}

function exportToWord() {
  if (!jsonData) return alert("Load a JSON file first.");
  const doc = new docx.Document({
    sections: [{
      children: [
        new docx.Paragraph({
          text: JSON.stringify(jsonData, null, 2),
          spacing: { line: 276 }
        })
      ]
    }]
  });
  docx.Packer.toBlob(doc).then(blob => {
    saveAs(blob, "data.docx");
  });
}


// Theme toggle logic
document.getElementById('themeSwitch').addEventListener('change', function() {
  document.getElementById('theme-style').setAttribute('href', this.checked ? 'light.css' : 'dark.css');
});

// File history
const historyList = document.getElementById("history");
const fileHistory = [];

function updateHistory(name) {
  fileHistory.push(name);
  const li = document.createElement("li");
  li.textContent = name;
  historyList.appendChild(li);
}

// Patch file loader to track history
document.getElementById('jsonFile').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const parsed = JSON.parse(e.target.result);
      updateHistory(file.name);
      loadJSON(parsed);
    } catch (err) {
      alert("Invalid JSON file");
    }
  };
  reader.readAsText(file);
});

// JSON Schema validation (example schema)
function validateJSON() {
  if (!jsonData) return alert("Load a JSON file first.");
  const schema = {
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "number" }
    },
    required: ["name", "age"]
  };
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(jsonData);
  if (valid) {
    alert("JSON is valid ✅");
  } else {
    alert("Validation errors:\n" + JSON.stringify(validate.errors, null, 2));
  }
}

// Override loadJSON for Prism highlight
function loadJSON(data) {
  jsonData = data;
  const codeBlock = document.querySelector("#jsonViewer code");
  codeBlock.textContent = JSON.stringify(data, null, 2);
  Prism.highlightElement(codeBlock);
}

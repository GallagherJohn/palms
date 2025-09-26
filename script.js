const gk = {
  isXlsx: false,
  xlsxFileLookup: {},
  fileData: {}
};

function isFilledCell(cell) {
  return cell !== '' && cell != null;
}

function loadFileData(filename) {
  if (gk.isXlsx && gk.xlsxFileLookup[filename]) {
    try {
      const workbook = XLSX.read(gk.fileData[filename], { type: 'base64' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false, defval: '' });
      const filteredData = jsonData.filter(row => row.some(isFilledCell));
      let headerRowIndex = filteredData.findIndex((row, index) => 
        row.filter(isFilledCell).length >= (filteredData[index + 1]?.filter(isFilledCell).length || 0)
      );
      if (headerRowIndex === -1 || headerRowIndex > 25) {
        headerRowIndex = 0;
      }
      const csvSheet = XLSX.utils.aoa_to_sheet(filteredData.slice(headerRowIndex));
      const csv = XLSX.utils.sheet_to_csv(csvSheet, { header: 1 });
      return csv;
    } catch (error) {
      console.error('Error processing XLSX file:', error);
      return '';
    }
  }
  return gk.fileData[filename] || '';
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  const aosScript = document.querySelector('script[src="https://unpkg.com/aos@2.3.1/dist/aos.js"]');
  if (aosScript) {
    aosScript.addEventListener('load', () => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    });
  }

  // Initialize Feather Icons and mobile menu
  const featherScript = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"]');
  if (featherScript) {
    featherScript.addEventListener('load', () => {
      feather.replace();
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('open');
          const isOpen = mobileMenu.classList.contains('open');
          mobileMenuButton.setAttribute('aria-expanded', isOpen);
          mobileMenuButton.querySelector('i').setAttribute('data-feather', isOpen ? 'x' : 'menu');
          feather.replace();
        });
      }
    });
  }

  // Form validation and submission
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  if (form && formMessage) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const phone = document.getElementById('phone')?.value.trim();
      const message = document.getElementById('message')?.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !phone || !message) {
        formMessage.textContent = 'Please fill out all required fields.';
        formMessage.classList.remove('hidden');
        return;
      }
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.remove('hidden');
        return;
      }

      formMessage.classList.add('hidden');
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            'property-type': document.getElementById('property-type').value,
            message,
          }),
        });
        if (response.ok) {
          formMessage.textContent = 'Form submitted successfully!';
          formMessage.classList.remove('hidden', 'text-red-600');
          formMessage.classList.add('text-green-600');
          form.reset();
        } else {
          formMessage.textContent = 'Error submitting form. Please try again.';
          formMessage.classList.remove('hidden');
        }
      } catch {
        formMessage.textContent = 'Error submitting form. Please try again.';
        formMessage.classList.remove('hidden');
      }
    });
  }
});

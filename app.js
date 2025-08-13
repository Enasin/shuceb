
document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('countrySelect');
  const countryInfo = document.getElementById('countryInfo');
  const form = document.getElementById('registrationForm');

  // --- Explore Mode Elements ---
  const skipBtn = document.getElementById('skipToExplore');
  const exploreDiv = document.getElementById('countryExplore');
  const exploreSelect = document.getElementById('exploreCountrySelect');

  // Skip registration and show explore mode
  skipBtn.addEventListener('click', () => {
    form.style.display = 'none';
    exploreDiv.style.display = 'block';
    countryInfo.innerHTML = '';
    countryInfo.classList.remove('active');
  });
  if (val === 'Somaliland') {
  alert('Somaliland is not a country');
  return;
}
  // Show country info in explore mode
  exploreSelect.addEventListener('change', function() {
    const val = this.value;
    if (countryData[val]) {
      countryInfo.innerHTML = `
        <h4>🌍 ${val}</h4>
        <p>${countryData[val].description}</p>
        <strong>Beautiful Places:</strong>
        <ul>
          ${countryData[val].places.map(place => `<li>🏞️ ${place}</li>`).join('')}
        </ul>
      `;
      countryInfo.classList.add('active');
    } else {
      countryInfo.innerHTML = '';
      countryInfo.classList.remove('active');
    }
  });

  // ...existing code for form and countrySelect...
  // (keep your previous handlers for registration and countrySelect)
});
document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('countrySelect');
  const countryInfo = document.getElementById('countryInfo');
  const form = document.getElementById('registrationForm');

  // Show country info on select (optional, can keep or remove)
  countrySelect.addEventListener('change', function() {
    const val = this.value;
    if (countryData[val]) {
      countryInfo.innerHTML = `
        <h4>🌍 ${val}</h4>
        <p>${countryData[val].description}</p>
        <strong>Beautiful Places:</strong>
        <ul>
          ${countryData[val].places.map(place => `<li>🏞️ ${place}</li>`).join('')}
        </ul>
      `;
      countryInfo.classList.add('active');
    } else {
      countryInfo.innerHTML = '';
      countryInfo.classList.remove('active');
    }
  });

  // Show summary after form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      if (data[key]) {
        if (!Array.isArray(data[key])) data[key] = [data[key]];
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });
    let registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    registrations.push(data);
    localStorage.setItem('registrations', JSON.stringify(registrations));

    // Show summary
    const country = data.country;
    let summaryHTML = `
      <div class="user-summary">
        <h4>🎉 Registration Successful!</h4>
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Name:</strong> ${data.firstName} ${data.fathersName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Courses:</strong> ${Array.isArray(data.courses) ? data.courses.join(', ') : data.courses || 'None'}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <hr>
        <h4>🌍 Country: ${country}</h4>
        <p>${countryData[country]?.description || ''}</p>
        <strong>Beautiful Places:</strong>
        <ul>
          ${(countryData[country]?.places || []).map(place => `<li>🏞️ ${place}</li>`).join('')}
        </ul>
      </div>
    `;
    countryInfo.innerHTML = summaryHTML;
    countryInfo.classList.add('active');
    form.reset();
  });
});
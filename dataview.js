// Function to populate student list
function populateStudentList(students) {
  const studentListContainer = document.getElementById('studentList');
  studentListContainer.innerHTML = '';

  students.forEach(student => {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML = `
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <img src="${student.image}" class="profile-pic mr-3" alt="Profile Picture">
          <div>
            <h5 class="card-title">${student.name} (${student.session})</h5>
            <p class="card-text">${student.department}</p>
            <button type="button" class="btn btn-primary mr-2" onclick="showStudentModal('${student.name}', '${student.blood}', '${student.upazila}', '${student.college}', '${student.school}', '${student.department}', '${student.email}', '${student.hall}', '${student.phone}', '${student.session}')">More</button>
            <button type="button" class="btn btn-success" onclick="callStudent('${student.phone}')">Call Me</button>
          </div>
        </div>
      </div>
    `;

    studentListContainer.appendChild(card);
  });
}

// Function to show all student info
function showStudentInfo() {
  populateStudentList(studentData);
}

// Function to search students
// Function to search students
function searchStudents() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
  const filteredStudents = studentData.filter(student =>
    student.name.toLowerCase().includes(searchInput) ||
    student.department.toLowerCase().includes(searchInput)
  );

  const studentListContainer = document.getElementById('studentList');

  if (filteredStudents.length > 0) {
    populateStudentList(filteredStudents);
    document.getElementById('result-count').textContent = `Found ${filteredStudents.length} ${filteredStudents.length > 1 ? 'students' : 'student'}`;
  } else {
    studentListContainer.innerHTML = '<p class="text-muted">Sorry, no matching students found. We are working to add this information soon.</p>';
    document.getElementById('result-count').textContent = ''; // Clear result count if no results found
  }
}


// Function to show student modal with details
function showStudentModal(name, blood, upazila, college, school, department, email, hall, phone, session) {
  const modalTitle = document.getElementById('studentModalLabel');
  const modalProfilePic = document.getElementById('modalProfilePic');
  const modalName = document.getElementById('modalName');
  const modalBlood = document.getElementById('modalBlood');
  const modalUpazila = document.getElementById('modalUpazila');
  const modalCollege = document.getElementById('modalCollege');
  const modalSchool = document.getElementById('modalSchool');
  const modalDepartment = document.getElementById('modalDepartment');
  const modalEmail = document.getElementById('modalEmail');
  const modalHall = document.getElementById('modalHall');
  const modalSession = document.getElementById('modalSession');
  const modalCallBtn = document.getElementById('modalCallBtn');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');
  const modalFacebookBtn = document.getElementById('modalFacebookBtn');

  modalTitle.textContent = `Student Details - ${name}`;
  modalProfilePic.src = studentData.find(student => student.name === name).image; // Assuming image URL is in studentData
  modalProfilePic.classList.add('profile-pic-modal'); // Add modal-specific class
  modalName.textContent = name;
  modalBlood.textContent = blood;
  modalUpazila.textContent = upazila;
  modalCollege.textContent = college;
  modalSchool.textContent = school;
  modalDepartment.textContent = department;
  modalEmail.textContent = email;
  modalHall.textContent = hall;
  modalSession.textContent = session;
  modalCallBtn.href = `tel:${phone}`;
  modalDownloadBtn.setAttribute('onclick', `downloadStudentInfo('${name}', '${blood}', '${upazila}', '${college}', '${school}', '${department}', '${email}', '${hall}', '${phone}', '${session}')`);
  modalFacebookBtn.href = `https://www.facebook.com/${name.replace(' ', '.')}`;

  $('#studentModal').modal('show');
}

// Function to call student
function callStudent(phoneNumber) {
  window.location.href = `tel:${phoneNumber}`;
}

// Function to download student info
function downloadStudentInfo(name, blood, upazila, college, school, department, email, hall, phone, session) {
  // Example implementation for downloading student info as a text file
  const studentInfo = `Name: ${name}\nBlood Type: ${blood}\nUpazila: ${upazila}\nCollege: ${college}\nSchool: ${school}\nDepartment: ${department}\nEmail: ${email}\nHall: ${hall}\nPhone: ${phone}\nSession: ${session}`;
  const blob = new Blob([studentInfo], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name}_info.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
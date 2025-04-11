AOS.init();

document.querySelectorAll('#studentForm input').forEach((input, index, inputs) => {
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      } else {
        generateForm();
      }
    }
  });
});

function generateForm() {
  const name = document.getElementById('name').value.trim();
  const rollno = document.getElementById('rollno').value.trim();
  const branch = document.getElementById('branch').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const teacher = document.getElementById('teacher').value.trim();

  document.getElementById('outName').innerText = name.toUpperCase();
  document.getElementById('outRollno').innerText = rollno;
  document.getElementById('outBranch').innerText = branch.toLowerCase();
  document.getElementById('outSubject').innerText = subject.toUpperCase();
  document.getElementById('outTeacher').innerText = teacher.toUpperCase();

  document.getElementById('output').style.display = 'block';
  document.getElementById('downloadBtn').onclick = downloadPDF;
}

function downloadPDF() {
  const element = document.getElementById('output');
  const spinner = document.getElementById('spinner');
  const downloadBtn = document.getElementById('downloadBtn');

  element.classList.add('pdf-mode');

  spinner.style.display = 'block';
  downloadBtn.style.display = 'none';

  const opt = {
    margin: 10,
    filename: 'Assignment-Front-Page.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 4, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    spinner.style.display = 'none';
    downloadBtn.style.display = 'block';

    element.classList.remove('pdf-mode');
  });
}


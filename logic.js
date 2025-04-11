


function generateForm() {
    const name = document.getElementById('name').value.trim();
    const rollno = document.getElementById('rollno').value.trim();
    const branch = document.getElementById('branch').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const teacher = document.getElementById('teacher').value.trim();

  
    document.getElementById('outName').innerText = name;
    document.getElementById('outRollno').innerText = rollno;
    document.getElementById('outBranch').innerText = branch;
    document.getElementById('outSubject').innerText = subject;
    document.getElementById('outTeacher').innerText = teacher;
    document.getElementById('output').style.display = 'block';
}

const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            } else {
                document.querySelector('button[type="submit"]').focus();
            }
        }
    });
});



document.getElementById('downloadBtn').addEventListener('click', function () {
    const element = document.getElementById('output');
    const downloadBtn = document.getElementById('downloadBtn');

    
    downloadBtn.style.display = 'none';

    const opt = {
        margin: [10, 10, 10, 10],
        filename: 'Assignment-Front-Page.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        
        downloadBtn.style.display = 'block';
    });
});

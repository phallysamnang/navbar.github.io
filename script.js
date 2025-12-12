const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const goToPage2Btn = document.getElementById('goToPage2Btn');
const goToPage1Btn = document.getElementById('goToPage1Btn');

function showPage2() {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
    // Change the overall body background color for page 2
    document.body.style.backgroundColor = '#8da9c4'; 
}

function showPage1() {
    page2.classList.add('hidden');
    page1.classList.remove('hidden');
    // Change the overall body background color back to the original for page 1
    document.body.style.backgroundColor = '#f4f4f4';
}

goToPage2Btn.addEventListener('click', showPage2);
goToPage1Btn.addEventListener('click', showPage1);

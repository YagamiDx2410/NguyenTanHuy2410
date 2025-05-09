function slideLeft(sectionId) {
  document.querySelector('#' + sectionId + ' .slider').scrollBy({left: -220, behavior: 'smooth'});
}
function slideRight(sectionId) {
  document.querySelector('#' + sectionId + ' .slider').scrollBy({left: 220, behavior: 'smooth'});
}
function openModal(element) {
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modalContent");
  const src = encodeURI(element.dataset.src);
  if (element.dataset.type === "pdf") {
    modalContent.innerHTML = '<iframe src="' + src + '" style="width:100%; height:85vh; border:none;"></iframe>';
  } else {
    modalContent.innerHTML = '<div style="overflow:auto;"><img src="' + src + '"></div>';
  }
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto";
}
(function() {
  if (!window.location.search.includes('v=')) {
    const now = new Date();
    const version = `${now.getFullYear()}${now.getMonth()+1}${now.getDate()}${now.getHours()}${now.getMinutes()}`;
    window.location.replace(window.location.pathname + '?v=' + version);
  }
})();

function toggleContent(contentId, arrowId) {
  const content = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);

  if (content.classList.contains("active")) {
      content.classList.remove("active");
      arrow.style.transform = "rotate(0deg)";
  } else {
      content.classList.add("active");
      arrow.style.transform = "rotate(90deg)";
  }
}


